import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Pill, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CapsuleTabletPressPage() {
  const machines = [
    {
      id: "sma-ordinary-tablet-press",
      name: "Tablet press machines",
      image: "/images/tablet-press-machines.jpg",
      description:
        "High-precision single punch tablet press technology for standard pharmaceutical tablet production with excellent compression control and superior manufacturing capabilities.",
      capacity: "Up to 10,000 tablets/hour",
      features: ["Precise compression", "Easy operation", "Quick changeover", "GMP compliant"],
      specifications: {
        "Production Speed": "5,000 - 10,000 tablets/hour",
        "Tablet Diameter": "6-25mm",
        "Max Pressure": "80 kN",
        "Tablet Thickness": "2-8mm",
        "Power Consumption": "3 kW",
        Dimensions: "800 x 600 x 1400 mm",
      },
      applications: ["Standard tablets", "R&D batches", "Clinical trials"],
    },
    {
      id: "sma-ordinary-capsule-filling",
      name: "capsule filling machines",
      image: "/images/capsule-filling-machines.jpg",
      description:
        "Advanced automatic capsule filling technology for standard powder and pellet filling with exceptional accuracy, reliability, and cutting-edge manufacturing precision.",
      capacity: "Up to 180,000 capsules/hour",
      features: ["Automatic operation", "Dosing accuracy", "Capsule closing", "Dust containment"],
      specifications: {
        "Filling Speed": "90,000 - 180,000 capsules/hour",
        "Capsule Sizes": "000, 00, 0, 1, 2, 3, 4",
        "Fill Weight Range": "5mg - 1500mg",
        "Dosing Accuracy": "±2%",
        "Power Consumption": "18 kW",
        Dimensions: "3200 x 1600 x 2000 mm",
      },
      applications: ["Powder filling", "Pellet filling", "Granule filling"],
    },
    {
      id: "sma-special-capsule-filling",
      name: "Multi-Component Capsule Filling Machines",
      image: "/capsule-filling-combinations.png",
      description:
        "Revolutionary advanced capsule filling technology capable of filling capsules with multiple components: powder + powder, powder + pellet, tablet + powder, and various innovative combinations with unmatched precision.",
      capacity: "Up to 150,000 capsules/hour",
      features: ["Multi-component filling", "Flexible combinations", "Precise dosing", "Advanced control"],
      specifications: {
        "Filling Speed": "75,000 - 150,000 capsules/hour",
        "Capsule Sizes": "000, 00, 0, 1, 2, 3, 4",
        "Fill Combinations": "Powder+Powder, Powder+Pellet, Tablet+Powder",
        "Dosing Accuracy": "±1.5%",
        "Power Consumption": "22 kW",
        Dimensions: "3500 x 1800 x 2200 mm",
      },
      applications: ["Multi-layer formulations", "Combination therapies", "Complex dosage forms"],
    },
    {
      id: "sma-special-tablet-press",
      name: "Tablet-in-Tablet Press machines",
      image: "/multi-layer-tablets.png",
      description:
        "Specialized advanced tablet press technology for producing tablet-in-tablet, double layer, and triple layer tablets with precise core positioning, exceptional layer compression, and groundbreaking manufacturing innovation.",
      capacity: "Up to 200,000 tablets/hour",
      features: ["Tablet-in-tablet capability", "Multi-layer compression", "Core positioning", "Layer separation"],
      specifications: {
        "Production Speed": "100,000 - 200,000 tablets/hour",
        "Tablet Types": "Tablet-in-tablet, Double layer, Triple layer",
        "Core Diameter": "3-15mm",
        "Max Pressure": "120 kN",
        "Power Consumption": "25 kW",
        Dimensions: "2800 x 1800 x 2200 mm",
      },
      applications: ["Controlled release", "Combination drugs", "Multi-phase release"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Products
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Pill className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Capsule Filling & Tablet Press</h1>
              <p className="text-gray-600 mt-2">Precision equipment for tablet and capsule manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Supplier Information */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Powered by Advanced Pharmaceutical Technology Excellence</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Target Co. brings you cutting-edge pharmaceutical manufacturing technology with decades of innovation and
              excellence. Our advanced equipment specializes in solid dosage form production including revolutionary
              tablet-in-tablet technology, multi-component capsule filling, and precision pharmaceutical manufacturing
              solutions that set industry standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">29+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">Global</div>
                <div className="text-blue-100">Market Presence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">Advanced</div>
                <div className="text-blue-100">Technology Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Overview */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Solid Dosage Forms</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Manufacturing Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our advanced tablet press and capsule filling equipment delivers exceptional precision and reliability
                for pharmaceutical solid dosage form production. From specialized tablet-in-tablet technology to
                multi-component capsule filling systems, experience manufacturing excellence at its finest.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">FDA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Quality Assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">High Precision</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Versatile Formats</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/multi-component-capsules.png"
                alt="SMA tablet press and capsule filling equipment"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src="/tablet-in-tablet-cross-section.png"
              alt="Tablet-in-tablet technology"
              width={200}
              height={150}
              className="mx-auto rounded-lg mb-4"
            />
            <h3 className="font-bold text-gray-900 mb-2">Tablet-in-Tablet</h3>
            <p className="text-sm text-gray-600">Advanced core tablet technology for controlled release</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src="/tablet-in-capsules.png"
              alt="Multi-component capsules"
              width={200}
              height={150}
              className="mx-auto rounded-lg mb-4"
            />
            <h3 className="font-bold text-gray-900 mb-2">Multi-Component Capsules</h3>
            <p className="text-sm text-gray-600">Complex filling combinations for advanced formulations</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src="/multi-layer-tablets.png"
              alt="Multi-layer tablets"
              width={200}
              height={150}
              className="mx-auto rounded-lg mb-4"
            />
            <h3 className="font-bold text-gray-900 mb-2">Multi-Layer Tablets</h3>
            <p className="text-sm text-gray-600">Double and triple layer tablet production</p>
          </div>
        </div>

        {/* Machines Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine) => (
            <Card key={machine.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src={machine.image || "/placeholder.svg"} alt={machine.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{machine.name}</CardTitle>
                <CardDescription>{machine.description}</CardDescription>
                <Badge variant="secondary" className="w-fit">
                  {machine.capacity}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {machine.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {machine.applications.map((app, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href={`/products/capsule-tablet-press/${machine.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 mt-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Tablet & Capsule Production Solutions?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Our solid dosage experts can help you select the perfect tablet press or capsule filling equipment for
              your production needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="tel:+201016400933" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +20 101 640 0933
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
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
