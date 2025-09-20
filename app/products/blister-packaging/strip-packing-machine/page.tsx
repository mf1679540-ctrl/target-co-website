import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StripPackingMachineDetail() {
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
              Back to Blister & Packaging
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Strip Packing Machine</h1>
              <p className="text-gray-600 mt-2">Compact strip packing with aluminum-aluminum packaging</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-4">Alu-Alu Packaging</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">High Barrier Strip Packaging</h2>
              <p className="text-gray-600 mb-6">
                Our strip packing machine provides superior protection for moisture and light-sensitive pharmaceutical
                products. Features aluminum-aluminum packaging with speeds up to 40,000 strips per hour and integrated
                embossing system.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">40,000 strips/hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Alu-Alu Packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Embossing System</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Perforation Cutting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/pharmaceutical-packaging-machine.png"
                alt="Strip Packing Machine"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Production Speed</h4>
                  <p className="text-gray-600">20,000 - 40,000 strips/hour</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Strip Width</h4>
                  <p className="text-gray-600">50-150mm</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tablet Size</h4>
                  <p className="text-gray-600">4-20mm diameter</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Foil Thickness</h4>
                  <p className="text-gray-600">20-45 micron</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Power Consumption</h4>
                  <p className="text-gray-600">5 kW</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dimensions</h4>
                  <p className="text-gray-600">2800 x 800 x 1500 mm</p>
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
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Alu-Alu Packaging</h4>
                    <p className="text-sm text-gray-600">Superior barrier protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Embossing System</h4>
                    <p className="text-sm text-gray-600">Precise cavity formation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Perforation Cutting</h4>
                    <p className="text-sm text-gray-600">Easy strip separation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Batch Coding</h4>
                    <p className="text-sm text-gray-600">Integrated printing system</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Applications & Industries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg mb-4 inline-block">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Moisture Sensitive Tablets</h4>
                <p className="text-sm text-gray-600">High barrier protection for sensitive products</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Light Sensitive Products</h4>
                <p className="text-sm text-gray-600">Complete light protection packaging</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">High Barrier Packaging</h4>
                <p className="text-sm text-gray-600">Extended shelf life products</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Get Your Strip Packing Machine Quote</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Contact our packaging specialists for detailed specifications, pricing, and installation support for your
              strip packing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/quote" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Get Quote
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="tel:+201016400933" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +20 101 640 0933
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
