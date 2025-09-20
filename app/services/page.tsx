import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Wrench, Shield, Users, CheckCircle, Phone, Clock, Award, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Pharmaceutical Machinery Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From initial consultation to ongoing maintenance, we provide complete lifecycle support for your
              pharmaceutical manufacturing equipment across Egypt and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions designed to maximize your pharmaceutical manufacturing efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Machine Supply & Installation */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Machine Supply & Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <Image
                    src="/pharmaceutical-installation.jpg"
                    alt="Equipment Installation"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-lg">
                  As sole agents for leading pharmaceutical machinery manufacturers, we provide authentic equipment with
                  professional installation services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Equipment sourcing and procurement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Professional installation by certified technicians</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">System integration and testing</span>
                  </div>
                  
                  
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Installation Quote</Button>
              </CardContent>
            </Card>

            {/* Maintenance & Support */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Maintenance & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <Image
                    src="/pharmaceutical-maintenance.jpg"
                    alt="Equipment Maintenance"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-lg">
                  Keep your pharmaceutical equipment running at peak performance with our comprehensive maintenance and
                  technical support services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Preventive maintenance programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">24/7 emergency technical support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Genuine spare parts supply</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Equipment upgrades and modifications</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Maintenance</Button>
              </CardContent>
            </Card>

            {/* Compliance & Training */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Compliance & Training</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <Image
                    src="/pharmaceutical-training.jpg"
                    alt="Training Services"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-lg">
                  Ensure regulatory compliance and maximize operator efficiency with our specialized training and
                  consulting services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Regulatory compliance consulting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Comprehensive operator training programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">GMP compliance documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Equipment validation protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Safety training and certification</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Training Session</Button>
              </CardContent>
            </Card>

            {/* Consultation & Project Management */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Consultation & Project Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <Image
                    src="/pharmaceutical-consultation.jpg"
                    alt="Consultation Services"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-lg">
                  Expert guidance from initial planning through project completion, ensuring optimal equipment selection
                  and implementation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Manufacturing process analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Equipment selection and specification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Project planning and timeline management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Budget optimization and cost analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Risk assessment and mitigation</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Consultation</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Our Services Stand Out</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines technical expertise with regional knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Round-the-clock technical support to minimize downtime and ensure continuous operation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Rapid Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Quick response times with local technicians and readily available spare parts inventory.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Certified Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Factory-trained technicians with manufacturer certifications and pharmaceutical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Tailored service packages designed to meet your specific operational requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure successful project delivery and ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Initial assessment of your requirements and manufacturing processes</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Detailed project planning with timeline, specifications, and budget</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Professional installation, testing, and commissioning of equipment</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance, training, and technical support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our service team today to discuss your pharmaceutical machinery needs and discover how we can
            support your manufacturing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+2001016400933">Call Now: +200 101 640 0933</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
