"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Users, Target, Clock } from "lucide-react";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(2),
  message: z.string().min(10),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      service: "Customer Support",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    toast({ title: "Thanks!", description: "We'll reach out soon." });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-indigo-50/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50/10 via-purple-50/10 to-blue-50/10 border-b">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl md:text-2xl text-cyan-700 leading-relaxed">
              Ready to transform your business operations? Our offshore experts
              are here to align your goals with flawless execution.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-indigo-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Drop us a line anytime
                    </p>
                    <a
                      href="mailto:hello@offshorepirates.co"
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      hello@offshorepirates.co
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-indigo-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Mon-Fri 9AM-6PM EST
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-indigo-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Our global headquarters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border shadow-sm">
              <Image
                src="/office-location-map.png"
                alt="Office location map"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="flex justify-center mb-2">
                  <Target className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="flex justify-center mb-2">
                  <Clock className="h-6 w-6 text-indigo-500" />
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <div className="bg-card border rounded-3xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Start Your Journey
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tell us about your project and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      className="h-12 rounded-xl border-2 focus:border-indigo-500 transition-colors"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="h-12 rounded-xl border-2 focus:border-indigo-500 transition-colors"
                      placeholder="john@company.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Service of Interest
                  </Label>
                  <Select
                    defaultValue="Customer Support"
                    onValueChange={(v) => form.setValue("service", v)}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-2 focus:border-indigo-500 transition-colors">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Customer Support",
                        "Back Office",
                        "Accounting",
                        "Sales",
                        "Content Moderation",
                        "Data Ops",
                        "AR/AP",
                        "QA",
                        "Tech Support",
                      ].map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.service && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.service.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...form.register("message")}
                    className="rounded-xl border-2 focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and specific requirements..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
