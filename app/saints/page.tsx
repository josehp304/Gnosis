import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllSaints } from '@/data/saints';

export default function SaintsPage() {
  const saints = getAllSaints();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Saints</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Discover the inspiring stories of holy men and women who have shown us the path to sanctity through their extraordinary lives of faith, service, and devotion.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {saints.map((saint) => (
          <Link
            key={saint.id}
            href={`/saints/${saint.id}`}
            className="group"
            aria-label={`Read more about ${saint.name}`}
          >
            <Card className="h-full rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer group-hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {saint.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed">
                  {saint.short}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}