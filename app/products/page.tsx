import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Factory, Settings, Thermometer, Blend, Package, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Our Products</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Premium Pharmaceutical Machinery</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive range of pharmaceutical packing and industrial equipment, designed to meet the
              highest standards of quality, efficiency, and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment for every stage of pharmaceutical manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tablet Coating Machines */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/pharmaceutical-tablet-coating-machine.png"
                  alt="Tablet Coating Machine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Featured</Badge>
                </div>
              </div>
              <CardHeader>
                <Settings className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Tablet Coating Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced coating systems for pharmaceutical tablets with precise control, uniform application, and
                  consistent results for all coating types.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Automated spray systems</li>
                  <li>• Temperature and humidity control</li>
                  <li>• GMP compliant design</li>
                  <li>• Multiple batch sizes available</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/coating-machines">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fluid Bed Dryers */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/pharmaceutical-fluid-bed-dryer.png"
                  alt="Fluid Bed Dryer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Thermometer className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Fluid Bed Dryers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-efficiency drying systems for pharmaceutical granules and powders with optimal heat transfer and
                  uniform drying results.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Uniform heat distribution</li>
                  <li>• Energy efficient operation</li>
                  <li>• Easy cleaning and maintenance</li>
                  <li>• Explosion-proof options available</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/fluid-bed-dryers">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* High Shear Mixers */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/pharmaceutical-industrial-blender.png"
                  alt="High Shear Mixer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Blend className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">High Shear Mixers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Precision mixing equipment for pharmaceutical formulations with consistent results, optimal blend
                  uniformity, and quality control.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Variable speed control</li>
                  <li>• Jacketed bowl options</li>
                  <li>• Sanitary design</li>
                  <li>• Multiple impeller configurations</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/high-shear-mixers">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* BFS Machines */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/bfs-machine-hero.png"
                  alt="BFS Machine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Factory className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">BFS Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Blow-Fill-Seal machines for sterile pharmaceutical packaging with integrated forming, filling, and
                  sealing in one continuous process.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Sterile packaging process</li>
                  <li>• High-speed production</li>
                  <li>• Minimal contamination risk</li>
                  <li>• Various container sizes</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/bfs-machines">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Granulation Equipment */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/granulation-equipment-process.png"
                  alt="Granulation Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Layers className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Granulation Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced granulation systems for pharmaceutical powder processing and tablet preparation with
                  consistent particle size distribution.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Wet and dry granulation options</li>
                  <li>• Controlled particle size</li>
                  <li>• Integrated drying systems</li>
                  <li>• Process monitoring capabilities</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/granulation-equipment">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Packaging Equipment */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/pharmaceutical-packaging-machine.png"
                  alt="Packaging Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Package className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Packaging Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automated packaging solutions for pharmaceutical products with quality control, traceability, and
                  compliance features.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Automated filling systems</li>
                  <li>• Quality inspection integration</li>
                  <li>• Serialization capabilities</li>
                  <li>• Flexible packaging formats</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/packaging-equipment">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every machine we supply meets the highest international standards for pharmaceutical manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">GMP Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  All equipment meets Good Manufacturing Practice standards and regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Proven Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Trusted by 25+ pharmaceutical companies across Egypt and the Middle East.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Latest innovations in pharmaceutical manufacturing technology and automation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Complete Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Installation, training, maintenance, and 24/7 technical support included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Find the Perfect Equipment for Your Facility
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you select the right pharmaceutical machinery for your specific manufacturing
            requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+201044114633">Call Now: +20 104 411 4633</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
