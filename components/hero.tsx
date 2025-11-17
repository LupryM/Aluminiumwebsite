import { Home, Building2, Video, Book as Door, Gauge as Gate } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/security-locks-and-padlocks-on-wooden-surface.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Your Comprehensive Partner<br />
            <span className="text-accent">For Automated Security & Custom Aluminum Solutions</span>
          </h1>
          
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Professional CCTV installation, electric fencing, alarm systems, intercom solutions, and custom aluminum fabrication across South Africa.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="#quote">Get A Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
