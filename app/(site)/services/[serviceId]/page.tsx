import { fetchServiceById, fetchServices } from "@/app/_lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/app/_components/service-card";

export default async function ServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const service = await fetchServiceById(params.serviceId).catch(() => {
    notFound();
  });

  const relatedServices = await fetchServices({
    category: service.category,
    limit: 4,
  });

  const imageUrl = `/service-${service.id}.jpg`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={service.title}
            width={1920}
            height={600}
            className="w-full h-full object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              {service.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">The Problem</h3>
                  <p className="text-muted-foreground">{service.problem}</p>
                </CardContent>
              </Card>
              <Card className="border-indigo-500/50 bg-indigo-500/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                  <p className="text-foreground">{service.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 mt-1 text-indigo-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Sidebar */}
          <aside className="space-y-8">
            <Card className="bg-muted/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Expected Outcomes</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-indigo-500">
                      {service.stats.responseTime}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Faster Response Time
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-500">
                      {service.stats.csatIncrease}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Higher CSAT
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-500">
                      {service.stats.costSaving}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Cost Savings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Related Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.items
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((s, i) => (
                  <ServiceCard service={s} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}