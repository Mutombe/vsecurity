import {
  Camera, Bell, Wifi, Fingerprint, Zap, Users, Shield, Award,
  Activity, Eye, Building, HeartHandshake, Briefcase, Phone,
  FileText, Target, Layers, Cpu, Lock, Radio, MonitorSpeaker,
  Globe, Home as HomeIcon
} from 'lucide-react'

/* ═══════════════════════════════════════════
   SERVICES DATA
   ═══════════════════════════════════════════ */
export const SERVICES = [
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV Installation',
    shortTitle: 'CCTV',
    desc: 'State-of-the-art surveillance systems with HD/4K cameras, night vision, and remote monitoring capabilities for complete property coverage.',
    longDesc: 'Our CCTV solutions leverage the latest in digital surveillance technology to provide crystal-clear monitoring of your entire property. From IP cameras with AI-powered analytics to traditional analog systems, we design and install custom configurations that leave no blind spots. Every system includes remote access so you can monitor your property from anywhere in the world.',
    features: ['4K Ultra HD Cameras', 'Night Vision Technology', 'Remote Mobile Access', 'AI Motion Detection', 'Cloud & Local Storage', '24/7 Recording'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    // Vision: Close-up of modern dome/bullet CCTV cameras mounted on a building exterior at dusk
    stats: { installed: '2,500+', uptime: '99.9%' }
  },
  {
    id: 'alarm',
    icon: Bell,
    title: 'Alarm Monitoring',
    shortTitle: 'Alarms',
    desc: 'Advanced alarm systems with 24/7 professional monitoring, instant alerts, and rapid emergency response coordination.',
    longDesc: 'Our alarm monitoring center operates 24 hours a day, 365 days a year. When your system is triggered, our trained operators immediately assess the situation and coordinate the appropriate response — whether that means dispatching security personnel, contacting emergency services, or alerting you directly. Every second counts, and our average response time is under 3 minutes.',
    features: ['24/7 Monitoring Center', 'Instant Mobile Alerts', 'Emergency Dispatch', 'Zone-Based Detection', 'Battery Backup', 'Tamper Protection'],
    image: 'https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=800&q=80',
    // Vision: Modern alarm control panel with green status lights in a professional setting
    stats: { monitored: '1,800+', response: '<3min' }
  },
  {
    id: 'wireless',
    icon: Wifi,
    title: 'Wireless Systems',
    shortTitle: 'Wireless',
    desc: 'Cutting-edge wireless security solutions offering flexible, scalable protection without complex wiring infrastructure.',
    longDesc: 'Wireless security eliminates the constraints of traditional wired systems. Our solutions use enterprise-grade encrypted wireless protocols to ensure your security data is transmitted securely. Perfect for listed buildings, rental properties, or any location where running cables is impractical. Systems can be expanded easily as your needs grow.',
    features: ['Mesh Network Security', 'WiFi 6 Integration', 'Military-Grade Encryption', 'Battery-Powered Options', 'Easy Scalability', 'Weather Resistant'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    // Vision: Sleek wireless security hub device with signal wave visualization in a modern home
    stats: { networks: '800+', coverage: '100%' }
  },
  {
    id: 'access',
    icon: Fingerprint,
    title: 'Access Control',
    shortTitle: 'Access',
    desc: 'Biometric and smart access control systems ensuring only authorized personnel enter secured premises.',
    longDesc: 'Control who enters your premises with precision. Our access control systems range from simple card readers to advanced biometric scanners including fingerprint, facial recognition, and iris scanning. Integrated visitor management systems log every entry and exit, while emergency lockdown capabilities ensure total control during critical situations.',
    features: ['Biometric Scanning', 'Smart Card & Fob Access', 'Visitor Management', 'Time & Attendance', 'Anti-Passback Technology', 'Emergency Lockdown'],
    image: 'https://images.unsplash.com/photo-1631016042018-448c284aa279?w=800&q=80',
    // Vision: Fingerprint scanner/biometric access panel on a glass door, blue LED glow
    stats: { doors: '3,200+', accuracy: '99.8%' }
  },
  {
    id: 'electric',
    icon: Zap,
    title: 'Electric Fencing',
    shortTitle: 'Fencing',
    desc: 'High-voltage perimeter security fencing with intelligent monitoring and instant breach detection.',
    longDesc: 'Electric fencing remains one of the most effective perimeter deterrents available. Our certified installations comply with all safety regulations while providing a formidable barrier against intruders. Intelligent zone monitoring pinpoints the exact location of any breach attempt, and solar-powered options ensure your perimeter stays active even during power outages.',
    features: ['High Voltage Deterrent', 'Instant Breach Detection', 'Zone Monitoring', 'Solar Powered Options', 'SMS Alerts', 'Lightning Protection'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    // Vision: Electric fence with warning signs on top of a wall, dramatic lighting
    stats: { km: '450+ km', zones: '5,000+' }
  },
  {
    id: 'guards',
    icon: Users,
    title: 'Security Personnel',
    shortTitle: 'Guards',
    desc: 'Professionally trained security officers providing physical presence and rapid response protection.',
    longDesc: 'Our security officers are rigorously vetted, professionally trained, and equipped with the latest communication technology. Whether you need permanent site guards, mobile patrol services, event security, or VIP protection, our personnel deliver the highest standard of physical security. Regular training ensures our teams stay sharp and responsive.',
    features: ['Vetted & Trained Officers', '24/7 Patrol Services', 'Event Security', 'VIP & Close Protection', 'Incident Response Teams', 'Digital Reporting'],
    image: 'https://images.unsplash.com/photo-1768837093480-7efe718794ae?w=800&q=80',
    // Vision: Professional security guard in smart uniform with radio, monitoring building entrance
    stats: { officers: '200+', sites: '150+' }
  },
]

/* ═══════════════════════════════════════════
   JOB LISTINGS
   ═══════════════════════════════════════════ */
export const JOBS = [
  {
    id: 1,
    title: 'Senior Security Systems Engineer',
    dept: 'Technical',
    location: 'Harare',
    type: 'Full-time',
    desc: 'Design and implement enterprise-grade security infrastructure for high-profile clients. You will lead complex CCTV, access control, and integrated security system projects from inception to commissioning.',
    requirements: [
      '5+ years experience in security systems engineering',
      'Proficient in IP CCTV, access control, and alarm systems',
      'Project management experience',
      'Valid drivers license',
      'Certification in security system design (preferred)'
    ]
  },
  {
    id: 2,
    title: 'CCTV Installation Technician',
    dept: 'Field Operations',
    location: 'Harare / Bulawayo',
    type: 'Full-time',
    desc: 'Install and maintain CCTV systems across residential and commercial properties. Work with cutting-edge IP cameras, NVRs, and network infrastructure.',
    requirements: [
      '2+ years experience in CCTV installation',
      'Knowledge of networking and IP systems',
      'Ability to work at heights',
      'Own vehicle preferred',
      'Strong customer service skills'
    ]
  },
  {
    id: 3,
    title: 'Control Room Operator',
    dept: 'Operations',
    location: 'Harare',
    type: 'Shift Work',
    desc: 'Monitor security feeds and coordinate rapid response from our central operations hub. You will be the first line of defense for hundreds of clients.',
    requirements: [
      'Previous control room experience preferred',
      'Excellent communication skills',
      'Ability to work night shifts',
      'Computer literate',
      'Calm under pressure'
    ]
  },
  {
    id: 4,
    title: 'Business Development Manager',
    dept: 'Sales & Growth',
    location: 'Harare',
    type: 'Full-time',
    desc: 'Drive growth by acquiring new corporate clients and expanding our security portfolio. Build and maintain relationships with key accounts across Zimbabwe.',
    requirements: [
      '3+ years B2B sales experience',
      'Understanding of security industry',
      'Strong presentation skills',
      'Network of corporate contacts',
      'Results-driven mindset'
    ]
  },
  {
    id: 5,
    title: 'IT & Cybersecurity Analyst',
    dept: 'Cyber Division',
    location: 'Remote / Harare',
    type: 'Full-time',
    desc: 'Protect client digital infrastructure and develop cybersecurity protocols. Bridge the gap between physical and digital security.',
    requirements: [
      'Degree in IT/Cybersecurity',
      'Experience with network security',
      'Knowledge of penetration testing',
      'Security certifications (CISSP, CEH preferred)',
      'Analytical mindset'
    ]
  },
  {
    id: 6,
    title: 'Electrician – Security Systems',
    dept: 'Field Operations',
    location: 'Nationwide',
    type: 'Full-time',
    desc: 'Install electric fencing, alarm systems, and power backup solutions. Ensure all installations meet local safety standards and regulations.',
    requirements: [
      'Wireman\'s license or equivalent',
      'Experience with electric fencing systems',
      'Knowledge of solar power systems',
      'Safety conscious',
      'Willing to travel'
    ]
  },
]

/* ═══════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════ */
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'James Moyo',
    role: 'CEO, Moyo Holdings',
    text: 'VS Security transformed our entire security infrastructure. Their CCTV systems are world-class and the monitoring team is incredibly responsive. We sleep better knowing they are watching over our assets.',
    rating: 5,
    // Vision: Professional headshot of a businessman in formal attire
  },
  {
    id: 2,
    name: 'Sarah Ndlovu',
    role: 'Property Manager, Platinum Estates',
    text: 'The team\'s professionalism and attention to detail exceeded our expectations. From the initial assessment to the final installation, everything was seamless. We feel completely protected.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Chikwanha',
    role: 'Factory Operations Director',
    text: 'Since partnering with VS Security, incidents at our facility dropped by 94%. Their electric fencing and CCTV combination is unbeatable. The integration between systems is flawless.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Grace Mutasa',
    role: 'Hotel General Manager',
    text: 'Outstanding service from consultation to installation. Our guests feel safe and our assets are protected 24/7. The wireless system they designed for our property was incredibly elegant.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Tendai Chirwa',
    role: 'School Headmaster',
    text: 'The safety of our students is paramount. VS Security designed a comprehensive system that gives parents confidence and staff peace of mind. Their access control system is exceptional.',
    rating: 5,
  },
]

