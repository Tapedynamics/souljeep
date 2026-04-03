'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCTA, appendUTMToUrl } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  ctaName: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function TrackedLink({
  href,
  ctaName,
  external = false,
  children,
  className,
}: TrackedLinkProps) {
  const [finalHref, setFinalHref] = useState(href);

  useEffect(() => {
    if (external) {
      setFinalHref(appendUTMToUrl(href));
    }
  }, [href, external]);

  const handleClick = () => {
    trackCTA(ctaName, finalHref);
  };

  if (external) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
