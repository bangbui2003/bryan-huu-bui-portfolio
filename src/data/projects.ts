export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  year: number;
};

// ============================================================
// HƯỚNG DẪN THÊM DỰ ÁN MỚI:
// Sao chép template bên dưới và điền thông tin vào mảng projects.
//
// Template:
// {
//   id: "ten-du-an",              // unique id, dùng kebab-case
//   title: "Tên Dự Án",
//   description: "Mô tả ngắn (1-2 câu)",
//   longDescription: "Mô tả dài hơn nếu muốn (tùy chọn)",
//   tech: ["React", "Node.js"],   // danh sách công nghệ
//   github: "https://github.com/...",  // tùy chọn
//   live: "https://...",               // tùy chọn
//   image: "/images/ten-du-an.png",    // tùy chọn, bỏ vào /public/images/
//   featured: true,               // true = hiển thị nổi bật ở đầu
//   status: "completed",          // "completed" | "in-progress" | "archived"
//   year: 2025,
// },
// ============================================================

export const projects: Project[] = [
  {
    id: "flagship",
    title: "Flagship — Self-hosted Feature Flag Platform",
    description:
      "A self-hosted feature flag platform with local SDK evaluation, multi-tenant dashboard, percentage rollouts, and real-time updates — similar to LaunchDarkly.",
    longDescription:
      "Built with Fastify 5 + TypeScript backend and Next.js 15 dashboard. The zero-dependency JavaScript SDK loads flag rules on init and evaluates flags in-process with no network round-trips. Supports multi-tenant model with PostgreSQL (Prisma ORM), Redis, real-time updates via SSE, percentage rollouts (MurmurHash3), targeting rules, analytics, and webhooks.",
    tech: ["Fastify", "TypeScript", "Next.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/bangbui2003/flagship-backend",
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: "cybershark",
    title: "CyberShark — E-commerce Platform",
    description:
      "Full-stack e-commerce app with ReactJS frontend and ASP.NET backend. Includes full shopping flow: auth, product catalog, cart, order management, and admin panel.",
    longDescription:
      "Built with ReactJS (Redux Toolkit, Tailwind CSS) on the frontend and ASP.NET on the backend, backed by MySQL. Implemented complete shopping flow with user authentication, product catalog, cart management, order processing, and a separate admin panel for inventory control.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "ASP.NET", "MySQL"],
    github: "https://github.com/bangbui2003/CyberSharkWeb",
    featured: true,
    status: "completed",
    year: 2024,
  },
];
