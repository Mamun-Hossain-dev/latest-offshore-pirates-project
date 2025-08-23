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
import { useWeb3Forms } from "../../hooks/use-web3forms";
import { Mail, Phone, MapPin, Send, Users, Target, Clock, Facebook, Linkedin, Share2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(2, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const { submitForm, isSubmitting } = useWeb3Forms({
    accessKey: "017da9d2-34a6-420c-9f70-2a4deab0b770",
    onSuccess: () => {
      form.reset();
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      service: "Customer Support",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    await submitForm({
      ...values,
      form_name: "contact", // Form identifier for success message
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/30 via-blue-50/20 to-cyan-100/40 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-cyan-900/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-600/10 border-b border-cyan-200/20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl md:text-2xl text-cyan-700 dark:text-cyan-300 leading-relaxed">
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
              <div className="group p-6 rounded-2xl border border-cyan-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-300/60">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-2">Drop us a line anytime</p>
                    <a
                      href="mailto:hello@offshorepirates.co"
                      className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium transition-colors"
                    >
                      info@offshorepirates.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl border border-cyan-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-300/60">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-2">Mon-Fri 9AM-6PM BST</p>
                    <a
                      href="tel:+8801810119575"
                      className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium transition-colors"
                    >
                      +8801810119575
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl border border-cyan-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-300/60">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mb-2">Our Dhaka headquarters</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      House-05, Road-03, Block-D
                      <br />
                      Banasree, Rampura
                      <br />
                      Dhaka-1219, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl border border-cyan-200/50 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-300/60">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">
                      Follow Us
                    </h3>
                    <p className="text-gray-600 mb-2">Stay connected with us on social media</p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61579338635996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/offshore-pirates/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 hover:underline font-medium transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-cyan-200/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977285957896!2d90.42707831498!3d23.754247994587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sBanasree%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635789012345!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-80"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm border border-cyan-200/30">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Quality Ensure</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm border border-cyan-200/30">
                <div className="flex justify-center mb-2">
                  <Target className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm border border-cyan-200/30">
                <div className="flex justify-center mb-2">
                  <Clock className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <div className="bg-white/90 backdrop-blur-sm border border-cyan-200/50 rounded-3xl p-8 shadow-xl shadow-cyan-500/10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                    Start Your Journey
                  </span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Tell us about your project and we&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      className="h-12 rounded-xl border-2 border-cyan-200/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-colors bg-white/80"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="h-12 rounded-xl border-2 border-cyan-200/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-colors bg-white/80"
                      placeholder="john@company.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Service of Interest
                  </Label>
                  <Select
                    defaultValue="Customer Support"
                    onValueChange={(v) => form.setValue("service", v)}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-2 border-cyan-200/50 focus:border-cyan-400 transition-colors bg-white/80">
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
                    <p className="text-sm text-red-500">
                      {form.formState.errors.service.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...form.register("message")}
                    className="rounded-xl border-2 border-cyan-200/50 focus:border-cyan-400 focus:ring-cyan-400/20 transition-colors resize-none bg-white/80"
                    placeholder="Tell us about your project, timeline, and specific requirements..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl h-12 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-cyan-200/30 text-center">
                <p className="text-sm text-gray-500">
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
