import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Settings, Shield, Gauge, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PackagingEquipmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">Packaging Equipment</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Button variant="outline" size="sm" asChild className="w-fit bg-transparent">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                </Link>
              </Button>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Packaging Technology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Packaging Equipment</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automated packaging solutions for pharmaceutical products with quality control, traceability, and
                compliance features. Our packaging equipment ensures product integrity, regulatory compliance, and
                efficient production workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/packaging-equipment-detail.png"
                alt="Packaging Equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our packaging equipment delivers superior packaging performance with advanced technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Package className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Automated Filling Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-precision automated filling systems for tablets, capsules, and powders with accurate dosing and
                  minimal product waste.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precision dosing systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multiple filling stations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automatic reject systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Quality Inspection Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrated quality control systems with vision inspection, weight checking, and automatic rejection of
                  non-conforming products.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Vision inspection systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weight checking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Statistical quality control
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Serialization Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced serialization and track-and-trace capabilities for regulatory compliance and
                  anti-counterfeiting protection with global standards support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unique product identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Barcode/QR code printing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Database integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>GMP Compliant Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fully compliant with pharmaceutical regulations and GMP standards with sanitary design and easy
                  cleaning protocols for safe production.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sanitary construction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy cleaning access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Validation documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Flexible Packaging Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Support for multiple packaging formats including bottles, blisters, sachets, and pouches with quick
                  changeover capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multiple format support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quick changeover
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Modular design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>High-Speed Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-speed packaging capabilities with consistent output rates and minimal downtime for maximum
                  productivity and efficiency.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High throughput rates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Minimal downtime
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for our packaging equipment models
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model PE-100</CardTitle>
                <p className="text-gray-600">Compact packaging system for small to medium production</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Output Speed:</span>
                    <p className="text-gray-600">Up to 100 units/min</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Container Types:</span>
                    <p className="text-gray-600">Bottles, Blisters</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Power:</span>
                    <p className="text-gray-600">12 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Air Consumption:</span>
                    <p className="text-gray-600">8 m³/min</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Accuracy:</span>
                    <p className="text-gray-600">±0.5%</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">3.2 x 2.5 x 2.8 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request PE-100 Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model PE-300</CardTitle>
                <p className="text-gray-600">High-speed packaging system for large-scale production</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Output Speed:</span>
                    <p className="text-gray-600">Up to 300 units/min</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Container Types:</span>
                    <p className="text-gray-600">All formats</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Power:</span>
                    <p className="text-gray-600">35 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Air Consumption:</span>
                    <p className="text-gray-600">20 m³/min</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Accuracy:</span>
                    <p className="text-gray-600">±0.3%</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">6.5 x 4.2 x 3.5 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request PE-300 Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Applications & Package Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile packaging solutions for various pharmaceutical products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Tablet Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Bottles, blisters, and strip packaging for tablets</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Capsule Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Specialized packaging for hard and soft capsules</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Powder Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Sachets, bottles, and pouches for pharmaceutical powders</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Liquid Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Bottles, vials, and ampoules for liquid medications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Packaging Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our packaging specialists today to discuss your specific requirements and find the perfect packaging
            equipment for your pharmaceutical facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+201016400933">Call Now: +20 101 640 0933</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Schedule Factory Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
