import React from 'react';

interface FooterLinkProps {
    href: string;
    label: string;
}

export function FooterLink({ href, label }: FooterLinkProps) {
    return (
        <a href={href} className="hover:text-blue-600">
            {label}
        </a>
    );
}