import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Factory,
  Settings,
  Thermometer,
  Blend,
  Package,
  Droplets,
  Pill,
  TestTube,
  Shield,
} from "lucide-react"
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
              Discover our comprehensive range of pharmaceutical equipment across 9 main categories, designed to meet
              the highest standards of quality, efficiency, and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Main Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete pharmaceutical manufacturing solutions across 9 specialized categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blister and Packaging Equipment */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/blister-category-main.jpeg"
                  alt="Blister and Packaging Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 text-white">Category 1</Badge>
                </div>
              </div>
              <CardHeader>
                <Package className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Blister &amp; Cartoning Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete blister packaging and final packaging solutions for tablets, capsules, and other
                  pharmaceutical products with quality control.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Blister Packaging Machines</li>
                  <li>• Strip Packaging Systems</li>
                  <li>• Cartoning Equipment</li>
                  <li>• All Capapilties &amp; Capacities are availbale </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/blister-packaging">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* BFS Machines */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/bfs-machine-new.png"
                  alt="BFS Machines"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">Category 2</Badge>
                </div>
              </div>
              <CardHeader>
                <Factory className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">BFS &amp; FFS Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced BFS and FFS technologies for sterile pharmaceutical packaging and monodose applications with
                  integrated forming, filling, and sealing processes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• BFS Sterile Systems</li>
                  <li>• FFS Monodose Machines</li>
                  <li>• Container Forming Systems </li>
                  <li>• All Capapilties &amp; Capacities are availbale</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/bfs-machines">
                    View Technologies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Powder Preparation */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/powder-preparation-equipment.jpg"
                  alt="Powder Preparation Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Category 3</Badge>
                </div>
              </div>
              <CardHeader>
                <Blend className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Powder Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete powder processing solutions including mixing, granulation, and drying equipment for
                  pharmaceutical powder preparation and tablet manufacturing.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• High Shear Mixers</li>
                  <li>• Granulation Equipment</li>
                  <li>• Fluid Bed Dryers</li>
                  <li>• Powder Blenders</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/powder-preparation">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Powder Filling */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/powder-filling-equipment.jpg"
                  alt="Powder Filling Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-indigo-600 text-white">Category 4</Badge>
                </div>
              </div>
              <CardHeader>
                <Package className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Powder Filling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Precision powder filling systems for pharmaceutical powders, granules, and dry formulations with
                  accurate dosing and contamination-free processing.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Powder Filling Machines</li>
                  <li>• Auger Filling Systems</li>
                  <li>• Volumetric Fillers</li>
                  <li>•All Capapilties &amp; Capacities are availbale</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/powder-filling">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Capsule Filling and Tablet Press */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/capsule-tablet-products.jpg"
                  alt="Capsule Filling and Tablet Press"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">Category 5</Badge>
                </div>
              </div>
              <CardHeader>
                <Settings className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Capsule Filling & Tablet Press</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced capsule filling machines and tablet press systems for pharmaceutical solid dosage
                  manufacturing with precision dosing and high-speed production.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Capsule Filling Machines</li>
                  <li>• Tablet Press Systems</li>
                  <li>• Compression Equipment </li>
                  <li>• All Capapilties &amp; Capacities are availbale</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/capsule-tablet-press">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Liquid Filling */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/liquid-filling-equipment.jpg"
                  alt="Liquid Filling Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Category 6</Badge>
                </div>
              </div>
              <CardHeader>
                <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Liquid Filling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Precision liquid filling systems for pharmaceutical liquids, syrups, and injectable solutions with
                  accurate dosing and sterile processing capabilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Liquid Filling Machines</li>
                  <li>• Vial Filling Systems</li>
                  <li>• Ampoule Filling Lines</li>
                  <li>• All Capapilties &amp; Capacities are availbale</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/liquid-filling">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Soft Gelatin */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/soft-gelatin-capsules.png"
                  alt="Soft Gelatin Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pink-600 text-white">Category 7</Badge>
                </div>
              </div>
              <CardHeader>
                <Pill className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Soft Gelatin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized soft gelatin capsule manufacturing equipment for liquid and semi-solid pharmaceutical
                  formulations with precise encapsulation technology.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Soft Gel Encapsulation Machines</li>
                  <li>• Gelatin Melting Systems</li>
                  <li>• Drying Tumbels </li>
                  <li>• Inspection Equipment</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/soft-gelatin">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tube Filling */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/tube-filling-category.jpeg"
                  alt="Tube Filling Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-teal-600 text-white">Category 8</Badge>
                </div>
              </div>
              <CardHeader>
                <TestTube className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Tube Filling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced tube filling and sealing equipment for pharmaceutical creams, ointments, gels, and paste
                  formulations with hygienic processing standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Tube Filling Machines</li>
                  <li>• Tube Sealing Systems</li>
                  <li>• GMP </li>
                  <li>• All Capapilties &amp; Capacities are availbale </li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/tube-filling">
                    View Machines <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Clean Room */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/images/clean-room-partition-systems.jpeg"
                  alt="Clean Room Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gray-600 text-white">Category 9</Badge>
                </div>
              </div>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Clean Room</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete clean room solutions and contamination control systems for pharmaceutical manufacturing
                  environments meeting GMP and regulatory standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Clean Room Partitions</li>
                  <li>• HVAC Systems</li>
                  <li>• Air Filtration Units</li>
                  <li>• Pass-Through Chambers</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/products/clean-room">
                    View Systems <ArrowRight className="ml-2 h-4 w-4" />
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
              <a href="tel:+201016400933">Call Now: +201 016 400 933</a>
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
