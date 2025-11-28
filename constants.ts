import { Lightbulb, Trophy, Headset, Briefcase, BarChart, Settings, Layers, Target, Users, Zap, Globe, Cpu, LineChart, Shield, Search, PenTool, Rocket, Repeat } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#', hasDropdown: true },
  { label: 'Pages', href: '#', hasDropdown: true },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Portfolio', href: '#', hasDropdown: true },
  { label: 'Blog', href: '#', hasDropdown: true },
  { label: 'Contact', href: '#', hasDropdown: false },
];

export const FEATURES = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.'
  },
  {
    icon: Trophy,
    title: 'Award-Winning Expertise',
    description: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.'
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'Our team is always available to address your concerns, providing quick and effective solutions to keep your business running.'
  },
];

export const CLIENT_LOGOS = [
  { name: 'TSE', url: 'https://placehold.co/120x40/transparent/333?text=TSE' },
  { name: 'Monceau', url: 'https://placehold.co/120x40/transparent/333?text=monceau' },
  { name: 'Flomodia', url: 'https://placehold.co/120x40/transparent/333?text=flomodia' },
  { name: 'Weglot', url: 'https://placehold.co/120x40/transparent/333?text=WEGLOT' },
  { name: 'Influence', url: 'https://placehold.co/120x40/transparent/333?text=Influence' },
];

export const SOLUTIONS = [
  {
    id: '01',
    title: 'Digital Transformation',
    description: 'We help businesses reimagine their processes, culture, and customer experiences using digital technologies to create new value.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    tags: ['AI Integration', 'Cloud Migration', 'Process Automation'],
    icon: Cpu
  },
  {
    id: '02',
    title: 'Strategic Consulting',
    description: 'Data-driven insights to help you identify growth opportunities, optimize operations, and build a sustainable competitive advantage.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    tags: ['Market Analysis', 'Growth Strategy', 'M&A Advisory'],
    icon: LineChart
  },
  {
    id: '03',
    title: 'Customer Experience',
    description: 'Designing frictionless, memorable customer journeys that drive loyalty and increase lifetime value across all touchpoints.',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop',
    tags: ['UX/UI Design', 'Journey Mapping', 'Service Design'],
    icon: Users
  },
  {
    id: '04',
    title: 'Cybersecurity & Risk',
    description: 'Comprehensive risk management strategies to protect your digital assets and ensure compliance in an evolving threat landscape.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    tags: ['Security Audits', 'Compliance', 'Data Protection'],
    icon: Shield
  },
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Discovery Phase',
    subtitle: 'Uncovering Potential',
    description: 'We dive deep into your business ecosystem to identify bottlenecks and hidden opportunities.',
    icon: Search,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 2,
    title: 'Strategic Blueprint',
    subtitle: 'Planning the Route',
    description: 'Our experts craft a bespoke roadmap tailored to your specific market position and goals.',
    icon: PenTool,
    color: 'from-teal-400 to-emerald-500'
  },
  {
    id: 3,
    title: 'Agile Execution',
    subtitle: 'Building the Future',
    description: 'We implement solutions with rapid iteration cycles, ensuring quick wins and long-term stability.',
    icon: Rocket,
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 4,
    title: 'Continuous Evolution',
    subtitle: 'Scaling Excellence',
    description: 'Post-launch optimization and support to ensure your business stays ahead of the curve.',
    icon: Repeat,
    color: 'from-purple-400 to-pink-500'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Sarah Jenning',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Former Fortune 500 executive with a passion for sustainable business scaling.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    bio: 'Data scientist turned strategist, Michael bridges the gap between numbers and vision.'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Award-winning designer ensuring every solution is as beautiful as it is functional.'
  },
  {
    id: 4,
    name: 'David Okafor',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop',
    bio: 'Full-stack architect specializing in cloud infrastructure and AI integration.'
  }
];

export const FAQS = [
  {
    question: "How do you ensure the success of a project?",
    answer: "We ensure success through meticulous planning, clear communication, and agile execution methodologies that adapt to your specific needs."
  },
  {
    question: "How long will it take to complete my project?",
    answer: "Timeline varies by complexity. A standard project might take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide a detailed timeline upfront."
  },
  {
    question: "Can I track the progress of my project?",
    answer: "Absolutely. We provide weekly reports and access to our project management dashboard so you can monitor real-time progress."
  }
];