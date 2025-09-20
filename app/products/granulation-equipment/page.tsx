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

export default function GranulationEquipmentPage() {
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
            <span className="text-gray-900">Granulation Equipment</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button variant="outline" size="sm" asChild className="w-fit mb-6 bg-transparent">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                </Link>
              </Button>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6">Granulation Technology</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Granulation Equipment</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Advanced granulation systems for pharmaceutical manufacturing. Our equipment provides precise particle
                size control, uniform distribution, and optimal flow properties for tablet and capsule production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
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
                src="/granulation-equipment-hero.png"
                alt="Modern granulation equipment in pharmaceutical facility"
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
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Key Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Granulation Equipment?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our granulation systems combine proven technology with innovative design to deliver consistent,
              high-quality granules for pharmaceutical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Controlled Particle Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Precise control over granule size distribution with consistent particle characteristics for optimal
                  tablet compression.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Wet & Dry Granulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Versatile systems supporting both wet and dry granulation processes with quick changeover
                  capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Gauge className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Integrated Drying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built-in drying systems with precise temperature and humidity control for optimal moisture content
                  management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Settings className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Process Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced monitoring systems with real-time data collection and process optimization capabilities.
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
                  Fully compliant with pharmaceutical GMP standards with comprehensive validation and documentation
                  packages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Easy Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  User-friendly controls with automated process sequences and comprehensive operator training programs.
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
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Technical Specifications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Granulation Equipment Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of granulation equipment designed to meet different production requirements and
              batch sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">GE-50</CardTitle>
                  <Badge className="bg-green-600 text-white">Compact Series</Badge>
                </div>
                <p className="text-gray-600 mt-2">Perfect for small to medium batch production</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Batch Size</p>
                    <p className="text-lg font-semibold">10-50 kg</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bowl Volume</p>
                    <p className="text-lg font-semibold">100 L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Power</p>
                    <p className="text-lg font-semibold">15 kW</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Cycle Time</p>
                    <p className="text-lg font-semibold">45-90 min</p>
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
                      Variable speed impeller
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Integrated spray system
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Easy cleaning access
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">GE-200</CardTitle>
                  <Badge className="bg-blue-600 text-white">Production Series</Badge>
                </div>
                <p className="text-gray-600 mt-2">Ideal for large-scale pharmaceutical production</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Batch Size</p>
                    <p className="text-lg font-semibold">50-200 kg</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bowl Volume</p>
                    <p className="text-lg font-semibold">400 L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Power</p>
                    <p className="text-lg font-semibold">45 kW</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Cycle Time</p>
                    <p className="text-lg font-semibold">60-120 min</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Features:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      High-capacity production
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Advanced process control
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Multi-zone drying system
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Automated discharge
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
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">Granulation Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How Granulation Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the granulation process that transforms powder ingredients into uniform granules with
              optimal flow and compression properties.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/granulation-equipment-process.png"
                alt="Granulation equipment showing wet granulation process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Powder Mixing</h3>
                  <p className="text-gray-600">
                    Dry ingredients are thoroughly mixed to ensure uniform distribution before granulation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Binder Addition</h3>
                  <p className="text-gray-600">
                    Liquid binder is gradually added while mixing to form granules of desired size and strength.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Granule Formation</h3>
                  <p className="text-gray-600">
                    Controlled agitation creates uniform granules with optimal size distribution and density.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Drying & Sizing</h3>
                  <p className="text-gray-600">
                    Granules are dried to optimal moisture content and sized for downstream processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Integrated Drying System</h3>
              <p className="text-gray-600">
                Our granulation equipment features integrated drying systems that provide precise control over moisture
                content, ensuring consistent granule quality and optimal flow properties.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Temperature control ±1°C accuracy
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Humidity monitoring and control
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Automated drying cycle optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Energy-efficient heat recovery system
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/granulation-drying-system.png"
                alt="Integrated granulation and drying system"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Applications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Granulation Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our granulation equipment is ideal for various pharmaceutical applications requiring consistent particle
              size and flow properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tablet Granulation</h3>
                <p className="text-gray-600 text-sm">Granules for direct compression and wet granulation tablets</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔘</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Capsule Filling</h3>
                <p className="text-gray-600 text-sm">Uniform granules for hard and soft capsule filling applications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚪</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pelletization</h3>
                <p className="text-gray-600 text-sm">Spherical pellets for controlled release formulations</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Powder Processing</h3>
                <p className="text-gray-600 text-sm">Improved flow properties for powder handling and processing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Granulation Process?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact Target Co. today to learn more about our granulation equipment and how it can improve your
            pharmaceutical manufacturing efficiency and product quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="tel:+201016400933">
                <Phone className="mr-2 h-5 w-5" />
                Call +20 101 640 0933
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
