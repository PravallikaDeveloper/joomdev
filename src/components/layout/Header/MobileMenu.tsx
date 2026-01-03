"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { languages, paymentSolutionsCategories } from "./HeaderData";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface IMobileMenu {
    isMobileMenuOpen?: boolean;
    handleLanguageChange: (lngCode: string)=>void;
}

export default function MobileMenu({ isMobileMenuOpen, handleLanguageChange }: IMobileMenu) {

    const { t, i18n } = useTranslation();
    const [mobileCategory, setMobileCategory] = useState<string | null>(null);

    // On mobile, handle category expansion
    const handleMobileCategory = (category: string) => {
        setMobileCategory(mobileCategory === category ? null : category);
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-[#f9fafb] dark:bg-gray-950"
                    >
                        <div className="p-4 space-y-6">
                            {/* Payment Solutions Categories Mobile */}
                            <div className="space-y-2">
                                <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                                    PAYMENT SOLUTIONS
                                </div>

                                {paymentSolutionsCategories.map((category, idx) => (
                                    <div key={idx} className="mb-3">
                                        <button
                                            onClick={() => handleMobileCategory(category.title)}
                                            className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                                        >
                                            <span className="font-medium">{category.title}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${mobileCategory === category.title ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        {mobileCategory === category.title && (
                                            <div className="mt-2 ml-4 space-y-2">
                                                {category.items.map((item, itemIdx) => (
                                                    <React.Fragment key={itemIdx}>
                                                        <a
                                                            href={item.href}
                                                            className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <div className={`p-1.5 rounded-md ${item.isSummary
                                                                    ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400'
                                                                    : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'}`}>
                                                                    <item.icon className="h-4 w-4" />
                                                                </div>
                                                                <div className="font-medium">{item.title}</div>
                                                            </div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                                {item.description}
                                                            </div>
                                                        </a>
                                                        {item.divider && (
                                                            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* FAQs Link (formerly RFP Link) */}
                            <div className="space-y-2">
                                <a
                                    href="/rfp"
                                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    <div className="font-medium">FAQs</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Frequently Asked Questions
                                    </div>
                                </a>
                            </div>

                            {/* Language Selector */}
                            <div className="space-y-2">
                                <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                                    Language
                                </div>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full text-left px-4 py-2 rounded-lg ${i18n.language === lang.code
                                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    )
}