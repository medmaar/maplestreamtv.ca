export type FaqItem = { q: string; a: string };

export default function PlanFAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.q} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
