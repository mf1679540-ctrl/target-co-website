import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Download, CheckCircle, ArrowLeft, Star, Award, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"

export default function AutomaticTubeFillingMachinePage() {
  const specifications = [
    { label: "Production Capacity", value: "3,000 tubes/hour" },
    { label: "Tube Diameter", value: "13-60 mm" },
    { label: "Tube Length", value: "50-300 mm" },
    { label: "Filling Volume", value: "5-500 ml" },
    { label: "Filling Accuracy", value: "±1%" },
    { label: "Power Consumption", value: "12 kW" },
    { label: "Machine Dimensions", value: "4000 x 2000 x 2200 mm" },
    { label: "Weight", value: "3,200 kg" },
  ]

  const features = [
    "Servo-controlled filling system",
    "Hot air sealing technology",
    "Automatic tube loading",
    "Code printing capability",
    "Quality inspection system",
    "Reject handling system",
    "Recipe management",
    "Hygienic design",
  ]

  const applications = [
    "Cosmetic creams",
    "Pharmaceutical ointments",
    "Toothpaste",
    "Food pastes",
    "Adhesives",
    "Industrial gels",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/products" className="hover:text-purple-600">
              Products
            </Link>
            <span>/</span>
            <Link href="/products/tube-filling" className="hover:text-purple-600">
              Tube Filling
            </Link>
            <span>/</span>
            <span className="text-gray-900">Automatic Tube Filling Machine</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">Model ATF-3000</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">Automatic Tube Filling Machine</h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                High-speed automatic tube filling and sealing machine designed for cosmetics, pharmaceuticals, and food
                industries with precision filling and quality control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/quote" className="flex items-center gap-2">
                    Request Quote
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="tel:+201016400933" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/automatic-tube-filling.jpg"
                alt="Automatic Tube Filling Machine"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">High Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Hygienic Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Precise Filling ±1%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Easy Operation</span>
                  </div>
                  <Separator />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
              <div className="grid grid-cols-2 gap-3">
                {applications.map((app, index) => (
                  <Badge key={index} variant="secondary" className="justify-center py-2">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Consultation</h2>
          <p className="text-xl mb-8 text-purple-100 text-pretty">
            Contact our technical team for detailed specifications and customization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/quote" className="flex items-center gap-2">
                Request Quote
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <a href="tel:+201016400933" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +20 101 640 0933
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Category */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" asChild>
            <Link href="/products/tube-filling" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Tube Filling Equipment
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
