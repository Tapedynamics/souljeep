import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { getAllArticles, type BlogArticle } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - Guías y Consejos para Tenerife | Soul Jeep Experience',
  description: 'Descubre las mejores rutas, consejos y guías para explorar Tenerife en Jeep Wrangler. Tours al Teide, costa y aventuras únicas.',
  keywords: 'blog tenerife, guia teide, que ver tenerife, excursiones tenerife, jeep wrangler tenerife',
  alternates: {
    canonical: 'https://www.souljeep.com/blog',
  },
};

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full uppercase">
            {article.lang === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-stone-gray mb-2 group-hover:text-sunset-orange transition-colors line-clamp-2">
            {article.title}
          </h2>
          <p className="text-stone-gray/70 text-sm mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center justify-between text-xs text-stone-gray/50">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime} min</span>
            </div>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const esArticles = getAllArticles('es');
  const enArticles = getAllArticles('en');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-blue to-ocean-deep text-white py-20 pt-32">
        <Container className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Blog <span className="text-sunset-gold">Soul Jeep</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Guías, consejos y todo lo que necesitas saber para vivir Tenerife al máximo
          </p>
        </Container>
      </section>

      {/* Articulos ES */}
      {esArticles.length > 0 && (
        <Section background="white" padding="xl">
          <div className="flex items-center gap-2 mb-8">
            <Globe className="w-5 h-5 text-ocean-blue" />
            <h2 className="text-2xl font-bold text-stone-gray">Artículos en Español</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {esArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Section>
      )}

      {/* Articulos EN */}
      {enArticles.length > 0 && (
        <Section background="sand" padding="xl">
          <div className="flex items-center gap-2 mb-8">
            <Globe className="w-5 h-5 text-ocean-blue" />
            <h2 className="text-2xl font-bold text-stone-gray">Articles in English</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-sunset-orange to-sunset-gold text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para tu aventura?</h2>
          <p className="text-xl mb-8 opacity-90">El Teide te espera. Tú al volante.</p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white text-sunset-orange font-bold text-lg py-4 px-8 rounded-xl shadow-xl hover:bg-sand-beige transition-colors group"
          >
            Ver Tours
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
