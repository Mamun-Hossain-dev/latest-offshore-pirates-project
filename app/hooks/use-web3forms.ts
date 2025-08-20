"use client";

import { useState } from "react";
import { toast } from "sonner";

interface FormSubmissionData {
  [key: string]: string | File;
  form_name: string;
}

interface UseWeb3FormsOptions {
  accessKey: string;
  onSuccess?: (formName: string) => void;
  onError?: (error: string) => void;
}

export function useWeb3Forms({
  accessKey,
  onSuccess,
  onError,
}: UseWeb3FormsOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getSuccessMessage = (
    formName: string
  ): { title: string; description: string } => {
    const messages = {
      contact: {
        title: "🎉 Contact Form Submitted Successfully!",
        description:
          "Thank you for reaching out! We'll get back to you within 24 hours with a personalized response.",
      },
      booking: {
        title: "🎉 Booking Form Submitted Successfully!",
        description:
          "Your booking request has been received! We'll confirm your appointment shortly.",
      },
      newsletter: {
        title: "🎉 Newsletter Subscription Successful!",
        description:
          "Welcome to our community! You'll receive the latest updates and insights directly in your inbox.",
      },
      career: {
        title: "🎉 Career Application Submitted Successfully!",
        description:
          "Your application has been received! Our HR team will review it and get back to you soon.",
      },
      quote: {
        title: "🎉 Quote Request Submitted Successfully!",
        description:
          "We've received your quote request! Our team will prepare a detailed proposal and send it within 24 hours.",
      },
    };

    return (
      messages[formName as keyof typeof messages] || {
        title: "🎉 Form Submitted Successfully!",
        description:
          "Thank you for your submission! We'll process it and get back to you soon.",
      }
    );
  };

  const submitForm = async (data: FormSubmissionData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Add access key
      formData.append("access_key", accessKey);

      // Add all form data
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        const { title, description } = getSuccessMessage(data.form_name);
        toast.success(title, {
          description,
          duration: 6000,
        });

        onSuccess?.(data.form_name);
        return true;
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      toast.error("❌ Submission Failed", {
        description: `${errorMessage}. Please check your connection and try again, or contact us directly.`,
        duration: 7000,
      });

      onError?.(errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
  };
}
