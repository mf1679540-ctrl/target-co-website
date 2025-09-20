import { Factory, Phone, Mail, Linkedin, Facebook, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Factory className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Target Co.</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for pharmaceutical machinery solutions in Egypt and the Middle East.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/products/coating-machines" className="hover:text-white transition-colors">
                  Coating Machines
                </Link>
              </li>
              <li>
                <Link href="/products/fluid-bed-dryers" className="hover:text-white transition-colors">
                  Fluid Bed Dryers
                </Link>
              </li>
              <li>
                <Link href="/products/high-shear-mixers" className="hover:text-white transition-colors">
                  High Shear Mixers
                </Link>
              </li>
              <li>
                <Link href="/products/bfs-machines" className="hover:text-white transition-colors">
                  BFS Machines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Cairo, Egypt</li>
              <li>
                <a
                  href="tel:+201016400933"
                  className="flex items-center space-x-2 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:text-blue-400" />
                  <span>+201 016 400 933</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:targetco2000@gmail.com"
                  className="flex items-center space-x-2 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:text-blue-400" />
                  <span>targetco2000@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/target-co-egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/targetcoegypt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="font-medium">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@targetcoegypt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="font-medium">YouTube</span>
              </a>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              &copy; {new Date().getFullYear()} Target Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
