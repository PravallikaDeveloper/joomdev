
"use client";
import juiceImg from '../assets/images/juice_logo.jpg'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubble } from '../components/ChatBubble';
import {
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Copy,
  X,
  RefreshCw,
  Lock,
  Globe,
  KeyRound,
  Wallet,
  Bell,
  FileText,
  DollarSign,
  Building2,
  MailCheck,
  Landmark,
  AlertTriangle,
  Check
} from 'lucide-react';
import { PageHelpButton } from '../components/PageHelpButton';
import { HelpSidebarBase } from '../components/HelpSidebarBase';
import { ClaimsWalletCardPlus } from '../components/ClaimsWalletCardPlus';
import { Header } from '../components/layout/Header/page';
import { claimsWalletPlusHelp } from '../data/pageHelpContent';
import { HeroSection } from './sections/HeroSection';
import WalletDisplay from './sections/WallerDisplay';
import { RecentTransaction } from './sections/RecentTransaction';
import { AdditionalFeatures } from './sections/AdditionalFeatures';
import { OTPVerificationModal } from './modals/OTPVerificationModal';
import { PaymentTransferModal } from './modals/PaymentTransferModal';
import Image from 'next/image';

export default function ClaimsWalletMax() {
  const { t } = useTranslation();
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);


  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState('');

  // Wallet and card data
  const walletData = {
    balance: 4750.00
  };

  const virtualCard = {
    number: '4111 2222 3333 4444',
    expiry: '12/25',
    cvv: '123',
    balance: 0
  };

  // Payment method details
  const paymentMethods = [
    {
      id: 'virtual-card',
      name: 'Virtual Card',
      description: 'Instant access to funds with Mastercard',
      icon: CreditCard,
      timeframe: 'Instant',
      priority: 1,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'direct-card',
      name: 'Direct to Visa/Mastercard',
      description: 'Send money to your existing credit or debit card',
      icon: CreditCard,
      timeframe: '10-30 minutes',
      priority: 2,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ach',
      name: 'ACH to Bank',
      description: 'Transfer directly to your bank account',
      icon: Landmark,
      timeframe: '1-3 business days',
      priority: 3,
      color: 'from-purple-600 to-violet-600'
    },
    {
      id: 'check',
      name: 'eCheck',
      description: 'Traditional check sent to your mailing address',
      icon: MailCheck,
      timeframe: '5-7 business days',
      priority: 4,
      color: 'from-amber-600 to-orange-600'
    }
  ];

  const toggleHelpSidebar = () => {
    setIsHelpOpen(!isHelpOpen);
  };



  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  const handleSelectPaymentMethod = (methodId: string) => {
    setActivePaymentMethod(methodId);

    const method = paymentMethods.find(m => m.id === methodId);
    if (method) {
      setModalPaymentMethod(method.name);
      setShowTransferModal(true);
    }
  };

  const handleShowCardDetails = () => {
    if (!showCardDetails) {
      setShowOTPModal(true);
    } else {
      setShowCardDetails(false);
    }
  };


  const handleRefreshWallet = () => {
    setShowTransferModal(true);
  };

  // Animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <HeroSection></HeroSection>

          {/* Wallet Display - Prominent central position */}
          <WalletDisplay balance={walletData.balance} handleRefreshWallet={() => handleRefreshWallet()}></WalletDisplay>

          {/* Payment Method Options Section */}
          <motion.div
            className="max-w-5xl mx-auto mb-16"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-[#1f5bfb] font-size-[1.7em]">Select Payment Method</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Virtual Card - Primary Option (Largest, Most Prominent) */}
              <motion.div
                className="md:col-span-2"
                variants={cardVariants}
              >
                <button
                  onClick={() => handleSelectPaymentMethod('virtual-card')}
                  className="w-full bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-600/50 dark:border-blue-500/30 flex md:flex-row flex-col items-center text-left gap-6 relative overflow-hidden group"
                >
                  {/* Card visual */}
                  <div className="w-[200px] h-[120px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex-shrink-0 shadow-lg relative">
                    <div className="absolute top-2 left-2">
                      <Image
                        src={juiceImg}
                        width={100}
                        height={100}
                        alt="Juice Financial"
                        className="h-6"
                      ></Image>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <img
                        src="https://www.mastercard.com/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                        alt="Mastercard"
                        className="h-6"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70">
                      **** 4444
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Virtual Mastercard</h3>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                          INSTANT
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Get instant access to your funds with a virtual Mastercard that can be used anywhere online or added to your mobile wallet.
                    </p>
                    <div className="flex items-center text-blue-600">
                      <span className="font-medium">Select Virtual Card</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Background glow effect on hover */}
                  <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </motion.div>

              {/* Secondary payment options */}
              {paymentMethods.slice(1).map((method, index) => (
                <motion.div
                  key={method.id}
                  variants={cardVariants}
                >
                  <button
                    onClick={() => handleSelectPaymentMethod(method.id)}
                    className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col text-left gap-4 relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`p-2 rounded-full bg-${method.id === 'direct-card' ? 'green' : method.id === 'ach' ? 'purple' : 'amber'}-50 dark:bg-${method.id === 'direct-card' ? 'green' : method.id === 'ach' ? 'purple' : 'amber'}-900/30 text-${method.id === 'direct-card' ? 'green' : method.id === 'ach' ? 'purple' : 'amber'}-600 dark:text-${method.id === 'direct-card' ? 'green' : method.id === 'ach' ? 'purple' : 'amber'}-400`}>
                        <method.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold">{method.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {method.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {method.timeframe}
                      </span>
                      <span className="text-blue-600 flex items-center text-sm">
                        <span>Select</span>
                        <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gray-600/5 dark:bg-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Transactions */}
          <RecentTransaction></RecentTransaction>

          {/* Additional Features & Cards */}
          <AdditionalFeatures></AdditionalFeatures>
        </div>
      </main>

      {/* Fixed position help button */}
      <div className="fixed top-20 right-4 z-40">
        <PageHelpButton
          onClick={toggleHelpSidebar}
          isOpen={isHelpOpen}
        />
      </div>

      {/* Page-specific help sidebar */}
      <HelpSidebarBase
        isOpen={isHelpOpen}
        onClose={toggleHelpSidebar}
        content={claimsWalletPlusHelp}
      />

      <ChatBubble />

      {/* OTP Verification Modal */}
      {showOTPModal && (
        <OTPVerificationModal setShowOTPModal={(x) => { setShowOTPModal(x) }} setShowCardDetails={(x) => setShowCardDetails(x)} ></OTPVerificationModal>
      )}

      {/* Payment Transfer Modal */}
      <AnimatePresence>
        {showTransferModal && (
          <PaymentTransferModal
            modalPaymentMethod={modalPaymentMethod} 
            balance={walletData.balance}
            setShowTransferModal={(x)=>{setShowTransferModal(x)}}></PaymentTransferModal>
        )}
      </AnimatePresence>
    </div>
  );
}