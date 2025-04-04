import Link from "next/link"
import Image from "next/image"
import { Building2, Phone, Mail, Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { HomeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">BuildEstate</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#construction" className="text-sm font-medium hover:text-primary">
              Construction
            </Link>
            <Link href="#properties" className="text-sm font-medium hover:text-primary">
              Properties
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Building Dreams, Creating Homes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your trusted partner for construction services and real estate solutions. Quality craftsmanship and
                    exceptional properties.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#construction">Our Services</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#properties">View Properties</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width={550}
                  height={550}
                  alt="Modern building with architectural design"
                  className="rounded-lg object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="construction" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Construction Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Expert Construction Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From residential to commercial projects, we deliver quality construction with attention to detail and
                  commitment to excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Construction site with workers and equipment"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                loading="eager"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Residential Construction</h3>
                      <p className="text-muted-foreground">
                        Custom homes, renovations, and additions tailored to your vision and lifestyle.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Commercial Construction</h3>
                      <p className="text-muted-foreground">
                        Office buildings, retail spaces, and industrial facilities built to the highest standards.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Renovation & Remodeling</h3>
                      <p className="text-muted-foreground">
                        Transform existing spaces with modern designs and quality craftsmanship.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-start">
                  <Button asChild>
                    <Link href="#contact" className="flex items-center gap-2">
                      Request a Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Construction Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We follow a systematic approach to ensure your project is completed on time, within budget, and to
                  your satisfaction.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Planning & Design</h3>
                <p className="text-center text-muted-foreground">
                  Collaborative planning and detailed design to capture your vision and requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Construction</h3>
                <p className="text-center text-muted-foreground">
                  Expert execution with quality materials and skilled craftsmanship.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Completion & Handover</h3>
                <p className="text-center text-muted-foreground">
                  Final inspections, quality checks, and smooth handover of your completed project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="properties" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Real Estate</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Properties</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our selection of premium properties in prime locations, designed for modern living and
                  investment.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                  <TabsTrigger value="land">Land</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <PropertyCard key={item} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="residential" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <PropertyCard key={item} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="commercial" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2].map((item) => (
                    <PropertyCard key={item} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="land" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PropertyCard />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="#" className="flex items-center gap-2">
                  View All Properties <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Story</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over 20 years of experience in construction and real estate, BuildEstate has established a
                    reputation for excellence and reliability. Our journey began with a simple mission: to create spaces
                    that inspire and endure.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Today, we're proud to be a leading provider of construction services and real estate solutions,
                    known for our commitment to quality, innovation, and customer satisfaction.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#">Our Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Team of construction professionals"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold">20+</div>
                <p className="text-center text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold">500+</div>
                <p className="text-center text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold">300+</div>
                <p className="text-center text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold">50+</div>
                <p className="text-center text-sm text-muted-foreground">Expert Team Members</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experience working with BuildEstate.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    width={60}
                    height={60}
                    alt="Client"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Homeowner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "BuildEstate transformed our vision into reality. Their attention to detail and quality craftsmanship
                  exceeded our expectations. We love our new home!"
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    width={60}
                    height={60}
                    alt="Client"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Business Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The commercial space BuildEstate created for our business is perfect. They understood our needs and
                  delivered a functional, beautiful space on time and within budget."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    width={60}
                    height={60}
                    alt="Client"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Emily Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Real Estate Investor</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've worked with BuildEstate on multiple investment properties. Their expertise in both construction
                  and real estate has been invaluable to my portfolio growth."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to start your project? Contact us today for a consultation.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-muted-foreground">(284) 225-5141</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-muted-foreground">info@edirnegroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Office</h3>
                    <p className="text-muted-foreground">123 Construction Ave, Building City, BC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <Image
                    src="/placeholder.svg"
                    width={500}
                    height={300}
                    alt="Map location"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Send us a Message</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">BuildEstate</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BuildEstate. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PropertyCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src="/placeholder.svg"
          width={400}
          height={200}
          alt="Property"
          className="aspect-[2/1] w-full object-cover"
        />
        <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          For Sale
        </div>
      </div>
      <CardHeader>
        <CardTitle>Modern Family Home</CardTitle>
        <CardDescription>123 Residential St, Cityville</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-4 w-4 text-muted-foreground" />
            <span>4 Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M9 6 A3 3 0 0 1 12 3 A3 3 0 0 1 15 6 A3 3 0 0 1 9 6 z" />
              <path d="M9 18 A3 3 0 0 1 12 15 A3 3 0 0 1 15 18 A3 3 0 0 1 9 18 z" />
              <path d="M3 12 A3 3 0 0 1 6 9 A3 3 0 0 1 9 12 A3 3 0 0 1 3 12 z" />
              <path d="M15 12 A3 3 0 0 1 18 9 A3 3 0 0 1 21 12 A3 3 0 0 1 15 12 z" />
            </svg>
            <span>3 Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>2 Garage</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M3 3v18h18" />
              <path d="m3 15 5-5 2 2 5-5 5 5" />
            </svg>
            <span>2,500 sqft</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold">$450,000</div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

