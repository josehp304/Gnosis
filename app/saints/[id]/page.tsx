import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Crown, Calendar, MapPin, Heart, BookOpen, Sparkles } from 'lucide-react'
import { getSaintById, getAllSaintIds } from '@/data/saints'
import { MarkdownContent } from '@/components/markdown-content'
import type { Metadata } from "next"

interface SaintDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all saints at build time
export async function generateStaticParams() {
  const saintIds = getAllSaintIds();

  return saintIds.map((id) => ({
    id: id,
  }));
}

// Generate metadata for each saint page
export async function generateMetadata({ params }: SaintDetailPageProps): Promise<Metadata> {
  const saint = getSaintById(params.id)

  if (!saint) {
    return {
      title: 'Saint Not Found | Gnosis',
      description: 'The requested saint could not be found.',
    }
  }

  return {
    title: `${saint.name} | Saints & Holy Ones | Gnosis`,
    description: saint.short,
    keywords: [
      "Catholic saint",
      saint.name,
      "holy life",
      "spiritual inspiration",
      "faith",
      "devotion",
      "sanctity"
    ].join(", "),
  }
}

export default function SaintDetailPage({ params }: SaintDetailPageProps) {
  const saint = getSaintById(params.id)

  if (!saint) {
    notFound()
  }

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

  // Extract dates from story
  const extractDates = (story: string) => {
    const bornMatch = story.match(/\*\*Born:\*\* (.+?)(?:\n|\*\*)/);
    const diedMatch = story.match(/\*\*Died:\*\* (.+?)(?:\n|\*\*)/);
    const canonizedMatch = story.match(/\*\*Canonized:\*\* (.+?)(?:\n|\*\*)/);

    return {
      born: bornMatch ? bornMatch[1] : null,
      died: diedMatch ? diedMatch[1] : null,
      canonized: canonizedMatch ? canonizedMatch[1] : null
    }
  }

  const era = getEraBadge(saint)
  const dates = extractDates(saint.story)

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="flex flex-col space-y-8">
        {/* Back Navigation */}
        <div className="flex items-center">
          <Button asChild variant="ghost" className="hover:scale-105 transition-all duration-300">
            <Link href="/saints" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Saints
            </Link>
          </Button>
        </div>

        {/* Saint Header */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <div className="text-6xl">{getSaintIcon(saint)}</div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-crimson-bold text-foreground leading-tight">
                {saint.name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-sacred-teal mx-auto rounded-full opacity-60"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <Badge className={`${era.class} flex items-center gap-2 px-4 py-2 text-sm`}>
              <Sparkles className="h-4 w-4" />
              {era.text}
            </Badge>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {saint.short}
          </p>
        </div>

        {/* Saint Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Life Dates Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {dates.born && (
              <Card className="sacred-card">
                <CardHeader className="pb-3">
                  <CardTitle className="font-crimson-bold text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Born
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {dates.born}
                  </p>
                </CardContent>
              </Card>
            )}

            {dates.died && (
              <Card className="sacred-card">
                <CardHeader className="pb-3">
                  <CardTitle className="font-crimson-bold text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Called Home
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {dates.died}
                  </p>
                </CardContent>
              </Card>
            )}

            {dates.canonized && (
              <Card className="sacred-card">
                <CardHeader className="pb-3">
                  <CardTitle className="font-crimson-bold text-lg flex items-center gap-2">
                    <Crown className="h-5 w-5 text-primary" />
                    Canonized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {dates.canonized}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Saint Story */}
          <div className="lg:col-span-3">
            <Card className="sacred-card sacred-glow">
              <CardHeader>
                <CardTitle className="font-crimson-bold text-2xl flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Life & Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  <MarkdownContent content={saint.story} />
                </article>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="bg-sacred-light/30 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-crimson-bold mb-4">Continue Your Journey of Faith</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover more inspiring stories of holy men and women who have shown us the path to sanctity.
            </p>
            <Button asChild className="sacred-button hover:scale-105 transition-all duration-300">
              <Link href="/saints">
                Explore More Saints
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
