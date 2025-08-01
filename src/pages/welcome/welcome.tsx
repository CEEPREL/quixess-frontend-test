import { motion } from "framer-motion";

const WelcomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-center px-6"
    >
      <a href="/" className="underline text-green-600">
        Home
      </a>
      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
        Welcome!
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-md">
        You’ve successfully signed in.
      </p>

      <div className="mt-8 w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  );
};

export default WelcomePage;
