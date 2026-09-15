import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";

import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

const disciplines = [
  "Web",
  "Identity",
  "Motion",
  "Video",
  "Direction",
];

type RevealLineProps = {
  children: string;
  delay: number;
  inView: boolean;
  reduced: boolean;
  index: number;
};

function RevealLine({
  children,
  delay,
  inView,
  reduced,
  index,
}: RevealLineProps) {
  const offsets = [
    { x: -32, y: 70 },
    { x: 28, y: 80 },
    { x: -18, y: 65 },
    { x: 20, y: 75 },
  ];

  const offset = offsets[index];

  return (
    <span className="block py-[0.035em]">
      <span className="block overflow-hidden">
        <motion.span
          className="block will-change-transform"
          initial={{
            x: reduced ? 0 : offset.x,
            y: reduced ? "0%" : `${offset.y}%`,
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  x: 0,
                  y: "0%",
                  opacity: 1,
                }
              : {
                  x: reduced ? 0 : offset.x,
                  y: reduced ? "0%" : `${offset.y}%`,
                  opacity: 0,
                }
          }
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration: 1.05,
                  delay,
                  ease: [0.12, 0.8, 0.2, 1],
                }
          }
        >
          {children}
        </motion.span>
      </span>
    </span>
  );
}

type SmallLabelProps = {
  children: ReactNode;
  delay?: number;
  inView: boolean;
  reduced: boolean;
  className?: string;
};

function SmallLabel({
  children,
  delay = 0,
  inView,
  reduced,
  className = "",
}: SmallLabelProps) {
  return (
    <motion.span
      className={`block text-[10px] uppercase tracking-[0.16em] ${className}`}
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 8,
            }
      }
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }
      }
    >
      {children}
    </motion.span>
  );
}

type DisciplineRowProps = {
  item: string;
  index: number;
  inView: boolean;
  reduced: boolean;
};

