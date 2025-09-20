import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SMAOrdinaryTabletPressPage() {
  const specifications = {
    "Production Speed": "5,000 - 10,000 tablets/hour",
    "Tablet Diameter": "6-25mm",
    "Max Pressure": "80 kN",
    "Tablet Thickness": "2-8mm",
    "Power Consumption": "3 kW",
    Dimensions: "800 x 600 x 1400 mm",
    Weight: "450 kg",
    Voltage: "380V/50Hz",
    "Air Pressure": "0.6-0.8 MPa",
    "Noise Level": "<75 dB",
  }

  const features = [
    "Precise compression control",
    "Easy operation interface",
    "Quick changeover system",
    "GMP compliant design",
    "Overload protection",
    "Dust extraction system",
  ]

  const applications = [
    "Standard pharmaceutical tablets",
    "R&D and development batches",
    "Clinical trial production",
    "Small batch manufacturing",
    "Quality control testing",
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
              <Settings className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900"> Tablet Press</h1>
              <p className="text-gray-600 mt-2">
                High-precision single punch tablet press for pharmaceutical production
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
                alt="SMA S60 Ordinary Tablet Press"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-green-100 text-green-800 mb-4">SMA Pharmatech</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Precision Tablet Manufacturing</h2>
              <p className="text-gray-600 mb-6">
                Tablet Press delivers exceptional precision and reliability for standard pharmaceutical tablet production. Designed with cGMP compliance and user-friendly operation for R&amp;D and small batch manufacturing.
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

        {/* Features & Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>High Precision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Advanced compression control ensures consistent tablet quality and weight uniformity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>cGMP Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Designed to meet pharmaceutical manufacturing standards with full documentation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Easy Operation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                User-friendly interface with quick changeover capabilities for efficient production.
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
            <CardDescription>Ideal applications for the SMA S60 Ordinary Tablet Press</CardDescription>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Tablet Production?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Contact our experts to learn more about the Tablet Press and how it can improve your pharmaceutical
              manufacturing process.
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
