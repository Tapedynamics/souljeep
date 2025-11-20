import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-stone-gray text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sunset-orange">SOUL</span>
              <span className="text-white ml-1">JEEP</span>
            </h3>
            <p className="text-sand-beige mb-4">{companyInfo.tagline}</p>
            <p className="text-sm text-gray-300">{companyInfo.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  Our Tours
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex items-start gap-2 text-sand-beige hover:text-sunset-orange transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>{companyInfo.contact.phone}</div>
                    <div className="text-xs text-gray-400">{companyInfo.contact.phoneHours}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-2 text-sand-beige hover:text-sunset-orange transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sand-beige">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div>{companyInfo.location.address}</div>
                    <div>{companyInfo.location.addressLine2}</div>
                    <div>{companyInfo.location.city}, {companyInfo.location.postalCode}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sunset-orange flex items-center justify-center hover:bg-sunset-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-blue flex items-center justify-center hover:bg-ocean-deep transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-sand-beige">
              <p className="font-semibold mb-2">Opening Hours</p>
              <p>Monday - Sunday</p>
              <p>{companyInfo.hours.monday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p className="mt-2">
            Made with passion in Tenerife
          </p>
        </div>
      </Container>
    </footer>
  );
}
