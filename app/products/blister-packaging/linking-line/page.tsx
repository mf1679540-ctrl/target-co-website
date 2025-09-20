import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LinkingLinePage() {
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
                DPH380DLS-DXH400S High-Speed Blister Packaging Linkage Line
              </h1>
              <p className="text-gray-600 mt-2">Complete integrated blister packaging and cartoning production line</p>
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
                src="https://www.hlyj.net/uploadfile/image/20191211/20191211145737313731.jpg"
                alt="DPH380DLS-DXH400S High-Speed Blister Packaging Linkage Line"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Complete Production Line</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DPH380DLS-DXH400S Linkage Line</h2>
              <p className="text-gray-600 mb-6">
                Complete high-speed blister packaging and automatic cartoning linkage production line with
                aluminum-plastic-aluminum full servo technology for integrated pharmaceutical packaging. This system
                combines blister forming, sealing, and cartoning in one continuous operation.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">High-Speed Operation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Full Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Servo Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Automated Linkage</span>
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
              <CardTitle>System Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Production Type</h4>
                  <p className="text-gray-600">Integrated blister + cartoning line</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Blister Speed</h4>
                  <p className="text-gray-600">High-speed synchronized operation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cartoning Speed</h4>
                  <p className="text-gray-600">Synchronized with blister production</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Control System</h4>
                  <p className="text-gray-600">Full servo automation with PLC control</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Line Configuration</h4>
                  <p className="text-gray-600">Customizable layout to fit facility requirements</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Power System</h4>
                  <p className="text-gray-600">Combined system power with energy efficiency</p>
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
                    <h4 className="font-semibold text-gray-900">Integrated Blister-Cartoning Line</h4>
                    <p className="text-gray-600 text-sm">Complete packaging solution in one continuous process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Servo Control</h4>
                    <p className="text-gray-600 text-sm">Precise synchronization and consistent quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Aluminum-Plastic-Aluminum Technology</h4>
                    <p className="text-gray-600 text-sm">Advanced material handling and sealing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Automatic Linkage System</h4>
                    <p className="text-gray-600 text-sm">Seamless product transfer between stations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Flow */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Production Process Flow</CardTitle>
            <CardDescription>Complete packaging workflow from blister forming to final cartoning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg mb-4 inline-block">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Blister Forming</h4>
                <p className="text-gray-600 text-sm">Automatic forming of blister cavities</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Product Filling</h4>
                <p className="text-gray-600 text-sm">Precise product placement in blisters</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Sealing & Cutting</h4>
                <p className="text-gray-600 text-sm">Heat sealing and precision cutting</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-orange-100 rounded-lg mb-4 inline-block">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Automatic Cartoning</h4>
                <p className="text-gray-600 text-sm">Final packaging in cartons with leaflets</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Ideal for high-volume pharmaceutical production facilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg mb-4 inline-block">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Complete Packaging Lines</h4>
                <p className="text-gray-600 text-sm">End-to-end pharmaceutical packaging solutions</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-lg mb-4 inline-block">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">High-Volume Production</h4>
                <p className="text-gray-600 text-sm">Efficient processing for large-scale manufacturing</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-lg mb-4 inline-block">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Automated Pharmaceutical Packaging</h4>
                <p className="text-gray-600 text-sm">Reduced labor costs and consistent quality</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hualian Supplier Excellence Section */}
        <Card className="mb-8 bg-gradient-to-r from-slate-50 to-blue-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Manufactured by Hualian Excellence</CardTitle>
            <CardDescription className="text-lg text-blue-700">
              Trusted partnership with industry-leading pharmaceutical machinery manufacturer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Hualian Technology?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Manufacturing Excellence</h4>
                      <p className="text-gray-600 text-sm">
                        Over 300 skilled employees operating from a state-of-the-art 30,000m² facility, ensuring
                        precision manufacturing and quality control.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Market Leader</h4>
                      <p className="text-gray-600 text-sm">
                        Recognized as a leading industrial enterprise with international presence at major exhibitions
                        including Interpack Germany, ACHEMA, and AllPack Indonesia.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation Focus</h4>
                      <p className="text-gray-600 text-sm">
                        Continuous R&D investment in automated packaging solutions, specializing in pharmaceutical,
                        daily chemical, and food industry applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30,000m²</div>
                  <div className="text-gray-600 mb-4">Manufacturing Facility</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
                  <div className="text-gray-600 mb-4">Skilled Employees</div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">Global</div>
                  <div className="text-gray-600">Market Presence</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Transform Your Production Line</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Integrate blister packaging and cartoning into one efficient, automated production line.
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
