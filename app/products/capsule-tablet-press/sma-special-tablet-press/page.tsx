import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Target, Zap, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SMASpecialTabletPressPage() {
  const specifications = {
    "Production Speed": "100,000 - 200,000 tablets/hour",
    "Tablet Types": "Tablet-in-tablet, Double layer, Triple layer",
    "Core Diameter": "3-15mm",
    "Max Pressure": "120 kN",
    "Power Consumption": "25 kW",
    Dimensions: "2800 x 1800 x 2200 mm",
    Weight: "3500 kg",
    Voltage: "380V/50Hz",
    "Air Pressure": "0.6-0.8 MPa",
    "Noise Level": "<75 dB",
  }

  const features = [
    "Tablet-in-tablet capability",
    "Multi-layer compression technology",
    "Precise core positioning system",
    "Layer separation control",
    "Advanced compression monitoring",
    "Automated quality inspection",
  ]

  const applications = [
    "Controlled release formulations",
    "Combination drug products",
    "Multi-phase release systems",
    "Targeted drug delivery",
    "Complex pharmaceutical tablets",
  ]

  const tabletTypes = [
    {
      type: "Tablet-in-Tablet",
      description: "Core tablet surrounded by outer coating layer",
      image: "/tablet-in-tablet-cross-section.png",
    },
    {
      type: "Double Layer",
      description: "Two distinct layers with different release profiles",
      image: "/multi-layer-tablets.png",
    },
    {
      type: "Triple Layer",
      description: "Three layers for complex release mechanisms",
      image: "/multi-layer-tablets.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products/capsule-tablet-press"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Capsule & Tablet Equipment
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900"> Tablet-in-Tablet Press</h1>
              <p className="text-gray-600 mt-2">
                Advanced multi-layer tablet press for complex pharmaceutical formulations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <Image
                src="/sma-tablet-press-s-series.png"
                alt="SMA S-Series Tablet-in-Tablet Press"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-green-100 text-green-800 mb-4">SMA Pharmatech Advanced</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Next-Generation Tablet Technology</h2>
              <p className="text-gray-600 mb-6">
                Tablet-in-Tablet Press represents cutting-edge pharmaceutical manufacturing technology, capable of
                producing complex multi-layer tablets, tablet-in-tablet formulations, and controlled release systems
                with unprecedented precision.
              </p>

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href="/quote">Get Quote</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="tel:+201016400933">Call Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Types Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Advanced Tablet Technologies</CardTitle>
            <CardDescription>Multiple tablet configurations for complex pharmaceutical applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {tabletTypes.map((tablet, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={tablet.image || "/placeholder.svg"}
                      alt={tablet.type}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{tablet.type}</h4>
                  <p className="text-sm text-gray-600">{tablet.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features & Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>High Precision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Advanced core positioning and layer compression ensure perfect tablet formation every time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Quality Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Integrated monitoring systems ensure consistent quality and reject defective tablets.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Versatile Production</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Capable of producing multiple tablet types with quick changeover capabilities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Layer Tablet Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/multi-layer-tablets.png"
                alt="Multi-layer tablets"
                width={400}
                height={300}
                className="rounded-lg w-full mb-4"
              />
              <p className="text-sm text-gray-600">
                Examples of double and triple layer tablets with distinct color layers for different release profiles
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tablet-in-Tablet Cross-Section</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/tablet-in-tablet-cross-section.png"
                alt="Tablet-in-tablet cross-section"
                width={400}
                height={300}
                className="rounded-lg w-full mb-4"
              />
              <p className="text-sm text-gray-600">
                Cross-section view showing core tablet positioned within outer coating layer
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Specifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>Ideal applications for advanced tablet-in-tablet technology</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                  <span className="text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Transform Your Tablet Manufacturing</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Discover how the SMA S-Series Tablet-in-Tablet Press can revolutionize your pharmaceutical production with
              advanced multi-layer technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="tel:+201016400933" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +20 101 640 0933
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Link href="mailto:info@targetco-egypt.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
