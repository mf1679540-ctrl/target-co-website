import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Layers, Zap, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SMASpecialCapsuleFillingPage() {
  const specifications = {
    "Filling Speed": "75,000 - 150,000 capsules/hour",
    "Capsule Sizes": "000, 00, 0, 1, 2, 3, 4",
    "Fill Combinations": "Powder+Powder, Powder+Pellet, Tablet+Powder",
    "Dosing Accuracy": "±1.5%",
    "Power Consumption": "22 kW",
    Dimensions: "3500 x 1800 x 2200 mm",
    Weight: "3200 kg",
    Voltage: "380V/50Hz",
    "Air Pressure": "0.6-0.8 MPa",
    "Noise Level": "<80 dB",
  }

  const features = [
    "Multi-component filling capability",
    "Flexible combination options",
    "Precise dual dosing systems",
    "Advanced process control",
    "Independent fill weight control",
    "Comprehensive quality monitoring",
  ]

  const applications = [
    "Multi-layer pharmaceutical formulations",
    "Combination therapy products",
    "Complex dosage forms",
    "Sustained release formulations",
    "Targeted drug delivery systems",
  ]

  const fillCombinations = [
    { type: "Powder + Powder", description: "Two different powders in separate layers" },
    { type: "Powder + Pellet", description: "Powder base with pellet components" },
    { type: "Tablet + Powder", description: "Mini tablet with powder coating" },
    { type: "Pellet + Pellet", description: "Multiple pellet formulations" },
    { type: "Multi-layer", description: "Complex multi-component systems" },
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
              <Layers className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900"> Multi-Component Capsule Filling Machine</h1>
              <p className="text-gray-600 mt-2">
                Advanced multi-component filling for complex pharmaceutical formulations
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
                src="/capsule-filling-combinations.png"
                alt="SMA Multi-Component Capsule Filling Machine"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="bg-green-100 text-green-800 mb-4">SMA Pharmatech Advanced</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Revolutionary Multi-Component Technology</h2>
              <p className="text-gray-600 mb-6">
                The Multi-Component Capsule Filling Machine represents the pinnacle of capsule filling technology, capable of creating complex formulations with multiple active ingredients in precise combinations. Perfect for combination therapies and advanced drug delivery systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">150K</div>
                  <div className="text-sm text-gray-600">Capsules/Hour</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">±1.5%</div>
                  <div className="text-sm text-gray-600">Dosing Accuracy</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href="/quote">Get Quote</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="tel:+201044114633">Call Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Fill Combinations Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Available Fill Combinations</CardTitle>
            <CardDescription>
              Multiple component filling options for complex pharmaceutical formulations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fillCombinations.map((combo, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{combo.type}</h4>
                  <p className="text-sm text-gray-600">{combo.description}</p>
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
              <CardTitle>Advanced Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sophisticated control systems manage multiple fill stations with independent weight control.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Precision Filling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                ±1.5% dosing accuracy across all components ensures consistent product quality.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Flexible Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Adaptable to various formulation requirements with quick changeover capabilities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Product Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Component Capsules</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/multi-component-capsules.png"
                alt="Multi-component capsules"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                Examples of complex capsule formulations with multiple active ingredients
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tablet-in-Capsule Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/tablet-in-capsules.png"
                alt="Tablet in capsules"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                Advanced tablet-in-capsule formulations for controlled release
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
            <CardDescription>Ideal applications for multi-component capsule filling technology</CardDescription>
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
            <h3 className="text-2xl font-bold mb-4">Revolutionize Your Capsule Formulations</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Discover how the SMA Multi-Component Capsule Filling Machine can enable complex pharmaceutical
              formulations and combination therapies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="tel:+201044114633" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +20 104 411 4633
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
