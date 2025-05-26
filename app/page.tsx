import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Music, Users, UserCircle, Book } from 'lucide-react';
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

      {/* Elegant Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border/30"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <svg className="h-6 w-6 text-muted-foreground/40" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
              Guiding Your Spiritual Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover tools and community designed to deepen your faith and strengthen your connection with the divine.
            </p>
          </div>

          {/* Features Grid - Redesigned for better alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Row 1: Primary Features */}
            <div className="group">
              <div className="sacred-card p-8 h-full sacred-glow flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mr-4">
                    <MessageCircle className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-crimson-bold text-foreground">Spiritual Guidance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Receive biblically-sound guidance through our AI-powered chatbot, designed to provide spiritual wisdom and encouragement.
                </p>
                <Button asChild variant="link" className="p-0 text-white hover:text-white font-medium self-start">
                  <Link href="/chat">
                    Start conversation <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group">
              <div className="sacred-card p-8 h-full sacred-glow flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mr-4">
                    <Book className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-crimson-bold text-foreground">Sacred Scripture</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Read, study, and meditate on God's Word with our comprehensive Bible reader and study tools.
                </p>
                <Button asChild variant="link" className="p-0 text-white hover:text-white font-medium self-start">
                  <Link href="/bible">
                    Read Scripture <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group">
              <div className="sacred-card p-8 h-full sacred-glow flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mr-4">
                    <UserCircle className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-crimson-bold text-foreground">Holy Lives</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Discover inspiring stories of saints who walked before us. Learn from their faith, courage, and devotion to God.
                </p>
                <Button asChild variant="link" className="p-0 text-white hover:text-white font-medium self-start">
                  <Link href="/saints">
                    Explore saints <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Row 2: Secondary Features */}
            <div className="group md:col-start-1 lg:col-start-auto">
              <div className="sacred-card p-8 h-full sacred-glow flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-sacred-teal/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mr-4">
                    <Music className="h-7 w-7 text-sacred-teal" />
                  </div>
                  <h3 className="text-xl font-crimson-bold text-foreground">Devotional Music</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Discover and create playlists of inspirational music to enhance your worship and meditation experience.
                </p>
                <Button asChild variant="link" className="p-0 text-white hover:text-white font-medium self-start">
                  <Link href="/music">
                    Explore music <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group md:col-start-2 lg:col-start-auto">
              <div className="sacred-card p-8 h-full sacred-glow flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-sacred-teal/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mr-4">
                    <Users className="h-7 w-7 text-sacred-teal" />
                  </div>
                  <h3 className="text-xl font-crimson-bold text-foreground">Faith Community</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  Connect with others on similar spiritual journeys. Create or join circles for discussion, prayer, and mutual encouragement.
                </p>
                <Button asChild variant="link" className="p-0 text-white hover:text-white font-medium self-start">
                  <Link href="/community">
                    Join community <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border/30"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <svg className="h-6 w-6 text-muted-foreground/40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Saints Spotlight Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-sacred-light/10 via-background to-sacred-light/20 sacred-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-crimson-bold mb-6 text-foreground leading-tight">
              Discover Saints
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Walk in the footsteps of holy men and women who dedicated their lives to God.
              Their stories of faith, sacrifice, and miracles continue to inspire believers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Featured Saints Preview */}
            <div className="sacred-card p-6 text-center sacred-glow">
              <h4 className="font-crimson-bold text-lg mb-2 text-foreground">St. Alphonsa</h4>
              <p className="text-sm text-muted-foreground">First canonized saint of Indian origin</p>
            </div>
            <div className="sacred-card p-6 text-center sacred-glow">
              <h4 className="font-crimson-bold text-lg mb-2 text-foreground">St. Teresa of Calcutta</h4>
              <p className="text-sm text-muted-foreground">Nobel Peace Prize winner</p>
            </div>
            <div className="sacred-card p-6 text-center sacred-glow">
              <h4 className="font-crimson-bold text-lg mb-2 text-foreground">St. Francis of Assisi</h4>
              <p className="text-sm text-muted-foreground">Patron saint of animals</p>
            </div>
            <div className="sacred-card p-6 text-center sacred-glow">
              <h4 className="font-crimson-bold text-lg mb-2 text-foreground">St. Joan of Arc</h4>
              <p className="text-sm text-muted-foreground">Teenage martyr and hero</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="sacred-button text-lg px-10 py-4 h-auto">
                <Link href="/saints">
                  Read Their Stories <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-4 h-auto border-2 border-accent/20 hover:border-accent/40 hover:bg-accent/5">
                <Link href="/bible">
                  <Book className="mr-2 h-5 w-5" />
                  Read Scripture
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              "Therefore, since we are surrounded by such a great cloud of witnesses..." - Hebrews 12:1
            </p>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border/30"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-6">
            <svg className="h-6 w-6 text-muted-foreground/40" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-sacred-light/20 via-background to-sacred-light/10 sacred-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-crimson-bold mb-8 text-foreground leading-tight">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of believers seeking wisdom, connection, and spiritual growth through modern technology.
          </p>
          <Button asChild size="lg" className="sacred-button text-lg px-12 py-4 h-auto">
            <Link href="/auth/register">
              Create Your Account
            </Link>
          </Button>
        </div>
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg" variant="outline" className="text-lg px-12 py-4 h-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
            <Link
              href="/auth/login"
              className="hover:text-white text-white"
            >
              Log In
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}