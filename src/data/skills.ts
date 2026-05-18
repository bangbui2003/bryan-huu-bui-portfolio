export type SkillCategory = {
  id: string;
  category: string;
  icon: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
};

// ============================================================
// HƯỚNG DẪN THÊM KỸ NĂNG MỚI:
// - Thêm skill vào category phù hợp trong mảng skills của category đó.
// - Nếu muốn thêm category mới, thêm object mới vào mảng skillCategories.
// - level: "beginner" | "intermediate" | "advanced" | "expert"
// ============================================================

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Redux", level: "advanced" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "RESTful APIs", level: "advanced" },
      { name: "Laravel", level: "intermediate" },
      { name: "ASP.NET", level: "intermediate" },
      { name: "Fastify", level: "advanced" },
    ],
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS Lambda", level: "advanced" },
      { name: "AWS SQS", level: "advanced" },
      { name: "API Gateway", level: "advanced" },
      { name: "AWS CodeBuild", level: "intermediate" },
      { name: "Docker", level: "advanced" },
      { name: "CI/CD", level: "intermediate" },
    ],
  },
  {
    id: "database-tools",
    category: "Database & Tools",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "SQL Server", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
      { name: "Git", level: "expert" },
      { name: "Agile/Scrum", level: "advanced" },
    ],
  },
];

export const levelOrder: Record<Skill["level"], number> = {
  expert: 4,
  advanced: 3,
  intermediate: 2,
  beginner: 1,
};

export const levelLabel: Record<Skill["level"], string> = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
  beginner: "Beginner",
};
