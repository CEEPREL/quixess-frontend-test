import OnBoarding from "../components/on-boarding/on-boarding-process";
import { ThemeToggle } from "../components/ui/buttons/theme-toggle";
import { openModal } from "../redux/features/modal/modal-slice";
import { useAppDispatch } from "../redux/hooks";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300 bg-gray-100 dark:bg-[#0b0b0b]">
      {/* Left Side */}
      <div className="w-full md:w-[40%] flex flex-col justify-center p-8 md:p-16 z-10">
        <div className="flex flex-col justify-center p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-extrabold text-black dark:text-white mb-6 leading-tight">
            Automate, Innovate
            <br />
            and Dominate with Quixess
          </h1>

          <CallToActionButtons />

          <div className="mt-8 text-xs text-gray-600 dark:text-gray-400">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[60%] h-80 md:h-auto relative flex items-center justify-center">
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

// Reusable CTA Section
function CallToActionButtons() {
  const dispatch = useAppDispatch();
  const handleCardClick = () => {
    dispatch(openModal(<OnBoarding />));
  };
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleCardClick}
        className="w-full py-3 bg-green-500 text-white rounded-md font-medium shadow-md hover:bg-green-600 transition"
      >
        Get Started
      </button>

      <a href="/login">
        <button className="w-full py-3 border border-green-400 text-green-500 rounded-md font-medium hover:bg-green-50 dark:hover:bg-zinc-800 transition">
          Log In
        </button>
      </a>
    </div>
  );
}
