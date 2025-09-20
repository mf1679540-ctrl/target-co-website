import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LaboratoryBlisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products/blister-packaging"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blister Packaging
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Laboratory Blister Packing Machine</h1>
              <p className="text-gray-600 mt-2">
                Compact laboratory-scale blister packing for R&D and small batch production
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Product Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative h-96 lg:h-full">
              <Image
                src="/laboratory-blister-packing-machine-pharmaceutical.jpg"
                alt="Laboratory Blister Packing Machine"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Laboratory Scale</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Laboratory Blister Machine</h2>
              <p className="text-gray-600 mb-6">
                Compact laboratory-scale blister packing machine designed for R&D, small batch production, and
                pharmaceutical development work with precise control and easy operation. Perfect for research
                facilities, universities, and small-scale production needs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">10-50 blisters/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Compact Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Easy Operation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">R&D Friendly</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/quote">Get Quote</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Production Speed</h4>
                  <p className="text-gray-600">10-50 blisters/minute</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Forming Area</h4>
                  <p className="text-gray-600">Small batch compatible, adjustable</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Material Compatibility</h4>
                  <p className="text-gray-600">PVC, PVDC, Aluminum foils</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Control System</h4>
                  <p className="text-gray-600">Manual/Semi-automatic operation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Power Consumption</h4>
                  <p className="text-gray-600">5-8 kW (energy efficient)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Footprint</h4>
                  <p className="text-gray-600">Compact laboratory size</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Laboratory Scale Design</h4>
                    <p className="text-gray-600 text-sm">Compact size perfect for research environments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Precise Control</h4>
                    <p className="text-gray-600 text-sm">Accurate temperature and pressure control</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Mould Change</h4>
                    <p className="text-gray-600 text-sm">Quick changeover for different product sizes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">R&D Friendly</h4>
                    <p className="text-gray-600 text-sm">Ideal for product development and testing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Perfect for research, development, and small-scale production</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg mb-4 inline-block">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">R&D Testing</h4>
                <p className="text-gray-600 text-sm">Product development and formulation testing</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Small Batch Production</h4>
                <p className="text-gray-600 text-sm">Limited production runs and specialty products</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Product Development</h4>
                <p className="text-gray-600 text-sm">New product trials and packaging optimization</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-orange-100 rounded-lg mb-4 inline-block">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Training Purposes</h4>
                <p className="text-gray-600 text-sm">Educational and training applications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Benefits for Research & Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective Testing</h4>
                    <p className="text-gray-600 text-sm">Minimize material waste during development phases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Operation</h4>
                    <p className="text-gray-600 text-sm">Easy adjustment for different product requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Setup</h4>
                    <p className="text-gray-600 text-sm">Minimal installation and setup time</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Educational Value</h4>
                    <p className="text-gray-600 text-sm">Perfect for pharmaceutical engineering programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Control</h4>
                    <p className="text-gray-600 text-sm">Consistent results for reliable testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Space Efficient</h4>
                    <p className="text-gray-600 text-sm">Fits in standard laboratory environments</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Perfect for Your Research Needs</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Start your pharmaceutical packaging development with our reliable laboratory-scale blister machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="tel:+201044114633" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +20 104 411 4633
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="mailto:info@targetco-egypt.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
