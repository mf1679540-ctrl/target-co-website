import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Award, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CleanRoomPage() {
  const equipment = [
    {
      name: "Sandwich Panel System",
      model: "SP-2000",
      image: "/sandwich-panel-system.jpg",
      description:
        "High-performance sandwich panel system for clean room construction with superior insulation, fire resistance, and easy installation. Core material options include PU, PIR, and rock wool.",
      capacity: "Various thicknesses 50-150mm",
      features: ["Fire resistant core", "Easy installation", "Superior insulation", "Smooth surface finish"],
      applications: ["Clean room walls", "Ceiling systems", "Pharmaceutical facilities", "Food processing plants"],
    },
    {
      name: "Clean Room Doors",
      model: "CRD-1200",
      image: "/clean-room-corridor.png",
      description:
        "Specialized clean room doors with viewing windows, interlocking systems, and hermetic sealing for contamination control and personnel safety.",
      capacity: "Single/Double leaf",
      features: ["Hermetic sealing", "Viewing windows", "Interlocking system", "Smooth surfaces"],
      applications: ["Personnel access", "Material transfer", "Emergency exits", "Zone separation"],
    },
    {
      name: "Laminar Air Flow Cabinet",
      model: "LAF-1200",
      image: "/laminar-air-flow-cabinet.jpg",
      description:
        "Horizontal and vertical laminar air flow cabinets for sterile work environments and product protection with HEPA filtration and UV sterilization.",
      capacity: "Class 100 environment",
      features: ["HEPA filters", "UV sterilization", "Digital controls", "Alarm system"],
      applications: ["Sterile compounding", "Sample preparation", "Quality testing", "Research work"],
    },
    {
      name: "Pass-Through Chamber",
      model: "PTC-600",
      image: "/pass-through-chamber.jpg",
      description:
        "Sterile pass-through chambers for material transfer between different cleanliness zones with interlocking doors and UV sterilization.",
      capacity: "600mm chamber",
      features: ["Interlocking doors", "UV sterilization", "HEPA filtration", "Pressure differential"],
      applications: ["Material transfer", "Contamination control", "Zone separation", "Sterile processing"],
    },
    {
      name: "Air Shower System",
      model: "ASS-1500",
      image: "/air-shower-system.jpg",
      description:
        "Personnel decontamination air shower system for clean room entry with high-velocity filtered air and automatic cycle control.",
      capacity: "1-2 persons",
      features: ["High-velocity air", "HEPA filtration", "Automatic cycle", "Emergency stop"],
      applications: ["Personnel decontamination", "Clean room entry", "Particle removal", "Contamination control"],
    },
    {
      name: "HVAC Clean Room System",
      model: "HVAC-3000",
      image: "/hvac-clean-room-system.jpg",
      description:
        "Complete HVAC system for clean room environments with precise temperature, humidity, and pressure control for pharmaceutical manufacturing.",
      capacity: "Variable capacity",
      features: ["Precise climate control", "Energy efficient", "Multi-zone control", "Monitoring systems"],
      applications: ["Large clean rooms", "Multi-zone facilities", "Climate control", "Energy management"],
    },
    {
      name: "Clean Room Monitoring System",
      model: "CMS-500",
      image: "/clean-room-monitoring-system.jpg",
      description:
        "Advanced environmental monitoring system for clean rooms with real-time data logging, alarms, and compliance reporting.",
      capacity: "Multi-parameter monitoring",
      features: ["Real-time monitoring", "Data logging", "Alarm systems", "Compliance reporting"],
      applications: [
        "Environmental monitoring",
        "Compliance documentation",
        "Quality assurance",
        "Regulatory reporting",
      ],
    },
    {
      name: "Clean Room Flooring System",
      model: "CRF-2000",
      image: "/clean-room-category-main.png",
      description:
        "Specialized flooring systems for clean rooms with anti-static properties, chemical resistance, and seamless installation for easy cleaning.",
      capacity: "Various thickness options",
      features: ["Anti-static properties", "Chemical resistant", "Seamless installation", "Easy maintenance"],
      applications: ["Clean room floors", "ESD protection", "Chemical areas", "High-traffic zones"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Clean Room Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Clean Room <span className="text-cyan-600">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Advanced clean room systems and equipment for pharmaceutical, biotechnology, and sterile manufacturing
              environments with complete contamination control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Clean Room Solutions</h2>
              <p className="text-gray-600 mb-6 text-pretty">
                Our clean room systems provide controlled environments for pharmaceutical and biotechnology
                manufacturing. From sandwich panel systems to specialized equipment, we ensure compliance with
                international standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">GMP Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">Advanced Filtration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">Continuous Monitoring</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/clean-room-category-main.png"
                alt="Clean Room Facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clean Room Equipment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              Complete range of clean room systems and equipment designed for sterile manufacturing and controlled
              environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-cyan-600 font-medium">Model: {item.model}</CardDescription>
                    </div>
                    <Badge variant="secondary">{item.capacity}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-pretty">{item.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.applications.map((app, idx) => (
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-cyan-100 text-pretty">
            Contact Target Co. today for expert consultation on clean room solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href="/quote" className="flex items-center gap-2">
                Request Quote
                <Zap className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
            >
              <a href="tel:+201016400933" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +20 101 640 0933
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
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
