import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Settings, Thermometer, Gauge, Shield, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoatingMachinesPage() {
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
            <span className="text-gray-900">Tablet Coating Machines</span>
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
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Coating Technology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Tablet Coating Machines</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced coating systems for pharmaceutical tablets with precise control, uniform application, and
                consistent results. Our coating machines ensure optimal film formation and superior tablet appearance.
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
                src="/tablet-coating-machine-detail.png"
                alt="Tablet Coating Machine"
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
              Our tablet coating machines deliver superior performance with advanced technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Automated Spray Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Precision spray guns with automated control for consistent coating application and optimal film
                  formation on all tablet surfaces.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multiple spray gun configurations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Adjustable spray patterns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automated cleaning systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Temperature & Humidity Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced environmental control systems maintain optimal conditions for perfect coating results and
                  product quality.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precise temperature regulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Humidity monitoring and control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time process monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Process Control & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive process control with data logging, recipe management, and quality assurance features for
                  consistent results.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recipe storage and recall
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Batch documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Trend analysis and reporting
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
                  Fully compliant with Good Manufacturing Practice standards and pharmaceutical regulations for safe,
                  reliable operation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sanitary design principles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy cleaning and validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete documentation package
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Flexible Batch Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Available in multiple sizes to accommodate different production requirements from pilot scale to full
                  production batches.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    5kg to 500kg batch sizes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Modular design options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scalable configurations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Energy Efficient Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Optimized energy consumption with heat recovery systems and efficient air handling for reduced
                  operating costs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Heat recovery systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Variable frequency drives
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimized air flow design
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
              Detailed specifications for our tablet coating machine models
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model TC-150</CardTitle>
                <p className="text-gray-600">Compact coating system for small to medium batches</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Batch Size:</span>
                    <p className="text-gray-600">5-50 kg</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Pan Diameter:</span>
                    <p className="text-gray-600">600 mm</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Power:</span>
                    <p className="text-gray-600">15 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Air Volume:</span>
                    <p className="text-gray-600">2000 m³/h</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Spray Guns:</span>
                    <p className="text-gray-600">2-4 guns</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">2.5 x 1.8 x 2.2 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request TC-150 Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model TC-500</CardTitle>
                <p className="text-gray-600">High-capacity coating system for large production batches</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Batch Size:</span>
                    <p className="text-gray-600">50-500 kg</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Pan Diameter:</span>
                    <p className="text-gray-600">1200 mm</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Power:</span>
                    <p className="text-gray-600">45 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Air Volume:</span>
                    <p className="text-gray-600">8000 m³/h</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Spray Guns:</span>
                    <p className="text-gray-600">6-12 guns</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">4.2 x 3.5 x 3.8 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request TC-500 Quote</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Applications & Coating Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile coating solutions for various pharmaceutical applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Film Coating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Protective and aesthetic film coatings for tablets and capsules</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Enteric Coating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Specialized coatings for controlled release and gastric protection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Sugar Coating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Traditional sugar coating for enhanced appearance and taste masking
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Functional Coating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Specialized coatings for modified release and targeted delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Coating Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our coating specialists today to discuss your specific requirements and find the perfect tablet
            coating solution for your facility.
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
