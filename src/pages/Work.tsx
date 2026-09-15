export function Work() {
  return (
    <section
      data-nav-theme="light"
      className="flex min-h-[100svh] items-center justify-center bg-[#EEEEEE] text-[#0B0909]"
    >
      <div className="container-grid w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#6F6B6B]">
              01 / Work
            </span>
          </div>

          <div className="md:col-span-8 md:col-start-4">
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Coming soon.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-[1.7] text-[#6F6B6B]">
              We’re currently building out the work archive. Check back soon
              to see selected projects across web, identity, digital, motion,
              and video.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}