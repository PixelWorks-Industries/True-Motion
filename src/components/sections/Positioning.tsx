import { motion } from "motion/react";

import { SectionMeta } from "@/components/ui/SectionMeta";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const statementLines = [
  "People judge a business",
  "before they read a word.",
];

export function Positioning() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  const reduced = useReducedMotion();

  return (
    <section className="section-y border-t border-border-custom bg-[#EEEEEE]">
      <div ref={ref} className="container-grid">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Left anchor */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduced ? 0 : -24,
              filter: reduced ? "blur(0px)" : "blur(8px)",
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    x: reduced ? 0 : -24,
                    filter: reduced ? "blur(0px)" : "blur(8px)",
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
            className="md:col-span-3"
          >
            <SectionMeta number="01" label="Studio" />

            <motion.p
              initial={{
                opacity: 0,
                y: reduced ? 0 : 16,
                filter: reduced ? "blur(0px)" : "blur(8px)",
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: reduced ? 0 : 16,
                      filter: reduced ? "blur(0px)" : "blur(8px)",
                    }
              }
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: 0.7,
                      delay: 0.16,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              className="mt-12 max-w-[230px] text-xs leading-[1.65] text-muted"
            >
              A creative digital studio shaping how businesses look, move,
              and present themselves online.
            </motion.p>
          </motion.div>

          {/* Main statement */}
          <div className="md:col-span-8 md:col-start-5">
            <div className="overflow-hidden">
              {statementLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{
                    opacity: 0,
                    y: reduced ? 0 : 42,
                    filter: reduced ? "blur(0px)" : "blur(14px)",
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }
                      : {
                          opacity: 0,
                          y: reduced ? 0 : 42,
                          filter: reduced ? "blur(0px)" : "blur(14px)",
                        }
                  }
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          duration: 0.95,
                          delay: 0.08 + index * 0.12,
                          ease: [0.12, 0.8, 0.2, 1],
                        }
                  }
                  className="text-[clamp(2.45rem,5vw,5.4rem)] font-medium leading-[0.94] tracking-[-0.055em] text-foreground will-change-transform"
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Supporting statement */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduced ? 0 : 24,
                filter: reduced ? "blur(0px)" : "blur(10px)",
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: reduced ? 0 : 24,
                      filter: reduced ? "blur(0px)" : "blur(10px)",
                    }
              }
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: 0.8,
                      delay: 0.42,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2"
            >
              <p className="max-w-[380px] text-[clamp(1.1rem,1.7vw,1.45rem)] leading-[1.25] tracking-[-0.025em] text-foreground">
                We shape what they see first. Web. Identity. Motion.
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  x: reduced ? 0 : 24,
                  filter: reduced ? "blur(0px)" : "blur(8px)",
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        x: reduced ? 0 : 24,
                        filter: reduced ? "blur(0px)" : "blur(8px)",
                      }
                }
                transition={
                  reduced
                    ? { duration: 0 }
                    : {
                        duration: 0.75,
                        delay: 0.56,
                        ease: [0.16, 1, 0.3, 1],
                      }
                }
                className="sm:flex sm:justify-end sm:pt-1"
              >
                <span className="text-right text-[10px] uppercase leading-[1.5] tracking-[0.16em] text-muted">
                  Built for
                  <br />
                  the first impression
                </span>
              </motion.div>
            </motion.div>

            {/* Structural closing rule */}
            <motion.div
              initial={{
                scaleX: reduced ? 1 : 0,
                opacity: reduced ? 1 : 0,
              }}
              animate={
                inView
                  ? {
                      scaleX: 1,
                      opacity: 1,
                    }
                  : {
                      scaleX: reduced ? 1 : 0,
                      opacity: reduced ? 1 : 0,
                    }
              }
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: 0.9,
                      delay: 0.72,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              style={{ transformOrigin: "left" }}
              className="mt-12 h-px w-full bg-border-custom"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}