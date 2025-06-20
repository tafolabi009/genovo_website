"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Newspaper, Star, TrendingUp } from "lucide-react"

export default function PressAchievements() {
  const achievements = [
    {
      icon: Award,
      title: "Tech Innovation Award",
      description: "Recognized for breakthrough work in digital sovereignty and privacy-first architecture",
      date: "2024",
      category: "Innovation",
      color: "blue",
    },
    {
      icon: Star,
      title: "Emerging Startup",
      description: "Featured as a promising African tech startup building the future of secure infrastructure",
      date: "2024",
      category: "Recognition",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Product Development",
      description: "Successfully launched MVP for multiple products with strong market validation",
      date: "2024",
      category: "Product",
      color: "green",
    },
  ]

  const pressMentions = [
    {
      publication: "Tech Africa News",
      headline: "Genovo Technologies: Pioneering Digital Sovereignty in Africa",
      date: "Dec 2024",
      type: "Feature Article",
    },
    {
      publication: "Security Today",
      headline: "The Future of Privacy-First Infrastructure: SCOS Deep Dive",
      date: "Nov 2024",
      type: "Technical Review",
    },
    {
      publication: "Startup Nigeria",
      headline: "Nigerian Startup Building Next-Gen AI Platforms",
      date: "Oct 2024",
      type: "Startup Profile",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Press & Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and coverage highlighting our commitment to innovation and building the future of secure
            technology.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-${achievement.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon className={`w-8 h-8 text-${achievement.color}-600`} />
                </div>
                <Badge variant="outline" className="mb-3">
                  {achievement.category}
                </Badge>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{achievement.description}</p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press Mentions */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Newspaper className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Press Coverage</h3>
          </div>

          <div className="space-y-4">
            {pressMentions.map((mention, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-[#1A1A1A]">{mention.publication}</h4>
                        <Badge variant="outline" className="text-xs">
                          {mention.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{mention.headline}</p>
                      <p className="text-sm text-gray-500">{mention.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Interested in covering Genovo? Contact us at{" "}
              <a href="mailto:press@genovo.tech" className="text-blue-600 hover:underline">
                press@genovo.tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
