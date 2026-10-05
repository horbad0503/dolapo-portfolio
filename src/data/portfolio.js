export const profile = {
  name: "Dolapo Onipede",
  fullName: "Dolapo Onipede Mercy",
  role: "Data Analyst | Excel · SQL · Power BI · Python",
  tagline:
    "Turning data into clear insights that help businesses make better decisions.",
  summary:
    "I analyze, transform, and visualize data to uncover meaningful patterns, trends, and insights. With practical experience using Excel, SQL, Power BI, and Python, I combine technical analysis with structured problem-solving to turn raw data into information that supports informed decision-making.",
  location: "Nigeria · Open to Data Analytics Opportunities",
  email: "dolapoonipede1@gmail.com",
  phone: "09168952696",
  linkedin: "https://linkedin.com/in/theglobaldolapo",
  github: "https://github.com/dolapoData",
  cv: "#", // replace with real CV link
};

export const stats = [
  { value: "4+", label: "Analytics Projects" },
  { value: "4", label: "Core Analytics Tools" },
  { value: "4", label: "Public GitHub Projects" },
  { value: "2025", label: "Professional Experience Since" },
];

export const approach = [
  {
    title: "Business-Focused Analysis",
    body: "I focus on the question behind the dataset. Understanding the problem first helps me determine what data needs to be analyzed and what insights will actually be useful.",
    icon: "Target",
  },
  {
    title: "Accuracy & Attention to Detail",
    body: "I believe meaningful insights depend on reliable analysis. I pay attention to data preparation, consistency, and accuracy throughout the analytical process.",
    icon: "CheckCircle2",
  },
  {
    title: "Practical Problem-Solving",
    body: "I enjoy working through real datasets and practical problems, using analytical tools to move from raw information to clear findings.",
    icon: "Puzzle",
  },
  {
    title: "Continuous Learning",
    body: "I continuously strengthen my technical and analytical skills through hands-on projects, practical exercises, and professional experience.",
    icon: "GraduationCap",
  },
  {
    title: "Clear Communication",
    body: "I believe good analysis should be easy to understand. I focus on presenting findings clearly through visualizations, dashboards, reports, and concise explanations.",
    icon: "MessageSquare",
  },
];

export const services = [
  {
    title: "Business Data Analysis",
    icon: "BarChart3",
    body: "Transforming raw business data into insights that support informed decision-making.",
    items: [
      "Exploratory data analysis",
      "Trend analysis",
      "KPI analysis",
      "Performance analysis",
      "Insight generation",
    ],
  },
  {
    title: "Data Cleaning & Preparation",
    icon: "Sparkles",
    body: "Preparing and structuring datasets so they are reliable and ready for analysis.",
    items: [
      "Data cleaning",
      "Data transformation",
      "Data validation",
      "Data preparation",
      "Data structuring",
    ],
  },
  {
    title: "Business Intelligence & Dashboards",
    icon: "LayoutDashboard",
    body: "Creating clear visual reports that make important business information easier to understand.",
    items: [
      "Power BI dashboards",
      "KPI reporting",
      "Interactive reports",
      "Data visualization",
      "Business reporting",
    ],
  },
  {
    title: "SQL & Database Analysis",
    icon: "Database",
    body: "Using relational databases to retrieve, analyze, and organize information for practical business questions.",
    items: [
      "SQL querying",
      "Data filtering",
      "Data aggregation",
      "JOINs",
      "Database analysis",
      "SQL Server · SQLite · MySQL",
    ],
  },
  {
    title: "Data Storytelling & Reporting",
    icon: "Presentation",
    body: "Communicating analytical findings clearly so that data can support better decisions.",
    items: [
      "Insight communication",
      "Data storytelling",
      "Analytical reporting",
      "Visual presentation",
      "Business recommendations",
    ],
  },
];

export const skillGroups = [
  {
    title: "Databases & SQL",
    icon: "Database",
    skills: ["SQL", "SQL Server", "SQLite", "MySQL", "Database Querying", "JOINs", "Aggregation", "Filtering"],
  },
  {
    title: "BI & Data Visualization",
    icon: "BarChart3",
    skills: ["Power BI", "Dashboard Development", "Data Visualization", "KPI Reporting", "Interactive Reports", "Data Storytelling"],
  },
  {
    title: "Data Analysis & Spreadsheets",
    icon: "Table2",
    skills: ["Microsoft Excel", "Data Cleaning", "Data Transformation", "Pivot Tables", "Data Analysis", "Charts", "Reporting"],
  },
  {
    title: "Programming & Analytics",
    icon: "Code2",
    skills: ["Python", "Data Analysis", "Data Manipulation", "Data Processing"],
  },
  {
    title: "Professional Skills",
    icon: "Users",
    skills: ["Analytical Thinking", "Problem Solving", "Critical Thinking", "Attention to Detail", "Communication", "Data Integrity", "Continuous Learning"],
  },
];

