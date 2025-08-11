"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calculator, Building, Users, FileText, Send, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { submitQuoteRequest } from "../actions/quote"
import { useActionState } from "react"

export default function QuotePage() {
  const [state, formAction, isPending] = useActionState(submitQuoteRequest, null)

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
            <span className="text-gray-900">Get Quote</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Button variant="outline" size="sm" asChild className="w-fit mb-6 bg-transparent">
              <Link href="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Contact
              </Link>
            </Button>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">Request Quote</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Get Your Custom Quote</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Provide us with detailed information about your pharmaceutical manufacturing requirements and we'll
              prepare a comprehensive quote tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Success/Error Message */}
      {state && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
            <div
              className={`p-4 rounded-lg border ${
                state.success ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-center">
                {state.success ? <CheckCircle className="h-5 w-5 mr-2" /> : <AlertCircle className="h-5 w-5 mr-2" />}
                <p className="font-medium">{state.message}</p>
              </div>
              {state.success && state.quoteId && <p className="mt-2 text-sm">Quote Reference: {state.quoteId}</p>}
            </div>
          </div>
        </section>
      )}

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center">
                <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                Pharmaceutical Machinery Quote Request
              </CardTitle>
              <p className="text-gray-600 mt-4">
                Please fill out all sections to help us provide you with the most accurate quote. Our team will review
                your requirements and respond within 24-48 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-8">
                {/* Hidden field for user agent */}
                <input
                  type="hidden"
                  name="userAgent"
                  value={typeof navigator !== "undefined" ? navigator.userAgent : ""}
                />

                {/* Company Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-gray-200">
                    <Building className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Company Name</label>
                      <Input name="companyName" placeholder="ABC Pharmaceuticals Ltd." />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Company Registration Number
                      </label>
                      <Input name="registrationNumber" placeholder="Registration/License Number" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Industry Type</label>
                    <select
                      name="industryType"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select industry type</option>
                      <option value="pharmaceutical-manufacturing">Pharmaceutical Manufacturing</option>
                      <option value="generic-drugs">Generic Drug Manufacturing</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="cosmetics">Cosmetics & Personal Care</option>
                      <option value="food-supplements">Food Supplements</option>
                      <option value="research-development">Research & Development</option>
                      <option value="contract-manufacturing">Contract Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Contact Person Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-gray-200">
                    <Users className="h-6 w-6 text-purple-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Contact Person Details</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">First Name *</label>
                      <Input name="firstName" placeholder="Ahmed" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name *</label>
                      <Input name="lastName" placeholder="Hassan" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Job Title/Position</label>
                      <Input name="jobTitle" placeholder="Head Engineer / Factory Owner / Production Manager" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Department</label>
                      <Input name="department" placeholder="Production / Engineering / Procurement" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                      <Input name="email" type="email" placeholder="ahmed@company.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Direct Phone Number *</label>
                      <Input name="phone" placeholder="+20 XXX XXX XXXX" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Alternative Phone</label>
                      <Input name="alternativePhone" placeholder="Alternative contact number" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Preferred Contact Method</label>
                      <select
                        name="preferredContact"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select preference</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="in-person">In-Person Meeting</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Equipment Requirements */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-gray-200">
                    <FileText className="h-6 w-6 text-orange-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Equipment Requirements</h2>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Equipment Type Needed</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="equipmentType" value="tablet-coating" className="rounded" />
                        <span className="text-sm">Tablet Coating Machines</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="equipmentType" value="fluid-bed-dryers" className="rounded" />
                        <span className="text-sm">Fluid Bed Dryers</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="equipmentType" value="high-shear-mixers" className="rounded" />
                        <span className="text-sm">High Shear Mixers</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="equipmentType" value="bfs-machines" className="rounded" />
                        <span className="text-sm">BFS Machines</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="equipmentType" value="granulation-equipment" className="rounded" />
                        <span className="text-sm">Granulation Equipment</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="equipmentType" value="packaging-equipment" className="rounded" />
                        <span className="text-sm">Packaging Equipment</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Required Batch Size</label>
                      <Input name="batchSize" placeholder="e.g., 50-200 kg per batch" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Production Capacity Needed</label>
                      <Input name="productionCapacity" placeholder="e.g., 1000 kg/day" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Detailed Requirements & Specifications
                    </label>
                    <Textarea
                      name="detailedRequirements"
                      placeholder="Please provide detailed specifications, special requirements, product types to be manufactured, quality standards needed, etc."
                      rows={4}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Budget Range (USD)</label>
                      <select
                        name="budgetRange"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="over-1m">Over $1,000,000</option>
                        <option value="flexible">Flexible based on requirements</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Timeline for Purchase</label>
                      <select
                        name="timeline"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (within 1 month)</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="over-1-year">Over 1 year</option>
                        <option value="planning-stage">Still in planning stage</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-gray-200">
                    <Send className="h-6 w-6 text-red-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Additional Services Required</h2>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="installation" className="rounded" />
                        <span className="text-sm">Equipment Installation</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="training" className="rounded" />
                        <span className="text-sm">Operator Training</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="maintenance" className="rounded" />
                        <span className="text-sm">Maintenance Contract</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="support" className="rounded" />
                        <span className="text-sm">Technical Support</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="spare-parts" className="rounded" />
                        <span className="text-sm">Spare Parts Package</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="validation" className="rounded" />
                        <span className="text-sm">Validation Documentation</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="compliance" className="rounded" />
                        <span className="text-sm">Compliance Consulting</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="additionalService" value="financing" className="rounded" />
                        <span className="text-sm">Equipment Financing</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Additional Notes & Special Requirements
                    </label>
                    <Textarea
                      name="additionalNotes"
                      placeholder="Any additional information, special requirements, or questions you'd like to include..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" name="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the terms and conditions and consent to Target Co. contacting me regarding this quote
                        request. I understand that the information provided will be used to prepare a customized quote
                        and may be shared with our partner manufacturers for technical specifications. *
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="updates" name="updates" className="mt-1" />
                    <label htmlFor="updates" className="text-sm text-gray-600">
                      I would like to receive updates about new pharmaceutical machinery, industry news, and special
                      offers from Target Co.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4"
                    disabled={isPending}
                  >
                    <Send className="mr-2 h-6 w-6" />
                    {isPending ? "Submitting Quote Request..." : "Submit Quote Request"}
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    <p>* Required fields</p>
                    <p className="mt-2">
                      Our team will review your request and contact you within 24-48 hours with a detailed quote and any
                      additional questions.
                    </p>
                    <p className="mt-2 font-medium">
                      Quote requests will be sent to: <span className="text-blue-600">quotes@targetco.com</span>
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600">
              Our streamlined quote process ensures you get the information you need quickly
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600 text-sm">Our experts review your requirements within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">We contact you to discuss details and clarify requirements</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proposal</h3>
              <p className="text-gray-600 text-sm">Detailed quote with specifications and pricing delivered</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up</h3>
              <p className="text-gray-600 text-sm">Ongoing support to finalize your equipment selection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
