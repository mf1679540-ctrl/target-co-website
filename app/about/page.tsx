import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Users, Award, Clock, Shield, Target, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">About Target Co.</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Leading Pharmaceutical Machinery Distributor
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, Target Co. has been the trusted sole agent for premium pharmaceutical machinery
              manufacturers in Egypt and the Middle East, serving the region's leading pharmaceutical companies with
              cutting-edge equipment and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Machines Installed</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2008, Target Co. began with a simple mission: to provide Egyptian and Middle Eastern
                pharmaceutical manufacturers with access to the world's most advanced machinery and equipment. What
                started as a small distribution company has grown into the region's most trusted partner for
                pharmaceutical manufacturing solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founder, recognizing the growing pharmaceutical industry in the region, established exclusive
                partnerships with leading international manufacturers. This strategic approach has allowed us to offer
                our clients not just equipment, but comprehensive solutions that include installation, training,
                maintenance, and ongoing support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we proudly serve over 25 satisfied customers across Egypt, Saudi Arabia, UAE, Jordan, and
                Lebanon, having successfully installed more than 100 machines that continue to operate at peak
                efficiency in pharmaceutical facilities throughout the region.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/target-co-office-cairo.png"
                alt="Target Co. History"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We only partner with manufacturers who meet the highest international standards for pharmaceutical
                  equipment, ensuring our clients receive reliable, compliant machinery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Customer Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our success is measured by our customers' success. We provide comprehensive support from initial
                  consultation through installation and ongoing maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously seek out the latest technological advances in pharmaceutical manufacturing to help our
                  clients stay competitive and efficient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Target Co.?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique position as sole agent combined with our expertise makes us the ideal partner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Partnerships</h3>
                  <p className="text-gray-600">
                    As sole agents for leading manufacturers, we offer authentic products with competitive pricing and
                    direct manufacturer support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Expertise</h3>
                  <p className="text-gray-600">
                    Deep understanding of Middle Eastern pharmaceutical regulations, customs procedures, and local
                    market requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Service</h3>
                  <p className="text-gray-600">
                    From initial consultation to installation, training, and ongoing maintenance, we provide complete
                    lifecycle support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Excellence</h3>
                  <p className="text-gray-600">
                    Our team includes experienced engineers who understand pharmaceutical manufacturing processes and
                    equipment requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/pharmaceutical-factory-interior.png"
                alt="Why Choose Target Co."
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to serving the pharmaceutical industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Ahmed Hassan</CardTitle>
                <p className="text-gray-600">Founder & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  15+ years in pharmaceutical equipment distribution with extensive experience in Middle Eastern
                  markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Dr. Sarah Mohamed</CardTitle>
                <p className="text-gray-600">Technical Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pharmaceutical engineer with deep expertise in manufacturing processes and equipment validation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Omar Al-Rashid</CardTitle>
                <p className="text-gray-600">Sales Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regional sales expert with strong relationships across pharmaceutical companies in the Middle East.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Partner with Target Co. Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 25 satisfied customers who trust us for their pharmaceutical machinery needs. Let's discuss how we
            can support your manufacturing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+201044114633">Call Us: +20 104 411 4633</a>
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
