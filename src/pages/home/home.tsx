import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/authentication/login/login";
import OnBoarding from "../../components/authentication/on-boarding/on-boarding-process";
import { ThemeToggle } from "../../components/ui/buttons/theme-toggle";
import { closeModal, openModal } from "../../redux/features/modal/modal-slice";
import { useAppDispatch } from "../../redux/hooks";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300 bg-gray-100 dark:bg-[#0b0b0b]">
      <div className="w-full max-w-screen-md overflow-y-scroll md:w-[40%] flex gap-10 md:gap-0 flex-col md:justify-center p-6 md:px-16 z-10">
        <h1 className="text-2xl font-extrabold text-black dark:text-white mb-4 leading-tight ">
          Automate, Innovate
          <br />
          and Dominate with Quixess
        </h1>

        <div className="flex-1  md:hidden flex items-center justify-center md:justify-start">
          <img
            src="/image1.png"
            alt="Landing visual"
            width={300}
            height={300}
            className="dark:brightness-[1.3] dark:contrast-[1.1] dark:saturate-[1.2] object-contain  md:hidden"
          />
        </div>

        <div className="mt-6 md:mt-0">
          <CallToActionButtons />
          <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-[60%] h-80 md:h-auto relative items-center justify-center">
        <img
          src="/image1.png"
          alt="Landing visual"
          width={800}
          height={800}
          className="dark:brightness-[1.3] dark:contrast-[1.1] dark:saturate-[1.2] object-cover md:m-5"
        />
        <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60 pointer-events-none" />
      </div>
    </div>
  );
}

function CallToActionButtons() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handlesubmit = () => {
    dispatch(closeModal());
    navigate("/welcome");
  };
  const handleOnBoardModal = () => {
    dispatch(openModal(<OnBoarding />));
  };
  const handleLoginModal = () => {
    dispatch(openModal(<LoginForm onSubmit={handlesubmit} />));
  };
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleOnBoardModal}
        className="w-full py-3 bg-green-500 text-white rounded-md font-medium shadow-md hover:bg-green-600 transition"
      >
        Get Started
      </button>

      <button
        onClick={handleLoginModal}
        className="w-full py-3 border border-green-400 text-green-500 rounded-md font-medium hover:bg-green-50 dark:hover:bg-zinc-800 transition"
      >
        Log In
      </button>
    </div>
  );
}
