const stats = [
  { value: "10K+", label: "活跃团队" },
  { value: "2.4B", label: "自动化任务/年" },
  { value: "47%", label: "平均效率提升" },
  { value: "4.9/5", label: "客户满意度" },
];

export function Stats() {
  return (
    <section className="border-y border-card-border px-4 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
