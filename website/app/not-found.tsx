import Link from 'next/link';
import Image from 'next/image';
import { Home, Map, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-sand-beige to-white">
      <Container className="text-center py-20">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Soul Jeep Experience"
            width={200}
            height={57}
            className="mx-auto mb-6"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-sunset-orange mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-gray mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-stone-gray max-w-md mx-auto mb-8">
            Parece que esta ruta no existe. Pero tenemos rutas mucho mejores esperándote en Tenerife.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              <Home className="mr-2 w-5 h-5" />
              Ir al Inicio
            </Button>
          </Link>
          <Link href="/tours">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <Map className="mr-2 w-5 h-5" />
              Ver Tours
            </Button>
          </Link>
          <Link href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white min-w-[200px]">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
