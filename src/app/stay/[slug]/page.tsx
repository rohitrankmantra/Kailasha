import { staysData } from "@/data/stays";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StayBookingWrapper from "@/components/stay/StayBookingWrapper";
import StayGallery from "@/components/stay/StayGallery";

const amenitiesList = [
  "Farm-to-Table Organic Meals",
  "High-Speed Wifi",
  "Living Area",
  "Swimming Pool",
  "Outdoor Deck Sitting",
  "Gym",
  "Recreation",
  "Kailasa Temple",
  "Bonfire Area",
  "Library",
  "Farm Walks"
];

export function generateStaticParams() {
  return staysData.map((stay) => ({
    slug: stay.id,
  }));
}

export default async function StayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const stay = staysData.find((s) => s.id === resolvedParams.slug);

  if (!stay) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-kw-offwhite text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={stay.heroImage} 
            alt={stay.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <span className="text-kw-offwhite/80 uppercase tracking-widest text-sm mb-4 block">
            {stay.details}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-kw-offwhite drop-shadow-lg">
            {stay.title}
          </h1>
        </div>
        
        <Link 
          href="/#experience" 
          className="absolute top-32 left-6 md:left-12 z-20 flex items-center gap-2 text-kw-offwhite hover:text-kw-sage transition-colors uppercase tracking-widest text-xs font-medium"
        >
          <ArrowLeft size={16} />
          Back to Stays
        </Link>
      </section>

      {/* Description Section */}
      <section className="py-24 px-6 md:px-12 bg-kw-beige">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 text-kw-forest">
            Experience the essence of <br className="hidden md:block" />
            <span className="italic text-kw-sage">{stay.title}</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-kw-forest/80 mb-16">
            {stay.fullDescription}
          </p>
          
          <div className="border-t border-b border-kw-forest/10 py-12 mb-12 text-center md:text-left">
            <h3 className="text-sm uppercase tracking-widest text-kw-sage mb-8 font-medium text-center">Room Amenities</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
              {stay.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center justify-center md:justify-start gap-3 text-kw-forest/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-sage shrink-0" />
                  <span className="text-sm md:text-base">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          <StayBookingWrapper stayTitle={stay.title} />
        </div>
      </section>

      {/* Common Amenities Section */}
      <section className="py-24 bg-kw-offwhite relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-kw-sage/50" />
              <span className="text-xs uppercase tracking-widest text-kw-forest/50">Shared Spaces</span>
              <div className="h-px w-12 bg-kw-sage/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-kw-forest">
              Common Amenities & Recreation
            </h2>
            <p className="text-base md:text-lg text-kw-forest/80 leading-relaxed mb-16">
              The common areas are an integral part of your stay at Kailasa Woods. Whether you want to stay active, relax with a book, or enjoy an evening by the bonfire, our shared spaces offer something for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 border-t border-kw-forest/10 mt-12 text-center md:text-left">
              {amenitiesList.map((amenity, index) => (
                <div
                  key={index}
                  className="py-6 border-b border-kw-forest/10 flex items-center justify-center md:justify-between gap-2"
                >
                  <h3 className="font-sans font-medium text-lg text-kw-forest">{amenity}</h3>
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-sage" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-kw-stone">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-kw-forest">Gallery</h2>
            <p className="text-kw-forest/70 uppercase tracking-widest text-xs">Glimpses of your stay</p>
          </div>
          
          <StayGallery gallery={stay.gallery} title={stay.title} />
        </div>
      </section>
    </main>
  );
}