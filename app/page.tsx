import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Music, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-background via-sacred-light/30 to-background sacred-pattern">
        <div className="absolute inset-0 sacred-arch-pattern opacity-[0.08]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-crimson-bold tracking-tight text-foreground mb-8 leading-tight">
              <span className="text-primary">Divine</span> Guide
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
              Your spiritual companion for Bible study, devotional music, and community connection
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="sacred-button text-lg px-10 py-4 h-auto">
                <Link href="/chat">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-4 h-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                <Link href="/community">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-crimson-bold text-center mb-20 text-foreground leading-tight">
            Guiding Your Spiritual Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* AI Guidance */}
            <div className="sacred-card p-10 sacred-glow">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-8">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-crimson-bold mb-4 text-foreground">Spiritual Guidance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Receive biblically-sound guidance through our AI-powered chatbot, designed to provide spiritual wisdom and encouragement.
              </p>
              <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 font-medium">
                <Link href="/chat">
                  Start a conversation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Devotional Music */}
            <div className="sacred-card p-10 sacred-glow">
              <div className="bg-sacred-teal/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-8">
                <Music className="h-8 w-8 text-sacred-teal" />
              </div>
              <h3 className="text-2xl font-crimson-bold mb-4 text-foreground">Devotional Music</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Discover and create playlists of inspirational music to enhance your worship and meditation experience.
              </p>
              <Button asChild variant="link" className="p-0 text-sacred-teal hover:text-sacred-teal/80 font-medium">
                <Link href="/music">
                  Explore music <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Community */}
            <div className="sacred-card p-10 sacred-glow">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-8">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-crimson-bold mb-4 text-foreground">Faith Community</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Connect with others on similar spiritual journeys. Create or join circles for discussion, prayer, and mutual encouragement.
              </p>
              <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80 font-medium">
                <Link href="/community">
                  Join a circle <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
      </section>
    </div>
  );
}