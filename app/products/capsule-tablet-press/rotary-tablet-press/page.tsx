import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RotaryTabletPressPage() {
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
          <span className="text-primary font-medium">Rotary Tablet Press</span>
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
              High-Speed Production
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Rotary Tablet Press</h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced rotary tablet press for high-volume pharmaceutical tablet production with precision compression
              and consistent quality output.
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
              src="/rotary-tablet-press-hero.jpg"
              alt="Rotary Tablet Press Machine"
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
              <CardTitle>Multi-Station Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Multiple compression stations for high-speed continuous production</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>High Output</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Production capacity up to 500,000 tablets per hour</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>GMP Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Meets all pharmaceutical manufacturing standards</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Quick Changeover</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Fast tooling changes for different tablet sizes</p>
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
                  <CardTitle>RTP-45 Model</CardTitle>
                  <CardDescription>High-capacity rotary tablet press</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Stations:</p>
                      <p className="text-gray-600">45 stations</p>
                    </div>
                    <div>
                      <p className="font-semibold">Max Output:</p>
                      <p className="text-gray-600">500,000 tablets/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold">Tablet Diameter:</p>
                      <p className="text-gray-600">5-25mm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Max Pressure:</p>
                      <p className="text-gray-600">100 kN</p>
                    </div>
                    <div>
                      <p className="font-semibold">Power:</p>
                      <p className="text-gray-600">15 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-gray-600">3,500 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>RTP-27 Model</CardTitle>
                  <CardDescription>Medium-capacity rotary tablet press</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Stations:</p>
                      <p className="text-gray-600">27 stations</p>
                    </div>
                    <div>
                      <p className="font-semibold">Max Output:</p>
                      <p className="text-gray-600">300,000 tablets/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold">Tablet Diameter:</p>
                      <p className="text-gray-600">5-20mm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Max Pressure:</p>
                      <p className="text-gray-600">80 kN</p>
                    </div>
                    <div>
                      <p className="font-semibold">Power:</p>
                      <p className="text-gray-600">11 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-gray-600">2,800 kg</p>
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
                  <h4 className="font-semibold">Pharmaceutical Tablets</h4>
                  <p className="text-gray-600">Production of various pharmaceutical tablets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Nutraceutical Products</h4>
                  <p className="text-gray-600">Vitamin and supplement tablet manufacturing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Effervescent Tablets</h4>
                  <p className="text-gray-600">Specialized compression for effervescent formulations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Chewable Tablets</h4>
                  <p className="text-gray-600">Production of chewable pharmaceutical products</p>
                </div>
              </div>
            </div>

            <Image
              src="/rotary-tablet-press-process.jpg"
              alt="Rotary Tablet Press Process"
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
