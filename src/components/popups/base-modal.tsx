import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/modal-slice";
import { motion, AnimatePresence } from "framer-motion";
import type { RootState } from "../../redux/store";

const GlobalModal: React.FC = () => {
  const dispatch = useDispatch();

  const { isOpen, content } = useSelector((state: RootState) => state.modal);

  return (
    <AnimatePresence>
      {isOpen && content && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="dark:bg-black rounded-lg shadow-lg  relative max-w-md w-full z-50"
          >
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-gray-600"
              onClick={() => dispatch(closeModal())}
            >
              ✕
            </button>
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalModal;
