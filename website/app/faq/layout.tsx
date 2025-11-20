import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Soul Jeep Experience - Frequently Asked Questions',
  description: 'Find answers to common questions about our Jeep Wrangler tours in Tenerife. Learn about requirements, pricing, cancellation policy, and what to expect.',
  keywords: 'jeep tour faq, tenerife tours questions, jeep rental tenerife, tour requirements, booking questions',
  openGraph: {
    title: 'FAQ - Soul Jeep Experience',
    description: 'Answers to frequently asked questions about our Jeep Wrangler tours in Tenerife.',
    url: 'https://www.souljeep.com/faq',
    images: ['/images/og-image.jpg'],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
