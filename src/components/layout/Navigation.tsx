import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import { Wordmark } from "@/components/ui/Wordmark";
import { MobileMenu } from "./MobileMenu";

export const navLinks = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
];

const ease = [0.16, 1, 0.3, 1] as const;
const revealEase = [0.12, 0.8, 0.2, 1] as const;

type NavTheme = "light" | "dark";

export function Navigation() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<NavTheme>("dark");

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const location = useLocation();

  /*
   * Navbar visibility
   * Hidden at the top.
   * Hidden while scrolling down.
   * Appears while scrolling back up.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const previousY = lastScrollY.current;
        const delta = currentY - previousY;

        lastScrollY.current = currentY;

        if (currentY <= 24) {
          setVisible(false);
        } else if (delta > 2) {
          setVisible(false);
        } else if (delta < -2) {
          setVisible(true);
        }

        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Navbar theme
   * Reads the section currently sitting underneath the navbar.
   *
   * Sections should have:
   *
   * data-nav-theme="light"
   *
   * or:
   *
   * data-nav-theme="dark"
   */
  useEffect(() => {
    let frame = 0;

    const updateTheme = () => {
      cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>("[data-nav-theme]")
        );

        if (!sections.length) return;

        const probeY = 72;
        let nextTheme: NavTheme | null = null;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= probeY && rect.bottom > probeY) {
            const theme = section.dataset.navTheme;

            if (theme === "light" || theme === "dark") {
              nextTheme = theme;
              break;
            }
          }
        }

        if (nextTheme) {
          setNavTheme(nextTheme);
        }
      });
    };

    updateTheme();

    window.addEventListener("scroll", updateTheme, {
      passive: true,
    });

    window.addEventListener("resize", updateTheme);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, [location.pathname]);

  /*
   * Close mobile menu on route change
   */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /*
   * Prevent background scrolling while mobile menu is open
   */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * Fallback for internal pages that do not have
   * homepage section theme attributes.
   */
  useEffect(() => {
    if (location.pathname !== "/") {
      setNavTheme("light");
    }
  }, [location.pathname]);

  const dark = navTheme === "dark";

  const navBackground = dark ? "#0B0909" : "#EEEEEE";
  const navForeground = dark ? "#EEEEEE" : "#0B0909";
  const navBorder = dark
    ? "rgba(238, 238, 238, 0.12)"
    : "#D0CECE";

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  return (
    <>
      <AnimatePresence mode="sync">
        {visible && (
          <motion.header
            initial={{
              opacity: 0,
              y: -28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -28,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="fixed inset-x-0 top-0 z-[100]"
          >
            <motion.nav
              initial={{
                scaleY: 0.82,
                transformOrigin: "top",
                clipPath: "inset(0 0 100% 0)",
              }}
              animate={{
                scaleY: 1,
                clipPath: "inset(0 0 0% 0)",
                backgroundColor: navBackground,
                color: navForeground,
              }}
              exit={{
                scaleY: 0.82,
                clipPath: "inset(0 0 100% 0)",
              }}
              transition={{
                duration: 0.65,
                ease: revealEase,
              }}
              style={{
                borderColor: navBorder,
              }}
              className="relative overflow-hidden rounded-bl-[18px] rounded-br-[18px] border-b"
            >
              <div className="container-grid grid h-[var(--nav-height)] grid-cols-[1fr_auto] items-center md:grid-cols-12">
                {/* Logo */}
                <motion.div
                  initial={{
                    y: 18,
                    opacity: 0,
                    clipPath: "inset(0 100% 0 0)",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    clipPath: "inset(0 0% 0 0)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease,
                    delay: 0.12,
                  }}
                  className="md:col-span-4"
                >
                  <Link
                    to="/"
                    className="group relative inline-flex overflow-hidden"
                  >
                    <motion.div
                      initial={{
                        y: "100%",
                      }}
                      animate={{
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease,
                        delay: 0.14,
                      }}
                    >
                      <Wordmark inverted={dark} />
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.div
                  className="hidden items-center justify-center gap-10 md:col-span-5 md:flex"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.18,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.path}
                      variants={{
                        hidden: {
                          y: 14,
                          opacity: 0,
                          clipPath: "inset(0 0 100% 0)",
                        },
                        show: {
                          y: 0,
                          opacity: 1,
                          clipPath: "inset(0 0 0% 0)",
                          transition: {
                            duration: 0.5,
                            ease,
                          },
                        },
                      }}
                    >
                      <Link
                        to={link.path}
                        className={`group relative inline-flex overflow-hidden pb-1 text-nav ${
                          isActive(link.path)
                            ? "opacity-100"
                            : "opacity-50 hover:opacity-100"
                        }`}
                      >
                        <span className="relative transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                          {link.label}
                        </span>

                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                        >
                          {link.label}
                        </span>

                        <span
                          className={`absolute bottom-0 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive(link.path)
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{
                    x: 18,
                    opacity: 0,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: revealEase,
                    delay: 0.34,
                  }}
                  className="hidden items-center justify-end md:col-span-3 md:flex"
                >
                  <Link
                    to="/contact"
                    className={`group relative inline-flex items-center gap-2 overflow-hidden pb-1 text-nav ${
                      location.pathname === "/contact"
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <span className="relative transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                      Contact
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                    >
                      Contact
                    </span>

                    <motion.span
                      aria-hidden="true"
                      whileHover={{
                        x: 3,
                      }}
                      transition={{
                        duration: 0.3,
                        ease,
                      }}
                    >
                      ↗
                    </motion.span>

                    <span
                      className={`absolute bottom-0 left-0 h-px w-full origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        location.pathname === "/contact"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                  type="button"
                  initial={{
                    y: 12,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease,
                    delay: 0.2,
                  }}
                  className="justify-self-end text-nav uppercase tracking-[0.08em] md:hidden"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                >
                  <span className="relative inline-flex overflow-hidden">
                    <span>Menu</span>
                  </span>
                </motion.button>
              </div>
            </motion.nav>
          </motion.header>
        )}
      </AnimatePresence>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}