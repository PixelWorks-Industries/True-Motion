import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

const navigation = [
  { number: "01", label: "Overview", path: "/dashboard" },
  { number: "02", label: "Leads", path: "/dashboard/leads" },
  { number: "03", label: "Pipeline", path: "/dashboard/pipeline" },
  { number: "04", label: "Outreach", path: "/dashboard/outreach" },
  { number: "05", label: "Team", path: "/dashboard/team" },
  { number: "06", label: "Projects", path: "/dashboard/projects" },
];

export function DashboardSidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] bg-[#151313] text-[#EEEEEE] md:block">
      <div className="relative flex h-full flex-col overflow-hidden">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease }}
          className="absolute inset-x-0 top-0 h-[2px] origin-top bg-[#EEEEEE]"
        />

        <div className="px-8 pb-10 pt-10">
          <Link to="/dashboard" className="group block">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease }}
                className="text-[17px] font-medium tracking-[-0.055em]"
              >
                True Motion
              </motion.div>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
              className="mt-3 h-px bg-[#6F6B6B]"
            />
          </Link>
        </div>

        <div className="px-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="px-3 pb-5 text-[10px] uppercase tracking-[0.18em] text-[#8D8888]"
          >
            Operations
          </motion.div>

          <nav className="space-y-1">
            {navigation.map((item, index) => {
              const active = isActive(item.path);

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.72,
                    delay: 0.2 + index * 0.055,
                    ease,
                  }}
                >
                  <Link
                    to={item.path}
                    className="group relative block overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: active
                          ? "#EEEEEE"
                          : "rgba(238,238,238,0)",
                      }}
                      transition={{ duration: 0.45, ease }}
                      className="relative px-4 py-4"
                    >
                      <motion.div
                        animate={{
                          x: active ? 8 : 0,
                          color: active ? "#0B0909" : "#EEEEEE",
                        }}
                        whileHover={{
                          x: active ? 10 : 8,
                        }}
                        transition={{ duration: 0.4, ease }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[15px] tracking-[-0.025em]">
                          {item.label}
                        </span>

                        <span className="text-[9px] tracking-[0.12em] opacity-40">
                          {item.number}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: active ? 1 : 0,
                        }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.45, ease }}
                        className="absolute inset-y-0 left-0 w-[3px] origin-left bg-[#0B0909]"
                      />
                    </motion.div>

                    {!active && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.45, ease }}
                        className="absolute bottom-0 left-4 right-4 h-px origin-left bg-[#4F4A4A]"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.62,
            ease,
          }}
          className="mt-auto px-8 pb-8"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-[#6F6B6B]">
                Internal
              </div>

              <div className="mt-2 text-[13px] tracking-[-0.02em] text-[#B5B0B0]">
                Studio operations
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 45, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2.5 w-2.5 bg-[#EEEEEE]"
            />
          </div>
        </motion.div>
      </div>
    </aside>
  );
}