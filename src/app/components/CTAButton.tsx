import Link from 'next/link';
import React, { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, children }) => (
  <Link href={href} className="cta-button">
    {children}
  </Link>
);

export default CTAButton; 