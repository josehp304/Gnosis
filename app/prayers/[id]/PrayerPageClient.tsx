"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, BookOpen, Cross, Star, Shield, Clock, Info } from "lucide-react"
import { getCategoryBadge, type Prayer } from "../../../data/prayers-data"

interface PrayerPageClientProps {
  prayer: Prayer
}

export default function PrayerPageClient({ prayer }: PrayerPageClientProps) {
  const [activeLanguage, setActiveLanguage] = useState<'english' | 'malayalam'>('english')

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "traditional": return <Cross className="h-5 w-5" />
      case "marian": return <Heart className="h-5 w-5" />
      case "devotional": return <Star className="h-5 w-5" />
      case "liturgical": return <BookOpen className="h-5 w-5" />
      default: return <Shield className="h-5 w-5" />
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex flex-col space-y-8">
        {/* Back Navigation */}
        <div className="flex items-center">
          <Button asChild variant="ghost" className="hover:scale-105 transition-all duration-300">
            <Link href="/prayers" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Prayers
            </Link>
          </Button>
        </div>

        {/* Prayer Header */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <div className="text-6xl">{prayer.icon}</div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                {prayer.title}
              </h1>
              {prayer.subtitle && (
                <p className="text-xl text-primary font-medium">
                  {prayer.subtitle}
                </p>
              )}
              <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-sacred-teal mx-auto rounded-full opacity-60"></div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Badge className={`${getCategoryBadge(prayer.category)} flex items-center gap-2 px-4 py-2 text-sm`}>
              {getCategoryIcon(prayer.category)}
              {prayer.category.charAt(0).toUpperCase() + prayer.category.slice(1)} Prayer
            </Badge>
          </div>
        </div>

        {/* Prayer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Prayer Text */}
          <div className="lg:col-span-2">
            <Card className="sacred-card sacred-glow">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <CardTitle className="font-crimson-bold text-2xl flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Prayer Text
                  </CardTitle>
                  
                  {/* Language Tab Switcher - Only show if Malayalam text exists */}
                  {prayer.malayalamText && (
                    <div className="flex bg-muted rounded-lg p-1 w-fit">
                      <button
                        onClick={() => setActiveLanguage('english')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          activeLanguage === 'english'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setActiveLanguage('malayalam')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          activeLanguage === 'malayalam'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Malayalam
                      </button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <div className="font-crimson text-lg leading-relaxed whitespace-pre-line text-foreground">
                    {activeLanguage === 'english' ? prayer.text : prayer.malayalamText}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prayer Information Sidebar */}
          <div className="space-y-6">
            {/* When to Recite */}
            {prayer.whenToRecite && (
              <Card className="sacred-card">
                <CardHeader className="pb-3">
                  <CardTitle className="font-crimson-bold text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    When to Recite
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {prayer.whenToRecite}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Context */}
            {prayer.context && (
              <Card className="sacred-card">
                <CardHeader className="pb-3">
                  <CardTitle className="font-crimson-bold text-lg flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {prayer.context}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* History */}
            {prayer.history && (
              <Card className="sacred-card">
                <CardHeader className="pb-3">
                  <CardTitle className="font-crimson-bold text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {prayer.history}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Description */}
            <Card className="sacred-card">
              <CardHeader className="pb-3">
                <CardTitle className="font-crimson-bold text-lg">
                  About This Prayer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {prayer.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="bg-sacred-light/30 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-crimson-bold mb-4">Continue Your Prayer Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore more traditional Catholic prayers and deepen your spiritual life.
            </p>
            <Button asChild className="sacred-button hover:scale-105 transition-all duration-300">
              <Link href="/prayers">
                Explore More Prayers
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}