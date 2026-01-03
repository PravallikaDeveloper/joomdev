import {
    ChevronDown,
    Users,
    CreditCard,
    UserCheck,
    FileText,
    Link,
    Menu,
    X,
    Shield,
    Briefcase,
    Building,
    Building2,
    Phone,
    Power,
    UserCircle,
    Globe,
    UserCircle2,
    Wallet,
    Home,
    DollarSign,
    Landmark
} from 'lucide-react';
import { t } from "i18next";

export const languages = [
    { code: 'en', name: t('languages.en') },
    { code: 'zh', name: t('languages.zh') },
    { code: 'pt', name: t('languages.pt') },
    { code: 'es', name: t('languages.es') },
    { code: 'fr', name: t('languages.fr') },
    { code: 'ja', name: t('languages.ja') },
];

export const subsidiaries = [
    {
        name: t('home.subsidiaries.cica.name'),
        logo: '/CICA-Life-1.svg',
        title: t('home.subsidiaries.cica.title'),
        description: t('home.subsidiaries.cica.description'),
        href: '/cica-life',
    },
    {
        name: t('home.subsidiaries.citizens.name'),
        logo: '/CICA-LOA-2.svg',
        title: t('home.subsidiaries.citizens.title'),
        description: t('home.subsidiaries.citizens.description'),
        href: 'https://citizensnational.com',
    },
    {
        name: t('home.subsidiaries.security.name'),
        logo: '/SPLIC-Logo-Color-NC-3.svg',
        title: t('home.subsidiaries.security.title'),
        description: t('home.subsidiaries.security.description'),
        href: 'https://securityplanlife.com',
    },
];

export const aboutItems = [
    {
        title: 'Board Of Directors',
        description: 'Meet our seasoned Fintech BoD.',
        icon: Users,
        href: '#board',
    },
    {
        title: 'CICA Leadership',
        description:
            'Meet our Founder-led leadership with deep expertise across Insurance & Technology.',
        icon: Briefcase,
        href: '#leadership',
    },
    {
        title: 'Jobs',
        description:
            'CICA Life is always excited to hear from top talent - reach out.',
        icon: Building,
        href: '#jobs',
    },
    {
        title: 'Contacts For Clients',
        description: 'Enterprise & Business Client Contacts',
        icon: Phone,
        href: '#client-contacts',
    },
    {
        title: 'Contacts For Policyholders',
        description: 'Account Holders & Policy Services',
        icon: Phone,
        href: '#policyholder-contacts',
    },
];

export const loginOptions = [
    {
        title: 'Policy Hub',
        description: 'Access your policy details and documents',
        icon: Shield,
        href: '/policy-hub',
    },
    {
        title: 'CICA Wallet',
        description: 'Access your claims and payment wallet',
        icon: Wallet,
        href: '/claims-wallet',
    },
    {
        title: 'Shareholder Login',
        description: 'Access shareholder portal and documents',
        icon: Building,
        href: '/login/shareholder',
    },
    {
        title: 'CICA Life Policy Holder Login',
        description: 'Access your policy information',
        icon: UserCircle2,
        href: '/login/policyholder',
    },
    {
        title: 'My Security Plan Login',
        description: 'Access your security plan',
        icon: Shield,
        href: '/login/security-plan',
    },
    {
        title: 'CICA Life IC Portal',
        description: 'Insurance company portal access',
        icon: Building,
        href: '/login/ic-portal',
    },
    {
        title: 'Domestic Agent Portal',
        description: 'Portal for domestic agents',
        icon: UserCircle2,
        href: '/login/domestic-agent',
    },
    {
        title: 'Security Plan Agent Portal',
        description: 'Portal for security plan agents',
        icon: Shield,
        href: '/login/security-agent',
    },
];

export const moreOptions = [
    {
        title: 'Online Account Setup',
        description:
            'Create a username and password to access our CICA Mobile or User Apps and access your policy details.',
        icon: UserCircle2,
        href: '/cards/setup',
    },
    {
        title: 'Online Portal',
        description:
            'To access your account information, policies and other online features, click here.',
        icon: Building,
        href: '/cards/online-banking',
    },
    {
        title: 'Mobile App',
        description:
            'To download and start using our full-featured app designed for ease of use, start here.',
        icon: UserCircle2,
        href: '/cards/mobile-banking',
    },
    {
        title: 'Policyholder Support',
        description:
            'For all policyholder support, please call 1-855-687-2114​ or click here.',
        icon: Phone,
        href: '/cards/support',
    },
    {
        title: 'Policyholder Benefits',
        description:
            'For all Policyholder related information, agreements and links, start here.',
        icon: Shield,
        href: '/cards/benefits',
    },
    {
        title: 'Policy Balance',
        description:
            'For all Policyholder related information, agreements and links, start here.',
        icon: CreditCard,
        href: '/cards/rewards',
    },
    {
        title: 'Activate Policy',
        description:
            'If you received a CICA Life policy and need to activate it, start here.',
        icon: Power,
        href: '/cards/activate',
    },
    {
        title: 'Policyholder Portal',
        description:
            'For all Policyholder related information, agreements and links, start here.',
        icon: UserCircle,
        href: '/cards/portal',
    },
];

