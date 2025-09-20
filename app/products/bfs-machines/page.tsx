import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Phone, Mail, Factory, Package, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BFSMachinesPage() {
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
            <span className="text-gray-900">BFS Machines</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button variant="outline" size="sm" asChild className="w-fit mb-6 bg-transparent">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                </Link>
              </Button>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Advanced Technologies</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">BFS & FFS Technologies</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Discover our advanced Blow-Fill-Seal and Form-Fill-Seal technologies. BFS machines excel in sterile
                products and represent more advanced technology, while FFS machines are perfect for monodose
                pharmaceuticals. Both technologies have a great future in sterile and unidose products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="tel:+201016400933">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +20 101 640 0933
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/quote">
                    <Mail className="mr-2 h-5 w-5" />
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/bfs-machine-new.png"
                alt="BFS and FFS machines for pharmaceutical packaging"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">Two Technologies</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Choose Your Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer two distinct technologies to meet different pharmaceutical packaging needs. Both represent the
              future of pharmaceutical packaging with great potential in sterile and unidose products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* BFS Machines */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="aspect-video relative">
                <Image
                  src="/images/bfs-machine-new.png"
                  alt="BFS Sterile Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Advanced Technology</Badge>
                </div>
              </div>
              <CardHeader>
                <Factory className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-2xl">BFS Machines</CardTitle>
                <p className="text-gray-600">For Sterile Products & Advanced Technology</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Blow-Fill-Seal technology represents the most advanced solution for sterile pharmaceutical packaging.
                  Perfect for injectable solutions, ophthalmic products, and other sterile applications requiring the
                  highest level of contamination control.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Ultimate sterile environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Most advanced technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Factory className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Integrated blow-fill-seal process</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/products/bfs-machines/bfs-sterile">
                    Explore BFS Technology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* FFS Machines */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <div className="aspect-video relative">
                <Image
                  src="/images/ffs-machines.jpg"
                  alt="FFS Monodose Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Monodose Specialist</Badge>
                </div>
              </div>
              <CardHeader>
                <Package className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-2xl">FFS Machines</CardTitle>
                <p className="text-gray-600">For Monodose Pharmaceuticals</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Form-Fill-Seal technology specialized for monodose pharmaceutical applications. Ideal for single-dose
                  medications, oral solutions, and any pharmaceutical requiring precise individual dosing for improved
                  patient compliance.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Perfect monodose precision</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">High-speed production</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Patient-focused packaging</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/products/bfs-machines/ffs-monodose">
                    Explore FFS Technology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Technology Comparison</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              BFS vs FFS: Choose the Right Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both technologies represent the future of pharmaceutical packaging, each optimized for specific
              applications and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">BFS Technology - Sterile Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Best For:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Injectable solutions and vaccines</li>
                    <li>• Ophthalmic products (eye drops)</li>
                    <li>• Sterile irrigation solutions</li>
                    <li>• High-value sterile pharmaceuticals</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Advantages:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Ultimate sterility assurance</li>
                    <li>• Most advanced technology available</li>
                    <li>• Integrated container formation</li>
                    <li>• Future of sterile packaging</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-900">FFS Technology - Monodose Precision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Best For:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Oral liquid medications</li>
                    <li>• Pediatric formulations</li>
                    <li>• Hospital single-dose medications</li>
                    <li>• Nutritional supplements</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Advantages:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Perfect monodose accuracy</li>
                    <li>• Improved patient compliance</li>
                    <li>• Reduced medication waste</li>
                    <li>• Future of unidose products</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Embrace the Future of Pharmaceutical Packaging?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Target Co. today to discuss which technology - BFS for sterile products or FFS for monodose
            applications - is right for your pharmaceutical manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="tel:+201016400933">
                <Phone className="mr-2 h-5 w-5" />
                Call +20 101 640 0933
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/quote">
                <Mail className="mr-2 h-5 w-5" />
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
