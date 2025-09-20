import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, Settings, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CapsuleFillingMachinePage() {
  const applications = [
    "Pharmaceutical capsules",
    "Nutraceuticals",
    "Herbal products",
    "Probiotics",
    "Vitamin supplements",
    "Protein powders",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <Link href="/products/capsule-tablet-press" className="hover:text-primary">
            Capsule Filling & Tablet Press
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">Capsule Filling Machine</span>
        </nav>

        <Link
          href="/products/capsule-tablet-press"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Capsule Filling & Tablet Press
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Precision Filling
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Capsule Filling Machine</h1>
            <p className="text-xl text-gray-600 mb-8">
              Automated capsule filling machine for precise dosing and high-speed production of pharmaceutical capsules
              with consistent quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">Get Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+201016400933">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/capsule-filling-machine-hero.jpg"
              alt="Capsule Filling Machine"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Settings className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Automatic Operation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Fully automated capsule separation, filling, and joining process</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>High Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Precise dosing with ±2% weight variation accuracy</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Dust Containment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Enclosed design with dust extraction system</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Easy Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Quick disassembly for thorough cleaning and maintenance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>CFM-400 Model</CardTitle>
                  <CardDescription>High-capacity automatic capsule filler</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Output:</p>
                      <p className="text-gray-600">400,000 caps/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold">Capsule Sizes:</p>
                      <p className="text-gray-600">00, 0, 1, 2, 3, 4, 5</p>
                    </div>
                    <div>
                      <p className="font-semibold">Fill Weight:</p>
                      <p className="text-gray-600">5-1500mg</p>
                    </div>
                    <div>
                      <p className="font-semibold">Accuracy:</p>
                      <p className="text-gray-600">±2%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Power:</p>
                      <p className="text-gray-600">7.5 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-gray-600">2,200 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CFM-200 Model</CardTitle>
                  <CardDescription>Medium-capacity automatic capsule filler</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Output:</p>
                      <p className="text-gray-600">200,000 caps/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold">Capsule Sizes:</p>
                      <p className="text-gray-600">00, 0, 1, 2, 3, 4</p>
                    </div>
                    <div>
                      <p className="font-semibold">Fill Weight:</p>
                      <p className="text-gray-600">10-1200mg</p>
                    </div>
                    <div>
                      <p className="font-semibold">Accuracy:</p>
                      <p className="text-gray-600">±2.5%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Power:</p>
                      <p className="text-gray-600">5.5 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-gray-600">1,800 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Applications</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {applications.map((app, index) => (
                <Badge key={index} variant="secondary" className="justify-center py-2">
                  {app}
                </Badge>
              ))}
            </div>

            <Image
              src="/capsule-filling-process.jpg"
              alt="Capsule Filling Process"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contact Target Co. for detailed specifications and pricing information
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/quote">Request Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="tel:+201016400933"
                    className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    +20 101 640 0933
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="mailto:info@targetco-egypt.com"
                    className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
