"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Clock } from "lucide-react"
import { TiltCard } from "./tilt-card"

export function ServiceCard({
  service,
  viewMode = "grid",
}: {
  service: {
    id: string
    title: string
    shortDesc: string
    icon: React.ReactNode
    category: string
    stats?: { responseTime: string; csatIncrease: string; costSaving: string }
  }
  viewMode?: "grid" | "list"
}) {
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
            <Image
              src={`/service-${service.id}.jpg`}
              alt={service.title}
              width={320}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-indigo-600 shadow-lg">
                {service.icon}
              </span>
            </div>
            <Badge className="absolute top-4 right-4 bg-indigo-600">{service.category}</Badge>
          </div>
          <div className="flex-1 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{service.shortDesc}</p>

              {service.stats && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-indigo-600">{service.stats.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Faster Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-600">{service.stats.csatIncrease}</div>
                    <div className="text-xs text-muted-foreground">CSAT Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-purple-600">{service.stats.costSaving}</div>
                    <div className="text-xs text-muted-foreground">Cost Saving</div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href={`/services/${service.id}`}>
                    View Details
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>500+ clients</span>
                  </div>
                </div>
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
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`/service-${service.id}.jpg`}
            alt={service.title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-indigo-600 shadow-lg">
              {service.icon}
            </span>
          </div>
          <Badge className="absolute top-4 right-4 bg-indigo-600">{service.category}</Badge>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild variant="secondary" size="sm">
              <Link href={`/services/${service.id}`}>
                <ArrowRight className="size-4 mr-2" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold group-hover:text-indigo-600 transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{service.shortDesc}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="size-3 fill-yellow-400 text-yellow-400" />
                <span>4.9</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-3" />
                <span>24/7</span>
              </div>
            </div>
          </div>

          <Button
            asChild
            className="w-full bg-indigo-600 hover:bg-indigo-700 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
          >
            <Link href={`/services/${service.id}`}>
              View Details
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </TiltCard>
  )
}
