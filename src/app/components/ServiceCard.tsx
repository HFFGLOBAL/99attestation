import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href }) => (
  <Link href={href} className="service-card">
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card-link">Learn more →</span>
    </div>
  </Link>
);

export default ServiceCard; 