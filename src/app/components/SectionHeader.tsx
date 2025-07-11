import React from 'react';
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <h2 className="section-header">{title}</h2>
);

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-navy">
      <ol className="flex flex-wrap gap-1 items-center">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:underline text-orange font-bold-custom">
                {item.label}
              </Link>
            ) : (
              <span className="font-bold-custom text-navy">{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SectionHeader; 