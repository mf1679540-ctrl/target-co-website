import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Award, Zap, Shield, ArrowRight, Target, Gauge, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PowderFillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Powder Filling Technology</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Advanced Powder Filling <span className="text-green-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              Cutting-edge powder filling technology for pharmaceutical, food, and chemical industries with unmatched
              precision, efficiency, and contamination control.
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

      {/* Technology Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionary Powder Filling Technology</h2>
              <p className="text-gray-600 mb-6 text-pretty">
                Our advanced powder filling systems represent the pinnacle of pharmaceutical manufacturing technology.
                From precise dosing mechanisms to contamination-free environments, every aspect is engineered for
                excellence in powder handling and packaging operations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Contamination-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Precision Dosing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">High-Speed Operation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Flexible Configuration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/powder-filling-products.jpg"
                alt="Powder Filling Process Technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Filling Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              Discover the sophisticated technologies that power modern powder filling operations, delivering
              unparalleled accuracy and efficiency in pharmaceutical packaging.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <div className="relative h-80 mb-4">
                <Image
                  src="/images/powder-filling-line.jpg"
                  alt="Integrated Powder Filling Production Line"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Production Line Technology</h3>
              <p className="text-gray-600 text-pretty">
                Complete automated powder filling systems with precision control and quality monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-80 mb-4">
                <Image
                  src="/images/multi-head-filling.jpg"
                  alt="Multi-Head Powder Filling Systems"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Head Filling Systems</h3>
              <p className="text-gray-600 text-pretty">
                Advanced multi-station filling technology for high-speed pharmaceutical powder packaging
              </p>
            </div>
          </div>

          {/* Technology Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Advantages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Exceptional Accuracy</h4>
                <p className="text-gray-600 text-sm">
                  Advanced dosing systems ensure consistent fill weights with minimal variation
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Contamination Control</h4>
                <p className="text-gray-600 text-sm">
                  Enclosed systems and dust collection maintain sterile processing environments
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Operational Efficiency</h4>
                <p className="text-gray-600 text-sm">
                  High-speed processing with minimal downtime and easy changeover capabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Powder Filling Operations?</h2>
          <p className="text-xl mb-8 text-green-100 text-pretty">
            Contact Target Co. today for expert consultation on advanced powder filling technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
