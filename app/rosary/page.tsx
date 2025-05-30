"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Pause,
  RotateCcw,
  Calendar,
  BookOpen,
  Heart,
  Crown,
  Star,
  Cross,
  Lightbulb
} from "lucide-react"
import {
  mysterySet,
  getTodaysMysteries,
  openingPrayers,
  decadePrayers,
  offeringPrayers,
  closingPrayers,
  type MysterySet
} from "@/data/rosary-data"

type RosarySection = "opening" | "mysteries" | "closing" | "complete"
type PrayerStep = "our-father" | "hail-mary" | "glory-be" | "fatima" | "meditation"

interface RosaryProgress {
  section: RosarySection
  mysteryIndex: number
  decadeIndex: number
  prayerStep: PrayerStep
  hailMaryCount: number
}

export default function RosaryPage() {
  const [selectedMysteries, setSelectedMysteries] = useState<MysterySet>(getTodaysMysteries())

  // Get today's recommended mysteries
  const todaysMysteries = getTodaysMysteries()
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  // Get mystery icon
  const getMysteryIcon = (mysteryId: string) => {
    switch (mysteryId) {
      case "joyful": return <Star className="h-5 w-5" />
      case "sorrowful": return <Cross className="h-5 w-5" />
      case "glorious": return <Crown className="h-5 w-5" />
      case "luminous": return <Lightbulb className="h-5 w-5" />
      default: return <Heart className="h-5 w-5" />
    }
  }

  // Format litany text with proper alignment
  const formatLitanyText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '')
    return lines.map((line, index) => {
      if (line.includes('|')) {
        const [invocation, response] = line.split('|')
        return (
          <div key={index} className="flex justify-between items-start mb-2">
            <span className="font-crimson text-lg">{invocation.trim()}</span>
            <span className="font-crimson text-lg text-primary italic ml-4">{response.trim()}</span>
          </div>
        )
      } else {
        return (
          <div key={index} className="mb-2">
            <span className="font-crimson text-lg">{line}</span>
          </div>
        )
      }
    })
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-crimson-bold text-foreground leading-tight">
              The Holy Rosary
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-sacred-teal mx-auto rounded-full opacity-60"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join in the traditional Catholic prayer of the Rosary, meditating on the mysteries of our faith
            while honoring the Blessed Virgin Mary.
          </p>
        </div>

        {/* Today's Recommendation */}
        <div className="text-center">
          <Card className="sacred-card max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">Today's Mysteries</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">{todaysMysteries.icon}</span>
                <span className="font-crimson-bold text-lg">{todaysMysteries.name}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Recommended for {today}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Opening Prayers Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-crimson-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-primary" />
              Opening Prayers
              <Star className="h-8 w-8 text-primary" />
            </h2>
            <p className="text-muted-foreground">Begin your Rosary with these traditional opening prayers</p>
          </div>

          <Card className="sacred-card sacred-glow">
            <CardContent className="p-8">
              <div className="space-y-8">
                {openingPrayers.map((prayer, index) => (
                  <div key={prayer.id} className="border-l-4 border-primary/40 pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="font-crimson-bold text-2xl text-foreground">
                        {prayer.title}
                        {prayer.repetitions && (
                          <span className="text-primary ml-2 text-lg">({prayer.repetitions}x)</span>
                        )}
                      </h3>
                    </div>
                    <div className="bg-sacred-light/20 rounded-lg p-6 border border-primary/10">
                      <p className="text-lg leading-relaxed whitespace-pre-line font-crimson text-foreground">
                        {prayer.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mystery Selection Tabs */}
        <Tabs
          value={selectedMysteries.id}
          onValueChange={(value) => {
            const mystery = mysterySet.find(m => m.id === value)
            if (mystery) setSelectedMysteries(mystery)
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            {mysterySet.map((mystery) => (
              <TabsTrigger
                key={mystery.id}
                value={mystery.id}
                className="flex items-center gap-1 text-xs"
              >
                <span className="text-sm">{mystery.icon}</span>
                <span className="hidden sm:inline">{mystery.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {mysterySet.map((mystery) => (
            <TabsContent key={mystery.id} value={mystery.id} className="mt-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl">{mystery.icon}</span>
                  <h2 className="text-2xl font-crimson-bold">{mystery.name}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {mystery.description}
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge className={`${mystery.color} flex items-center gap-1`}>
                    {getMysteryIcon(mystery.id)}
                    {mystery.days.join(" & ")}
                  </Badge>
                </div>
              </div>

              {/* Mystery Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {mystery.mysteries.map((mysteryItem, index) => (
                  <Card key={mysteryItem.id} className="sacred-card sacred-glow hover:scale-105 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <CardTitle className="font-crimson-bold text-lg leading-tight">
                          {mysteryItem.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {mysteryItem.description}
                      </p>
                      <div className="bg-sacred-light/30 rounded-lg p-3 border-l-4 border-primary/30 mb-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">Meditation:</span> {mysteryItem.meditation}
                        </p>
                      </div>
                      {mysteryItem.scripture && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <BookOpen className="h-3 w-3" />
                          <span>{mysteryItem.scripture}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Decade Prayer Instructions */}
              <div className="max-w-4xl mx-auto mt-8">
                <Card className="sacred-card">
                  <CardHeader>
                    <CardTitle className="font-crimson-bold text-2xl flex items-center justify-center gap-2">
                      <Heart className="h-6 w-6 text-primary" />
                      For Each Decade (Repeat 5 Times)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {decadePrayers.map((prayer, index) => (
                        <div key={prayer.id} className="border-l-4 border-primary/30 pl-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">{index + 1}</span>
                            </div>
                            <h4 className="font-crimson-bold text-lg">
                              {prayer.title}
                              {prayer.repetitions && (
                                <span className="text-primary ml-2">({prayer.repetitions}x)</span>
                              )}
                            </h4>
                          </div>
                          <div className="bg-sacred-light/20 rounded-lg p-4">
                            <p className="text-base leading-relaxed whitespace-pre-line font-crimson">
                              {prayer.text.length > 150 ? `${prayer.text.substring(0, 150)}...` : prayer.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Offering and Litany Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-crimson-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              Offering & Litany
              <Heart className="h-8 w-8 text-primary" />
            </h2>
            <p className="text-muted-foreground">Offer your Rosary and honor Mary with the traditional Litany</p>
          </div>

          <Card className="sacred-card sacred-glow">
            <CardContent className="p-8">
              <div className="space-y-8">
                {offeringPrayers.map((prayer, index) => (
                  <div key={prayer.id} className="border-l-4 border-primary/40 pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="font-crimson-bold text-2xl text-foreground">
                        {prayer.title}
                      </h3>
                    </div>
                    <div className="bg-sacred-light/20 rounded-lg p-6 border border-primary/10">
                      {prayer.id === 'litany-blessed-virgin' ? (
                        <div className="leading-relaxed">
                          {formatLitanyText(prayer.text)}
                        </div>
                      ) : (
                        <p className="text-lg leading-relaxed whitespace-pre-line font-crimson text-foreground">
                          {prayer.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Concluding Prayers Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-crimson-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Crown className="h-8 w-8 text-primary" />
              Concluding Prayers
              <Crown className="h-8 w-8 text-primary" />
            </h2>
            <p className="text-muted-foreground">Complete your Rosary with these final traditional prayers</p>
          </div>

          <Card className="sacred-card sacred-glow">
            <CardContent className="p-8">
              <div className="space-y-8">
                {closingPrayers.map((prayer, index) => (
                  <div key={prayer.id} className="border-l-4 border-primary/40 pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="font-crimson-bold text-2xl text-foreground">
                        {prayer.title}
                      </h3>
                    </div>
                    <div className="bg-sacred-light/20 rounded-lg p-6 border border-primary/10">
                      <p className="text-lg leading-relaxed whitespace-pre-line font-crimson text-foreground">
                        {prayer.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="bg-sacred-light/30 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-crimson-bold mb-4">Begin Your Rosary Prayer</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let us pray to the Holy Rosary of Mother Mary
            </p>
            <Button asChild className="sacred-button hover:scale-105 transition-all duration-300">
              <Link href="/rosary">
                Start Praying
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:scale-105 transition-all duration-300">
              <Link href="/chat">
                Ask AI for Guidance
              </Link>
            </Button>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center max-w-2xl mx-auto pt-8">
          <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
            <span className="text-accent">"</span>
            The Rosary is the most excellent form of prayer and the most efficacious means of attaining eternal life. It is the remedy for all our evils, the root of all our blessings.
            <span className="text-accent">"</span>
            <footer className="mt-2 text-sm text-muted-foreground font-medium">
              — Pope Leo XIII
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}