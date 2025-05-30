import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Music, Users, UserCircle, Book, Heart, Crown, Sparkles, Cross, Star, Shield, Lightbulb, Play, ChevronRight, Headphones } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-indigo-100 via-background to-teal-100 sacred-pattern"
        aria-label="Welcome to Gnosis - Your Spiritual Companion"
      >
        {/* Mandala-inspired decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-[0.03]" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50,5 L55,20 L50,35 L45,20 Z" fill="currentColor" opacity="0.3"/>
            <path d="M50,65 L55,80 L50,95 L45,80 Z" fill="currentColor" opacity="0.3"/>
            <path d="M5,50 L20,55 L35,50 L20,45 Z" fill="currentColor" opacity="0.3"/>
            <path d="M65,50 L80,55 L95,50 L80,45 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 w-24 h-24 opacity-[0.04]" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.6"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.4"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.2"/>
          </svg>
        </div>

        {/* Enhanced stained-glass arch pattern */}
        <div className="absolute inset-0 sacred-arch-pattern opacity-[0.06]" aria-hidden="true"></div>

        {/* Subtle religious iconography overlay */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-16 h-16">
            <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12">
            <svg viewBox="0 0 24 24" className="w-full h-full text-sacred-teal">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V4.5C15 3.57 14.43 3 13.5 3H10.5C9.57 3 9 3.57 9 4.5V6.5L3 7V9L9 8.5V21H11V14H13V21H15V8.5L21 9Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Serene gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" aria-hidden="true"></div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-crimson-bold tracking-tight text-foreground leading-[0.9] mb-6">
                <span className="text-primary drop-shadow-sm">Gnosis</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-sacred-teal mx-auto rounded-full opacity-60" aria-hidden="true"></div>
            </div>

            {/* Enhanced subtitle with better typography */}
            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
              Your sacred companion for
              <span className="text-primary font-medium"> Bible study</span>,
              <span className="text-sacred-teal font-medium"> devotional music</span>, and
              <span className="text-accent font-medium"> spiritual community</span>
            </p>

            {/* Call-to-action buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="sacred-button text-lg px-12 py-5 h-auto rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Start your spiritual journey with Gnosis"
              >
                <Link href="/chat" className="flex items-center">
                  Begin Your Journey <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-12 py-5 h-auto rounded-xl border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                aria-label="Join our faith community"
              >
                <Link href="/community" className="flex items-center">
                  <Users className="mr-3 h-5 w-5" />
                  Join Community
                </Link>
              </Button>
            </div>

            {/* Inspirational verse with elegant styling */}
            <div className="pt-12">
              <blockquote className="text-sm md:text-base text-muted-foreground/80 italic font-light max-w-2xl mx-auto leading-relaxed">
                <span className="text-accent">"</span>
                Trust in the Lord with all your heart and lean not on your own understanding
                <span className="text-accent">"</span>
                <footer className="mt-2 text-xs text-muted-foreground/60 font-medium tracking-wide">
                  — Proverbs 3:5
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Mandala Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-16 h-16 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary/30">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.4"/>
                <path d="M50,10 L55,25 L50,40 L45,25 Z" fill="currentColor" opacity="0.4"/>
                <path d="M50,60 L55,75 L50,90 L45,75 Z" fill="currentColor" opacity="0.4"/>
                <path d="M10,50 L25,55 L40,50 L25,45 Z" fill="currentColor" opacity="0.4"/>
                <path d="M60,50 L75,55 L90,50 L75,45 Z" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* AI Spiritual Guidance Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    AI Spiritual Guidance
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Receive personalized spiritual guidance powered by AI, grounded in Catholic teachings and Biblical wisdom.
                  Ask questions, seek comfort, and grow in your faith journey.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Biblical Wisdom</h4>
                    <p className="text-muted-foreground">Get answers rooted in Scripture and Catholic tradition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Compassionate Support</h4>
                    <p className="text-muted-foreground">Find comfort and encouragement in times of need</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">24/7 Availability</h4>
                    <p className="text-muted-foreground">Spiritual guidance whenever you need it most</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/chat">
                    Start Conversation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300">
                  <Link href="/bible">
                    <Book className="mr-2 h-5 w-5" />
                    Read Scripture
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="sacred-card p-8 sacred-glow">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4 flex-1">
                      <p className="text-sm text-muted-foreground italic">
                        "How can I find peace during difficult times?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary/10 rounded-xl p-4 flex-1 max-w-md">
                      <p className="text-sm leading-relaxed">
                        "Peace I leave with you; my peace I give you. I do not give to you as the world gives.
                        Do not let your hearts be troubled and do not be afraid." - John 14:27
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Trust in God's promises and find comfort in prayer...
                      </p>
                    </div>
                    <div className="bg-primary p-2 rounded-full">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-sacred-teal/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-12 h-12 bg-sacred-teal/10 rounded-full flex items-center justify-center">
              <Cross className="h-6 w-6 text-sacred-teal" />
            </div>
          </div>
        </div>
      </div>

      {/* Catholic Prayers Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sacred-teal/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="bg-sacred-teal/10 p-3 rounded-xl w-12 h-12 mx-auto mb-4">
                    <Heart className="h-6 w-6 text-sacred-teal" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">Our Father</h4>
                  <p className="text-sm text-muted-foreground">The Lord's Prayer</p>
                </div>
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="bg-accent/10 p-3 rounded-xl w-12 h-12 mx-auto mb-4">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">Hail Mary</h4>
                  <p className="text-sm text-muted-foreground">Ave Maria</p>
                </div>
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="bg-primary/10 p-3 rounded-xl w-12 h-12 mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">Apostles' Creed</h4>
                  <p className="text-sm text-muted-foreground">Statement of Faith</p>
                </div>
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="bg-sacred-teal/10 p-3 rounded-xl w-12 h-12 mx-auto mb-4">
                    <Cross className="h-6 w-6 text-sacred-teal" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">Act of Contrition</h4>
                  <p className="text-sm text-muted-foreground">Prayer of Repentance</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sacred-teal/10 p-3 rounded-xl">
                    <Heart className="h-8 w-8 text-sacred-teal" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    Catholic Prayers
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover the rich tradition of Catholic prayers. From the fundamental prayers every Catholic should know
                  to beautiful devotional prayers that deepen your relationship with God.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Traditional Prayers</h4>
                    <p className="text-muted-foreground">Essential Catholic prayers passed down through generations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Devotional Prayers</h4>
                    <p className="text-muted-foreground">Beautiful prayers for personal meditation and reflection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Marian Prayers</h4>
                    <p className="text-muted-foreground">Prayers honoring the Blessed Virgin Mary</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/prayers">
                    Explore Prayers <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-sacred-teal/20 hover:border-sacred-teal/40 hover:bg-sacred-teal/5 hover:scale-105 transition-all duration-300">
                  <Link href="/rosary">
                    <Crown className="mr-2 h-5 w-5" />
                    Pray Rosary
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crown Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <Crown className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Holy Rosary Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <Crown className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    The Holy Rosary
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join in the traditional Catholic prayer of the Rosary, meditating on the mysteries of our faith
                  while honoring the Blessed Virgin Mary. Experience guided prayer with automatic mystery selection.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Joyful Mysteries</h4>
                    <p className="text-muted-foreground">Monday & Saturday - The Incarnation and early life of Jesus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Cross className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Sorrowful Mysteries</h4>
                    <p className="text-muted-foreground">Tuesday & Friday - The Passion and Death of Jesus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Crown className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Glorious Mysteries</h4>
                    <p className="text-muted-foreground">Wednesday & Sunday - The Resurrection and eternal glory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Luminous Mysteries</h4>
                    <p className="text-muted-foreground">Thursday - The public ministry of Jesus</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/rosary">
                    Pray the Rosary <Crown className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-accent/20 hover:border-accent/40 hover:bg-accent/5 hover:scale-105 transition-all duration-300">
                  <Link href="/prayers">
                    <Heart className="mr-2 h-5 w-5" />
                    View All Prayers
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="sacred-card p-8 sacred-glow">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto flex items-center justify-center">
                    <Crown className="h-12 w-12 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-crimson-bold mb-2">Today's Mystery</h3>
                    <p className="text-lg text-primary font-medium mb-2">Joyful Mysteries</p>
                    <p className="text-muted-foreground">
                      "The Annunciation, The Visitation, The Nativity, The Presentation, The Finding in the Temple"
                    </p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "Hail Mary, full of grace, the Lord is with thee..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Note Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-primary/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Music className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Devotional Music Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-sacred-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="sacred-card p-8 sacred-glow">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-crimson-bold text-lg">Now Playing</h4>
                      <p className="text-muted-foreground">Ave Maria - Schubert</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="w-8 h-8 bg-sacred-teal/10 rounded-full flex items-center justify-center">
                        <Music className="h-4 w-4 text-sacred-teal" />
                      </div>
                      <span className="text-sm">Gregorian Chant Collection</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <Music className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm">Contemporary Christian Hymns</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Music className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">Meditation & Prayer Music</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Music className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    Devotional Music
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Enhance your prayer and meditation with beautiful sacred music. From traditional Gregorian chant
                  to contemporary Christian music, find the perfect soundtrack for your spiritual journey.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Music className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Sacred Classics</h4>
                    <p className="text-muted-foreground">Timeless hymns and classical sacred compositions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Meditation Music</h4>
                    <p className="text-muted-foreground">Peaceful instrumental music for prayer and reflection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Curated Playlists</h4>
                    <p className="text-muted-foreground">Specially crafted playlists for different spiritual moods</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/music">
                    Explore Music <Music className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300">
                  <Link href="/chat">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask for Recommendations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-sacred-teal/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-12 h-12 bg-sacred-teal/10 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-sacred-teal" />
            </div>
          </div>
        </div>
      </div>

      {/* Faith Community Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sacred-teal/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sacred-teal/10 p-3 rounded-xl">
                    <Users className="h-8 w-8 text-sacred-teal" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    Faith Community
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect with fellow believers in our vibrant faith community. Join study groups, prayer circles,
                  and find spiritual counseling support from certified counselors.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Jesus Youth Community</h4>
                    <p className="text-muted-foreground">Teens (320), Campus (100), and Professionals (40) groups</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Prayer Circles</h4>
                    <p className="text-muted-foreground">Share prayer requests and thanksgiving with the community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Headphones className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Spiritual Counseling</h4>
                    <p className="text-muted-foreground">Professional guidance available 10AM-5PM daily</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/community">
                    Join Community <Users className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-sacred-teal/20 hover:border-sacred-teal/40 hover:bg-sacred-teal/5 hover:scale-105 transition-all duration-300">
                  <Link href="/chat">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Guidance
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                <div className="sacred-card p-6 sacred-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-crimson-bold">Jesus Youth Teens</h4>
                      <p className="text-sm text-muted-foreground">320 members</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Don't forget about our youth retreat this weekend! 🙏✨"
                  </p>
                </div>
                <div className="sacred-card p-6 sacred-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-sacred-teal/10 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-sacred-teal" />
                    </div>
                    <div>
                      <h4 className="font-crimson-bold">Prayer Circle</h4>
                      <p className="text-sm text-muted-foreground">156 members</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Please pray for my grandmother's recovery. Thank you! 🙏"
                  </p>
                </div>
                <div className="sacred-card p-6 sacred-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Crown className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-crimson-bold">Thanksgiving Circle</h4>
                      <p className="text-sm text-muted-foreground">89 members</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Praise God! My job interview went well. God is so good! 🙌✨"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saints Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-accent/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <UserCircle className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Saints Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">St. Alphonsa</h4>
                  <p className="text-sm text-muted-foreground">First canonized saint of Indian origin</p>
                </div>
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">St. Teresa</h4>
                  <p className="text-sm text-muted-foreground">Nobel Peace Prize winner</p>
                </div>
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="w-16 h-16 bg-sacred-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-sacred-teal" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">St. Francis</h4>
                  <p className="text-sm text-muted-foreground">Patron saint of animals</p>
                </div>
                <div className="sacred-card p-6 text-center sacred-glow">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-crimson-bold text-lg mb-2">St. Joan</h4>
                  <p className="text-sm text-muted-foreground">Teenage martyr and hero</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <UserCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    Saints & Holy Lives
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Walk in the footsteps of holy men and women who dedicated their lives to God.
                  Their stories of faith, sacrifice, and miracles continue to inspire believers worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Inspiring Stories</h4>
                    <p className="text-muted-foreground">Read detailed biographies of canonized saints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Star className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Feast Days</h4>
                    <p className="text-muted-foreground">Learn about their feast days and special celebrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Patron Saints</h4>
                    <p className="text-muted-foreground">Discover which saints can intercede for your needs</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/saints">
                    Explore Saints <UserCircle className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-accent/20 hover:border-accent/40 hover:bg-accent/5 hover:scale-105 transition-all duration-300">
                  <Link href="/prayers">
                    <Heart className="mr-2 h-5 w-5" />
                    Saint Prayers
                  </Link>
                </Button>
              </div>

              <div className="bg-accent/5 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic text-center">
                  "Therefore, since we are surrounded by such a great cloud of witnesses..." - Hebrews 12:1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-primary/20"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Book className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Scripture Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-sacred-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Book className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                    Sacred Scripture
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Read, study, and meditate on God's Word with our comprehensive Bible reader.
                  Access multiple translations and study tools to deepen your understanding of Scripture.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-sacred-teal/10 p-2 rounded-lg mt-1">
                    <Book className="h-5 w-5 text-sacred-teal" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Multiple Translations</h4>
                    <p className="text-muted-foreground">Access various Bible translations for deeper study</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Study Tools</h4>
                    <p className="text-muted-foreground">Commentary, cross-references, and study notes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-crimson-bold text-lg mb-1">Daily Readings</h4>
                    <p className="text-muted-foreground">Follow the liturgical calendar with daily Scripture</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="sacred-button text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300">
                  <Link href="/bible">
                    Read Scripture <Book className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300">
                  <Link href="/chat">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask About Scripture
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="sacred-card p-8 sacred-glow">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Book className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-crimson-bold mb-2">Verse of the Day</h3>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 text-center">
                    <p className="text-lg leading-relaxed mb-4 font-crimson">
                      "Trust in the Lord with all your heart and lean not on your own understanding;
                      in all your ways submit to him, and he will make your paths straight."
                    </p>
                    <p className="text-sm text-primary font-medium">Proverbs 3:5-6</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-muted/20 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Old Testament</p>
                      <p className="font-crimson-bold">39 Books</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">New Testament</p>
                      <p className="font-crimson-bold">27 Books</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Total Verses</p>
                      <p className="font-crimson-bold">31,102</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Sacred Divider */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-12">
            <div className="w-20 h-20 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent/20">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.4"/>
                <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.6"/>
                <path d="M50,5 L55,20 L50,35 L45,20 Z" fill="currentColor" opacity="0.4"/>
                <path d="M50,65 L55,80 L50,95 L45,80 Z" fill="currentColor" opacity="0.4"/>
                <path d="M5,50 L20,55 L35,50 L20,45 Z" fill="currentColor" opacity="0.4"/>
                <path d="M65,50 L80,55 L95,50 L80,45 Z" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-sacred-light/20 via-background to-sacred-light/10 sacred-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join our community of believers seeking wisdom, connection, and spiritual growth through modern technology.
                Experience the beauty of Catholic faith with AI guidance, sacred prayers, and meaningful community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button asChild size="lg" className="sacred-button text-lg px-12 py-5 h-auto hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/auth/register">
                  Create Your Account <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-12 py-5 h-auto border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Link href="/auth/login">
                  Log In <ChevronRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
                "Come to me, all you who are weary and burdened, and I will give you rest." - Matthew 11:28
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}