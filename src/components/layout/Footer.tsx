import { motion } from "motion/react";

import { Link } from "react-router-dom";

import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const capabilities = [
  "Web",
  "Identity",
  "Digital",
  "Motion",
  "Video",
  "Direction",
];

const ease = [0.16, 1, 0.3, 1] as const;
const revealEase = [0.12, 0.8, 0.2, 1] as const;

export function Footer() {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
  });

  const reduced = useReducedMotion();

  return (
    <footer
      ref={ref}
      className="overflow-hidden bg-[#0B0909] text-[#EEEEEE]"
    >
      <div className="container-grid">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 py-14 md:grid-cols-12 md:gap-8 md:py-20">
{/* Brand */}
<motion.div
  initial={{
    opacity: 0,
    x: reduced ? 0 : -32,
    y: reduced ? 0 : 18,
    filter: reduced ? "blur(0px)" : "blur(10px)",
  }}
  animate={
    inView
      ? {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
        }
      : {
          opacity: 0,
          x: reduced ? 0 : -32,
          y: reduced ? 0 : 18,
          filter: reduced ? "blur(0px)" : "blur(10px)",
        }
  }
  transition={
    reduced
      ? { duration: 0 }
      : {
          duration: 0.9,
          ease: revealEase,
        }
  }
  className="md:col-span-5"
>
  <motion.div
    initial={{
      opacity: 0,
      y: reduced ? 0 : 12,
    }}
    animate={{
      opacity: inView ? 1 : 0,
      y: inView ? 0 : reduced ? 0 : 12,
    }}
    transition={
      reduced
        ? { duration: 0 }
        : {
            duration: 0.6,
            delay: 0.12,
            ease,
          }
    }
    className="flex h-[34px] items-center"
  >
    <Link
      to="/"
      aria-label="True Motion"
      className="block h-[34px] w-[150px] overflow-hidden"
    >
      <img
        src="/logo-white.png"
        alt="True Motion"
        className="block h-[150px] w-[150px] max-w-none object-contain"
        style={{
          transform: "translate(-20px, -58px)",
        }}
      />
    </Link>
  </motion.div>

  <motion.p
    initial={{
      opacity: 0,
      y: reduced ? 0 : 16,
      filter: reduced ? "blur(0px)" : "blur(6px)",
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
            filter: reduced ? "blur(0px)" : "blur(6px)",
          }
    }
    transition={
      reduced
        ? { duration: 0 }
        : {
            duration: 0.7,
            delay: 0.22,
            ease,
          }
    }
    className="mt-6 max-w-[280px] text-sm leading-[1.6] text-white/40"
  >
    Web, identity, motion, video, and digital work.
  </motion.p>
</motion.div>
          {/* Navigation */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduced ? 0 : -22,
              filter: reduced ? "blur(0px)" : "blur(7px)",
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
                    x: reduced ? 0 : -22,
                    filter: reduced ? "blur(0px)" : "blur(7px)",
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.8,
                    delay: 0.1,
                    ease: revealEase,
                  }
            }
            className="md:col-span-2 md:col-start-7"
          >
            <p className="mb-6 text-[9px] uppercase tracking-[0.18em] text-white/25">
              Navigate
            </p>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{
                    opacity: 0,
                    x: reduced ? 0 : -14,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: reduced ? 0 : -14,
                        }
                  }
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          duration: 0.55,
                          delay: 0.18 + index * 0.06,
                          ease,
                        }
                  }
                >
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <motion.span
                      className="text-[9px] text-white/20"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: inView ? 1 : 0,
                      }}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : {
                              duration: 0.4,
                              delay: 0.24 + index * 0.06,
                            }
                      }
                    >
                      0{index + 1}
                    </motion.span>

                    <span className="relative overflow-hidden">
                      <motion.span
                        className="block"
                        whileHover={
                          reduced
                            ? undefined
                            : {
                                x: 5,
                              }
                        }
                        transition={{
                          duration: 0.3,
                          ease,
                        }}
                      >
                        {link.label}
                      </motion.span>

                      <span
                        aria-hidden="true"
                        className="absolute bottom-[-2px] left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                      />
                    </span>

                    <motion.span
                      aria-hidden="true"
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              opacity: 1,
                              x: 3,
                            }
                      }
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                      className="text-[10px] opacity-0"
                    >
                      ↗
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduced ? 0 : 24,
              filter: reduced ? "blur(0px)" : "blur(7px)",
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
                    filter: reduced ? "blur(0px)" : "blur(7px)",
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.8,
                    delay: 0.14,
                    ease: revealEase,
                  }
            }
            className="md:col-span-5 md:col-start-9"
          >
            <p className="mb-6 text-[9px] uppercase tracking-[0.18em] text-white/25">
              Capabilities
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: reduced ? 0 : 18,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: reduced ? 0 : 18,
                        }
                  }
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          duration: 0.55,
                          delay: 0.24 + index * 0.07,
                          ease,
                        }
                  }
                  className="group flex items-center gap-3"
                >
                  <motion.span
                    className="h-px w-3 bg-white/20"
                    initial={{
                      scaleX: 0,
                    }}
                    animate={
                      inView
                        ? {
                            scaleX: 1,
                          }
                        : {
                            scaleX: 0,
                          }
                    }
                    transition={
                      reduced
                        ? { duration: 0 }
                        : {
                            duration: 0.45,
                            delay: 0.28 + index * 0.07,
                            ease,
                          }
                    }
                    style={{
                      transformOrigin: "left",
                    }}
                  />

                  <motion.span
                    whileHover={
                      reduced
                        ? undefined
                        : {
                            x: 5,
                          }
                    }
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white"
                  >
                    {item}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduced ? 0 : 20,
              filter: reduced ? "blur(0px)" : "blur(7px)",
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
                    y: reduced ? 0 : 20,
                    filter: reduced ? "blur(0px)" : "blur(7px)",
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.75,
                    delay: 0.28,
                    ease: revealEase,
                  }
            }
            className="md:col-span-5 md:col-start-7"
          >
            <div className="border-t border-white/10 pt-6">
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Reach
              </p>

              <a
                href="mailto:hello@truemotion.studio"
                className="group mt-4 inline-flex items-center gap-2 text-sm text-white/75 transition-colors duration-300 hover:text-white"
              >
                <motion.span
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          x: 4,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                  className="relative"
                >
                  zain10here@gmail.com - temp mail

                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                </motion.span>

                <motion.span
                  aria-hidden="true"
                  initial={{
                    opacity: 0,
                    x: -4,
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          opacity: 1,
                          x: 3,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease,
                  }}
                  className="opacity-0"
                >
                  ↗
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom meta */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduced ? 0 : 12,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : reduced ? 0 : 12,
          }}
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration: 0.6,
                  delay: 0.48,
                  ease,
                }
          }
          className="flex flex-col gap-3 border-t border-white/10 py-5 text-[10px] uppercase tracking-[0.14em] text-white/25 md:flex-row md:items-center md:justify-between"
        >
          <span>© {new Date().getFullYear()} True Motion</span>
          <span>United States & Canada</span>
          <span>Web / Identity / Motion</span>
        </motion.div>
      </div>
    </footer>
  );
}