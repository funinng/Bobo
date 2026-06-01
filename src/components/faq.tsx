const faqs = [
  {
    q: "免费试用需要绑定信用卡吗？",
    a: "不需要。14 天 Pro 试用全程无需信用卡，到期后可降级为 Starter 或选择付费。",
  },
  {
    q: "数据存储在哪里？是否合规？",
    a: "中国区数据存储于国内云厂商，支持 SOC 2、等保相关能力；Enterprise 可选专属实例。",
  },
  {
    q: "可以与现有工具集成吗？",
    a: "支持 200+ 预置集成与开放 API/Webhook，常见研发与销售栈均可对接。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading mb-12 text-center text-3xl font-bold md:text-4xl">
          常见问题
        </h2>
        <dl className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="glass-card rounded-xl p-6"
            >
              <dt className="font-heading font-semibold">{item.q}</dt>
              <dd className="mt-2 text-muted leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
