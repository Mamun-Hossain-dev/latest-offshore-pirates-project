function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
}

export type Service = {
  name: string;
  desc: string;
  slug: string; // Added slug
};

// Removed SERVICE_CATEGORIES as it's no longer needed

// Removed iconFor function as it's no longer needed

const ALL_SERVICES: Service[] = [
  {
    name: "Customer Support Services",
    desc: "Deliver exceptional customer experiences 24/7 across all channels with our comprehensive customer support solutions. Our expert teams provide seamless, multilingual support that significantly boosts customer satisfaction and retention rates. We handle everything from basic inquiries to complex technical troubleshooting, ensuring your customers receive prompt, professional assistance whenever they need it. Our omnichannel approach integrates phone, email, live chat, and social media support to create a unified customer experience. With advanced CRM integration, detailed reporting, and quality assurance programs, we help you build lasting customer relationships while reducing operational costs by up to 40%.",
    slug: toSlug("Customer Support Services"),
  },
  {
    name: "Back Office Support",
    desc: "Streamline your operations with our comprehensive back-office solutions designed to maximize efficiency and accuracy. We handle critical administrative tasks including data entry, document processing, order management, and CRM maintenance, allowing your core team to focus on strategic growth initiatives. Our experienced professionals utilize advanced automation tools and quality control processes to ensure 99.9% accuracy rates. From invoice processing and inventory management to HR administration and compliance documentation, we provide scalable solutions that grow with your business. Our secure, cloud-based systems ensure data protection while delivering real-time visibility into all back-office operations.",
    slug: toSlug("Back Office Support"),
  },
  {
    name: "Accounting & Finance Outsourcing",
    desc: "Optimize your financial processes with our expert accounting and finance outsourcing services, designed to ensure accuracy, compliance, and significant cost savings. Our certified accounting professionals handle everything from basic bookkeeping to complex financial analysis, accounts payable/receivable management, payroll processing, and tax preparation. We utilize industry-leading software and maintain strict compliance with GAAP standards and regulatory requirements. Our comprehensive reporting provides real-time financial insights, cash flow analysis, and strategic recommendations to support informed decision-making. With our services, businesses typically reduce accounting costs by 30-50% while improving accuracy and gaining access to senior-level financial expertise.",
    slug: toSlug("Accounting & Finance Outsourcing"),
  },
  {
    name: "Call Center Support",
    desc: "Transform customer interactions into loyalty and sales opportunities with our high-performance call center solutions. Our experienced agents deliver quality-driven voice support tailored specifically to your brand voice and customer service standards. We provide comprehensive inbound and outbound calling services, including customer service, technical support, sales, lead generation, appointment scheduling, and market research. Our advanced IVR systems, call routing technology, and real-time analytics ensure optimal call handling efficiency. With multilingual capabilities, 24/7 availability, and scalable infrastructure, we help businesses increase conversion rates by up to 35% while maintaining exceptional customer satisfaction scores.",
    slug: toSlug("Call Center Support"),
  },
  {
    name: "Logistics & Operations",
    desc: "Enhance supply chain efficiency and reduce operational costs with our comprehensive logistics and operations support services. We manage end-to-end logistics processes including order management, inventory control, shipment coordination, returns processing, and carrier management. Our team utilizes advanced tracking systems and automation tools to ensure real-time visibility across your entire supply chain. From warehouse documentation and procurement support to delivery optimization and customer communication, we streamline operations to reduce shipping costs by up to 25% while improving delivery times. Our scalable solutions adapt to seasonal demands and business growth, ensuring consistent service quality.",
    slug: toSlug("Logistics & Operations"),
  },
  {
    name: "Healthcare Process Outsourcing",
    desc: "Navigate complex healthcare processes with confidence through our HIPAA-compliant healthcare outsourcing services. Our certified medical professionals manage critical processes including medical billing and coding, insurance claims processing, patient scheduling, medical transcription, and telemedicine support. We ensure strict compliance with healthcare regulations while utilizing advanced EMR systems and secure data handling protocols. Our expertise spans multiple specialties and insurance providers, helping healthcare organizations reduce billing errors by up to 90%, accelerate reimbursements, and improve patient satisfaction. With our support, healthcare providers can focus on patient care while we handle the administrative complexities.",
    slug: toSlug("Healthcare Process Outsourcing"),
  },
  {
    name: "Digital Marketing Services",
    desc: "Drive measurable growth and expand your online presence with our comprehensive, data-driven digital marketing services. Our expert team delivers integrated marketing solutions including search engine optimization (SEO), pay-per-click advertising (PPC), social media management, email marketing campaigns, content creation, and website development. We utilize advanced analytics and marketing automation tools to optimize campaigns for maximum ROI. Our strategies are tailored to your industry and target audience, focusing on lead generation, brand awareness, and conversion optimization. Clients typically see a 150-300% increase in qualified leads and significant improvements in online visibility within the first 90 days.",
    slug: toSlug("Digital Marketing Services"),
  },
  {
    name: "Virtual Assistant",
    desc: "Empower your executives and teams with elite virtual assistant support designed to boost productivity and operational efficiency. Our highly skilled virtual assistants handle a wide range of administrative tasks including email and calendar management, travel coordination, research projects, CRM updates, social media management, and customer communication. We provide dedicated support tailored to your specific needs and working hours, ensuring seamless integration with your existing workflows. Our VAs are trained in industry-leading tools and platforms, offering specialized expertise in areas like e-commerce management, real estate support, and executive assistance. Businesses typically see a 40-60% increase in productivity while reducing administrative overhead costs.",
    slug: toSlug("Virtual Assistant"),
  },
  {
    name: "Design & Graphics",
    desc: "Elevate your brand and marketing impact with our professional design and graphics services that bring your vision to life with creativity and precision. Our talented design team creates compelling visual content including brand identity and logo design, marketing materials, web graphics, social media assets, packaging design, and motion graphics. We combine artistic creativity with strategic marketing insights to ensure every design element supports your business objectives. Using industry-standard software and following current design trends, we deliver high-quality, print-ready, and web-optimized graphics that enhance brand recognition and customer engagement. Our collaborative approach ensures your brand message is communicated effectively across all visual touchpoints.",
    slug: toSlug("Design & Graphics"),
  },
];

export async function fetchServices({
  page = 1,
  limit = 6,
}: {
  page?: number;
  limit?: number;
}) {
  const list = [...ALL_SERVICES]; // Use the new ALL_SERVICES
  // Removed category filtering as it's not supported by the new data structure
  // if (category !== "All") list = list.filter((s) => s.category === category)
  const start = (page - 1) * limit;
  const items = list.slice(start, start + limit);
  return { items, total: list.length };
}

export async function fetchServiceById(slug: string) {
  // Changed id to slug
  const svc = ALL_SERVICES.find((s) => s.slug === slug); // Find by slug
  if (!svc) throw new Error("Service not found");
  return svc;
}
