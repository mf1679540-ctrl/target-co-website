import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FlatPlateSealingPage() {
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
                DPH-270/330/380D High-Speed Flat Plate Blister Machine
              </h1>
              <p className="text-gray-600 mt-2">
                High-speed flat plate blister packing machine for pharmaceutical packaging
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
                src="https://www.hlyj.net/uploadfile/image/20220422/20220422140399119911.jpg"
                alt="DPH-270/330/380D High-Speed Flat Plate Blister Machine"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-purple-100 text-purple-800 mb-4">High-Speed Blister Machine</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DPH-270/330/380D Series</h2>
              <p className="text-gray-600 mb-6">
                High-speed flat plate blister packing machine suitable for automatic Aluminum PVC packaging for
                capsules, tablets and chewing gums. Features flat pressure forming for strong and average blisters with
                servo traction system and push-oriented mould change.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">80-180 punches/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">GMP Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Servo Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Camera Inspection</span>
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
                  <p className="text-gray-600">80-180 times/min</p>
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
                  <h4 className="font-semibold text-gray-900">PVC Material</h4>
                  <p className="text-gray-600">0.15-0.5×270/380mm</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Maximum Molding Area</h4>
                <p className="text-gray-600">240×260mm (DPH-270D) / 240×370mm (DPH-380D)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Dimensions</h4>
                <p className="text-gray-600">4050×980×1750mm (DPH-270D) / 4050×1030×1750mm (DPH-380D)</p>
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
                    <h4 className="font-semibold text-gray-900">Flat Pressure Forming</h4>
                    <p className="text-gray-600 text-sm">Creates strong and uniform blisters with consistent quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Servo Traction System</h4>
                    <p className="text-gray-600 text-sm">Precise control and smooth operation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Push-oriented Mould Change</h4>
                    <p className="text-gray-600 text-sm">Quick and easy mould changeover</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Camera Inspection System</h4>
                    <p className="text-gray-600 text-sm">Automated quality control and defect detection</p>
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
            <CardDescription>Suitable for various pharmaceutical packaging needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg mb-4 inline-block">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Tablet Packaging</h4>
                <p className="text-gray-600 text-sm">Ideal for various tablet sizes and shapes</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Capsule Packaging</h4>
                <p className="text-gray-600 text-sm">Perfect for hard and soft gelatin capsules</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Chewing Gum Packaging</h4>
                <p className="text-gray-600 text-sm">Specialized for confectionery products</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Packaging Line?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Contact our packaging specialists to discuss your specific requirements and get a customized solution.
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
