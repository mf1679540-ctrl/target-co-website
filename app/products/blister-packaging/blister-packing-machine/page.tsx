import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlisterPackingMachineDetail() {
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
              <h1 className="text-3xl font-bold text-gray-900">Automatic Blister Packing Machine</h1>
              <p className="text-gray-600 mt-2">High-speed automatic blister packing for pharmaceutical products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-4">High-Speed Packaging</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Blister Packing Technology</h2>
              <p className="text-gray-600 mb-6">
                Our automatic blister packing machine delivers exceptional performance with speeds up to 120,000
                blisters per hour. Designed for pharmaceutical tablets and capsules with PVC/Alu forming technology and
                integrated quality control systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">120,000 blisters/hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">GMP Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Quality Inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Automated Operation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/pharmaceutical-packaging-machine.png"
                alt="Automatic Blister Packing Machine"
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
                  <p className="text-gray-600">60,000 - 120,000 blisters/hour</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Forming Material</h4>
                  <p className="text-gray-600">PVC, PVDC, Cold Form Alu</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sealing Material</h4>
                  <p className="text-gray-600">Aluminum foil 20-25 micron</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tablet Size</h4>
                  <p className="text-gray-600">4-25mm diameter</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Power Consumption</h4>
                  <p className="text-gray-600">15 kW</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dimensions</h4>
                  <p className="text-gray-600">4200 x 1200 x 1800 mm</p>
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
                    <h4 className="font-semibold">PVC/Alu Forming</h4>
                    <p className="text-sm text-gray-600">Advanced thermoforming technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Automatic Feeding</h4>
                    <p className="text-sm text-gray-600">Continuous product feeding system</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Quality Inspection</h4>
                    <p className="text-sm text-gray-600">Integrated vision inspection system</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Batch Coding</h4>
                    <p className="text-sm text-gray-600">Automatic batch and expiry printing</p>
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
                <h4 className="font-semibold mb-2">Tablet Packaging</h4>
                <p className="text-sm text-gray-600">Pharmaceutical tablets, OTC medications, supplements</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Capsule Packaging</h4>
                <p className="text-sm text-gray-600">Hard gelatin capsules, soft gel capsules</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Medical Devices</h4>
                <p className="text-sm text-gray-600">Small medical devices, diagnostic products</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Get Your Blister Packing Machine Quote</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Contact our packaging specialists for detailed specifications, pricing, and installation support for your
              blister packing requirements.
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
