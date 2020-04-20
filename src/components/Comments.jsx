import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const item = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Comments = (props) => {
  const { comments, isVisible } = props;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            className="commentsBox"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}
          >
            {comments.map((comment) => (
              <motion.li
                variants={item}
                key={comment._id}
                className="oneLineDiv"
              >
                <div className="commentAuthor">{comment.author}</div>
                <div className="commentText">{comment.text}</div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Comments;
