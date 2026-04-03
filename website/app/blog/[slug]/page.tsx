import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, ArrowLeft, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import Container from '@/components/ui/Container';
import { getArticleBySlug, getArticleSlugs, getAllArticles } from '@/data/blog';
import { companyInfo } from '@/data/company';
import { getTourBySlug } from '@/data/tours';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Artículo no encontrado' };

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords.join(', '),
    alternates: {
      canonical: `https://www.souljeep.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: article.image, width: 1200, height: 630, alt: article.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedTour = article.relatedTourSlug ? getTourBySlug(article.relatedTourSlug) : null;
  const isEs = article.lang === 'es';

  // Schema.org Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `https://www.souljeep.com${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: { '@type': 'Organization', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'Soul Jeep Experience',
      logo: { '@type': 'ImageObject', url: 'https://www.souljeep.com/images/logo.png' },
    },
    mainEntityOfPage: `https://www.souljeep.com/blog/${article.slug}`,
  };

  return (
    <div className="bg-white">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero image */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[50vh]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <Container>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
              <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Blog
              </Link>
              <span>·</span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString(isEs ? 'es-ES' : 'en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime} min
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
              {article.title}
            </h1>
          </Container>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            {/* Article body */}
            <div
              className="prose prose-lg prose-stone max-w-none
                prose-headings:font-bold prose-headings:text-stone-gray
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-stone-gray/80 prose-p:leading-relaxed
                prose-li:text-stone-gray/80
                prose-a:text-ocean-blue prose-a:no-underline hover:prose-a:underline
                prose-strong:text-stone-gray"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Related tour CTA */}
            {relatedTour && relatedTour.visible && (
              <div className="mt-12 bg-gradient-to-br from-sunset-orange/10 to-sunset-gold/10 rounded-2xl p-8 border border-sunset-orange/20">
                <h3 className="text-2xl font-bold text-stone-gray mb-2">
                  {isEs ? '¿Listo para vivirlo?' : 'Ready to experience it?'}
                </h3>
                <p className="text-stone-gray/70 mb-6">
                  {isEs
                    ? `Reserva tu ${relatedTour.title} ahora o escríbenos por WhatsApp para el mejor precio.`
                    : `Book your ${relatedTour.title} now or message us on WhatsApp for the best price.`}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={relatedTour.fareharbor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-sunset-orange hover:bg-sunset-gold text-white font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    {isEs ? 'Reservar Tour' : 'Book Tour'}
                  </Link>
                  <Link
                    href={companyInfo.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Link>
                  <Link
                    href={`/tours/${relatedTour.slug}`}
                    className="flex items-center justify-center gap-2 border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white font-bold py-3 px-6 rounded-xl transition-colors group"
                  >
                    {isEs ? 'Ver Tour' : 'View Tour'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}

            {/* Keywords as tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {article.keywords.map((kw) => (
                <span key={kw} className="bg-sand-beige text-stone-gray/60 text-xs px-3 py-1 rounded-full">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* More articles */}
      <section className="py-12 bg-sand-beige">
        <Container>
          <h2 className="text-2xl font-bold text-stone-gray mb-8 text-center">
            {isEs ? 'Más artículos' : 'More articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {getAllArticles()
              .filter((a) => a.slug !== article.slug)
              .slice(0, 4)
              .map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image src={a.image} alt={a.imageAlt} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-stone-gray group-hover:text-sunset-orange transition-colors line-clamp-2">
                        {a.title}
                      </h3>
                      <p className="text-xs text-stone-gray/50 mt-1">
                        {a.lang === 'es' ? '🇪🇸' : '🇬🇧'} · {a.readingTime} min
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
