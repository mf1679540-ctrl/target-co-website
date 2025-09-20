import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Thermometer, Wind, Gauge, Shield, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FluidBedDryersPage() {
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
            <span className="text-gray-900">Fluid Bed Dryers</span>
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
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Drying Technology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Fluid Bed Dryers</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                High-efficiency drying systems for pharmaceutical granules and powders with optimal heat transfer,
                uniform drying results, and energy-efficient operation. Our fluid bed dryers ensure consistent moisture
                content and product quality.
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
                src="/fluid-bed-dryer-detail.png"
                alt="Fluid Bed Dryer"
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
              Our fluid bed dryers deliver superior drying performance with advanced technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Wind className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Uniform Air Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced air distribution system ensures uniform fluidization and consistent drying across all
                  particles for optimal product quality.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Perforated plate design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Adjustable air velocity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pressure drop monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Precise Temperature Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced temperature control systems maintain optimal drying conditions with precise inlet and outlet
                  temperature monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    PID temperature control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multiple temperature zones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety interlocks
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Process Monitoring & Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive process control with real-time monitoring, data logging, and automated control systems
                  for consistent results.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    HMI touch screen control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recipe management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Batch documentation
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
                  cleaning features.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sanitary construction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy access for cleaning
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
                <Wind className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Dust Collection System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrated dust collection and filtration systems ensure clean operation and product recovery for
                  maximum efficiency.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bag filter system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automatic pulse cleaning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Product recovery
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
                    Heat recovery system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Variable frequency drives
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Insulated chambers
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
              Detailed specifications for our fluid bed dryer models
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model FBD-60</CardTitle>
                <p className="text-gray-600">Compact fluid bed dryer for small to medium batches</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Batch Size:</span>
                    <p className="text-gray-600">10-60 kg</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Bowl Diameter:</span>
                    <p className="text-gray-600">800 mm</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Power:</span>
                    <p className="text-gray-600">20 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Air Volume:</span>
                    <p className="text-gray-600">3000 m³/h</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Temperature Range:</span>
                    <p className="text-gray-600">40-120°C</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">2.8 x 2.2 x 3.5 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request FBD-60 Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model FBD-200</CardTitle>
                <p className="text-gray-600">High-capacity fluid bed dryer for large production batches</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Batch Size:</span>
                    <p className="text-gray-600">50-200 kg</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Bowl Diameter:</span>
                    <p className="text-gray-600">1400 mm</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Power:</span>
                    <p className="text-gray-600">55 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Air Volume:</span>
                    <p className="text-gray-600">10000 m³/h</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Temperature Range:</span>
                    <p className="text-gray-600">40-120°C</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">4.5 x 3.8 x 4.2 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request FBD-200 Quote</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Applications & Material Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile drying solutions for various pharmaceutical materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Granule Drying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Efficient drying of pharmaceutical granules after wet granulation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Powder Drying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Uniform drying of pharmaceutical powders and active ingredients</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Pellet Drying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Controlled drying of pharmaceutical pellets and spheres</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Crystal Drying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Gentle drying of crystalline pharmaceutical compounds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Optimize Your Drying Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our drying specialists today to discuss your specific requirements and find the perfect fluid bed
            dryer solution for your pharmaceutical facility.
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
