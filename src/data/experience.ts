export type Experience = {
  id: string;
  company: string;
  logo?: string;
  role: string;
  type: "full-time" | "part-time" | "freelance" | "internship";
  startDate: string;   // format: "YYYY-MM"
  endDate: string | "present";
  location: string;
  remote: boolean;
  description: string;
  achievements: string[];
  tech: string[];
};

// ============================================================
// HƯỚNG DẪN THÊM KINH NGHIỆM MỚI:
// Thêm object vào đầu mảng (thứ tự mới nhất lên trên).
//
// Template:
// {
//   id: "company-role",           // unique id
//   company: "Tên Công Ty",
//   logo: "/images/logos/company.png",  // tùy chọn
//   role: "Senior Software Engineer",
//   type: "full-time",            // "full-time" | "part-time" | "freelance" | "internship"
//   startDate: "2024-01",         // YYYY-MM
//   endDate: "present",           // YYYY-MM hoặc "present"
//   location: "Ho Chi Minh City",
//   remote: false,
//   description: "Mô tả tổng quan về vai trò",
//   achievements: [
//     "Thành tích 1 (dùng số liệu cụ thể nếu có)",
//     "Thành tích 2",
//   ],
//   tech: ["React", "Node.js", "PostgreSQL"],
// },
// ============================================================

export const experiences: Experience[] = [
  {
    id: "pnj-engineer",
    company: "PNJ Group",
    role: "Software Engineer",
    type: "full-time",
    startDate: "2025-06",
    endDate: "present",
    location: "Ho Chi Minh City",
    remote: false,
    description:
      "Developed and maintained customer-facing web applications serving 50K+ daily active users for one of Vietnam's largest jewelry retail companies.",
    achievements: [
      "Developed and maintained customer-facing web applications using Next.js, React, TypeScript, serving 50K+ daily active users.",
      "Optimized database queries and implemented async processing with AWS SQS, reducing API response time by ~40% (1060ms → 640ms).",
      "Built serverless APIs using AWS Lambda and API Gateway, handling 10K+ requests/day with 99.9% uptime.",
      "Implemented promotion feature (frontend section, discount API integration, exception handling), increasing product page → add-to-cart conversion rate by 25% within 1 month of launch.",
      "Implemented CI/CD pipelines using AWS CodeBuild and Docker for automated testing and deployment.",
    ],
    tech: ["Next.js", "React", "TypeScript", "AWS Lambda", "AWS SQS", "API Gateway", "Docker", "CI/CD"],
  },
  {
    id: "pnj-intern",
    company: "PNJ Group",
    role: "Software Developer Intern",
    type: "internship",
    startDate: "2024-06",
    endDate: "2025-04",
    location: "Ho Chi Minh City",
    remote: false,
    description:
      "Started in the internal tools team before transitioning to the fullstack development team after demonstrating strong technical skills.",
    achievements: [
      "Built 5+ internal business applications using Power Apps and Power Automate, reducing manual processing time by 30%.",
      "Transitioned to fullstack development team after demonstrating strong technical skills, contributing to production codebase within 2 months.",
    ],
    tech: ["Power Apps", "Power Automate", "React", "Node.js"],
  },
];