// Mega Menu Structure for Demo Pages
export const megaMenuCategories = [
    {
        title: "Incoming Payment Solutions",
        description: "Process premium payments and manage policy information",
        items: [
            {
                title: 'Premium Pay - Agent',
                description: 'Process premium payments for insurance agents',
                icon: CreditCard,
                href: '/premium-pay-agent',
            },
            {
                title: 'Premium Pay - Client',
                description: 'Pay your insurance premium securely and conveniently',
                icon: CreditCard,
                href: '/premium-pay-client',
            },
            {
                title: 'Policy Hub',
                description: 'Access and manage your policy details and documents',
                icon: FileText,
                href: '/policy-hub',
            }
        ]
    },
    {
        title: "Outgoing Payment Solutions",
        description: "Process payments to claimants, partners, and service providers",
        items: [
            {
                title: t('header.insurance.link.title'),
                description: 'Create a one-time payment link with customizable options',
                icon: Link,
                href: '/pay-link',
            },
            {
                title: t('header.insurance.partners.title'),
                description: 'Process payments to partners, agents, and service providers',
                icon: Building2,
                href: '/pay-partners',
            },
            {
                title: t('header.insurance.claim.title'),
                description: 'Pay claims instantly with flexible payment methods',
                icon: CreditCard,
                href: '/claim-payment-lander',
            }
        ]
    },
    {
        title: "Claims Wallet",
        description: "Manage claims funds and payment options",
        items: [
            {
                title: 'Claimant Verification',
                description: 'Verify your identity to access claims and payments',
                icon: UserCheck,
                href: '/claimant-verification',
            },
            {
                title: 'Virtual Claims Card',
                description: 'Issue instant virtual cards for claims payments',
                icon: CreditCard,
                href: '/virtual-claims-card',
            },
            {
                title: 'Claims Wallet',
                description: 'Access your claims and payment wallet',
                icon: Wallet,
                href: '/claims-wallet',
            },
            {
                title: 'Claims Wallet Plus',
                description: 'Enhanced claims wallet with virtual card and advanced features',
                icon: Wallet,
                href: '/claims-wallet-plus',
            }
        ]
    }
];

// Payment Solutions mega menu categories
export const paymentSolutionsCategories = [
    {
        title: "Incoming Payments",
        description: "Solutions for processing premium payments and policy purchases",
        items: [
            {
                title: 'Incoming Payments Summary',
                description: 'Overview of our incoming payment solutions',
                icon: DollarSign,
                href: '/incoming-payments',
                divider: true,
                isSummary: true
            },
            {
                title: 'Premium Pay - Agent',
                description: 'Process premium payments for insurance agents',
                icon: CreditCard,
                href: '/premium-pay-agent',
            },
            {
                title: 'Premium Pay - Client',
                description: 'Pay your insurance premium securely and conveniently',
                icon: CreditCard,
                href: '/premium-pay-client',
            },
            {
                title: 'Policy Hub',
                description: 'Access and manage your policy details and documents',
                icon: FileText,
                href: '/policy-hub',
            }
        ]
    },
    {
        title: "Outgoing Payments",
        description: "Solutions for processing claims and beneficiary payments",
        items: [
            {
                title: 'Outgoing Payments Summary',
                description: 'Overview of our outgoing payment solutions',
                icon: DollarSign,
                href: '/outgoing-payments',
                divider: true,
                isSummary: true
            },
            {
                title: 'Pay Link',
                description: 'Create a one-time payment link with customizable options',
                icon: Link,
                href: '/pay-link',
            },
            {
                title: 'Pay Partners',
                description: 'Process payments to partners, agents, and service providers',
                icon: Building2,
                href: '/pay-partners',
            },
            {
                title: 'Pay Claims',
                description: 'Pay claims instantly with flexible payment methods',
                icon: CreditCard,
                href: '/claim-payment-lander',
            }
        ]
    },
    {
        title: "Domestic & International",
        description: "Solutions for processing payments domestically and globally",
        items: [
            {
                title: 'Domestic Payments Summary',
                description: 'Payment solutions for the United States',
                icon: Home,
                href: '/domestic-payments',
                isSummary: true
            },
            {
                title: 'International Payments Summary',
                description: 'Global payment solutions for cross-border transactions',
                icon: Globe,
                href: '/international-payments',
                divider: true,
                isSummary: true
            },
            {
                title: 'Virtual Claims Card',
                description: 'Issue instant virtual cards for claims payments',
                icon: CreditCard,
                href: '/virtual-claims-card',
            },
            {
                title: 'Claims Wallet Solutions',
                description: 'Digital wallet solutions for managing claim funds',
                icon: Wallet,
                href: '/claims-wallet',
            }
        ]
    }
];
