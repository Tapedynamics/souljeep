import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function TourNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-sand-beige to-white">
      <Container className="text-center py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Search className="w-24 h-24 text-stone-gray/30 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Tour <span className="text-sunset-orange">Not Found</span>
            </h1>
            <p className="text-xl text-stone-gray mb-8">
              We couldn&apos;t find the tour you&apos;re looking for.
              It may have been moved or is no longer available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours">
              <Button variant="primary" size="lg" className="group min-w-[200px]">
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                View All Tours
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
