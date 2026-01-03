"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FooterLink } from './FooterLink';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#F2F4F7] text-gray-700 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-6">

                    <LanguageSwitcher />

                    <div className="text-center">
                        <p className="text-sm mb-4">
                            Juice is not a bank. Banking services are provided by First Century Bank, N.A.,
                            Member FDIC, pursuant to a license from Mastercard International.
                        </p>

                        <p className="text-sm mb-4">
                            For customer service please call Juice: (855)-687-2114.
                        </p>

                        <div className="flex items-center justify-center gap-4 text-sm">
                            <FooterLink href="/privacy" label="Privacy Policy" />
                            <span className="text-gray-400">|</span>
                            <FooterLink href="/legal" label="Terms of Service" />
                            <span className="text-gray-400">|</span>
                            <FooterLink href="/cookie-policy" label="Cookie Policy" />
                            <span className="text-gray-400">|</span>
                            <FooterLink href="/sitemap" label="Sitemap" />
                        </div>

                        <p className="text-sm mt-4">
                            © 2025 Juice Financial. All rights reserved. Juice Insurance v1.3.0
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
