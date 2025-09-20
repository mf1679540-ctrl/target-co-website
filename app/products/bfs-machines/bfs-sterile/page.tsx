import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, Calendar, Zap, Shield, Gauge, Settings, Award, Users, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BFSSterilePage() {
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
            <Link href="/products/bfs-machines" className="hover:text-blue-600">
              BFS Machines
            </Link>
            <span>/</span>
            <span className="text-gray-900">BFS Sterile Systems</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button variant="outline" size="sm" asChild className="w-fit mb-6 bg-transparent">
                <Link href="/products/bfs-machines">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to BFS Machines
                </Link>
              </Button>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">BFS Technology</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">BFS Sterile Systems</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Advanced Blow-Fill-Seal technology for sterile pharmaceutical products. This cutting-edge technology
                represents the future of sterile packaging, providing unparalleled sterility assurance for critical
                pharmaceutical applications.
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
                alt="BFS sterile system for pharmaceutical manufacturing"
                width={600}
                height={400}
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
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Key Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose BFS Sterile Technology?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BFS technology combines container formation, filling, and sealing in one continuous sterile process,
              representing the most advanced technology for sterile pharmaceutical packaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Ultimate Sterility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Class A sterile environment with HEPA filtration ensures pharmaceutical-grade sterility for critical
                  applications like injectables and ophthalmic solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Represents the future of sterile packaging with integrated blow-fill-seal process eliminating human
                  intervention and contamination risks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Gauge className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>High Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Production rates up to 16,000 containers per hour with consistent quality and minimal waste, perfect
                  for high-volume sterile production.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>{"Mechanical reliability"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{"High mechanical reliability machine and  high efficiency."}</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>GMP Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fully compliant with FDA, EMA, and WHO GMP standards for sterile manufacturing, with comprehensive
                  validation documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Future-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This technology has great potential in sterile and unidose products, positioning your facility at the
                  forefront of pharmaceutical innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Applications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">BFS Sterile Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BFS technology is ideal for sterile pharmaceutical products requiring the highest levels of sterility and
              safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💉</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Injectable Solutions</h3>
                <p className="text-gray-600 text-sm">Sterile injectables, vaccines, and parenteral medications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ophthalmic Products</h3>
                <p className="text-gray-600 text-sm">
                  Eye drops, sterile irrigation solutions, and ophthalmic preparations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🫁</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Respiratory Solutions</h3>
                <p className="text-gray-600 text-sm">Sterile inhalation solutions and nebulizer medications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🩹</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sterile Saline</h3>
                <p className="text-gray-600 text-sm">Wound irrigation, contact lens solutions, and sterile water</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BFS Technology Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">BFS Technology Gallery</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">BFS Container Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of BFS containers and pharmaceutical packaging solutions designed for
              sterile and precision applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/images/bfs-containers-1.jpg"
                    alt="BFS pharmaceutical containers and vials for sterile applications"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision BFS Containers</h3>
                  <p className="text-gray-600">
                    High-quality pharmaceutical containers manufactured using advanced BFS technology. These sterile
                    containers are perfect for ophthalmic solutions, injectable medications, and other critical
                    pharmaceutical applications requiring ultimate sterility assurance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/images/bfs-containers-2.png"
                    alt="Complete BFS pharmaceutical packaging system with various container sizes"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete BFS System Range</h3>
                  <p className="text-gray-600">
                    Our comprehensive BFS technology produces a wide variety of container sizes and configurations. From
                    small-volume injectables to larger pharmaceutical bottles, all manufactured in a sterile environment
                    with integrated blow-fill-seal process for maximum safety and efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Sterile Manufacturing</h4>
                <p className="text-gray-600 text-sm">
                  Class A sterile environment ensures pharmaceutical-grade quality
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Versatile Containers</h4>
                <p className="text-gray-600 text-sm">Multiple sizes and configurations for diverse applications</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h4>
                <p className="text-gray-600 text-sm">Integrated blow-fill-seal process for optimal efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for the Future of Sterile Packaging?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Target Co. today to learn more about our BFS sterile systems and how this advanced technology can
            revolutionize your sterile pharmaceutical production.
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
                <Calendar className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
