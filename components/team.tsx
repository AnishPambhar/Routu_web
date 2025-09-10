import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Anish Pambhar",
      role: "Founder & CEO",
      description:
        "Building Routo with the vision of empowering local vendors and making deliveries sustainable for everyone.",
      image: "/anishpambhar.jpeg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-balance">
            Meet Our Founder
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            The visionary leader working to revolutionize local commerce and delivery
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-medium text-sm mb-4">{member.role}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-gray-900 mb-4">Join Our Mission</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
              We're always looking for passionate individuals who want to make a difference in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Open Positions</div>
                <div className="text-sm text-gray-600">Software Engineer, Marketing Manager</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Remote Friendly</div>
                <div className="text-sm text-gray-600">Work from anywhere in India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
