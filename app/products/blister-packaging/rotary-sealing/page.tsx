import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RotarySealingPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">
                DPH-270/380DL High-Speed Tropical Aluminum Rotary Blister Machine
              </h1>
              <p className="text-gray-600 mt-2">Advanced rotary sealing technology with tropical aluminum protection</p>
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
                src="https://www.hlyj.net/uploadfile/image/20240312/20240312184529452945.jpg"
                alt="DPH-270/380DL High-Speed Tropical Aluminum Rotary Blister Machine"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Tropical Aluminum Technology</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DPH-270/380DL Series</h2>
              <p className="text-gray-600 mb-6">
                High-speed tropical aluminum blister packing machine with rotary sealing technology. Adds forming and
                sealing process of tropical aluminum for improved moisture proof and light avoiding properties, perfect
                for sensitive pharmaceutical products.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">50-105 punches/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Moisture Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Rotary Sealing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Servo Motor Control</span>
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Punching Frequency</h4>
                  <p className="text-gray-600">50-105 times/min</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Max Forming Depth</h4>
                  <p className="text-gray-600">13mm</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Power Consumption</h4>
                  <p className="text-gray-600">28 kW</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cold Aluminum</h4>
                  <p className="text-gray-600">0.15-0.5×270/380mm</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Maximum Molding Area</h4>
                <p className="text-gray-600">240×260mm (DPH-270DL) / 360×230mm (DPH-380DL)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Dimensions</h4>
                <p className="text-gray-600">6550×980×1750mm (DPH-270DL) / 6550×1030×1750mm (DPH-380DL)</p>
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
                    <h4 className="font-semibold text-gray-900">Tropical Aluminum Sealing</h4>
                    <p className="text-gray-600 text-sm">
                      Enhanced barrier properties for moisture and light protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rotary Sealing Technology</h4>
                    <p className="text-gray-600 text-sm">Advanced sealing mechanism for superior package integrity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Moisture Protection</h4>
                    <p className="text-gray-600 text-sm">Ideal for hygroscopic and sensitive products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Servo Motor Control</h4>
                    <p className="text-gray-600 text-sm">Precise positioning and consistent performance</p>
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
            <CardDescription>Specialized for moisture and light sensitive pharmaceutical products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Moisture Sensitive Products</h4>
                <p className="text-gray-600 text-sm">Perfect for hygroscopic medications and supplements</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Settings className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Light Sensitive Medications</h4>
                <p className="text-gray-600 text-sm">Provides UV protection for photosensitive drugs</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">High Barrier Packaging</h4>
                <p className="text-gray-600 text-sm">Extended shelf life for premium pharmaceuticals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Protect Your Sensitive Products</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Our tropical aluminum technology ensures maximum protection for your most sensitive pharmaceutical
              products.
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
