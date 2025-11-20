import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Award, Heart, Target, Compass, Check, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import DynamicHero from '@/components/common/DynamicHero';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us | Soul Jeep Experience - Premium Jeep Tours in Tenerife',
  description: 'Learn about Soul Jeep Experience, your trusted partner for unforgettable Jeep Wrangler adventures across Tenerife. Discover our story, mission, and commitment to excellence.',
  openGraph: {
    title: 'About Soul Jeep Experience',
    description: 'Premium Jeep Wrangler tours in Tenerife. Discover our story and commitment to unforgettable adventures.',
    url: 'https://www.souljeep.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Adventure',
      description: 'We live and breathe adventure. Every tour is designed to ignite your spirit of exploration and create unforgettable memories.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. All vehicles are fully insured, regularly maintained, and equipped with modern safety features.'
    },
    {
      icon: Users,
      title: 'Small Group Experience',
      description: 'We keep our groups intimate to ensure personalized attention and a more meaningful connection with the landscape.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'From the moment you book to the end of your tour, we strive to exceed expectations at every touchpoint.'
    },
    {
      icon: Target,
      title: 'Authentic Experiences',
      description: 'We take you off the beaten path to discover the real Tenerife, away from tourist crowds and into nature\'s embrace.'
    },
    {
      icon: Compass,
      title: 'Expert Guidance',
      description: 'Our professional route guidance ensures you navigate safely while discovering hidden gems and breathtaking viewpoints.'
    }
  ];

  const floatingCards = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "100% Safe & Insured",
      position: { top: "20%", left: "10%" },
      delay: 0.2
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Excellence in Service",
      position: { top: "30%", right: "15%" },
      delay: 0.4
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Passion for Adventure",
      position: { bottom: "25%", left: "12%" },
      delay: 0.6
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Authentic Experiences",
      position: { bottom: "35%", right: "10%" },
      delay: 0.8
    },
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="About "
        highlightText="Soul Jeep"
        subtitle={companyInfo.tagline}
        floatingCards={floatingCards}
        height="h-[55vh]"
        backgroundImage="/images/hero/teide-sunset-hero.jpg"
      />

      {/* Our Story */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-sunset-orange">Story</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-stone-gray space-y-6">
            <p className="text-xl leading-relaxed">
              Soul Jeep Experience was born from a simple passion: to share the raw beauty
              of Tenerife in the most exhilarating way possible. We believe that the best
              way to discover an island is behind the wheel of your own vehicle, free to
              explore at your own pace.
            </p>
            <p className="text-lg leading-relaxed">
              Based in the heart of Costa Adeje, we&apos;ve spent years perfecting our routes,
              discovering hidden viewpoints, and creating experiences that go beyond typical
              sightseeing tours. Every winding mountain road, every volcanic vista, and every
              coastal cliff has been carefully selected to showcase Tenerife&apos;s most spectacular
              landscapes.
            </p>
            <p className="text-lg leading-relaxed">
              What sets us apart is our commitment to giving you freedom. You&apos;re not just
              a passenger on our tours—you&apos;re the driver of your own adventure. With
              professional route guidance and top-of-the-line Jeep Wranglers, you&apos;ll have
              the confidence to explore while creating your own unique story.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Mission */}
      <Section background="sand" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-ocean-blue">Mission</span>
          </h2>
          <p className="text-xl text-stone-gray leading-relaxed mb-8">
            To provide unforgettable, safe, and authentic Jeep experiences that allow travelers
            to discover the soul of Tenerife. We combine the thrill of self-drive adventure with
            expert guidance, creating memories that last a lifetime while maintaining the highest
            standards of safety and service.
          </p>
          <div className="inline-block bg-sunset-orange/10 border-l-4 border-sunset-orange px-6 py-4 rounded-r-lg">
            <p className="text-lg font-medium text-stone-gray italic">
              &quot;We don&apos;t just show you Tenerife—we let you experience its soul.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-sunset-orange">Soul Jeep</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional experiences that combine adventure,
            safety, and authentic exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.features.map((feature, index) => (
            <div
              key={index}
              className="bg-sand-beige rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-sunset-orange flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature}</h3>
              <p className="text-stone-gray">
                Experience premium service and attention to detail at every stage of your journey.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-ocean-blue">Values</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-stone-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Team Section - Placeholder */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-sunset-orange">Team</span>
          </h2>
          <p className="text-xl text-stone-gray mb-8">
            Our passionate team of adventure enthusiasts and local experts are dedicated
            to making your Tenerife experience unforgettable. With deep knowledge of the
            island and a commitment to exceptional service, we&apos;re here to guide you on
            the journey of a lifetime.
          </p>
          <div className="inline-flex items-center gap-2 bg-sand-beige rounded-lg px-6 py-3">
            <Users className="w-5 h-5 text-sunset-orange" />
            <span className="font-medium text-stone-gray">
              Experienced guides | Local expertise | Passionate about adventure
            </span>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="sand" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Licensed &amp; <span className="text-ocean-blue">Certified</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <Award className="w-10 h-10 text-sunset-orange mx-auto mb-3" />
                <p className="font-semibold text-stone-gray">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-sunset-orange">Experience</span> the Difference?
          </h2>
          <p className="text-xl text-stone-gray mb-8">
            Join us for an unforgettable Jeep adventure through Tenerife&apos;s most spectacular landscapes.
            Book your tour today and discover why travelers choose Soul Jeep Experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group">
                Book Your Adventure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/tours">
              <Button variant="outline" size="lg">
                Explore Tours
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
