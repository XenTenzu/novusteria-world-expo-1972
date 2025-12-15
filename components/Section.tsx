"use client";

export default function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </section>
  );
}
