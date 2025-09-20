import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Users, Award, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Sole Agent in Egypt & Middle East</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Pharmaceutical Machinery Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted partner for high-quality pharmaceutical packing and industrial machines. Serving pharma
                factories across Egypt and the Middle East with cutting-edge equipment and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/products">View Our Products</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+201016400933">Call Us: +201 016 400 933</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/pharmaceutical-manufacturing.png"
                alt="Pharmaceutical Manufacturing Equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Target Co.?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the leading pharmaceutical machinery distributor with exclusive partnerships and deep industry
              expertise in Egypt and the Middle East.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Exclusive Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sole agent for premium pharmaceutical machinery manufacturers, ensuring authentic products and
                  competitive pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All our machines meet international pharmaceutical standards and regulatory requirements for safe
                  production.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated technical support team with deep knowledge of pharmaceutical manufacturing processes and
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of pharmaceutical machinery designed for precision and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/images/tablet-coating-system.jpg"
                  alt="Tablet Coating Machine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>Tablet Coating Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced coating systems for pharmaceutical tablets with precise control.
                </p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/products/coating-machines">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/images/fluid-bed-dryer-unit.jpg"
                  alt="Fluid Bed Dryer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>Fluid Bed Dryers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-efficiency drying systems for pharmaceutical granules and powders.
                </p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/products/fluid-bed-dryers">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/images/high-shear-mixer-diagram.jpg"
                  alt="High Shear Mixer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>High Shear Mixers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Precision mixing equipment for pharmaceutical formulations.</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/products/high-shear-mixers">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Manufacturing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our experts today for a consultation and discover how our pharmaceutical machinery can improve your
            production efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
