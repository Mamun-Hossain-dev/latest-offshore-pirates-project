"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const getSuccessMessage = (
    formName: string
  ): { title: string; description: string } => {
    const messages = {
      contact: {
        title: "The Contact Form was submitted successfully ✅",
        description: "We'll get back to you within 24 hours!",
      },
      booking: {
        title: "The Booking Form was submitted successfully ✅",
        description:
          "Your booking request has been received. We'll confirm shortly!",
      },
      newsletter: {
        title: "The Newsletter Form was submitted successfully ✅",
        description: "Welcome! You're now subscribed to our newsletter.",
      },
      career: {
        title: "The Career Form was submitted successfully ✅",
        description:
          "Your application has been received. We'll review and get back to you soon!",
      },
      quote: {
        title: "The Quote Form was submitted successfully ✅",
        description:
          "Your quote request has been received. We'll send you a detailed proposal within 24 hours!",
      },
    };

    return (
      messages[formName as keyof typeof messages] || {
        title: "Form submitted successfully ✅",
        description: "Thank you for your submission!",
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
        toast({
          title,
          description,
          duration: 5000,
        });

        onSuccess?.(data.form_name);
        return true;
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      toast({
        title: "Submission Failed ❌",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
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
