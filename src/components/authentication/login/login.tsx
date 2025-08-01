import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    onSubmit(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              key="error"
              initial={{ x: 0 }}
              animate={{ x: [0, -10, 10, -6, 6, -2, 2, 0] }}
              transition={{ duration: 0.5 }}
              className="text-sm text-red-500"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition"
        >
          Sign In
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
