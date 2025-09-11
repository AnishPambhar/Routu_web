"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    userType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Failed to send message")
      }
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", userType: "" })
      }, 2400)
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Thank you for reaching out to <strong>Routo</strong>. Our team will get back to you within 24 hours.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 text-sm font-medium">
                  📧 Confirmation sent to your email • 🕐 Expected response: 2-24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="font-heading text-3xl lg:text-4xl">Send Us a Message</CardTitle>
            <p className="text-blue-100 mt-2 text-lg">We'd love to hear from you and help with your inquiry</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center text-gray-700 font-medium">
                    <User className="h-4 w-4 mr-2 text-blue-600" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center text-gray-700 font-medium">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center text-gray-700 font-medium">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    Phone Number
                  </Label>
                  <div className="flex items-stretch rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-200">
                    <span className="inline-flex items-center gap-2 pl-3 pr-2 bg-gray-50 text-gray-700 text-sm select-none border-r border-gray-200">
                      <span className="text-base">🇮🇳</span>
                      <span className="font-medium">+91</span>
                    </span>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10)
                        const formatted = digits.replace(/(\d{5})(\d{0,5})/, (_, a, b) => (b ? `${a} ${b}` : a))
                        handleChange("phone", formatted)
                      }}
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userType" className="text-gray-700 font-medium">
                    I am a *
                  </Label>
                  <Select value={formData.userType} onValueChange={(value) => handleChange("userType", value)}>
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-12">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rider">🚴‍♂️ Potential Rider</SelectItem>
                      <SelectItem value="vendor">🏪 Vendor/Business Owner</SelectItem>
                      <SelectItem value="customer">👤 Customer</SelectItem>
                      <SelectItem value="investor">💼 Investor</SelectItem>
                      <SelectItem value="partner">🤝 Potential Partner</SelectItem>
                      <SelectItem value="media">📰 Media/Press</SelectItem>
                      <SelectItem value="other">❓ Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700 font-medium">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry, questions, or how we can help you..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={6}
                  className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none rounded-lg"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed text-white h-14 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message to Routo"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>

              {errorMsg && (
                <p className="text-sm text-red-600 text-center">{errorMsg}</p>
              )}

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
