import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Blend, Gauge, Shield, Settings, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HighShearMixersPage() {
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
            <span className="text-gray-900">High Shear Mixers</span>
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
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Mixing Technology</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">High Shear Mixers</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Precision mixing equipment for pharmaceutical formulations with consistent results, optimal blend
                uniformity, and quality control. Our high shear mixers ensure homogeneous mixing and granulation for
                superior product quality.
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
                src="/high-shear-mixer-detail.png"
                alt="High Shear Mixer"
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
              Our high shear mixers deliver superior mixing performance with advanced technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Blend className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Variable Speed Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced variable speed control systems allow precise adjustment of mixing intensity for optimal
                  blending and granulation results.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Variable frequency drives
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precise speed control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Soft start/stop functions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Multiple Impeller Configurations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Various impeller designs and configurations to suit different mixing applications and material
                  properties for optimal performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High shear impellers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Chopper blades
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom configurations
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
                  for consistent mixing results.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Load monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temperature monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recipe management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Sanitary Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  GMP compliant sanitary design with easy cleaning features and pharmaceutical-grade materials for safe
                  production.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Stainless steel construction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Smooth surfaces
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy disassembly
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Jacketed Bowl Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Optional jacketed bowls for temperature control during mixing processes, enabling heating or cooling
                  as required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Heating/cooling jackets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temperature control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Thermal insulation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Blend className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Wet & Dry Granulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Versatile systems capable of both wet and dry granulation processes with integrated liquid addition
                  systems for complete flexibility.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Liquid addition systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Spray nozzles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Peristaltic pumps
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
              Detailed specifications for our high shear mixer models
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model HSM-25</CardTitle>
                <p className="text-gray-600">Compact high shear mixer for small to medium batches</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Batch Size:</span>
                    <p className="text-gray-600">5-25 kg</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Bowl Volume:</span>
                    <p className="text-gray-600">50 liters</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Main Motor:</span>
                    <p className="text-gray-600">7.5 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Chopper Motor:</span>
                    <p className="text-gray-600">1.5 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Speed Range:</span>
                    <p className="text-gray-600">50-500 rpm</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">1.8 x 1.5 x 2.2 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request HSM-25 Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Model HSM-150</CardTitle>
                <p className="text-gray-600">High-capacity mixer for large production batches</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Batch Size:</span>
                    <p className="text-gray-600">50-150 kg</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Bowl Volume:</span>
                    <p className="text-gray-600">300 liters</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Main Motor:</span>
                    <p className="text-gray-600">30 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Chopper Motor:</span>
                    <p className="text-gray-600">5.5 kW</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Speed Range:</span>
                    <p className="text-gray-600">50-300 rpm</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Dimensions:</span>
                    <p className="text-gray-600">3.2 x 2.8 x 3.5 m</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Request HSM-150 Quote</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Applications & Process Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile mixing solutions for various pharmaceutical processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Wet Granulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">High-intensity mixing for wet granulation processes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Dry Blending</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Uniform blending of pharmaceutical powders and excipients</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Emulsification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Creation of stable emulsions and suspensions</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Dispersion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Effective dispersion of active ingredients and additives</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Enhance Your Mixing Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our mixing specialists today to discuss your specific requirements and find the perfect high shear
            mixer solution for your pharmaceutical facility.
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
