import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

const mobileLinks = [
  { label: "Overview", path: "/dashboard" },
  { label: "Leads", path: "/dashboard/leads" },
  { label: "Pipeline", path: "/dashboard/pipeline" },
  { label: "Outreach", path: "/dashboard/outreach" },
];

export function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#D2CFCC]/70 bg-[#E8E5E2]/90 backdrop-blur-xl">
      <div className="flex min-h-[74px] items-center justify-between gap-6 px-5 sm:px-8 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#6F6B6B]">
            Internal
          </span>

          <span className="hidden h-4 w-px bg-[#C4C0BD] sm:block" />

          <span className="hidden text-sm tracking-[-0.02em] sm:block">
            Operations
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease }}
          className="flex items-center gap-5"
        >
          <div className="hidden items-center gap-4 lg:flex">
            {mobileLinks.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative overflow-hidden py-1 text-[10px] uppercase tracking-[0.15em] text-[#6F6B6B]"
              >
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  {item.label}
                </span>

                <span className="absolute left-0 top-full block text-[#0B0909] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  {item.label}
                </span>
              </Link>
            ))}

            <span className="h-4 w-px bg-[#C4C0BD]" />
          </div>

          <Link
            to="/"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#0B0909]"
          >
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1">
              Public site
            </span>

            <motion.span
              animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↗
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </header>
  );
}