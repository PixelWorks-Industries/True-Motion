import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";

import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";

const ease = [0.16, 1, 0.3, 1] as const;

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({
  children,
}: DashboardShellProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 82 : 270;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#E8E5E2] text-[#0B0909]">
      <DashboardSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((value) => !value)}
      />

      <motion.div
        animate={{
          paddingLeft: sidebarWidth,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="min-h-screen"
      >
        <DashboardTopbar collapsed={collapsed} />

        <main className="px-5 pb-24 pt-5 sm:px-8 md:px-10 lg:px-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{
                opacity: 0,
                y: 55,
                scale: 0.985,
                filter: "blur(16px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.99,
                filter: "blur(12px)",
              }}
              transition={{
                duration: 0.85,
                ease,
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
}