"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Heart, BookOpen, Cross, Star, Shield } from "lucide-react"
import { catholicPrayers, getCategoryBadge } from "../../data/prayers-data"

export default function PrayersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Filter prayers based on search and category
  const filteredPrayers = catholicPrayers.filter(prayer => {
    const matchesSearch = prayer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prayer.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || prayer.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "traditional": return <Cross className="h-4 w-4" />
      case "marian": return <Heart className="h-4 w-4" />
      case "devotional": return <Star className="h-4 w-4" />
      case "liturgical": return <BookOpen className="h-4 w-4" />
      default: return <Shield className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-crimson-bold text-foreground leading-tight">
              Catholic Prayers
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-sacred-teal mx-auto rounded-full opacity-60"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the rich tradition of Catholic prayer. From ancient creeds to beloved Marian devotions,
            find spiritual nourishment in these time-honored prayers of our faith.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto w-full">
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search prayers..."
              className="pl-10 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-xl hover:scale-105 transition-all duration-300"
            >
              All Prayers
            </Button>
            <Button
              variant={selectedCategory === "traditional" ? "default" : "outline"}
              onClick={() => setSelectedCategory("traditional")}
              className="rounded-xl hover:scale-105 transition-all duration-300"
            >
              <Cross className="h-4 w-4 mr-2" />
              Traditional
            </Button>
            <Button
              variant={selectedCategory === "marian" ? "default" : "outline"}
              onClick={() => setSelectedCategory("marian")}
              className="rounded-xl hover:scale-105 transition-all duration-300"
            >
              <Heart className="h-4 w-4 mr-2" />
              Marian
            </Button>
            <Button
              variant={selectedCategory === "devotional" ? "default" : "outline"}
              onClick={() => setSelectedCategory("devotional")}
              className="rounded-xl hover:scale-105 transition-all duration-300"
            >
              <Star className="h-4 w-4 mr-2" />
              Devotional
            </Button>
            <Button
              variant={selectedCategory === "liturgical" ? "default" : "outline"}
              onClick={() => setSelectedCategory("liturgical")}
              className="rounded-xl hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Liturgical
            </Button>
          </div>
        </div>

        {/* Prayers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPrayers.map((prayer) => (
            <Link key={prayer.id} href={`/prayers/${prayer.id}`}>
              <Card className="h-full sacred-card sacred-glow hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-3xl">{prayer.icon}</div>
                    <Badge className={`${getCategoryBadge(prayer.category)} flex items-center gap-1`}>
                      {getCategoryIcon(prayer.category)}
                      {prayer.category}
                    </Badge>
                  </div>
                  <CardTitle className="font-crimson-bold text-xl leading-tight">
                    {prayer.title}
                  </CardTitle>
                  {prayer.subtitle && (
                    <CardDescription className="text-primary font-medium">
                      {prayer.subtitle}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {prayer.description}
                  </p>
                  {prayer.whenToRecite && (
                    <div className="bg-sacred-light/30 rounded-lg p-3 border-l-4 border-primary/30">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-primary">When to recite:</span> {prayer.whenToRecite}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredPrayers.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-crimson-bold mb-2">No prayers found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find the prayers you're looking for.
            </p>
          </div>
        )}

        {/* Inspirational Quote */}
        <div className="text-center max-w-2xl mx-auto pt-8">
          <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
            <span className="text-accent">"</span>
            Prayer is the raising of one's mind and heart to God or the requesting of good things from God.
            <span className="text-accent">"</span>
            <footer className="mt-2 text-sm text-muted-foreground font-medium">
              — Catechism of the Catholic Church
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}