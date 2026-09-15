import { useState } from "react";
import { motion } from "motion/react";

import { services } from "@/data/services";

import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section data-nav-theme="light" className="section-y border-t border-border-custom bg-[#EEEEEE] text-foreground">
      <div className="container-grid">
        <SectionHeader
          number="02"
          label="Practice"
          title="What we make"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
              Web / Identity / Motion
            </span>
          </div>

          <div className="md:col-span-9">
            <p className="max-w-[560px] text-sm leading-[1.65] text-muted">
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border-custom md:mt-20">
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              index={index}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
  open,
  onToggle,
}: {
  service: (typeof services)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
  });

  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: reduced ? 0 : 24,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: reduced ? 0 : 24,
            }
      }
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.7,
              delay: index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      className="border-b border-border-custom"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left md:py-8"
      >
        {/* Number */}
        <span className="col-span-2 text-label text-muted md:col-span-1">
          {service.number}
        </span>

        {/* Service name */}
        <span className="col-span-5 overflow-hidden md:col-span-4">
          <motion.span
            animate={{
              x: open ? 8 : 0,
            }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
            className="block text-[clamp(1.35rem,2.6vw,1.85rem)] font-medium tracking-[-0.03em] text-foreground"
          >
            {service.name}
          </motion.span>
        </span>

        {/* Service preview */}
        <span className="col-span-5 md:col-span-7">
          <motion.span
            initial={false}
            animate={{
              opacity: open ? 0 : 0.55,
              x: open ? 10 : 0,
            }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
            className="block truncate text-sm text-muted"
          >
            {service.items.join("  ·  ")}
          </motion.span>
        </span>
      </button>

      {/* Expanded content */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={
          reduced
            ? { duration: 0 }
            : {
                height: {
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.3,
                },
              }
        }
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 gap-8 pb-9 pt-2 md:grid-cols-12 md:gap-8 md:pb-11">
          {/* Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduced ? 0 : 16,
            }}
            animate={
              open
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: reduced ? 0 : 16,
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.5,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
            className="md:col-span-5 md:col-start-2"
          >
            <p className="text-sm leading-[1.65] text-muted">
              {service.description}
            </p>
          </motion.div>

          {/* Service details */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="border-t border-border-custom">
              {service.items.map((item, itemIndex) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: reduced ? 0 : 16,
                  }}
                  animate={
                    open
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: reduced ? 0 : 16,
                        }
                  }
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          duration: 0.4,
                          delay: 0.1 + itemIndex * 0.045,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                  className="flex items-center justify-between border-b border-border-custom py-2.5"
                >
                  <span className="text-sm text-foreground/75">
                    {item}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-muted/50">
                    0{itemIndex + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}