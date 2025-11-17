import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'Homeowner',
    content: 'Outstanding service from start to finish. The CCTV system they installed gives us complete peace of mind. Highly professional team.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Business Owner',
    content: 'We needed a comprehensive security solution for our warehouse. SecureTech delivered beyond expectations with their electric fencing and alarm system.',
    rating: 5
  },
  {
    name: 'David Brown',
    role: 'Property Manager',
    content: 'The aluminium gates they fabricated are not only secure but beautifully designed. Their craftsmanship is exceptional.',
    rating: 5
  },
  {
    name: 'Lisa Martinez',
    role: 'Residential Client',
    content: 'Fast, reliable, and professional. The intercom system works flawlessly and integrates perfectly with our existing security setup.',
    rating: 5
  },
  {
    name: 'James Anderson',
    role: 'Commercial Client',
    content: 'We have used SecureTech for multiple projects. Their expertise in security systems is unmatched. Highly recommend!',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'Homeowner',
    content: 'Professional installation of our alarm system and electric fence. The team was courteous and completed the work on time.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
