import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, ArrowRight, TestTube, Package, Droplets } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TubeFillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">Tube Filling Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Tube Filling <span className="text-teal-600">Equipment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Professional tube filling and sealing solutions for pharmaceutical, cosmetic, and food industries.
              Complete production lines for all your tube packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
                  <Phone className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}

      {/* Main Machine */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tube Filling Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              Advanced tube filling and sealing equipment designed for reliable, high-quality production.
            </p>
          </div>

          <Card className="overflow-hidden max-w-4xl mx-auto mb-12">
            <div className="relative h-96">
              <Image src="/images/homogenizer-system.jpg" alt="Homogenizer System" fill className="object-cover" />
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Advanced Homogenizer System</CardTitle>
              <p className="text-gray-600 text-lg">
                Complete homogenization solution for pharmaceutical and cosmetic products
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TestTube className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Superior Mixing</h3>
                  <p className="text-sm text-gray-600">High-shear homogenization for uniform product consistency</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Scale Production</h3>
                  <p className="text-sm text-gray-600">From laboratory to industrial scale processing</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Droplets className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Versatile Applications</h3>
                  <p className="text-sm text-gray-600">Ideal for creams, ointments, emulsions, and gels</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Advanced homogenization technology</li>
                    <li>• Multiple vessel configurations</li>
                    <li>• Precise temperature control</li>
                    <li>• Automated lifting systems</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Hygienic design standards</li>
                    <li>• Easy cleaning and maintenance</li>
                    <li>• Scalable production capacity</li>
                    <li>• Advanced process control</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden max-w-4xl mx-auto mb-12">
            <div className="relative h-96">
              <Image
                src="/images/high-speed-tube-filling.jpg"
                alt="High-Speed Tube Filling Machine"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">High-Speed Tube Filling Machine</CardTitle>
              <p className="text-gray-600 text-lg">Advanced high-throughput tube filling and sealing system</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TestTube className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">High-Speed Operation</h3>
                  <p className="text-sm text-gray-600">Superior production rates for large-scale manufacturing</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Product Capability</h3>
                  <p className="text-sm text-gray-600">Handles various tube sizes and product formulations</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Droplets className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Precision Filling</h3>
                  <p className="text-sm text-gray-600">Accurate dosing with minimal product waste</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Multiple filling heads for high throughput</li>
                    <li>• Advanced control system</li>
                    <li>• Automatic tube handling</li>
                    <li>• Integrated quality control</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Flexible tube size changeover</li>
                    <li>• Pharmaceutical-grade construction</li>
                    <li>• Easy operation and maintenance</li>
                    <li>• Comprehensive safety features</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="relative h-96">
              <Image
                src="/images/tube-filling-machine-1.jpeg"
                alt="Tube Filling & Sealing Machine"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Standard Tube Filling & Sealing Machine</CardTitle>
              <p className="text-gray-600 text-lg">Reliable tube packaging solution</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TestTube className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Versatile Applications</h3>
                  <p className="text-sm text-gray-600">Suitable for creams, gels, ointments, and paste products</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Multiple Tube Types</h3>
                  <p className="text-sm text-gray-600">Compatible with plastic, aluminum, and composite tubes</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Droplets className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Precise Filling</h3>
                  <p className="text-sm text-gray-600">Accurate dosing and clean sealing for quality products</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automatic tube feeding and positioning</li>
                    <li>• Precise volume control system</li>
                    <li>• Heat sealing technology</li>
                    <li>• User-friendly control panel</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Hygienic stainless steel construction</li>
                    <li>• Easy changeover between products</li>
                    <li>• Quality inspection systems</li>
                    <li>• Compact footprint design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Tube Packaging?</h2>
          <p className="text-xl mb-8 text-teal-100 text-pretty">
            Contact Target Co. today for expert consultation on tube filling solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/quote" className="flex items-center gap-2">
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <a href="tel:+201016400933" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +20 101 640 0933
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <a href="mailto:targetco2000@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
