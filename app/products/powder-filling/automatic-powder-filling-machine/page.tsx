import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Download, CheckCircle, ArrowLeft, Star, Award, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"

export default function AutomaticPowderFillingMachinePage() {
  const specifications = [
    { label: "Production Capacity", value: "5,000 bottles/hour" },
    { label: "Filling Range", value: "1g to 5000g" },
    { label: "Filling Accuracy", value: "±0.5%" },
    { label: "Container Size", value: "10ml to 5000ml" },
    { label: "Power Consumption", value: "8 kW" },
    { label: "Compressed Air", value: "6 bar, 150 L/min" },
    { label: "Machine Dimensions", value: "3000 x 1500 x 2000 mm" },
    { label: "Weight", value: "1,800 kg" },
  ]

  const features = [
    "Servo-driven dosing system",
    "Weight control feedback",
    "Dust collection system",
    "Anti-static design",
    "Quick changeover capability",
    "Recipe management",
    "Automatic reject system",
    "Easy cleaning design",
  ]

  const applications = [
    "Pharmaceutical powders",
    "Food supplements",
    "Protein powders",
    "Cosmetic powders",
    "Chemical powders",
    "Herbal extracts",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/products" className="hover:text-green-600">
              Products
            </Link>
            <span>/</span>
            <Link href="/products/powder-filling" className="hover:text-green-600">
              Powder Filling
            </Link>
            <span>/</span>
            <span className="text-gray-900">Automatic Powder Filling Machine</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Model APF-5000</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">Automatic Powder Filling Machine</h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                High-speed automatic powder filling system with servo-driven dosing for precise and consistent powder
                dispensing in pharmaceutical and food industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
                src="/automatic-powder-filling.jpg"
                alt="Automatic Powder Filling Machine"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">High Precision</span>
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
                    <Award className="h-5 w-5 text-green-600" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Dust-Free Operation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">High Accuracy ±0.5%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">User-Friendly Interface</span>
                  </div>
                  <Separator />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Consultation</h2>
          <p className="text-xl mb-8 text-green-100 text-pretty">
            Contact our technical team for detailed specifications and customization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/quote" className="flex items-center gap-2">
                Request Quote
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
            <Link href="/products/powder-filling" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Powder Filling Equipment
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