/* ═══════════════════════════════════════════
   PAGE SEO DATA
   ═══════════════════════════════════════════ */
export const SEO_DATA = {
  home: {
    title: 'VS Security | Where Quality Speaks – Zimbabwe\'s Premier Security Solutions',
    description: 'Total protection. Total security. Total peace of mind. VS Security provides world-class CCTV installation, alarm monitoring, wireless systems and comprehensive protection across Zimbabwe.',
    keywords: 'VS Security, Zimbabwe security, CCTV installation, alarm monitoring, security company Harare'
  },
  about: {
    title: 'About VS Security – Our Story & Mission | Where Quality Speaks',
    description: 'Learn about VS Security\'s 15+ year journey to becoming Zimbabwe\'s most trusted security provider. Our mission, values, and leadership team.',
    keywords: 'about VS Security, security company Zimbabwe, VS Security history, security team'
  },
  services: {
    title: 'Security Solutions & Services | VS Security Zimbabwe',
    description: 'Comprehensive security services: CCTV installation, alarm monitoring, wireless systems, access control, electric fencing, and security personnel. Get protected today.',
    keywords: 'security services Zimbabwe, CCTV installation, alarm monitoring, access control, electric fencing, security guards'
  },
  careers: {
    title: 'Careers at VS Security – Join Zimbabwe\'s Leading Security Team',
    description: 'Build your career in security. Explore current job opportunities at VS Security including engineering, technical, operations, and management roles.',
    keywords: 'security jobs Zimbabwe, VS Security careers, security engineer jobs, CCTV technician jobs Harare'
  },
  contact: {
    title: 'Contact VS Security – Get a Free Security Assessment',
    description: 'Get in touch with VS Security for all your security needs. Call 0773 486 486 or email info@vssecurity.co.zw. Free security assessments available.',
    keywords: 'contact VS Security, security quote Zimbabwe, free security assessment, VS Security phone number'
  },
  gallery: {
    title: 'Project Gallery | VS Security – Our Work Speaks',
    description: 'View our portfolio of completed security installations across Zimbabwe. CCTV systems, access control, electric fencing and more.',
    keywords: 'security installation gallery, CCTV projects Zimbabwe, VS Security portfolio'
  },
  solutions: {
    title: 'Industry Solutions | VS Security – Tailored Protection',
    description: 'Security solutions tailored for residential, commercial, industrial, and government sectors. Custom protection for every need.',
    keywords: 'residential security Zimbabwe, commercial security, industrial security solutions'
  }
}

