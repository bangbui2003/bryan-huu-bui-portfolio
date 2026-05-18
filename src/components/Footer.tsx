import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>
          Designed & built by{" "}
          <span className="text-gray-400">{personal.name}</span>
        </p>
        <p>© {new Date().getFullYear()} — All rights reserved</p>
      </div>
    </footer>
  );
}
