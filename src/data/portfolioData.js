import { Code2, Server, Database, Cloud } from "lucide-react";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    name: "Frontend",
    icon: Code2,
    items: ["HTML","CSS","React", "JavaScript", "Tailwind"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js","Express"],
  },
  {
    name: "Database",
    icon: Database,
    items: ["MySQL","MongoDB"],
  },
  {
    name: "Clouds & Deploy",
    icon: Cloud,
    items: ["AWS", "Docker", "Kubernetes"],
  },
];

export const PROJECTS = [
  {
    title: "EXPENSE-TRACKER",
    desc: "A full-stack expense tracking application built with the MERN stack to manage income, expenses, and transactions with secure user authentication and an interactive dashboard.",
    image:
      "/Projects/Expense.png",
    tags: ["React", "Express", "Node.js " , "JWT" , "HTML"],
    live: "https://expense-tracker-mern-1-gbmm.onrender.com/login",
    code: "https://github.com/danish-ali-007/expense-tracker-mern",
  },
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio built with React.js and Tailwind CSS to showcase my projects, technical skills, certifications, and resume with a modern UI.",
    image:
      "/Projects/portfolio.png",
    tags: ["React.js", "Tailwind CSS", "Vite"],
    live: "#",
    code: "#",
  },
  {
    title: "Walmart-sales-Analysis",
    desc: "A data analysis project using Python and SQL to clean, analyze, and visualize Walmart sales data for identifying trends, customer behavior, and business insights.",
    image:
      "/Projects/walmart.png",
    tags: ["Python", "SQL ", "Pandas","NumPy "],
    live: "#",
    code: "https://github.com/danish-ali-007/walmart_sales_Analysis",
  },
];