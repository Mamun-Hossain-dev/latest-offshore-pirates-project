"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Briefcase,
  TrendingUp,
  Clock,
  Users,
  Loader2,
  Send,
} from "lucide-react";
import { useWeb3Forms } from "../../hooks/use-web3forms";

export default function CareersPage() {
  const { submitForm, isSubmitting } = useWeb3Forms({
    accessKey: "017da9d2-34a6-420c-9f70-2a4deab0b770",
    onSuccess: () => {
      // Reset form after successful submission
      const form = document.getElementById("career-form") as HTMLFormElement;
      if (form) form.reset();
    },
  });

  const benefits = [
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Work with top-tier clients across continents.",
    },
    {
      icon: Briefcase,
      title: "Diverse Roles",
      description:
        "From customer support to digital marketing, finance, and IT outsourcing.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Continuous training, mentorship, and leadership opportunities.",
    },
    {
      icon: Clock,
      title: "Flexible Shifts",
      description: "24/7 operations mean schedules that suit you.",
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "A professional yet human-first work environment.",
    },
  ];

  const opportunities = [
    "Customer Support Specialists",
    "Back Office Executives",
    "Accountants & Finance Experts",
    "Call Center Agents (Inbound/Outbound)",
    "Healthcare Support Staff (HIPAA-trained)",
    "Digital Marketing Specialists (SEO, PPC, Social Media)",
    "Virtual Assistants (Admin, CRM, E-commerce)",
    "Graphic Designers & Creatives",
  ];

  const values = [
    "Excellence in communication",
    "Tech adaptability",
    "Global mindset",
    "Integrity and professionalism",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to object for Web3Forms
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    await submitForm(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join the Global BPO Revolution
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              At Offshore Pirates, we don't just offer jobs—we create global
              careers. We are a world-class BPO and outsourcing company serving
              businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-cyan-200 dark:border-cyan-800 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We're always looking for passionate, driven talent in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg border border-cyan-200 dark:border-cyan-800"
              >
                <p className="text-gray-900 dark:text-white font-medium">
                  • {opportunity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Value
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-white text-center"
              >
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/50 dark:to-blue-950/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Apply Now
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Ready to join the Offshore Pirates crew? Submit your application
                below.
              </p>
            </div>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <form
                  id="career-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  
                  <input type="hidden" name="form_name" value="career" />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Career Application from Offshore Pirates"
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-sm font-medium">
                        Position of Interest *
                      </Label>
                      <Input
                        id="position"
                        name="position"
                        required
                        className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="e.g., Customer Support Specialist"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-sm font-medium">
                      Years of Experience *
                    </Label>
                    <Input
                      id="experience"
                      name="experience"
                      required
                      className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="e.g., 2 years"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills" className="text-sm font-medium">
                      Key Skills *
                    </Label>
                    <Input
                      id="skills"
                      name="skills"
                      required
                      className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="e.g., Customer Service, Data Entry, Microsoft Office"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="cover_letter"
                      className="text-sm font-medium"
                    >
                      Cover Letter *
                    </Label>
                    <Textarea
                      id="cover_letter"
                      name="cover_letter"
                      required
                      rows={6}
                      className="border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                      placeholder="Tell us about yourself, your experience, and why you want to join Offshore Pirates..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">
                    By submitting this application, you agree to our privacy
                    policy and terms of service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