/* ═══════════════════════════════════════════
   NAVIGATION STRUCTURE
   ═══════════════════════════════════════════ */
export const NAV_GROUPS = [
  {
    label: 'Company',
    items: [
      { label: 'About Us', path: '/about', icon: Building, desc: 'Our story, mission & values' },
      { label: 'Leadership', path: '/about', icon: HeartHandshake, desc: 'Meet the team behind VS' },
      { label: 'Careers', path: '/careers', icon: Briefcase, desc: 'Join our growing team' },
      { label: 'Gallery', path: '/gallery', icon: Camera, desc: 'See our work in action' },
    ]
  },
  {
    label: 'Solutions',
    items: [
      { label: 'CCTV Installation', path: '/services', icon: Camera, desc: '4K surveillance systems' },
      { label: 'Alarm Monitoring', path: '/services', icon: Bell, desc: '24/7 professional monitoring' },
      { label: 'Wireless Systems', path: '/services', icon: Wifi, desc: 'Flexible smart security' },
      { label: 'Access Control', path: '/services', icon: Fingerprint, desc: 'Biometric & smart access' },
      { label: 'Electric Fencing', path: '/services', icon: Zap, desc: 'Perimeter protection' },
      { label: 'Security Personnel', path: '/services', icon: Users, desc: 'Trained officers & guards' },
    ]
  },
  {
    label: 'Industries',
    items: [
      { label: 'Residential', path: '/solutions', icon: HomeIcon, desc: 'Home security solutions' },
      { label: 'Commercial', path: '/solutions', icon: Building, desc: 'Business & office protection' },
      { label: 'Industrial', path: '/solutions', icon: MonitorSpeaker, desc: 'Factory & warehouse security' },
      { label: 'Government', path: '/solutions', icon: Globe, desc: 'Institutional security' },
    ]
  },
  {
    label: 'Connect',
    items: [
      { label: 'Contact Us', path: '/contact', icon: Phone, desc: 'Get in touch today' },
      { label: 'Get a Quote', path: '/contact', icon: FileText, desc: 'Free security assessment' },
    ]
  },
]

