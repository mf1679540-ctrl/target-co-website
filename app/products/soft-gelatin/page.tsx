import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Award, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SoftGelatinPage() {
  const machines = [
    {
      name: "Soft Gelatin Encapsulation Machine",
      model: "SGE-2000",
      image: "/images/soft-gelatin-encapsulation.jpg",
      description:
        "High-precision soft gelatin capsule manufacturing system for pharmaceutical and nutraceutical applications with advanced control systems.",
      capacity: "2,000-5,000 capsules/hour",
      features: ["Automatic filling", "Temperature control", "Quality monitoring", "Easy cleaning", "PLC control"],
      applications: ["Vitamins", "Supplements", "Pharmaceuticals", "Herbal extracts"],
    },
    {
      name: "Soft Gelatin Production Line",
      model: "SGPL-Complete",
      image: "/images/soft-gelatin-production-line.jpg",
      description:
        "Complete soft gelatin capsule production line with encapsulation machine and drying system for continuous manufacturing.",
      capacity: "Complete production line",
      features: ["Integrated system", "Drying tunnel", "Quality control", "Automated handling", "GMP compliant"],
      applications: [
        "Large scale production",
        "Pharmaceutical manufacturing",
        "Nutraceutical production",
        "Contract manufacturing",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Soft Gelatin Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Soft Gelatin <span className="text-blue-600">Encapsulation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Advanced soft gelatin capsule manufacturing equipment for pharmaceutical, nutraceutical, and supplement
              industries with precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Soft Gelatin Manufacturing Excellence</h2>
              <p className="text-gray-600 mb-6 text-pretty">
                Our soft gelatin encapsulation systems provide complete solutions for manufacturing high-quality soft
                capsules. From gelatin preparation to final inspection, we offer integrated equipment for efficient
                production with pharmaceutical-grade quality standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">GMP Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">High Efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/soft-gelatin-equipment-1.jpeg"
                alt="Soft Gelatin Manufacturing Equipment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Soft Gelatin Equipment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              Complete range of soft gelatin manufacturing equipment designed for pharmaceutical and nutraceutical
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {machines.map((machine, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={machine.image || "/placeholder.svg"} alt={machine.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{machine.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">Model: {machine.model}</CardDescription>
                    </div>
                    <Badge variant="secondary">{machine.capacity}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-pretty">{machine.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {machine.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {machine.applications.map((app, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 text-pretty">
            Contact Target Co. today for expert consultation on soft gelatin manufacturing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quote" className="flex items-center gap-2">
                Request Quote
                <Zap className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a href="tel:+201016400933" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +20 101 640 0933
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <a href="mailto:info@targetco.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
