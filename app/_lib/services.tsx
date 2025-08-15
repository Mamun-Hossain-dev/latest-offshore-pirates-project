function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
}

export type Service = {
  name: string
  desc: string
  slug: string // Added slug
}

// Removed SERVICE_CATEGORIES as it's no longer needed

// Removed iconFor function as it's no longer needed

const ALL_SERVICES: Service[] = [
  {
    "name": "Customer Support Services",
    "desc": "Deliver exceptional customer experiences 24/7 across all channels. Our expert teams ensure seamless, multilingual support that boosts satisfaction and retention.",
    "slug": toSlug("Customer Support Services")
  },
  {
    "name": "Back Office Support",
    "desc": "Streamline your operations with efficient, accurate back-office solutions. We handle data entry, processing, and administrative tasks, freeing your core team for strategic initiatives.",
    "slug": toSlug("Back Office Support")
  },
  {
    "name": "Accounting & Finance Outsourcing",
    "desc": "Optimize financial processes with our expert accounting and finance outsourcing. Ensure accuracy, compliance, and cost savings, from payroll to complex reconciliations.",
    "slug": toSlug("Accounting & Finance Outsourcing")
  },
  {
    "name": "Call Center Support",
    "desc": "Transform customer interactions into loyalty and sales with our high-performance call center solutions. Experience scalable, quality-driven voice support tailored to your brand.",
    "slug": toSlug("Call Center Support")
  },
  {
    "name": "Logistics & Operations",
    "desc": "Enhance supply chain efficiency and reduce operational costs. Our logistics and operations support ensures smooth workflows, real-time tracking, and optimized delivery networks.",
    "slug": toSlug("Logistics & Operations")
  },
  {
    "name": "Healthcare Process Outsourcing",
    "desc": "Navigate complex healthcare processes with ease. Our HIPAA-compliant teams manage billing, claims, and patient support, improving efficiency and data security.",
    "slug": toSlug("Healthcare Process Outsourcing")
  },
  {
    "name": "Digital Marketing Services",
    "desc": "Drive measurable growth with data-driven digital marketing. From SEO to paid media, our strategies boost conversions and expand your online presence effectively.",
    "slug": toSlug("Digital Marketing Services")
  },
  {
    "name": "Virtual Assistant",
    "desc": "Empower your executives and teams with elite virtual assistant support. Delegate administrative tasks, scheduling, and research to boost productivity and focus on core business.",
    "slug": toSlug("Virtual Assistant")
  },
  {
    "name": "Design & Graphics",
    "desc": "Elevate your brand with professional design and graphics services. From compelling marketing materials to engaging digital assets, we bring your vision to life with creativity and precision.",
    "slug": toSlug("Design & Graphics")
  }
];

export async function fetchServices({
  page = 1,
  limit = 6,
}: { page?: number; limit?: number; }) {
  const list = [...ALL_SERVICES]; // Use the new ALL_SERVICES
  // Removed category filtering as it's not supported by the new data structure
  // if (category !== "All") list = list.filter((s) => s.category === category)
  const start = (page - 1) * limit
  const items = list.slice(start, start + limit)
  return { items, total: list.length }
}

export async function fetchServiceById(slug: string) { // Changed id to slug
  const svc = ALL_SERVICES.find((s) => s.slug === slug); // Find by slug
  if (!svc) throw new Error("Service not found");
  return svc;
}
