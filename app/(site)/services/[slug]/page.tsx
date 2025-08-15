import { fetchServiceById, fetchServices } from "@/app/_lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ServiceCard } from "@/app/_components/service-card";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await fetchServiceById(params.slug).catch(() => {
    notFound();
  });

  // Removed category filter for related services as it's not available in the new data structure
  const relatedServices = await fetchServices({ limit: 3 }); // Fetch 3 related services

  // Removed imageUrl as there are no specific images for services in the new data structure
  // const imageUrl = `/service-${service.id}.jpg`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0">
          {/* Placeholder image as specific service images are not in the new data structure */}
          <Image
            src="/placeholder.jpg" // Using a generic placeholder image
            alt={service.name}
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl">
            {/* Category badge removed as category is not available in the new data structure */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              {service.desc}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Removed Problem & Solution, Features, and Stats Sidebar sections */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">About Our {service.name}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {service.desc}
          </p>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Related Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.items
              .filter((s) => s.slug !== service.slug) // Filter by slug
              .slice(0, 3)
              .map((s) => (
                  <ServiceCard key={s.slug} service={s} /> // Use ServiceCard with new data structure and slug as key
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}