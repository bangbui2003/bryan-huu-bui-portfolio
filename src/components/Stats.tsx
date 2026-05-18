"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  {
    value: 50000,
    display: (v: number) => (v >= 1000 ? `${Math.floor(v / 1000)}K` : String(Math.floor(v))),
    suffix: "+",
    label: "Daily Active Users",
    system: "PNJ · E-commerce Web App",
    description: "Next.js storefront phục vụ khách hàng mua sắm trang sức trực tuyến",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    value: 40,
    display: (v: number) => `${Math.floor(v)}`,
    suffix: "%",
    label: "API Latency Reduced",
    system: "PNJ · Product & Checkout API",
    description: "1060ms → 640ms — tối ưu query + xử lý bất đồng bộ qua AWS SQS",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    text: "text-violet-400",
    tag: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    value: 10000,
    display: (v: number) => (v >= 1000 ? `${Math.floor(v / 1000)}K` : String(Math.floor(v))),
    suffix: "+",
    label: "Requests / Day",
    system: "PNJ · Serverless API",
    description: "AWS Lambda + API Gateway xử lý các nghiệp vụ backend không đồng bộ",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    value: 99.9,
    display: (v: number) => v.toFixed(1),
    suffix: "%",
    label: "Uptime",
    system: "PNJ · Serverless API",
    description: "Tỉ lệ uptime thực tế của các Lambda function trên production (2025)",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    text: "text-amber-400",
    tag: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

function Counter({
  value,
  display,
  suffix,
  color,
  text,
}: (typeof stats)[0]) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 25 });
  const [rendered, setRendered] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setRendered(display(v)));
    return unsub;
  }, [spring, display]);

  return (
    <span ref={ref} className={`text-4xl md:text-5xl font-bold tabular-nums ${text}`}>
      {rendered}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${stat.border} bg-gradient-to-b ${stat.color} p-6 overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
            >
              <span className={`inline-block px-2 py-0.5 rounded-md border text-[10px] font-medium mb-4 ${stat.tag}`}>
                {stat.system}
              </span>
              <Counter {...stat} />
              <p className="text-white font-semibold mt-2 text-sm">{stat.label}</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
