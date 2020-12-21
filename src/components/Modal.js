import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        y: "-100vh"
    },
    visible: {
        opacity: 1,
        y: 200,
        transition: {
            delay: 0.5
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
            <motion.div className="modal" variants={modalVariants}>
                <p>Want to make another pizza?</p>
                <Link to='/'>
                    <button onClick={()=>setShowModal(false)}>Yupp!</button>
                </Link>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
