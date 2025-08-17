"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "./tilt-card"
import { Service } from "@/app/_lib/services";

export function ServiceCard({
  service,
  viewMode = "grid",
}: {
  service: Service;
  viewMode?: "grid" | "list"
}) {
  // For list view, I will simplify it significantly
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row p-6">
          <div className="flex-1">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{service.desc}</p>
              <div className="flex items-center justify-between">
                <Button asChild className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors">
                  <Link href={`/services/${service.slug}`}> 
                    View Details
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <TiltCard asChild>
      <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 group">
        <div className="relative h-48 overflow-hidden">
          {/* <Image
            src="/placeholder.jpg"
            alt={service.name}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold group-hover:text-indigo-600 transition-colors">
            {service.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{service.desc}</p>

          <Button
            asChild
            className="w-full bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
          >
            <Link href={`/services/${service.slug}`}> 
              View Details
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </TiltCard>
  )
}
