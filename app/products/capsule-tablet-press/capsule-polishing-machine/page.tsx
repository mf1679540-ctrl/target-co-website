import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CapsulePolishingMachinePage() {
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
          <span className="text-primary font-medium">Capsule Polishing Machine</span>
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
              Quality Enhancement
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Capsule Polishing Machine</h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced capsule polishing and sorting machine for removing dust, improving appearance, and ensuring
              consistent quality of filled capsules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">Get Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+201044114633">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/capsule-polishing-machine-hero.jpg"
              alt="Capsule Polishing Machine"
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
              <CardTitle>Gentle Polishing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Soft brushing system that removes dust without damaging capsules</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Automatic Sorting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Separates defective capsules and foreign particles</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Dust Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Integrated vacuum system for dust removal and containment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>High Throughput</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Processes up to 500,000 capsules per hour efficiently</p>
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
                  <CardTitle>CPM-500 Model</CardTitle>
                  <CardDescription>High-capacity capsule polishing machine</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Capacity:</p>
                      <p className="text-gray-600">500,000 caps/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold">Capsule Sizes:</p>
                      <p className="text-gray-600">00, 0, 1, 2, 3, 4, 5</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sorting Accuracy:</p>
                      <p className="text-gray-600">99.5%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Dust Removal:</p>
                      <p className="text-gray-600">99% efficiency</p>
                    </div>
                    <div>
                      <p className="font-semibold">Power:</p>
                      <p className="text-gray-600">3.5 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-gray-600">850 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CPM-250 Model</CardTitle>
                  <CardDescription>Medium-capacity capsule polishing machine</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Capacity:</p>
                      <p className="text-gray-600">250,000 caps/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold">Capsule Sizes:</p>
                      <p className="text-gray-600">00, 0, 1, 2, 3, 4</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sorting Accuracy:</p>
                      <p className="text-gray-600">99%</p>
                    </div>
                    <div>
                      <p className="font-semibold">Dust Removal:</p>
                      <p className="text-gray-600">98% efficiency</p>
                    </div>
                    <div>
                      <p className="font-semibold">Power:</p>
                      <p className="text-gray-600">2.5 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-gray-600">650 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Applications</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Post-Filling Processing</h4>
                  <p className="text-gray-600">Cleaning and polishing after capsule filling operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Quality Control</h4>
                  <p className="text-gray-600">Removing defective and damaged capsules</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Dust Removal</h4>
                  <p className="text-gray-600">Eliminating powder residue and contamination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Final Inspection</h4>
                  <p className="text-gray-600">Pre-packaging quality assurance and sorting</p>
                </div>
              </div>
            </div>

            <Image
              src="/capsule-polishing-process.jpg"
              alt="Capsule Polishing Process"
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
                    href="tel:+201044114633"
                    className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    +20 104 411 4633
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
