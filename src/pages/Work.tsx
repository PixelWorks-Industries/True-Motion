export function Work() {
  return (
    <section
      data-nav-theme="light"
      className="relative flex min-h-[100svh] items-center justify-center bg-[#EEEEEE] text-[#0B0909]"
    >
      <div className="container-grid w-full">
        <div className="flex w-full flex-col items-center justify-center text-center">


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
    </section>
  );
}