# Portfolio Guide — Hướng dẫn cập nhật Portfolio

## Cấu trúc project

```
src/
├── data/               ← ĐÂY LÀ NƠI BẠN CHỈNH SỬA
│   ├── personal.ts     ← Thông tin cá nhân (tên, email, link)
│   ├── projects.ts     ← Danh sách dự án
│   ├── experience.ts   ← Kinh nghiệm làm việc
│   └── skills.ts       ← Kỹ năng / công nghệ
│
├── components/         ← UI components (ít khi cần sửa)
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
└── app/
    ├── page.tsx        ← Trang chính (lắp ráp các components)
    ├── layout.tsx      ← Layout & metadata (SEO title, description)
    └── globals.css     ← CSS global
```

---

## Chạy dev server

```bash
cd portfolio
npm run dev
```

Mở trình duyệt tại http://localhost:3000

---

## 1. Cập nhật thông tin cá nhân

File: `src/data/personal.ts`

Sửa trực tiếp các field:

```ts
export const personal = {
  name: "Trung Nguyen",           // Tên hiển thị
  title: "Full-Stack Engineer",   // Chức danh
  tagline: "...",                 // Câu tagline dưới tên
  bio: "...",                     // Mô tả ngắn về bản thân
  email: "your@email.com",        // Email liên hệ
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  cv: "/cv.pdf",                  // Để file CV vào thư mục /public/
  location: "Ho Chi Minh City, Vietnam",
  availableForWork: true,         // true = hiện badge "Available"
};
```

---

## 2. Thêm dự án mới

File: `src/data/projects.ts`

Thêm object vào mảng `projects`:

```ts
{
  id: "ten-du-an-moi",          // unique, dùng kebab-case (không dấu, nối gạch)
  title: "Tên Dự Án",
  description: "Mô tả ngắn 1-2 câu",
  longDescription: "Mô tả dài hơn, chỉ hiển thị khi featured: true",
  tech: ["React", "Node.js", "PostgreSQL"],
  github: "https://github.com/...",   // bỏ qua nếu không có
  live: "https://yourapp.com",        // bỏ qua nếu không có
  image: "/images/ten-du-an.png",     // tùy chọn, để ảnh vào /public/images/
  featured: false,    // true = hiển thị to ở đầu (nên có ≤ 2 featured)
  status: "completed",  // "completed" | "in-progress" | "archived"
  year: 2025,
},
```

### Thứ tự hiển thị
- `featured: true` → hiển thị trên cùng (section Featured Projects)
- `featured: false` → hiển thị bên dưới, có thể filter theo status

---

## 3. Thêm kinh nghiệm làm việc mới

File: `src/data/experience.ts`

**Thêm vào đầu mảng** `experiences` (mới nhất lên trên):

```ts
{
  id: "company-role",               // unique id
  company: "Tên Công Ty",
  logo: "/images/logos/company.png", // tùy chọn, để logo vào /public/images/logos/
  role: "Senior Software Engineer",
  type: "full-time",  // "full-time" | "part-time" | "freelance" | "internship"
  startDate: "2025-03",             // định dạng YYYY-MM
  endDate: "present",               // "present" hoặc "2025-12"
  location: "Ho Chi Minh City",
  remote: false,
  description: "Mô tả tổng quan về vai trò và trách nhiệm của bạn.",
  achievements: [
    "Thành tích cụ thể 1 — dùng số liệu nếu có (VD: giảm 40% latency)",
    "Thành tích cụ thể 2",
    "Thành tích cụ thể 3",
  ],
  tech: ["React", "Node.js", "AWS"],
},
```

---

## 4. Thêm kỹ năng mới

File: `src/data/skills.ts`

### Thêm skill vào category có sẵn

```ts
{ name: "Kubernetes", level: "intermediate" },
```

Level options: `"beginner"` | `"intermediate"` | `"advanced"` | `"expert"`

### Thêm category mới

```ts
{
  id: "mobile",
  category: "Mobile",
  icon: "📱",    // emoji icon
  skills: [
    { name: "React Native", level: "intermediate" },
    { name: "Expo", level: "beginner" },
  ],
},
```

---

## 5. Deploy lên Vercel (miễn phí)

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel

# Sau lần đầu, các lần tiếp theo chỉ cần:
vercel --prod
```

Hoặc kết nối GitHub repo với Vercel để auto-deploy mỗi khi push code.

---

## 6. Thêm ảnh / assets

- Để file vào thư mục `/public/`
- Ví dụ: `/public/images/project-banner.png`
- Dùng trong code: `"/images/project-banner.png"` (không cần `/public` prefix)
- CV: để file `/public/cv.pdf`, trong `personal.ts` đặt `cv: "/cv.pdf"`

---

## Checklist khi làm xong dự án mới

- [ ] Thêm entry vào `src/data/projects.ts`
- [ ] Thêm ảnh thumbnail vào `/public/images/` (nếu có)
- [ ] Cập nhật `featured: true` nếu là dự án nổi bật
- [ ] Chạy `npm run build` để kiểm tra không có lỗi
- [ ] Deploy: `vercel --prod`

## Checklist khi đổi việc / có kinh nghiệm mới

- [ ] Thêm entry vào `src/data/experience.ts` (thêm vào đầu mảng)
- [ ] Cập nhật `endDate` của job cũ (đổi `"present"` → ngày kết thúc)
- [ ] Thêm kỹ năng mới vào `src/data/skills.ts` nếu có
- [ ] Cập nhật `availableForWork` trong `personal.ts`
- [ ] Chạy `npm run build` → deploy
