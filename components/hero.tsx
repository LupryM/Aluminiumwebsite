import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: "url('/gm.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label="Mobile hero background"
      />

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/g.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label="Desktop hero background"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-20 sm:py-24 md:pt-0">
          <h1 className="mb-4 text-balance text-3xl font-black uppercase leading-[1.1] tracking-tight text-white drop-shadow-2xl sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Your Comprehensive Partner
            <br />
            <span className="text-accent">
              For Automated Security & Custom Aluminum Solutions
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white drop-shadow-lg sm:mb-10 sm:text-lg md:text-xl">
            Professional CCTV installation, electric fencing, alarm systems,
            intercom solutions, and custom aluminum fabrication across South
            Africa.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground shadow-xl hover:bg-accent/90 sm:w-auto"
              asChild
            >
              <a href="#quote">Get A Free Quote</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
