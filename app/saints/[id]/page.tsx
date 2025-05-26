import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSaintById, getAllSaintIds } from '@/data/saints';
import { MarkdownContent } from '@/components/markdown-content';

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
export async function generateMetadata({ params }: SaintDetailPageProps) {
  const saint = getSaintById(params.id);

  if (!saint) {
    return {
      title: 'Saint Not Found',
    };
  }

  return {
    title: `${saint.name} | Saints`,
    description: saint.short,
  };
}

export default function SaintDetailPage({ params }: SaintDetailPageProps) {
  const saint = getSaintById(params.id);

  if (!saint) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link
          href="/saints"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Back to Saints listing"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Saints
        </Link>
      </div>

      {/* Saint Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose mb-8">
          <h1 className="text-4xl font-bold mb-4">{saint.name}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {saint.short}
          </p>
        </div>

        <MarkdownContent content={saint.story} />
      </article>

      {/* Navigation to other saints */}
      <div className="mt-12 pt-8 border-t">
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            aria-label="Explore more saints"
          >
            Explore More Saints
          </Link>
        </div>
      </div>
    </div>
  );
}
