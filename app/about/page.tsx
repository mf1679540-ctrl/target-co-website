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
                With nearly 20 years of experience in the pharmaceutical machinery industry, Target Co. was founded with
                a clear responsibility: to provide the market with high-quality, GMP-compliant machines that rival
                European standards — yet remain affordable and efficient. Since 2009, our carefully selected partners
                from leading East Asian manufacturers have supplied equipment that continues to perform with outstanding
                reliability. This long-standing track record proves our commitment to durability, innovation, and trust.
                What sets us apart is not only our machines, but also our after-sales service, technical support, rapid
                delivery, and cost-effective solutions — ensuring smooth, uninterrupted production for our clients.
                Today, we proudly serve pharmaceutical, veterinary, nutraceutical, and cosmetics manufacturers of all
                scales, from start-ups to industry leaders. Looking ahead, our vision is clear: to become one of the
                most trusted partners in the pharmaceutical machinery field, and the first choice for clients who seek
                the perfect balance of quality, price, and continuity.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/target-co-office-cairo.jpg"
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
                src="/pharmaceutical-factory-interior.jpg"
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
                <CardTitle>{"Mr. Ahmed Badawy"}</CardTitle>
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
                <CardTitle>Eng. Ahmed Esmail </CardTitle>
                <p className="text-gray-600">{"After sales manager "}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pharmaceutical equipment engineer with deep expertise in after sales services maintenance ,programming
                  and installation process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>{"Eng. Mohamed Ahmed "}</CardTitle>
                <p className="text-gray-600">{"Consultant"}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With deep expertise in planning, designing, and implementing pharmaceutical manufacturing projects,
                  expert in turnkey projects.
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
              <a href="tel:+201016400933">Call Us: +201 016 400 933</a>
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
