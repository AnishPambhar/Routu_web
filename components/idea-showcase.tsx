"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IdeaShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const slides = [
    {
      image: "/image1.png",
      title: "Vendor Solution",
      description: "Small vendors get to sell online with low commission",
    },
    {
      image: "/image2.png",
      title: "Earn on Your Route",
      description: "Complete pick-up and drop tasks along your regular route and earn",
    },
    {
      image: "/image3.png",
      title: "On the Go Earning",
      description: "Earn extra with pick and drop tasks while traveling",
    },
    {
      image: "/image4.png",
      title: "Complete Ecosystem",
      description: "Connecting customers, vendors, and delivery partners seamlessly",
    },
  ]

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length, paused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-balance">
            Our Idea in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            See how Routo connects riders, vendors, and customers in a seamless delivery ecosystem
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl select-none"
            onMouseDown={() => setPaused(true)}
            onMouseUp={() => setPaused(false)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300 shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300 shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Current Slide Info */}
          <div className="text-center mt-8">
            <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{slides[currentSlide].title}</h3>
            <p className="text-gray-600">{slides[currentSlide].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
