"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Users, TrendingUp, Award, Clock, Globe } from "lucide-react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  message: z.string().min(10),
});

export default function CareerPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", role: "", message: "" },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("apply", values);
    toast({
      title: "Application received",
      description: "We'll reach out soon.",
    });
    form.reset();
  };

  const jobs = [
    {
      id: "cs-lead",
      title: "Customer Support Lead",
      location: "Remote",
      type: "Full-time",
      desc: "Own SLA performance and team coaching. Lead a global support team to deliver exceptional customer experiences across all channels.",
      requirements: [
        "3+ years customer support experience",
        "Team leadership skills",
        "Excellent communication",
        "Problem-solving mindset",
      ],
    },
    {
      id: "fa-analyst",
      title: "Financial Analyst (AR/AP)",
      location: "Remote",
      type: "Full-time",
      desc: "Manage reconciliations and reporting. Handle accounts receivable/payable processes and financial analysis for our growing operations.",
      requirements: [
        "Bachelor's in Finance/Accounting",
        "2+ years AR/AP experience",
        "Excel proficiency",
        "Attention to detail",
      ],
    },
    {
      id: "bo-specialist",
      title: "Back Office Specialist",
      location: "Hybrid",
      type: "Full-time",
      desc: "Data entry, QA, and workflow ops. Support critical business operations with accurate data management and quality assurance.",
      requirements: [
        "Strong attention to detail",
        "Data entry experience",
        "Process improvement mindset",
        "Team collaboration skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote-First Culture",
      description:
        "Work from anywhere with flexible hours and global collaboration",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear advancement paths with mentorship and skill development",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description:
        "Health insurance, performance bonuses, and professional development",
    },
    {
      icon: Users,
      title: "Diverse Team",
      description: "Join a multicultural team of passionate professionals",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10 px-4 md:px-6 py-20 md:py-32 ">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Work With Us
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Grow with a global team. Learn fast, ship value, and lead with
              ownership.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Global Team</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Fast Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join Offshore Pirates?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're building the future of offshore operations with a team that
              values innovation, growth, and excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 hover:from-cyan-100 hover:to-blue-100 dark:hover:from-cyan-900/50 dark:hover:to-blue-900/50 cursor-pointer group"
              >
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-cyan-600 transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-cyan-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Growth Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A clear path from onboarding to leadership
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Onboard",
                desc: "Ramp fast with structured playbooks & shadowing.",
                icon: Clock,
              },
              {
                step: "2",
                title: "Own",
                desc: "Lead KPIs, drive improvements, mentor others.",
                icon: TrendingUp,
              },
              {
                step: "3",
                title: "Scale",
                desc: "Build squads, standardize, and automate.",
                icon: Users,
              },
            ].map((s, i) => (
              <Card
                key={s.title}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:h-2 transition-all duration-300"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {s.step}
                  </div>
                  <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors duration-300">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join our growing team and make an impact from day one
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {jobs.map((job) => (
                <AccordionItem
                  key={job.id}
                  value={job.id}
                  className="border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-cyan-300 dark:hover:border-cyan-600"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-left">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-cyan-600 transition-colors duration-300">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        {job.desc}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Quick Apply
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Don't see the perfect role? Send us your details and we'll keep
                you in mind for future opportunities.
              </p>
            </div>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-8">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Enter your full name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Enter your email address"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="role" className="text-sm font-medium">
                      Role of Interest
                    </Label>
                    <Input
                      id="role"
                      {...form.register("role")}
                      className="h-12 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Which role interests you?"
                    />
                    {form.formState.errors.role && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.role.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Tell us about yourself
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      {...form.register("message")}
                      className="border-gray-200 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                      placeholder="Share your experience, skills, and what excites you about joining our team..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
