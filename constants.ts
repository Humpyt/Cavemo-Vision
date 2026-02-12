
import { Lightbulb, Trophy, Headset, Briefcase, BarChart, Settings, Layers, Target, Users, Zap, Globe, Cpu, LineChart, Shield, Search, PenTool, Rocket, Repeat, DollarSign, Clock, CheckCircle2, Star, Sparkles, HardHat, Hammer, Truck, Ruler, BrickWall, Warehouse, ArrowRight, Layout, PaintBucket, Building2, Ruler as RulerIcon } from 'lucide-react';

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

export const IMPACT_STATS = [
    { label: "Capital Raised", value: "$500M+", icon: DollarSign, color: "text-green-400" },
    { label: "Startups Scaled", value: "120+", icon: Rocket, color: "text-orange-400" },
    { label: "Global Partners", value: "45", icon: Globe, color: "text-blue-400" },
    { label: "Years Experience", value: "15+", icon: Clock, color: "text-purple-400" },
];

export const PRICING_PLANS = [
    {
        name: "Sprint",
        price: "15k",
        period: "/project",
        description: "Rapid intervention for specific bottlenecks.",
        features: ["2-Week Intensive", "Audit & Strategy", "Action Plan", "1 Month Support"],
        highlight: false,
        icon: Zap
    },
    {
        name: "Transformation",
        price: "45k",
        period: "/quarter",
        description: "Holistic restructuring for long-term growth.",
        features: ["Full Org Assessment", "Process Re-engineering", "Tech Stack Optimization", "Executive Coaching"],
        highlight: true,
        icon: Sparkles
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Dedicated partnership for global scale.",
        features: ["Embedded Team", "M&A Advisory", "Global Expansion", "24/7 Strategic Access"],
        highlight: false,
        icon: Trophy
    }
];

export const FAQS = [
  {
    question: "Do you provide both design and construction services?",
    answer: "Yes, we offer end-to-end design and build solutions, including architectural planning, structural design, interior finishing, and on-site construction ensuring a smooth, integrated process from concept to completion."
  },
  {
    question: "Can you work with my existing architect or designer?",
    answer: "Absolutely. We regularly collaborate with external architects and designers to bring their visions to life, providing our construction expertise to ensure feasibility and quality."
  },
  {
    question: "How do you estimate the total project cost?",
    answer: "Our estimation process involves a detailed analysis of materials, labor, site conditions, and timeline. We provide transparent, itemized quotes so you know exactly where your investment goes."
  },
  {
    question: "What materials do you typically use for construction?",
    answer: "We source high-quality, sustainable materials tailored to project needs, ranging from reinforced concrete and structural steel to eco-friendly timber and advanced composites."
  },
  {
    question: "Can you handle renovation or remodeling projects?",
    answer: "Yes, our team specializes in complex renovations and remodeling, breathing new life into existing structures while ensuring structural integrity and modern functionality."
  }
];

export const CREATIVE_WORKS = [
    { 
        id: '01', 
        title: 'Neon Syntax', 
        category: 'Brand Identity', 
        year: '2024',
        client: 'Future Corp',
        description: 'We dismantled the traditional corporate identity of Future Corp to rebuild a fluid, living system. The visual language adapts to market data in real-time, creating a brand that never looks the same twice.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
        ],
        tags: ['WebGL', 'Branding', 'Generative Design']
    },
    { 
        id: '02', 
        title: 'Void Walker', 
        category: 'Web Experience', 
        year: '2023',
        client: 'Nullspace',
        description: 'A browser-based journey into the void. We utilized three.js and custom shaders to create a weightless e-commerce experience for high-end streetwear.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1504384308090-c54be38558bd?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070&auto=format&fit=crop'
        ],
        tags: ['Three.js', 'E-Commerce', 'Interaction']
    },
    { 
        id: '03', 
        title: 'Cyber Pulse', 
        category: 'Product Design', 
        year: '2024',
        client: 'NeuroLink',
        description: 'Interface design for the next generation of neural interfaces. We focused on high-contrast, data-dense layouts that remain legible at millisecond refresh rates.',
        image: 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1974&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2070&auto=format&fit=crop'
        ],
        tags: ['UI/UX', 'Product', 'System Architecture']
    },
    { 
        id: '04', 
        title: 'Aether Core', 
        category: 'Motion Graphics', 
        year: '2023',
        client: 'Aether',
        description: 'A 60-second full CG title sequence for the Aether conference. We simulated fluid dynamics and light refraction to visualize the concept of "Invisible Data".',
        image: 'https://images.unsplash.com/photo-1534239697880-96c2136e76d9?q=80&w=1968&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop'
        ],
        tags: ['Cinema4D', 'Redshift', 'Motion']
    },
];

export const CONSTRUCTION_SERVICES = [
  {
    id: "01",
    title: "Interior Detailing",
    description: "Bespoke interior solutions that blend aesthetic beauty with functional precision.",
    icon: PaintBucket,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Project Planning",
    description: "Comprehensive advisory services from feasibility studies to resource allocation.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Urban Development",
    description: "Large-scale urban planning focused on sustainability and community integration.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Civil Infrastructure",
    description: "Engineering robust frameworks for bridges, roads, and public facilities.",
    icon: RulerIcon,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
  }
];

export const CONSTRUCTION_PROJECTS = [
  {
    title: "The Vertex Tower",
    category: "Commercial",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Marina Residence",
    category: "Residential",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Eco-Hub Center",
    category: "Sustainable",
    location: "Berlin, DE",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Onyx Bridge",
    category: "Infrastructure",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1513828583688-601bf045b432?q=80&w=2070&auto=format&fit=crop"
  }
];

export const CONSTRUCTION_PRICING = [
  {
    name: "Foundation",
    price: "$2,900",
    features: [
      "Consultation & Site Analysis",
      "Conceptual 2D Drafting",
      "Material Estimation",
      "Permit Assistance"
    ],
    highlight: false
  },
  {
    name: "Structure",
    price: "$5,400",
    features: [
      "Consultation & Site Analysis",
      "Detailed 3D Modeling",
      "Structural Engineering",
      "Vendor Management",
      "Priority Support"
    ],
    highlight: true
  },
  {
    name: "Skyline",
    price: "$8,900",
    features: [
      "Full Project Management",
      "Interior & Exterior Design",
      "Sustainable Compliance",
      "Post-Construction Care",
      "Dedicated Team"
    ],
    highlight: false
  }
];

export const CONSTRUCTION_TESTIMONIALS = [
  {
    text: "Renovex didn't just build a structure; they crafted a landmark. Their attention to detail is unmatched in the industry.",
    author: "Jonathan Pierce",
    role: "CEO, Skyline properties",
    company: "Skyline"
  },
  {
    text: "From the initial blueprint to the final rivet, the process was seamless. A true partnership in every sense of the word.",
    author: "Amanda Chen",
    role: "Director of Operations",
    company: "UrbanFlow"
  }
];

export const CONSTRUCTION_BLOGS = [
  {
    date: "OCT 24, 2024",
    title: "Concrete Jungle: The Evolution of Brutalist Architecture",
    category: "Design",
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=2000&auto=format&fit=crop"
  },
  {
    date: "NOV 11, 2024",
    title: "Sustainable Steel: Reducing Carbon Footprints in Construction",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
  },
  {
    date: "DEC 05, 2024",
    title: "Smart Cities: Integrating IoT into Modern Infrastructure",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop"
  }
];

import { Clipboard } from 'lucide-react';