export const projects = [
  {
    id: "01",
    title: "Hospital Patient Record Analysis",
    category: "Healthcare Data Analytics · Completed",
    challenge:
      "How can hospital records be transformed into useful insights about patient activity, operational performance, treatment costs, and revenue?",
    approach:
      "I structured and analyzed hospital data using SQLite and SQL, prepared summary information for reporting, and used Power BI to create an interactive dashboard for visual analysis.",
    outcomes: [
      "Analyzed patient demographics and encounter activity.",
      "Examined treatment costs and revenue performance.",
      "Analyzed patient retention and repeat encounters.",
      "Investigated payer performance and patient spending.",
      "Examined operational trends and encounter reasons.",
      "Developed an interactive Power BI dashboard for reporting and visualization.",
    ],
    tools: ["SQLite", "SQL", "Power BI", "Microsoft PowerPoint"],
    link: "https://github.com/dolapoData",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    id: "02",
    title: "Northwind Business Analysis",
    category: "Retail & Business Analytics · Completed",
    challenge:
      "How can transactional retail data be analyzed to understand customer activity, revenue, product performance, and operational issues?",
    approach:
      "I used SQL to explore the Northwind relational database and answer practical business questions around customers, orders, products, suppliers, shipping, and revenue. Selected findings were further visualized using Excel.",
    keyResult:
      "Covered 830 orders and 126,579.04 in revenue, and identified 21 unshipped orders requiring attention.",
    outcomes: [
      "Analyzed customer and order activity.",
      "Examined revenue and product performance.",
      "Identified geographical patterns in customer activity.",
      "Investigated shipping and fulfillment information.",
      "Identified unshipped orders as an operational consideration.",
      "Created Excel visualizations to communicate findings.",
    ],
    tools: ["SQL", "SQLite", "Microsoft Excel"],
    link: "https://github.com/dolapoData",
    accent: "from-indigo-400 to-violet-400",
  },
  {
    id: "03",
    title: "Simple Banking System SQL",
    category: "Banking & Database Analytics · Completed",
    challenge:
      "How can banking customer, account, and transaction information be structured and queried efficiently?",
    approach:
      "I developed a relational banking database and used SQL to retrieve and analyze customer, account, and transaction information.",
    outcomes: [
      "Structured banking-related relational data.",
      "Queried customer and account information.",
      "Analyzed transaction records using specified conditions.",
      "Identified inactive accounts.",
      "Applied filtering and sorting techniques.",
      "Used relational constraints to support data integrity.",
    ],
    tools: ["SQL", "SQL Server", "SQL Server Management Studio", "Excel"],
    link: "https://github.com/dolapoData",
    accent: "from-emerald-400 to-teal-300",
  },
  {
    id: "04",
    title: "Employee Database Analysis",
    category: "HR Data Analytics · Completed",
    challenge:
      "How can employee data be analyzed to understand salary, departments, management, gender, and employment status?",
    approach:
      "I used SQL to analyze structured employee information and answer practical workforce-related questions through filtering, sorting, conditions, and pattern matching.",
    outcomes: [
      "Analyzed employee salary information.",
      "Identified employees above specified salary thresholds.",
      "Examined employees by department.",
      "Analyzed gender and employment status.",
      "Identified management employees.",
      "Used multiple conditions to answer specific workforce questions.",
    ],
    tools: ["MySQL", "MySQL Workbench", "SQL"],
    link: "https://github.com/dolapoData",
    accent: "from-amber-400 to-orange-400",
  },
  {
    id: "05",
    title: "Python Code Quality Analyzer",
    category: "Software Quality & Automation · Completed",
    challenge:
      "As software teams grow, manual code review becomes slow and expensive. How can code quality be measured automatically and consistently?",
    approach:
      "I built an educational prototype in Python that reads a .py file line by line and applies rule-based checks (no AST parsing) to flag common quality issues and produce a score.",
    outcomes: [
      "Extracted measurable file characteristics such as line, blank, comment, and code line counts.",
      "Detected long lines, unclear names, duplication, excessive nesting, and missing documentation.",
      "Calculated a weighted quality score (0–100) with a severity rating.",
      "Validated the tool on sample files at three intentional quality levels (good, average, poor).",
      "Built with Python 3 standard library only, with no external packages.",
    ],
    tools: ["Python", "Jupyter Notebook"],
    link: "https://github.com/dolapoData",
    accent: "from-fuchsia-400 to-pink-400",
  },
];

