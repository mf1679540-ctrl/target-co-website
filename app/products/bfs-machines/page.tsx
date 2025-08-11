import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Download,
  Zap,
  Shield,
  Gauge,
  Settings,
  Award,
  Users,
} from "lucide-react"
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
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">BFS Technology</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">BFS Machines</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Advanced Blow-Fill-Seal technology for sterile pharmaceutical packaging. Our BFS machines provide
                integrated container formation, filling, and sealing in a single continuous process, ensuring maximum
                sterility and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="tel:+201044114633">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +20 104 411 4633
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
                src="/bfs-machine-hero.png"
                alt="Modern BFS Machine in pharmaceutical clean room"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our BFS Machines?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our BFS machines combine cutting-edge technology with proven reliability to deliver superior sterile
              packaging solutions for pharmaceutical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Integrated Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete blow-fill-seal process in a single machine, eliminating contamination risks and reducing
                  handling requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Sterile Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Class A sterile environment with HEPA filtration and positive pressure systems ensuring
                  pharmaceutical-grade cleanliness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Gauge className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>High Speed Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Production rates up to 12,000 containers per hour with consistent quality and minimal waste
                  generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Flexible Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adaptable to various container sizes and shapes, with quick changeover capabilities for different
                  product lines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>GMP Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fully compliant with FDA, EMA, and WHO GMP standards, with comprehensive validation documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>User-Friendly Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intuitive HMI interface with automated process control and comprehensive operator training programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Technical Specifications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">BFS Machine Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of BFS machines designed to meet different production requirements and facility
              constraints.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">BFS-6000</CardTitle>
                  <Badge className="bg-blue-600 text-white">Compact Series</Badge>
                </div>
                <p className="text-gray-600 mt-2">Ideal for small to medium production volumes</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Production Rate</p>
                    <p className="text-lg font-semibold">Up to 6,000 containers/hour</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Container Volume</p>
                    <p className="text-lg font-semibold">0.1ml - 500ml</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Power Consumption</p>
                    <p className="text-lg font-semibold">45 kW</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Floor Space</p>
                    <p className="text-lg font-semibold">12m × 8m</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Features:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Compact footprint design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Easy maintenance access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Quick format changeover
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Integrated quality control
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">BFS-12000</CardTitle>
                  <Badge className="bg-green-600 text-white">High-Speed Series</Badge>
                </div>
                <p className="text-gray-600 mt-2">Perfect for high-volume pharmaceutical production</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Production Rate</p>
                    <p className="text-lg font-semibold">Up to 12,000 containers/hour</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Container Volume</p>
                    <p className="text-lg font-semibold">0.1ml - 1000ml</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Power Consumption</p>
                    <p className="text-lg font-semibold">75 kW</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Floor Space</p>
                    <p className="text-lg font-semibold">18m × 12m</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Features:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      High-speed production capability
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Advanced process monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Multi-cavity mold options
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Automated reject system
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">BFS Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How BFS Technology Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the integrated blow-fill-seal process that ensures sterile pharmaceutical packaging with
              maximum efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/bfs-machine-process.png"
                alt="BFS machine process showing container formation and filling"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Parison Formation</h3>
                  <p className="text-gray-600">
                    Plastic resin is extruded to form a hollow tube (parison) in a sterile environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Container Blowing</h3>
                  <p className="text-gray-600">
                    The parison is blown into the desired container shape using compressed air and molds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Filling</h3>
                  <p className="text-gray-600">
                    The formed container is immediately filled with the pharmaceutical product while still sterile.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Container Sealing</h3>
                  <p className="text-gray-600">
                    The filled container is sealed hermetically, completing the sterile packaging process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Applications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">BFS Machine Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our BFS machines are ideal for various pharmaceutical and healthcare applications requiring sterile
              packaging solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Liquid Pharmaceuticals</h3>
                <p className="text-gray-600 text-sm">Sterile solutions, suspensions, and injectable medications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ophthalmic Solutions</h3>
                <p className="text-gray-600 text-sm">Eye drops, ointments, and sterile irrigation solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🫁</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Respiratory Products</h3>
                <p className="text-gray-600 text-sm">Inhalation solutions and nebulizer medications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🩹</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wound Care</h3>
                <p className="text-gray-600 text-sm">Sterile saline solutions and antiseptic preparations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Packaging Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Target Co. today to learn more about our BFS machines and how they can improve your pharmaceutical
            packaging efficiency and sterility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="tel:+201044114633">
                <Phone className="mr-2 h-5 w-5" />
                Call +20 104 411 4633
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
                Schedule Demo
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
