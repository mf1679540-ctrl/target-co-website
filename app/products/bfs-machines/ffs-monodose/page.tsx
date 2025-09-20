import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Phone, Mail, Calendar, Package, Droplets, Gauge, Award, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FFSMonodosePage() {
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
            <span className="text-gray-900">FFS Monodose Systems</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button variant="outline" size="sm" asChild className="w-fit mb-6 bg-transparent">
                <Link href="/products/bfs-machines">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to BFS Machines
                </Link>
              </Button>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6">FFS Technology</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">FFS Monodose Systems</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Advanced Form-Fill-Seal technology specifically designed for monodose pharmaceutical applications.
                Perfect for single-dose medications, ensuring precise dosing and optimal patient compliance.
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
                src="/images/ffs-monodose-system.jpg"
                alt="FFS monodose system for pharmaceutical packaging"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose FFS Monodose Technology?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FFS technology is perfect for monodose pharmaceuticals, providing precise single-dose packaging that
              ensures accurate medication delivery and improved patient safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <Package className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Monodose Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized for single-dose pharmaceutical packaging, ensuring exact dosing and eliminating medication
                  errors for improved patient safety.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Versatile Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perfect for liquid medications, syrups, oral solutions, and any monodose pharmaceutical requiring
                  precise volume control.
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
                  Efficient production rates for monodose packaging with consistent quality and minimal waste, ideal for
                  high-volume pharmaceutical production.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Meets all pharmaceutical packaging standards for monodose products, with full GMP compliance and
                  validation support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Patient-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Designed with patient compliance in mind, providing convenient single-dose packaging that improves
                  medication adherence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monodose Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Monodose Advantages</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Benefits of Monodose Packaging</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monodose packaging represents the future of pharmaceutical dosing, offering numerous advantages for both
              patients and healthcare providers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Precise Dosing</h3>
                  <p className="text-gray-600">
                    Each monodose package contains exactly the prescribed amount, eliminating dosing errors and ensuring
                    optimal therapeutic outcomes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Improved Compliance</h3>
                  <p className="text-gray-600">
                    Single-dose packaging makes it easier for patients to take the correct amount at the right time,
                    improving medication adherence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduced Contamination</h3>
                  <p className="text-gray-600">
                    Each dose is individually sealed, preventing contamination and maintaining product integrity
                    throughout the shelf life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                  <p className="text-gray-600">
                    Reduces medication waste and improves inventory management for healthcare facilities and patients.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/ffs-monodose-system.jpg"
                alt="FFS monodose packaging examples"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Applications</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">FFS Monodose Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FFS technology is ideal for various monodose pharmaceutical applications requiring precise single-dose
              packaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Oral Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Liquid medications, syrups, and oral suspensions in precise single doses
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pediatric Medications</h3>
                <p className="text-gray-600 text-sm">Child-friendly monodose packaging for accurate pediatric dosing</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hospital Medications</h3>
                <p className="text-gray-600 text-sm">Single-dose packaging for hospital and clinical use</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧴</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nutritional Supplements</h3>
                <p className="text-gray-600 text-sm">
                  Liquid vitamins and nutritional supplements in convenient monodose format
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Monodose Excellence?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact Target Co. today to learn more about our FFS monodose systems and how they can improve your
            pharmaceutical packaging precision and patient compliance.
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
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
