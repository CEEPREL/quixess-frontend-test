"use client";
import { useState } from "react";
import type { OnboardingData, StepKey } from "./types";
import StepPersonalInfo from "./personal";
import StepAccountSetup from "./account-setup";
import StepPreferences from "./preferences";

const steps: StepKey[] = ["personal", "account", "preferences"];

export default function OnBoarding() {
  const [activeStep, setActiveStep] = useState<StepKey>("personal");
  const [data, setData] = useState<OnboardingData>({
    personal: { fullName: "", email: "" },
    account: { username: "", password: "" },
    preferences: { theme: "light", subscribe: false },
  });

  const [errors, setErrors] = useState<{ [K in StepKey]?: boolean }>({});

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
      return;
    }
    const idx = steps.indexOf(activeStep);
    if (idx < steps.length - 1) {
      setActiveStep(steps[idx + 1]);
    }
  };

  const handleBack = () => {
    const idx = steps.indexOf(activeStep);
    if (idx > 0) {
      setActiveStep(steps[idx - 1]);
    }
  };

  const handleSubmit = () => {
    if (isValid("preferences")) {
      console.log("SUBMITTING", data);
      // handle final submission
    } else {
      setErrors((prev) => ({ ...prev, preferences: true }));
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

  return (
    <>
      <div className="bg-white dark:bg-gray-950 shadow-gray-800 rounded-2xl shadow-xl min-h-64 w-full max-w-md p-6 animate-fade-in">
        <div className="flex justify-between mb-4">
          {steps.map((step) => (
            <button
              key={step}
              //   onClick={() => setActiveStep(step)}
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

        <div className="space-y-6">{renderStep()}</div>

        <div className="flex self-baseline justify-between mt-6">
          <button
            onClick={handleBack}
            disabled={activeStep === "personal"}
            className="text-gray-600 dark:text-gray-300 hover:text-green-600"
          >
            Back
          </button>
          {activeStep === "preferences" ? (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
