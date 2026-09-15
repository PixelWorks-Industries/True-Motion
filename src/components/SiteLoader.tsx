import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0B0909]"
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex flex-col items-center">
            {/* Wordmark */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(7px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
                ease: [0.12, 0.8, 0.2, 1],
              }}
              className="text-center text-[clamp(1.25rem,3vw,2.3rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em] text-[#EEEEEE]"
            >
              True Motion
            </motion.h1>

            {/* Loading bar */}
            <div className="relative mt-4 h-[5px] w-[min(42vw,220px)] overflow-hidden bg-white/10">
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.12,
                  ease: [0.18, 0.8, 0.16, 1],
                }}
                style={{
                  transformOrigin: "left",
                }}
                className="absolute inset-0 bg-[#EEEEEE]"
              />

              <motion.div
                initial={{
                  x: "-130%",
                }}
                animate={{
                  x: "520%",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-y-0 left-0 w-[22%] bg-white/80"
                aria-hidden="true"
              />

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.18,
                  delay: 1.58,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  transformOrigin: "right",
                }}
                className="absolute inset-0 bg-[#EEEEEE]"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
