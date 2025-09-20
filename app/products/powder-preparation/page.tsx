import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Blend, Thermometer, Settings, ArrowLeft, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PowderPreparationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">Powder Preparation</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Button variant="outline" size="sm" asChild className="w-fit bg-transparent mb-6">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
              </Link>
            </Button>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Powder Processing</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Powder Preparation Equipment</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete powder processing solutions for pharmaceutical manufacturing including high shear mixing, fluid
              bed drying, milling, and roller compaction for optimal powder preparation and tablet production.
            </p>
          </div>
        </div>
      </section>

      {/* Category Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/powder-preparation-equipment.jpg"
              alt="Powder Preparation Equipment Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                Complete Powder Processing Solutions
              </h2>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our comprehensive range of powder preparation equipment includes granulators, high shear mixers, fluid bed
              dryers, V-blenders, bin blenders, and containment systems - everything needed for complete pharmaceutical
              powder processing workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Powder Preparation Machines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five essential machines for complete pharmaceutical powder processing workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* High Shear Mixer */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/high-shear-mixer.jpg" alt="High Shear Mixer" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Blend className="h-6 w-6 text-blue-600 mr-2" />
                  High Shear Mixer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rapid mixer granulator (RMG) suitable for high speed dispersion of dry powders and wet granulation.
                  Perfect mixing in short time with impeller and high-speed chopper for uniform granules.
                </p>

                <div className="mb-4">
                  <span className="font-semibold text-sm">Key Features:</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• High uniformity mixing</li>
                    <li>• Multi-function: mixing, granulating, drying</li>
                    <li>• GMP compliant design</li>
                    <li>• Multiple safety interlocks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Fluid Bed Dryers */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/fluid-bed-dryer.jpg" alt="Fluid Bed Dryer" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Thermometer className="h-6 w-6 text-blue-600 mr-2" />
                  Fluid Bed Dryers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fluidized bed dryer (FBD) for reducing moisture content of powder and granules. Multi-function
                  processor for blending, granulating, drying, pelletizing and coating applications.
                </p>

                <div className="mb-4">
                  <span className="font-semibold text-sm">Key Features:</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Uniform fluid drying</li>
                    <li>• No dead angles</li>
                    <li>• Integrated spray granulation</li>
                    <li>• Energy efficient operation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Mill and Mixers */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/mills.jpg" alt="Mill and Mixers" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  Mills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete milling and mixing solutions including cone mills, power mills, and bin blenders. Perfect for
                  particle size reduction and uniform powder blending in pharmaceutical production.
                </p>

                <div className="mb-4">
                  <span className="font-semibold text-sm">Key Features:</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Precise particle size control</li>
                    <li>• Gentle blending action</li>
                    <li>• Easy cleaning and maintenance</li>
                    <li>• All mills shapes are available </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Roller Compactor */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/roller-compactor.jpg" alt="Roller Compactor" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Roller Compactor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dry granulation roller compactor for continuous manufacturing without water or solvents. Increases
                  bulk density and improves flow properties for better tablet compression.
                </p>

                <div className="mb-4">
                  <span className="font-semibold text-sm">Key Features:</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• No water/solvent required</li>
                    <li>• Compression, milling, granulating</li>
                    <li>• Improved flow properties</li>
                    <li>• Power saving </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Mixers */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/mixers.jpg" alt="Mixers" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Blend className="h-6 w-6 text-blue-600 mr-2" />
                  Mixers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced pharmaceutical mixing equipment including V-blenders, bin blenders, and specialized mixing
                  systems. Designed for uniform powder blending with gentle mixing action to preserve particle
                  integrity.
                </p>

                <div className="mb-4">
                  <span className="font-semibold text-sm">Key Features:</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Gentle tumble blending</li>
                    <li>• Multiple mixer configurations</li>
                    <li>• Easy loading and discharge</li>
                    <li>• Excellent blend uniformity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Powder Preparation Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our powder processing specialists to find the perfect equipment combination for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+201016400933">Call Now: +20 101 640 0933</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