function DisciplineRow({
  item,
  index,
  inView,
  reduced,
}: DisciplineRowProps) {
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      animate={
        inView
          ? {
              opacity: 1,
            }
          : {
              opacity: 0,
            }
      }
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.6,
              delay: 0.55 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="group"
    >
      <div className="relative overflow-hidden border-b border-white/20 py-2.5">
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{
            x: "-101%",
          }}
          whileHover={
            reduced
              ? undefined
              : {
                  x: "101%",
                }
          }
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-center justify-between">
          <motion.span
            className="text-sm tracking-[-0.02em] text-white"
            whileHover={
              reduced
                ? undefined
                : {
                    x: 8,
                    color: "#0B0909",
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item}
          </motion.span>

          <motion.span
            className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/45"
            whileHover={
              reduced
                ? undefined
                : {
                    x: -4,
                    color: "#0B0909",
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            0{index + 1}
            <span aria-hidden="true">↗</span>
          </motion.span>
        </div>
      </div>
    </motion.li>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.05,
  });

  const reduced = useReducedMotion();

  const featured =
    projects.find((project) => project.featured) ?? projects[0];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 28,
    mass: 0.3,
  });

  const headlineY = useTransform(
    progress,
    [0, 1],
    ["0%", "-9%"]
  );

  const headlineOpacity = useTransform(
    progress,
    [0, 0.8, 1],
    [1, 1, 0]
  );

  const backgroundWordX = useTransform(
    progress,
    [0, 1],
    ["0%", "-12%"]
  );

  const backgroundWordOpacity = useTransform(
    progress,
    [0, 0.8, 1],
    [0.045, 0.045, 0]
  );

  const serviceY = useTransform(
    progress,
    [0, 1],
    ["0%", "-5%"]
  );

  const ctaY = useTransform(
    progress,
    [0, 1],
    ["0%", "7%"]
  );

  const ctaOpacity = useTransform(
    progress,
    [0, 0.82, 1],
    [1, 1, 0]
  );

  const progressWidth = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  const safeHeadlineY = reduced ? undefined : headlineY;
  const safeHeadlineOpacity = reduced
    ? undefined
    : headlineOpacity;

  const safeBackgroundWordX = reduced
    ? undefined
    : backgroundWordX;

  const safeBackgroundWordOpacity = reduced
    ? undefined
    : backgroundWordOpacity;

  const safeServiceY = reduced ? undefined : serviceY;
  const safeCtaY = reduced ? undefined : ctaY;

  const safeCtaOpacity = reduced
    ? undefined
    : ctaOpacity;

  const safeProgressWidth = reduced
    ? undefined
    : progressWidth;

  return (
    <section
      ref={heroRef}
      data-nav-theme="light"
      className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-[#0B0909]"
    >
      <div
        ref={inViewRef}
        className="relative h-full w-full overflow-hidden text-white"
      >
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/bg-vid.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/42" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/60" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.3)_100%)]" />
        </div>

        {/* Main content */}
        <motion.div
          style={{
            y: safeHeadlineY,
            opacity: safeHeadlineOpacity,
          }}
          className="
            absolute
            left-5
            right-5
            top-5
            z-10
            sm:left-8
            sm:right-8
            sm:top-8
            md:left-10
            md:right-auto
            md:top-10
            lg:left-14
            lg:top-14
          "
        >
          <SmallLabel
            delay={0.05}
            inView={inView}
            reduced={reduced}
            className="text-white/65"
          >
            Creative digital studio
          </SmallLabel>

          <h1
            className="
              mt-5
              max-w-[8.5ch]
              text-[clamp(2.8rem,5.8vw,6.7rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.065em]
              text-white
              sm:mt-6
              md:mt-7
              lg:mt-9
            "
          >
            <RevealLine
              delay={0.12}
              inView={inView}
              reduced={reduced}
              index={0}
            >
              We make
            </RevealLine>

            <RevealLine
              delay={0.24}
              inView={inView}
              reduced={reduced}
              index={1}
            >
              businesses
            </RevealLine>

            <RevealLine
              delay={0.36}
              inView={inView}
              reduced={reduced}
              index={2}
            >
              look as good
            </RevealLine>

            <RevealLine
              delay={0.48}
              inView={inView}
              reduced={reduced}
              index={3}
            >
              as they work.
            </RevealLine>
          </h1>
        </motion.div>

        {/* Top-right marker */}
        <SmallLabel
          delay={0.2}
          inView={inView}
          reduced={reduced}
          className="
            absolute
            right-5
            top-5
            z-10
            hidden
            text-white/40
            sm:right-8
            sm:top-8
            md:block
            md:right-10
            md:top-10
            lg:right-14
            lg:top-14
          "
        >
          TM / 01
        </SmallLabel>

        {/* CTA */}
        <motion.div
          style={{
            y: safeCtaY,
            opacity: safeCtaOpacity,
          }}
          className="
            absolute
            bottom-5
            left-5
            z-10
            hidden
            sm:bottom-8
            sm:left-8
            md:bottom-10
            md:left-10
            md:block
            lg:bottom-14
            lg:left-14
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
            className="flex flex-wrap items-center gap-4"
          >
            <Button
  to="/contact"
  variant="primary"
  className="!bg-white !text-[#0B0909] hover:!bg-white/90"
>
              <span className="flex items-center gap-2">
                Start a project

                <motion.span
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          x: 5,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  aria-hidden="true"
                >
                  ↗
                </motion.span>
              </span>
            </Button>

            <Link
              to="/work"
              className="group text-sm text-white/85"
            >
              <span className="relative inline-block pb-1">
                Selected work

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    origin-left
                    scale-x-0
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          style={{
            y: safeServiceY,
          }}
          className="
            absolute
            bottom-5
            right-5
            z-10
            w-[270px]
            max-w-[calc(100vw-2.5rem)]
            sm:bottom-8
            sm:right-8
            sm:w-[280px]
            md:bottom-10
            md:right-10
            lg:bottom-14
            lg:right-14
            lg:w-[320px]
          "
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: reduced ? 0 : 0.5,
              delay: 0.45,
            }}
            className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-white/40"
          >
            <span>What we do</span>
            <span>01—05</span>
          </motion.div>

          <ul className="border-t border-white/20">
            {disciplines.map((item, index) => (
              <DisciplineRow
                key={item}
                item={item}
                index={index}
                inView={inView}
                reduced={reduced}
              />
            ))}
          </ul>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="
            absolute
            bottom-7
            left-1/2
            z-10
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-white/35
            xl:flex
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: reduced ? 0 : 0.5,
            delay: 1,
          }}
        >
          <span>Scroll</span>

          {!reduced && (
            <motion.span
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              ↓
            </motion.span>
          )}
        </motion.div>
      </div>
    </section>
  );
}