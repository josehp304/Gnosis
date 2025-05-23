import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Music, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern-dark.svg')] opacity-[0.15] bg-repeat"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="text-primary">Divine</span> Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
              Your spiritual companion for Bible study, devotional music, and community connection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-md px-8">
                <Link href="/chat">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-md px-8">
                <Link href="/community">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-16 text-gray-900 dark:text-white">
            Guiding Your Spiritual Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* AI Guidance */}
            <div className="bg-blue-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm transition-all hover:shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Spiritual Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive biblically-sound guidance through our AI-powered chatbot, designed to provide spiritual wisdom and encouragement.
              </p>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/chat">
                  Start a conversation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Devotional Music */}
            <div className="bg-blue-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm transition-all hover:shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Music className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Devotional Music</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover and create playlists of inspirational music to enhance your worship and meditation experience.
              </p>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/music">
                  Explore music <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Community */}
            <div className="bg-blue-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm transition-all hover:shadow-md">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Faith Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with others on similar spiritual journeys. Create or join circles for discussion, prayer, and mutual encouragement.
              </p>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/community">
                  Join a circle <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/10 dark:bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-6 text-gray-900 dark:text-white">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Join our community of believers seeking wisdom, connection, and spiritual growth through modern technology.
          </p>
          <Button asChild size="lg">
            <Link href="/auth/register">
              Create Your Account
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}