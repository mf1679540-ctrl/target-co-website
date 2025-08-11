"use client"

import { Button } from "@/components/ui/button"
import { Factory, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Factory className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Target Co.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isActive("/") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors ${
              isActive("/about") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors ${
              isActive("/services")
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Services
          </Link>
          <Link
            href="/products"
            className={`font-medium transition-colors ${
              isActive("/products")
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors ${
              isActive("/contact")
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:flex bg-blue-600 hover:bg-blue-700">
            <Link href="/quote">Get Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className={`block font-medium transition-colors ${
                isActive("/") ? "text-blue-600 bg-blue-50 px-3 py-2 rounded-md" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block font-medium transition-colors ${
                isActive("/about")
                  ? "text-blue-600 bg-blue-50 px-3 py-2 rounded-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block font-medium transition-colors ${
                isActive("/services")
                  ? "text-blue-600 bg-blue-50 px-3 py-2 rounded-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`block font-medium transition-colors ${
                isActive("/products")
                  ? "text-blue-600 bg-blue-50 px-3 py-2 rounded-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className={`block font-medium transition-colors ${
                isActive("/contact")
                  ? "text-blue-600 bg-blue-50 px-3 py-2 rounded-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Contact Us
            </Link>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