/* ═══════════════════════════════════════════
   SEARCH INDEX
   ═══════════════════════════════════════════ */
export const SEARCH_INDEX = [
  { title: 'CCTV Installation', path: '/services', keywords: 'camera cctv surveillance monitoring video recording 4k hd dvr nvr ip camera' },
  { title: 'Alarm Monitoring', path: '/services', keywords: 'alarm alert emergency response 24/7 monitoring intruder detection' },
  { title: 'Wireless Security Systems', path: '/services', keywords: 'wireless wifi mesh network scalable smart home iot' },
  { title: 'Access Control', path: '/services', keywords: 'biometric fingerprint card access door lock facial recognition' },
  { title: 'Electric Fencing', path: '/services', keywords: 'fence perimeter electric voltage barrier wall security fencing' },
  { title: 'Security Personnel & Guards', path: '/services', keywords: 'guards officers patrol vip protection event security armed response' },
  { title: 'About VS Security', path: '/about', keywords: 'about story mission vision team company history values leadership' },
  { title: 'Career Opportunities', path: '/careers', keywords: 'jobs career hiring work employment vacancies recruitment apply' },
  { title: 'Contact Information', path: '/contact', keywords: 'contact phone email address location map directions office' },
  { title: 'Free Security Assessment', path: '/contact', keywords: 'quote pricing estimate cost budget assessment consultation free' },
  { title: 'Residential Security', path: '/solutions', keywords: 'home house residential property estate family household' },
  { title: 'Commercial Security', path: '/solutions', keywords: 'business office commercial shop store retail corporate' },
  { title: 'Industrial Security', path: '/solutions', keywords: 'factory warehouse industrial manufacturing plant facility' },
  { title: 'Project Gallery', path: '/gallery', keywords: 'gallery photos projects installations portfolio work showcase' },
  { title: 'Home Page', path: '/', keywords: 'home main page landing' },
]

/* ═══════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════ */
export const STATS = [
  { value: 500, suffix: '+', label: 'Clients Protected', icon: Users },
  { value: 15, suffix: '+', label: 'Years of Excellence', icon: Award },
  { value: 99, suffix: '.9%', label: 'System Uptime', icon: Activity },
  { value: 24, suffix: '/7', label: 'Active Monitoring', icon: Eye },
]

/* ═══════════════════════════════════════════
   COMPANY INFO
   ═══════════════════════════════════════════ */
export const COMPANY = {
  name: 'VS Security',
  tagline: 'Where Quality Speaks',
  phone: '0773 486 486',
  phoneIntl: '+263773486486',
  email: 'info@vssecurity.co.zw',
  address: 'Harare, Zimbabwe',
  hours: 'Mon-Sat: 7:00 AM - 6:00 PM',
  hoursEmergency: '24/7 Emergency Response',
  founded: 2009,
  social: {
    facebook: 'https://facebook.com/vssecurity',
    twitter: 'https://twitter.com/vssecurity',
    linkedin: 'https://linkedin.com/company/vssecurity',
    instagram: 'https://instagram.com/vssecurity',
  }
}
