import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Droplets, CheckCircle, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LiquidFillingPage() {
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Liquid Filling Technology</h1>
              <p className="text-gray-600 mt-2">Advanced liquid filling solutions for pharmaceutical manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/liquid-filling-products.jpg"
            alt="Liquid Filling Products and Applications"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Liquid Filling Solutions</h2>
              <p className="text-xl">Comprehensive pharmaceutical liquid packaging technology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Technology Overview */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Advanced Liquid Filling Technology</CardTitle>
              <CardDescription className="text-lg text-blue-700">
                Our liquid filling systems are designed for precision, reliability, and versatility in pharmaceutical
                manufacturing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900">Plastic Bottles</h3>
                  <p className="text-sm text-blue-700">Compatible with all plastic bottle types</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-900">Glass Bottles</h3>
                  <p className="text-sm text-green-700">Precision handling for glass containers</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-purple-900">Eye Drops & Nozzles</h3>
                  <p className="text-sm text-purple-700">Specialized for ophthalmic solutions</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-orange-900">Plastic/Aluminum Capping</h3>
                  <p className="text-sm text-orange-700">Versatile capping solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Sections */}
        <div className="space-y-12">
          {/* Linear Liquid Filling Line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Linear Liquid Filling Line</h2>
              <p className="text-gray-600 mb-6">
                Advanced linear filling systems that integrate washing, filling, and capping operations in a streamlined
                process. These systems provide exceptional precision and reliability for pharmaceutical liquid
                production.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Integrated washing, filling, and capping</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Precise volume control and accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Suitable for various container sizes</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/linear-liquid-filling.jpg"
                alt="Linear Liquid Filling Line Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Rotary Washer and Mono Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/rotary-washer-mono-block.jpg"
                alt="Rotary Washer and Mono Block Technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rotary Washer and Mono Block</h2>
              <p className="text-gray-600 mb-6">
                High-efficiency rotary systems combining washing and filling operations in a compact mono block design.
                Perfect for high-speed production with consistent quality and minimal footprint.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Compact mono block design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">High-speed rotary operation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Integrated washing and filling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Rotary Liquid Filling Line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Rotary Liquid Filling Line</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive rotary filling solution featuring integrated washing, filling, capping, weighing,
                inspection, and labeling capabilities. This complete system ensures maximum efficiency and quality
                control throughout the entire packaging process.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Complete integrated solution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Quality inspection and weighing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Automated labeling system</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/complete-rotary-filling-line.jpg"
                alt="Complete Rotary Liquid Filling Line Technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Versatile Applications</CardTitle>
              <CardDescription className="text-lg">
                Our liquid filling technology supports a wide range of pharmaceutical applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Container Compatibility</h3>
                  <p className="text-gray-600 text-sm">
                    Plastic bottles, glass bottles, vials, and specialized containers
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Capping Solutions</h3>
                  <p className="text-gray-600 text-sm">Plastic caps, aluminum caps, and specialized closure systems</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Specialized Products</h3>
                  <p className="text-gray-600 text-sm">Eye drops, nasal sprays, and nozzle-based applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
