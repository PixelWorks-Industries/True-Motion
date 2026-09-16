import {
    AnimatePresence,
    motion,
    type Variants,
  } from "motion/react";
  import {
    type MouseEvent,
    type ReactNode,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import {
    Link,
    useLocation,
  } from "react-router-dom";
  
  const ease = [0.16, 1, 0.3, 1] as const;
  const easeSoft = [0.12, 0.8, 0.2, 1] as const;
  
  const COLORS = {
    background: "#E8E5E2",
    surface: "#F1EEEB",
    surfaceAlt: "#DDD7D2",
    surfaceDark: "#151313",
    surfaceDarkAlt: "#1D1919",
    text: "#0B0909",
    textMuted: "#6F6966",
    textFaint: "#948D89",
    textLight: "#EEEEEE",
    textLightMuted: "#8A8383",
    border: "#CCC6C2",
    borderDark: "#363131",
  };
  
  const navigation = [
    {
      number: "01",
      label: "Overview",
      path: "/dashboard",
    },
    {
      number: "02",
      label: "Leads",
      path: "/dashboard/leads",
    },
    {
      number: "03",
      label: "Pipeline",
      path: "/dashboard/pipeline",
    },
    {
      number: "04",
      label: "Outreach",
      path: "/dashboard/outreach",
    },
    {
      number: "05",
      label: "Team",
      path: "/dashboard/team",
    },
    {
      number: "06",
      label: "Projects",
      path: "/dashboard/projects",
    },
  ];
  
  const metrics = [
    {
      label: "Active leads",
      description:
        "Qualified opportunities currently inside the working CRM.",
    },
    {
      label: "Contacted",
      description:
        "Prospects that have received an initial outreach.",
    },
    {
      label: "Follow-ups due",
      description:
        "Conversations that currently have a tracked next step.",
    },
    {
      label: "Interested",
      description:
        "Prospects showing meaningful intent to continue.",
    },
    {
      label: "Handoffs",
      description:
        "Interested prospects passed to the closing workflow.",
    },
    {
      label: "Potential pipeline",
      description:
        "Verified opportunity value once real pipeline records exist.",
    },
  ];
  
  const pipeline = [
    {
      number: "01",
      title: "Researching",
      description:
        "The business is being investigated and is not yet ready for outreach.",
    },
    {
      number: "02",
      title: "Ready to Contact",
      description:
        "Research is complete and the prospect is ready for initial outreach.",
    },
    {
      number: "03",
      title: "Contacted",
      description:
        "Initial outreach has been sent and the conversation is being tracked.",
    },
    {
      number: "04",
      title: "Follow-up",
      description:
        "A follow-up is due or communication is currently being attempted.",
    },
    {
      number: "05",
      title: "Interested",
      description:
        "The prospect has shown meaningful interest in True Motion.",
    },
    {
      number: "06",
      title: "Handoff",
      description:
        "The prospect has been passed to Zain for deeper conversation.",
    },
    {
      number: "07",
      title: "Not Interested",
      description:
        "The prospect clearly declined or is not interested.",
    },
    {
      number: "08",
      title: "No Response",
      description:
        "Reasonable outreach and follow-ups produced no response.",
    },
    {
      number: "09",
      title: "Closed",
      description:
        "The opportunity reached a final outcome.",
    },
  ];
  
  const activityTypes = [
    "Research",
    "Lead added",
    "Decision-maker found",
    "Outreach",
    "Follow-up",
    "Interested",
    "Handoff",
  ];
  
  const pageReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  const sectionReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  const slideReveal: Variants = {
    hidden: {
      opacity: 0,
      x: -22,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  
  const rowReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left";
  };
  
  type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
  };
  
  type DesktopHeaderProps = {
    collapsed: boolean;
  };
  
  type MetricProps = {
    index: number;
    label: string;
    description: string;
  };
  
  type PipelineRowProps = {
    index: number;
    number: string;
    title: string;
    description: string;
    expanded: boolean;
    onToggle: () => void;
  };
  
  function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
  }: RevealProps) {
    const variants =
      direction === "left"
        ? slideReveal
        : sectionReveal;
  
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        variants={variants}
        transition={{
          duration: 0.72,
          delay,
          ease,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
  
  function Wordmark({
    collapsed,
  }: {
    collapsed: boolean;
  }) {
    return (
      <Link
        to="/dashboard"
        className="group block overflow-hidden"
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {collapsed ? (
            <motion.span
              key="tm"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.32,
                ease,
              }}
              className="block text-[15px] font-medium tracking-[-0.06em]"
            >
              TM
            </motion.span>
          ) : (
            <motion.span
              key="true-motion"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.32,
                ease,
              }}
              className="block whitespace-nowrap text-[16px] font-medium tracking-[-0.055em]"
            >
              True Motion
            </motion.span>
          )}
        </AnimatePresence>
  
        <motion.div
          animate={{
            width: collapsed ? 24 : "100%",
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mt-4 h-[2px] origin-left bg-[#EEEEEE]"
        />
      </Link>
    );
  }
  
  function Sidebar({
    collapsed,
    onToggle,
  }: SidebarProps) {
    const location = useLocation();
  
    const active = useMemo(() => {
      if (location.pathname === "/dashboard") {
        return "/dashboard";
      }
  
      const found = navigation.find(
        (item) =>
          item.path !== "/dashboard" &&
          location.pathname.startsWith(item.path),
      );
  
      return found?.path ?? "/dashboard";
    }, [location.pathname]);
  
    return (
      <motion.aside
        animate={{
          width: collapsed ? 86 : 276,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="fixed inset-y-0 left-0 z-50 hidden overflow-hidden bg-[#151313] text-[#EEEEEE] md:block"
      >
        <div className="flex h-full flex-col">
          <div className="relative flex h-[96px] shrink-0 items-center px-7">
            <Wordmark collapsed={collapsed} />
  
            <motion.button
              type="button"
              aria-label={
                collapsed
                  ? "Expand navigation"
                  : "Collapse navigation"
              }
              onClick={onToggle}
              whileTap={{
                scale: 0.92,
              }}
              className="absolute right-4 top-7 flex h-9 w-9 items-center justify-center text-[#847D7D]"
            >
              <motion.span
                animate={{
                  rotate: collapsed ? 180 : 0,
                }}
                transition={{
                  duration: 0.52,
                  ease,
                }}
                className="text-[21px]"
              >
                ‹
              </motion.span>
            </motion.button>
          </div>
  
          <div className="px-3">
            <AnimatePresence initial={false}>
              {!collapsed ? (
                <motion.div
                  key="operations-label"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -10,
                  }}
                  transition={{
                    duration: 0.32,
                    ease,
                  }}
                  className="mb-4 px-4 text-[9px] uppercase tracking-[0.2em] text-[#6A6363]"
                >
                  Operations
                </motion.div>
              ) : null}
            </AnimatePresence>
  
            <nav className="space-y-1">
              {navigation.map((item, index) => {
                const isCurrent = item.path === active;
  
                return (
                  <motion.div
                    key={item.path}
                    initial={{
                      opacity: 0,
                      x: -16,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08 + index * 0.045,
                      ease,
                    }}
                  >
                    <Link
                      to={item.path}
                      className="group block overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          backgroundColor: isCurrent
                            ? COLORS.textLight
                            : "rgba(238,238,238,0)",
                        }}
                        whileHover={{
                          backgroundColor: isCurrent
                            ? COLORS.textLight
                            : "rgba(238,238,238,0.05)",
                        }}
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="relative flex h-13 min-h-[52px] items-center px-4"
                      >
                        <motion.span
                          animate={{
                            x: collapsed
                              ? 0
                              : isCurrent
                                ? 6
                                : 0,
                            color: isCurrent
                              ? COLORS.text
                              : "#766F6F",
                          }}
                          transition={{
                            duration: 0.35,
                            ease,
                          }}
                          className="shrink-0 text-[9px] tracking-[0.14em]"
                        >
                          {item.number}
                        </motion.span>
  
                        <AnimatePresence initial={false}>
                          {!collapsed ? (
                            <motion.span
                              key={`${item.path}-label`}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              animate={{
                                opacity: isCurrent
                                  ? 1
                                  : 0.56,
                                x: isCurrent ? 6 : 10,
                              }}
                              exit={{
                                opacity: 0,
                                x: -8,
                              }}
                              transition={{
                                duration: 0.34,
                                ease,
                              }}
                              className={`ml-5 whitespace-nowrap text-[13px] tracking-[-0.02em] ${
                                isCurrent
                                  ? "text-[#0B0909]"
                                  : "text-[#EEEEEE]"
                              }`}
                            >
                              {item.label}
                            </motion.span>
                          ) : null}
                        </AnimatePresence>
  
                        <motion.span
                          animate={{
                            scaleY: isCurrent ? 1 : 0,
                            opacity: isCurrent ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.32,
                            ease,
                          }}
                          className="absolute bottom-0 left-0 top-0 w-[3px] origin-center bg-[#0B0909]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
  
          <div className="mt-auto px-7 pb-7">
            <AnimatePresence initial={false}>
              {!collapsed ? (
                <motion.div
                  key="sidebar-info"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.38,
                    ease,
                  }}
                >
                  <div className="text-[9px] uppercase tracking-[0.18em] text-[#696262]">
                    Internal
                  </div>
  
                  <div className="mt-2 text-[12px] text-[#878080]">
                    Studio operations
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    );
  }
  
  function MobileHeader() {
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      if (!open) {
        document.body.style.overflow = "";
        return;
      }
  
      document.body.style.overflow = "hidden";
  
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);
  
    return (
      <>
        <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-[#CCC7C3] bg-[#E8E5E2]/95 px-5 backdrop-blur-xl md:hidden">
          <Link
            to="/dashboard"
            className="text-[15px] font-medium tracking-[-0.055em]"
          >
            True Motion
          </Link>
  
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="relative h-7 overflow-hidden text-[10px] uppercase tracking-[0.18em]"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.span
                key={open ? "close" : "menu"}
                initial={{
                  y: 18,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -18,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease,
                }}
                className="block"
              >
                {open ? "Close" : "Menu"}
              </motion.span>
            </AnimatePresence>
          </button>
        </header>
  
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{
                clipPath: "inset(0 0 100% 0)",
              }}
              animate={{
                clipPath: "inset(0 0 0% 0)",
              }}
              exit={{
                clipPath: "inset(100% 0 0% 0)",
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="fixed inset-0 z-30 overflow-y-auto bg-[#151313] px-5 pb-10 pt-28 text-[#EEEEEE] md:hidden"
            >
              <nav>
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.06 + index * 0.055,
                      ease,
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-[#393333] py-5"
                    >
                      <span className="text-[clamp(2rem,8vw,4rem)] font-medium tracking-[-0.065em]">
                        {item.label}
                      </span>
  
                      <span className="text-[9px] tracking-[0.16em] text-[#706868]">
                        {item.number}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
  
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.48,
                  ease,
                }}
                className="mt-14"
              >
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#8F8787]"
                >
                  <span>Public site</span>
                  <span>↗</span>
                </Link>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>
    );
  }
  
  function DesktopHeader({
    collapsed,
  }: DesktopHeaderProps) {
    return (
      <header className="sticky top-0 z-30 hidden h-[76px] border-b border-[#CCC7C3]/80 bg-[#E8E5E2]/88 backdrop-blur-xl md:flex">
        <div className="flex w-full items-center justify-between px-8 lg:px-12">
          <motion.div
            animate={{
              x: collapsed ? -3 : 0,
            }}
            transition={{
              duration: 0.45,
              ease,
            }}
            className="flex items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#706A67]">
              Internal
            </span>
  
            <span className="h-4 w-px bg-[#C5BFBC]" />
  
            <span className="text-sm tracking-[-0.025em]">
              Operations
            </span>
          </motion.div>
  
          <Link
            to="/"
            className="text-[10px] uppercase tracking-[0.17em]"
          >
            <motion.span
              whileHover={{
                x: 4,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              className="inline-flex items-center gap-3"
            >
              Public site
              <span>↗</span>
            </motion.span>
          </Link>
        </div>
      </header>
    );
  }
  
  function HeroSection() {
    return (
      <section className="pt-6 sm:pt-12 lg:pt-16">
        <div className="border-b border-[#0B0909] pb-16 lg:pb-24">
          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.62,
                  ease,
                }}
                className="text-[10px] uppercase tracking-[0.2em] text-[#706A67]"
              >
                True Motion / Studio OS
              </motion.div>
  
              <div className="mt-6 overflow-hidden">
                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 0.95,
                    ease,
                  }}
                  className="text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.79] tracking-[-0.11em]"
                >
                  Studio
                </motion.h1>
              </div>
  
              <div className="overflow-hidden">
                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 1.02,
                    delay: 0.07,
                    ease,
                  }}
                  className="text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.79] tracking-[-0.11em]"
                >
                  operations.
                </motion.h1>
              </div>
            </div>
  
            <div className="lg:justify-self-end">
              <Reveal
                direction="left"
                delay={0.18}
              >
                <p className="max-w-md text-[14px] leading-7 text-[#706A67]">
                  The internal operating view for lead generation,
                  outreach, pipeline movement, handoffs, and project
                  activity.
                </p>
              </Reveal>
  
              <Reveal
                direction="left"
                delay={0.28}
              >
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.17em]">
                    Live data only
                  </span>
  
                  <span className="text-[#8A8380]">
                    /
                  </span>
  
                  <span className="text-[10px] uppercase tracking-[0.17em] text-[#756E6B]">
                    Overview
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function MetricsSection() {
    return (
      <section className="pt-20 lg:pt-28">
        <Reveal>
          <div className="mb-9 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#706A67]">
                01 / Overview
              </div>
  
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.4rem)] font-medium leading-[0.88] tracking-[-0.075em]">
                Current state.
              </h2>
            </div>
  
            <p className="max-w-sm text-[12px] leading-6 text-[#756E6B] lg:text-right">
              Nothing is invented here. When the CRM is empty,
              the dashboard shows exactly that.
            </p>
          </div>
        </Reveal>
  
        <div className="grid grid-cols-1 gap-px bg-[#CBC6C2] sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric, index) => (
            <Metric
              key={metric.label}
              index={index}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </section>
    );
  }
  
  function Metric({
    index,
    label,
    description,
  }: MetricProps) {
    return (
      <motion.article
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.05,
          ease,
        }}
        whileHover={{
          y: -5,
        }}
        className="group relative min-h-[280px] overflow-hidden bg-[#F1EEEB] p-7 sm:p-9"
      >
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.72,
            delay: 0.12 + index * 0.05,
            ease,
          }}
          className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[#0B0909]"
        />
  
        <div className="flex justify-between">
          <span className="text-[10px] uppercase tracking-[0.16em] text-[#706A67]">
            {label}
          </span>
  
          <span className="text-[9px] tracking-[0.13em] text-[#918A86]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
  
        <motion.div
          initial={{
            y: 35,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.76,
            delay: 0.16 + index * 0.05,
            ease,
          }}
          className="mt-16 text-[clamp(4rem,6.8vw,7rem)] font-medium leading-none tracking-[-0.1em]"
        >
          0
        </motion.div>
  
        <p className="mt-10 max-w-xs text-[12px] leading-6 text-[#736C69]">
          {description}
        </p>
  
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
          className="absolute bottom-0 left-7 right-7 h-[2px] origin-left bg-[#0B0909]"
        />
      </motion.article>
    );
  }
  
  function PipelineSection() {
    return (
      <section className="pt-24 lg:pt-32">
        <Reveal>
          <div className="mb-9 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#706A67]">
                02 / Pipeline
              </div>
  
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.4rem)] font-medium leading-[0.88] tracking-[-0.075em]">
                Every stage.
              </h2>
            </div>
  
            <p className="max-w-sm text-[12px] leading-6 text-[#756E6B] lg:text-right">
              The CRM workflow stays visible without turning the
              dashboard into a wall of cards.
            </p>
          </div>
        </Reveal>
  
        <div className="divide-y divide-[#CBC6C2] border-y border-[#CBC6C2]">
          {pipeline.map((item, index) => (
            <PipelineRow
              key={item.title}
              index={index}
              number={item.number}
              title={item.title}
              description={item.description}
              expanded={false}
              onToggle={() => undefined}
            />
          ))}
        </div>
      </section>
    );
  }
  
  function PipelineRow({
    index,
    number,
    title,
    description,
    expanded,
    onToggle,
  }: PipelineRowProps) {
    const [localOpen, setLocalOpen] =
      useState(expanded);
  
    const isOpen = localOpen;
  
    const handleToggle = () => {
      setLocalOpen((value) => !value);
      onToggle();
    };
  
    return (
      <motion.div
        variants={rowReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.62,
          delay: index * 0.035,
          ease,
        }}
        className="group"
      >
        <button
          type="button"
          onClick={handleToggle}
          className="flex w-full items-center gap-5 py-6 text-left sm:py-7"
        >
          <span className="w-8 shrink-0 text-[9px] tracking-[0.14em] text-[#89827E]">
            {number}
          </span>
  
          <span className="min-w-0 flex-1 text-[clamp(1.3rem,2vw,2rem)] font-medium tracking-[-0.045em]">
            {title}
          </span>
  
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
            }}
            transition={{
              duration: 0.42,
              ease,
            }}
            className="shrink-0 text-[20px] leading-none text-[#756E6B]"
          >
            +
          </motion.span>
        </button>
  
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
              className="overflow-hidden"
            >
              <div className="grid pb-7 pl-13 sm:grid-cols-[140px_1fr] sm:pl-13">
                <div className="pb-4 text-[9px] uppercase tracking-[0.16em] text-[#8A8380] sm:pb-0">
                  Status
                </div>
  
                <p className="max-w-2xl text-[13px] leading-6 text-[#706A67]">
                  {description}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
  
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
          className="h-px origin-left bg-[#0B0909]"
        />
      </motion.div>
    );
  }
  
  function ActivitySection() {
    return (
      <section className="pt-24 lg:pt-32">
        <Reveal>
          <div className="mb-9">
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#706A67]">
              03 / Activity
            </div>
  
            <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.4rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              Recent movement.
            </h2>
          </div>
        </Reveal>
  
        <Reveal delay={0.06}>
          <div className="bg-[#151313] text-[#EEEEEE]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#756E6E]">
                  Feed
                </div>
  
                <div className="mt-14">
                  <div className="text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.84] tracking-[-0.09em]">
                    No activity
                    <br />
                    yet.
                  </div>
  
                  <p className="mt-10 max-w-lg text-[13px] leading-7 text-[#817A7A]">
                    Real activity will appear here once research,
                    outreach, follow-ups, interested replies, and
                    handoffs are recorded.
                  </p>
                </div>
              </div>
  
              <div className="border-t border-[#343030] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#756E6E]">
                  Activity types
                </div>
  
                <div className="mt-8">
                  {activityTypes.map((type, index) => (
                    <motion.div
                      key={type}
                      initial={{
                        opacity: 0,
                        x: 16,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.04,
                        ease,
                      }}
                      className="flex items-center justify-between border-b border-[#343030] py-4"
                    >
                      <span className="text-[13px] text-[#D4CECE]">
                        {type}
                      </span>
  
                      <span className="text-[10px] text-[#726A6A]">
                        0
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }
  
  function DataStateSection() {
    return (
      <section className="pt-24 lg:pt-32">
        <Reveal>
          <div className="grid border-y border-[#CBC6C2] lg:grid-cols-[1fr_0.8fr]">
            <div className="border-b border-[#CBC6C2] p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#706A67]">
                04 / Data state
              </div>
  
              <h2 className="mt-5 max-w-3xl text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.87] tracking-[-0.08em]">
                Empty is still
                <br />
                information.
              </h2>
  
              <p className="mt-10 max-w-xl text-[13px] leading-7 text-[#706A67]">
                The dashboard should show a quiet period honestly
                instead of filling the interface with simulated
                leads, fake activity, invented numbers, or decorative
                charts.
              </p>
            </div>
  
            <div className="bg-[#DAD3CD] p-8 sm:p-12 lg:p-16">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#706A67]">
                Pipeline value
              </div>
  
              <motion.div
                initial={{
                  y: 45,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="mt-14 text-[clamp(4.5rem,9vw,9rem)] font-medium leading-none tracking-[-0.1em]"
              >
                —
              </motion.div>
  
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.85,
                  ease,
                }}
                className="mt-12 h-[4px] origin-left bg-[#0B0909]"
              />
  
              <p className="mt-7 text-[12px] leading-6 text-[#716A66]">
                No verified opportunities recorded yet.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }
  
  function FooterSection() {
    return (
      <section className="pt-24 lg:pt-32">
        <Reveal>
          <footer className="border-t border-[#0B0909] pt-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#706A67]">
                  True Motion
                </div>
  
                <div className="mt-4 text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                  Keep the work moving.
                </div>
              </div>
  
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  to="/"
                  className="text-[10px] uppercase tracking-[0.17em]"
                >
                  Public site ↗
                </Link>
  
                <span className="text-[10px] uppercase tracking-[0.17em] text-[#867F7B]">
                  Internal / Operations
                </span>
              </div>
            </div>
          </footer>
        </Reveal>
      </section>
    );
  }
  
  function DashboardContent() {
    return (
      <div className="mx-auto max-w-[1760px]">
        <HeroSection />
        <MetricsSection />
        <PipelineSection />
        <ActivitySection />
        <DataStateSection />
        <FooterSection />
      </div>
    );
  }
  
  export function Dashboard() {
    const [collapsed, setCollapsed] =
      useState(false);
  
    const contentOffset = collapsed ? 86 : 276;
  
    return (
      <div className="min-h-screen overflow-x-hidden bg-[#E8E5E2] text-[#0B0909]">
        <Sidebar
          collapsed={collapsed}
          onToggle={() =>
            setCollapsed((value) => !value)
          }
        />
  
        <MobileHeader />
  
        <motion.div
          animate={{
            paddingLeft: contentOffset,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="hidden min-h-screen md:block"
        >
          <DesktopHeader collapsed={collapsed} />
  
          <main className="px-7 pb-24 pt-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key="dashboard"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
              >
                <DashboardContent />
              </motion.div>
            </AnimatePresence>
          </main>
        </motion.div>
  
        <div className="md:hidden">
          <main className="px-5 pb-20 pt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key="mobile-dashboard"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease,
                }}
              >
                <DashboardContent />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    );
  }
  
  export default Dashboard;