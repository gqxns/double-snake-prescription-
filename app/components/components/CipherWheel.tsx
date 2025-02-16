import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CipherWheel = ({ code, onComplete }: { code: string[], onComplete: () => void }) => {
  const [rotation, setRotation] = useState(0);
  const targetRotation = 135;

  useEffect(() => {
    if (code.every(c => c === "✓")) {
      setRotation(targetRotation);
      setTimeout(onComplete, 1500);
    }
  }, [code]);

  return (
    <motion.div
      className="w-24 h-24 bg-zinc-600 rounded-full mx-auto relative"
      animate={{ rotate: rotation }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-rose-400 rounded-full" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-rose-400" />
    </motion.div>
  );
};

export default CipherWheel;
