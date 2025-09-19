"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  if (pathname?.startsWith("/admin")) {
    return null
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0" aria-label="Routo home">
            <Image
              src="/routo_logo.png"
              alt="Routo logo"
              width={160}
              height={36}
              priority
              sizes="(max-width: 768px) 120px, 160px"
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              About
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              onClick={() => {
                if (pathname === "/") {
                  window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context: "waitlist" } }))
                } else {
                  router.push("/?open=waitlist")
                }
              }}
            >
              Join Waitlist
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                if (pathname === "/") {
                  window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context: "notify" } }))
                } else {
                  router.push("/?open=notify")
                }
              }}
            >
              Get Notified
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden shrink-0">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/terms"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  onClick={() => {
                    setIsOpen(false)
                    if (pathname === "/") {
                      window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context: "waitlist" } }))
                    } else {
                      router.push("/?open=waitlist")
                    }
                  }}
                >
                  Join Waitlist
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    setIsOpen(false)
                    if (pathname === "/") {
                      window.dispatchEvent(new CustomEvent("routo:open-modal", { detail: { context: "notify" } }))
                    } else {
                      router.push("/?open=notify")
                    }
                  }}
                >
                  Get Notified
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
