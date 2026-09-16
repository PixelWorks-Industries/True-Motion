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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#EEEEEE]"
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <motion.div
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
              className="flex h-[60px] w-[220px] items-center justify-center"
            >
              <motion.img
                src="/logo-black.png"
                alt="True Motion"
                animate={{
                  opacity: [0.35, 1],
                  scale: [0.96, 1],
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block h-auto w-full object-contain"
              />
            </motion.div>

            {/* Loading bar */}
            <div className="mt-5 h-[8px] w-[190px] overflow-hidden bg-black/10">
              <motion.div
                className="h-full w-full bg-[#0B0909]"
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.25,
                  delay: 0.1,
                  ease: [0.18, 0.8, 0.16, 1],
                }}
                style={{
                  transformOrigin: "left center",
                  willChange: "transform",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}