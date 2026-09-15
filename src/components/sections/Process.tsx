import { motion } from "motion/react";

import { processSteps } from "@/data/process";

import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section data-nav-theme="dark" className="section-y border-t border-white/10 bg-[#0B0909] text-[#EEEEEE]">
      <div className="container-grid">
        <SectionHeader
          number="03"
          label="Method"
          title="How the work moves"
          description="Five stages. No jargon. Direction before production."
          dark
        />

        <div className="border-t border-white/15">
          {processSteps.map((step, index) => (
            <ProcessRow
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: reduced ? 0 : 22,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: reduced ? 0 : 22,
            }
      }
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.7,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="group grid grid-cols-1 gap-4 border-b border-white/15 py-8 md:grid-cols-12 md:gap-8 md:py-10"
    >
      {/* Number */}
      <div className="md:col-span-2">
        <motion.span
          initial={{
            opacity: 0,
            x: reduced ? 0 : -12,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: reduced ? 0 : -12,
                }
          }
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration: 0.5,
                  delay: index * 0.06 + 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }
          }
          className="text-label text-white/35"
        >
          {step.number}
        </motion.span>
      </div>

      {/* Title */}
      <div className="md:col-span-3">
        <div className="overflow-hidden">
          <motion.h3
            initial={{
              opacity: 0,
              y: reduced ? 0 : 28,
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
                    y: reduced ? 0 : 28,
                    filter: reduced ? "blur(0px)" : "blur(8px)",
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.8,
                    delay: index * 0.06 + 0.12,
                    ease: [0.12, 0.8, 0.2, 1],
                  }
            }
            className="text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium tracking-[-0.03em] text-white"
          >
            {step.title}
          </motion.h3>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-6 md:col-start-7">
        <motion.p
          initial={{
            opacity: 0,
            x: reduced ? 0 : 18,
            filter: reduced ? "blur(0px)" : "blur(6px)",
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
                  x: reduced ? 0 : 18,
                  filter: reduced ? "blur(0px)" : "blur(6px)",
                }
          }
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration: 0.7,
                  delay: index * 0.06 + 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }
          }
          className="max-w-[620px] leading-relaxed text-white/45"
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
}