export const experience = [
  {
    role: "Data Analyst",
    company: "Voks Technologies Limited",
    period: "November 2025 – Present",
    location: "Nigeria",
    tools: ["Excel", "SQL", "Power BI", "Python"],
    summary:
      "I work as a Data Analyst, applying data analytics tools to practical datasets while also instructing and guiding learners in developing their data analytics skills.",
    contributions: [
      "Analyze, clean, transform, and interpret datasets to identify meaningful patterns, trends, and insights.",
      "Use Excel, SQL, Power BI, and Python for data analysis, visualization, reporting, and problem-solving.",
      "Develop dashboards and visual reports to communicate analytical findings clearly.",
      "Write SQL queries to retrieve, filter, aggregate, and analyze structured data.",
      "Instruct and guide learners in data analysis, helping them develop practical skills across Excel, SQL, Power BI, and Python.",
      "Explain data analytics concepts and techniques in a clear and practical manner.",
      "Guide learners through practical exercises, assignments, and data analytics projects.",
      "Continue applying analytical skills through independent projects and hands-on work with different datasets.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "", href: "#testimonials" },
];

export const peanut = {
  brand: "Dolapo's Peanut",
  tagline: "Freshly roasted, freshly ground — from the heart of Nigeria.",
  shortPitch:
    "Beyond data, I run a small-batch peanut business — roasting, blending, and packaging quality peanut products for homes, retailers, and events.",
  storePath: "/peanut",
  contact: {
    // Replace these with the real ones once known
    phone: "09168952696",
    whatsapp: "2349168952696", // international format, no +
    email: "dolapoonipede1@gmail.com",
    instagram: "#",
  },
  highlights: [
    { label: "100% Natural", detail: "No additives, no preservatives" },
    { label: "Fresh Batches", detail: "Roasted & ground weekly" },
    { label: "Bulk Orders", detail: "Retail & event supply" },
  ],
};

export const peanutProducts = [
  {
    id: "p1",
    name: "Roasted Peanuts",
    size: "500g · 1kg",
    price: "₦3,500",
    unit: "/ 500g",
    description:
      "Golden-roasted groundnuts with a light salt finish. Crunchy, aromatic, and perfect for snacking.",
    badge: "Bestseller",
    accent: "from-amber-400 to-orange-400",
    emoji: "🥜",
  },
  {
    id: "p2",
    name: "Fresh Peanut Butter",
    size: "350g jar",
    price: "₦4,000",
    unit: "/ jar",
    description:
      "Smooth, creamy, and blended from 100% pure roasted peanuts. No sugar, no palm oil.",
    badge: "100% Natural",
    accent: "from-yellow-400 to-amber-500",
    emoji: "🥜",
  },
  {
    id: "p3",
    name: "Crunchy Peanut Butter",
    size: "350g jar",
    price: "₦4,200",
    unit: "/ jar",
    description:
      "Chunky texture with real peanut pieces — for those who like a bit of bite.",
    badge: "New",
    accent: "from-orange-400 to-red-400",
    emoji: "🥜",
  },
  {
    id: "p4",
    name: "Peanut Oil",
    size: "1L bottle",
    price: "₦6,500",
    unit: "/ litre",
    description:
      "Cold-pressed, unrefined peanut oil with a rich nutty aroma. Great for cooking & skincare.",
    badge: "Pure",
    accent: "from-amber-300 to-yellow-500",
    emoji: "🫙",
  },
  {
    id: "p5",
    name: "Groundnut Snack Packs",
    size: "Pack of 10",
    price: "₦2,500",
    unit: "/ pack",
    description:
      "Individually sealed snack packs — ideal for events, schools, offices, and gift bags.",
    badge: "Bulk",
    accent: "from-orange-300 to-amber-400",
    emoji: "🎁",
  },
  {
    id: "p6",
    name: "Roasted Peanuts (Bulk)",
    size: "5kg bag",
    price: "₦28,000",
    unit: "/ bag",
    description:
      "Wholesale-grade roasted peanuts for retailers, caterers, and resellers.",
    badge: "Wholesale",
    accent: "from-amber-500 to-orange-500",
    emoji: "🛍️",
  },
];