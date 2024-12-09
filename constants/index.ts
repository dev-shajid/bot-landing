import Icons from "@/components/global/icons";

interface Feature {
  title: string;
  description: string;
  type: "ai-agents" | "inbox" | "customer-journeys" | "chatbots" | "healthcare" | "data-insights";
}

export const features: Feature[] = [
  {
    title: "Dynamic AI Agents",
    description:
      "Empower your operations with AI agents that learn, adapt, and handle tasks like pros. From customer support to advanced data analysis, let them take the reins.",
    type: "ai-agents",
  },
  {
    title: "Smart Inbox Management",
    description:
      "Don't let your inbox control you. Prioritize, categorize, and auto-respond with AI that turns chaos into clarity.",
    type: "inbox",
  },
  {
    title: "Personalized Customer Journeys",
    description:
      "Create meaningful, tailored experiences for your customers. From recommendations to follow-ups, your AI assistant does it all.",
    type: "customer-journeys",
  },
  {
    title: "Seamless Multi-Channel Chatbots",
    description:
      "Engage customers wherever they are — from websites to social media — with chatbots that sound natural and know your business inside out.",
    type: "chatbots",
  },
  {
    title: "Healthcare Scheduling",
    description:
      "Handle appointment booking, rescheduling, and patient reminders with ease. AI makes healthcare scheduling efficient and error-free.",
    type: "healthcare",
  },
  {
    title: "Smart Data Insights",
    description:
      "Transform raw data into actionable insights with AI-powered analytics. Visualize trends, predict outcomes, and make decisions with confidence.",
    type: "data-insights",
  },
];

export const reviews = [
  {
    name: "Sarah Johnson",
    username: "CTO at TechFlow Solutions",
    body: "The AI agents from Attensys have transformed how we handle customer support. We've reduced response times by 70% while maintaining high customer satisfaction.",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "The AI suggestions have cut our response times in half. A game changer!",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "We can now see every customer interaction in one place. No more lost emails.",
  },
  {
    name: "Dana",
    username: "@dana",
    body: "Collaboration has never been easier. Our team is resolving tickets faster than ever.",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Great platform! The AI-powered responses are surprisingly accurate.",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "This has streamlined our communication. No more email chaos!",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Testimonials", "Integration"],
  },
  {
    title: "Integrations",
    links: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Privacy Policy", "Terms & Conditions"],
  },
];
