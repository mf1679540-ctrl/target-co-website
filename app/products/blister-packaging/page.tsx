import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle, Settings, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlisterPackagingPage() {
  const machines = [
    {
      id: "flat-plate-sealing",
      name: "DPH-270/330/380D High-Speed Rotary Sealing Blister Machine",
      image: "/images/rotary-sealing-blister-machine.jpg",
      description:
        "High-speed rotary plate sealing blister packing machine suitable for automatic Aluminum PVC packaging for capsules, tablets and chewing gums. Features flat pressure forming for strong and average blisters.",
      capacity: "80-180 punches/minute",
      features: [
        "Flat pressure forming",
        "Servo traction system",
        "Push-oriented mould change",
        "Camera inspection system",
      ],
      specifications: {
        "Punching Frequency": "80-180 times/min",
        "Maximum Molding Area": "240×260mm (DPH-270D) / 240×370mm (DPH-380D)",
        "Maximum Forming Depth": "13mm",
        "PVC Material": "0.15-0.5×270/380mm",
        "Power Consumption": "28 kW",
        Dimensions: "4050×980×1750mm (DPH-270D) / 4050×1030×1750mm (DPH-380D)",
      },
      applications: ["ALU/ALU", "ALU/PVC"],
    },
    {
      id: "rotary-sealing",
      name: "DPH-270/380DL High-Speed Tropical Aluminum Rotary Blister Machine",
      image: "/images/tropical-aluminum-blister-machine.jpg",
      description:
        "High-speed tropical aluminum blister packing machine with rotary sealing technology. Adds forming and sealing process of tropical aluminum for improved moisture proof and light avoiding properties.",
      capacity: "50-105 punches/minute",
      features: [
        "Tropical aluminum sealing",
        "Rotary sealing technology",
        "Enhanced moisture protection",
        "Servo motor control",
      ],
      specifications: {
        "Punching Frequency": "50-105 times/min",
        "Maximum Molding Area": "240×260mm (DPH-270DL) / 360×230mm (DPH-380DL)",
        "Maximum Forming Depth": "13mm",
        "Cold Aluminum": "0.15-0.5×270/380mm",
        "Power Consumption": "28 kW",
        Dimensions: "6550×980×1750mm (DPH-270DL) / 6550×1030×1750mm (DPH-380DL)",
      },
      applications: ["ALU/PVC/ALU"],
    },
    {
      id: "linking-line",
      name: "DPH380DLS-DXH400S High-Speed Blister Packaging Linkage Line",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkage%20long.jpg-EAe7eOJsKxjBs7NgATHk8dvHUlHAMh.jpeg",
      description:
        "Complete high-speed blister packaging and automatic cartoning linkage production line with aluminum-plastic-aluminum full servo technology for integrated pharmaceutical packaging.",
      capacity: "Complete production line",
      features: [
        "Integrated blister-cartoning line",
        "Full servo control",
        "Aluminum-plastic-aluminum",
        "Automatic linkage system",
      ],
      specifications: {
        "Production Type": "Integrated blister + cartoning line",
        "Blister Speed": "High-speed operation",
        "Cartoning Speed": "Synchronized with blister",
        "Control System": "Full servo automation",
        "Power Consumption": "Combined system power",
        "Line Configuration": "Customizable layout",
      },
      applications: ["Complete packaging lines", "High-volume production", "Automated pharmaceutical packaging"],
    },
    {
      id: "cartoning-machine",
      name: "HPM 500S Cartoning Machine",
      image: "/images/hpm-500s-cartoning-machine.jpg",
      description:
        "High-speed automatic cartoning machine designed for pharmaceutical packaging with digital display regulating mechanism, feeding mechanism, and high-speed box sucking device for efficient carton packaging.",
      capacity: "Up to 500 cartons/minute",
      features: ["Digital display control", "Automatic feeding", "High-speed operation", "Box sucking device"],
      specifications: {
        "Production Speed": "Up to 500 cartons/minute",
        "Carton Size Range": "Customizable dimensions",
        "Control System": "Digital display regulation",
        "Feeding System": "Automatic mechanism",
        "Power Consumption": "15-20 kW",
        "Machine Dimensions": "Compact industrial design",
      },
      applications: ["Pharmaceutical carton packaging", "Blister pack cartoning", "Product boxing", "Final packaging"],
    },
    {
      id: "medical-consumables-blister",
      name: "Medical Consumables Blister Packaging Machine",
      image: "/images/medical-consumables-blister.jpeg",
      description:
        "Specialized blister packaging machine for medical consumables including syringes, medical devices, and diagnostic products. Features no needle rejection device, mechanical hand automatic feeding, and ink jet printing with XY direction capability.",
      capacity: "High-speed medical packaging",
      features: ["No needle rejection device", "Automatic feeding system", "Ink jet printing", "XY direction control"],
      specifications: {
        "Production Type": "Medical consumables blister packaging",
        "Feeding System": "Mechanical hand automatic",
        "Printing System": "Ink jet with XY direction",
        "Quality Control": "No needle rejection device",
        "Control System": "Advanced automation",
        Applications: "Medical devices and consumables",
      },
      applications: [
        "Syringe packaging",
        "Medical device blister packs",
        "Diagnostic product packaging",
        "Sterile consumables",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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
            <div className="p-3 bg-purple-100 rounded-lg">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blister & Packaging Equipment</h1>
              <p className="text-gray-600 mt-2">Complete packaging solutions for pharmaceutical products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Overview */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-4">Packaging Solutions</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Packaging Technology</h2>
              <p className="text-gray-600 mb-6">
                Our blister packaging equipment ensures product integrity, extends shelf life, and meets international
                pharmaceutical packaging standards. From high-speed blister packing to complete cartoning solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">GMP Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Product Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">High Speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Automated Systems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/blister-products-showcase.jpeg"
                alt="Blister packaging equipment"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Hualian Supplier Information Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Powered by Hualian Excellence</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Our blister packaging equipment is manufactured by HPM a leading innovator in pharmaceutical packaging
              automation with over 500 employees and 140,000m² of advanced manufacturing facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4 inline-block">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Leadership</h3>
              <p className="text-blue-100 text-sm">
                Recognized as a leading industrial enterprise in Ruian City, specializing in automated packaging
                equipment for pharmaceutical, daily chemical, and food industries.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4 inline-block">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Innovation</h3>
              <p className="text-blue-100 text-sm">
                Continuous research and development in blister packaging technology, with participation in major
                international exhibitions including Interpack, ACHEMA, and AllPack.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4 inline-block">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-blue-100 text-sm">
                Advanced manufacturing capabilities with comprehensive technical services, ensuring reliable and
                efficient packaging solutions for pharmaceutical applications worldwide.
              </p>
            </div>
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
                  <div className="space-y-1">
                    {Object.entries(machine.specifications)
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                  </div>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 mt-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Packaging Solutions?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Our packaging experts can help you choose the right equipment for your specific pharmaceutical packaging
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="tel:+201016400933" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call +201 016 400 933
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
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
