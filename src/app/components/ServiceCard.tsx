import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  colorClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon, colorClass }) => (
  <Link href={href} className="service-card group">
    <div>
      {icon && <span className="mb-2 inline-block">{icon}</span>}
      <h3 className={`font-bold-custom text-navy group-hover:text-orange transition ${colorClass || ''}`}>{title}</h3>
      <p>{description}</p>
      <span className="service-card-link">Learn more →</span>
    </div>
  </Link>
);

export default ServiceCard; 