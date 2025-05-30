"use client"

import { useState } from "react"
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Crown, Sparkles } from 'lucide-react'
import { getAllSaints } from '@/data/saints'

export default function SaintsPage() {
  const saints = getAllSaints()
  const [searchQuery, setSearchQuery] = useState("")

  // Filter saints based on search query
  const filteredSaints = saints.filter(saint =>
    saint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    saint.short.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get saint icon based on their story/characteristics
  const getSaintIcon = (saint: any) => {
    const name = saint.name.toLowerCase()
    const story = saint.short.toLowerCase()

    if (name.includes('joan') || story.includes('martyr')) return '⚔️'
    if (name.includes('francis') && name.includes('assisi')) return '🕊️'
    if (name.includes('teresa') || story.includes('poor')) return '💝'
    if (name.includes('maria') || name.includes('mary')) return '🌹'
    if (story.includes('missionary') || story.includes('apostle')) return '✈️'
    if (story.includes('mystic') || story.includes('vision')) return '✨'
    if (story.includes('founder') || story.includes('congregation')) return '⛪'
    if (story.includes('doctor') || story.includes('theologian')) return '📚'
    if (story.includes('indian') || story.includes('india')) return '🇮🇳'
    return '👑'
  }

  // Get era badge for saints
  const getEraBadge = (saint: any) => {
    const story = saint.story
    if (story.includes('2019') || story.includes('2022') || story.includes('2016') || story.includes('2014')) {
      return { text: 'Modern Saint', class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' }
    }
    if (story.includes('1950') || story.includes('1920') || story.includes('1622')) {
      return { text: 'Recent Saint', class: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' }
    }
    if (story.includes('Pre-Congregation') || story.includes('1228')) {
      return { text: 'Ancient Saint', class: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' }
    }
    return { text: 'Holy Saint', class: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-crimson-bold text-foreground leading-tight">
              Saints & Holy Ones
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-sacred-teal mx-auto rounded-full opacity-60"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the inspiring stories of holy men and women who have shown us the path to sanctity
            through their extraordinary lives of faith, service, and devotion to God.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search saints..."
              className="pl-10 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Saints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredSaints.map((saint) => {
            const era = getEraBadge(saint)
            return (
              <Link key={saint.id} href={`/saints/${saint.id}`}>
                <Card className="h-full sacred-card sacred-glow hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{getSaintIcon(saint)}</div>
                      <Badge className={`${era.class} flex items-center gap-1`}>
                        <Sparkles className="h-3 w-3" />
                        {era.text}
                      </Badge>
                    </div>
                    <CardTitle className="font-crimson-bold text-xl leading-tight group-hover:text-primary transition-colors">
                      {saint.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {saint.short}
                    </CardDescription>
                    <div className="bg-sacred-light/30 rounded-lg p-3 border-l-4 border-primary/30">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-primary">Legacy:</span> Click to discover their inspiring story
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* No results message */}
        {filteredSaints.length === 0 && (
          <div className="text-center py-12">
            <Crown className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-crimson-bold mb-2">No saints found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search to find the saints you're looking for.
            </p>
          </div>
        )}

        {/* Inspirational Quote */}
        <div className="text-center max-w-2xl mx-auto pt-8">
          <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
            <span className="text-accent">"</span>
            The saints are like the stars. In his providence Christ conceals them in a hidden place that they may not shine before others when they might wish to do so. Yet they are always ready to exchange the quiet of contemplation for the works of mercy as soon as they perceive in their heart the invitation of Christ.
            <span className="text-accent">"</span>
            <footer className="mt-2 text-sm text-muted-foreground font-medium">
              — St. Anthony Mary Claret
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}