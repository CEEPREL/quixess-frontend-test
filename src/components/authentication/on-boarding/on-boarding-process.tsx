"use client";
import { useState, type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { OnboardingData, StepKey } from "./types";
import StepPersonalInfo from "./personal";
import StepAccountSetup from "./account-setup";
import StepPreferences from "./preferences";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/features/modal/modal-slice";

const steps: StepKey[] = ["personal", "account", "preferences"];

export default function OnBoarding() {
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [activeStep, setActiveStep] = useState<StepKey>("personal");
  const [errorShake, setErrorShake] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    personal: { fullName: "", email: "" },
    account: { username: "", password: "" },
    preferences: { theme: "light", subscribe: false },
  });
  const [errors, setErrors] = useState<{ [K in StepKey]?: boolean }>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isValid = (step: StepKey): boolean => {
    switch (step) {
      case "personal":
        return (
          !!data.personal.fullName && /\S+@\S+\.\S+/.test(data.personal.email)
        );
      case "account":
        return !!data.account.username && data.account.password.length >= 6;
      case "preferences":
        return !!data.preferences.theme;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!isValid(activeStep)) {
      setErrors((prev) => ({ ...prev, [activeStep]: true }));
      setErrorShake(true);
      return;
    }
    const idx = steps.indexOf(activeStep);
    if (idx < steps.length - 1) {
      setDirection("forward");
      setActiveStep(steps[idx + 1]);
    }
  };

  const handleBack = () => {
    const idx = steps.indexOf(activeStep);
    if (idx > 0) {
      setDirection("backward");
      setActiveStep(steps[idx - 1]);
    }
  };

  const handleSubmit = () => {
    if (isValid("preferences")) {
      dispatch(closeModal());
      navigate("/welcome");
    } else {
      setErrors((prev) => ({ ...prev, preferences: true }));
      setErrorShake(true);
    }
  };

  const renderStep = () => {
    switch (activeStep) {
      case "personal":
        return (
          <StepPersonalInfo
            data={data.personal}
            update={(d) => setData((prev) => ({ ...prev, personal: d }))}
            error={errors.personal}
          />
        );
      case "account":
        return (
          <StepAccountSetup
            data={data.account}
            update={(d) => setData((prev) => ({ ...prev, account: d }))}
            error={errors.account}
          />
        );
      case "preferences":
        return (
          <StepPreferences
            data={data.preferences}
            update={(d) => setData((prev) => ({ ...prev, preferences: d }))}
            error={errors.preferences}
          />
        );
    }
  };

  const motionVariants = {
    enter: (direction: "forward" | "backward") => ({
      opacity: 0,
      x: direction === "forward" ? 50 : -50,
    }),
    center: { opacity: 1, x: 0 },
    exit: (direction: "forward" | "backward") => ({
      opacity: 0,
      x: direction === "forward" ? -50 : 50,
    }),
  };

  const errorVariant = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
    none: {},
  };

  const currentIndex = steps.indexOf(activeStep);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;

  return (
    <motion.div
      className="bg-white dark:bg-gray-950 shadow-gray-800 rounded-2xl shadow-xl min-h-64 w-full max-w-md p-6"
      variants={errorVariant}
      animate={errorShake ? "shake" : "none"}
      onAnimationComplete={() => setErrorShake(false)}
    >
      <div className="flex justify-between mb-4">
        {steps.map((step) => (
          <button
            key={step}
            className={`px-3 py-1 rounded-full text-sm ${
              activeStep === step
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            {step.charAt(0).toUpperCase() + step.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeStep}
          custom={direction}
          variants={motionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-6">{renderStep()}</div>
        </motion.div>
      </AnimatePresence>

      <StepControls
        isFirst={isFirst}
        isLast={isLast}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </motion.div>
  );
}

// steps control
type Props = {
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

export const StepControls: FC<Props> = ({
  isFirst,
  isLast,
  onBack,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onBack}
        disabled={isFirst}
        className={`px-4 py-2 rounded-xl transition border ${
          isFirst
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-gray-400 text-gray-700 dark:text-gray-200 hover:border-green-600 hover:text-green-600"
        }`}
      >
        Back
      </button>

      <button
        onClick={isLast ? onSubmit : onNext}
        className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
      >
        {isLast ? "Submit" : "Next"}
      </button>
    </div>
  );
};
