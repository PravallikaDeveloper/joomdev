"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, CreditCard, DollarSign, Landmark, MailCheck, Shield, Wallet, X } from "lucide-react";
import React, { useState } from "react";

interface PaymentTransfetModel {
  modalPaymentMethod: string;
  balance: number;
  setShowTransferModal: (x: boolean) => void;
}

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

export function PaymentTransferModal({
  modalPaymentMethod,
  balance,
  setShowTransferModal
 }: PaymentTransfetModel) {
  const [transferAmount, setTransferAmount] = useState('');
  const [transferInProgress, setTransferInProgress] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0 || amount > balance) {
      return;
    }

    setTransferInProgress(true);

    // Simulate transfer process
    setTimeout(() => {
      setTransferInProgress(false);
      setTransferSuccess(true);

      // Reset after showing success
      setTimeout(() => {
        setShowTransferModal(false);
        setTransferSuccess(false);
        setTransferAmount('');
      }, 2000);
    }, 1500);
  };


  return (
    <React.Fragment>
      <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!transferInProgress && !transferSuccess) {
                setShowTransferModal(false);
                setTransferAmount('');
              }
            }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!transferSuccess ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold">{transferInProgress ? "Processing..." : `Transfer to ${modalPaymentMethod}`}</h3>
                    </div>
                    {!transferInProgress && (
                      <button
                        onClick={() => {
                          setShowTransferModal(false);
                          setTransferAmount('');
                        }}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    )}
                  </div>

                  {transferInProgress ? (
                    <div className="py-10 flex flex-col items-center justify-center">
                      <div className="mb-6">
                        <motion.div
                          className="h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-600"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      <p className="text-center text-gray-600 dark:text-gray-400">
                        Transferring funds to your {modalPaymentMethod.toLowerCase()}...
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 flex items-center">
                        <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Available Balance</div>
                          <div className="text-xl font-bold">${balance.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Transfer Amount</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="number"
                            value={transferAmount}
                            onChange={(e) => setTransferAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-xl"
                            min="0.01"
                            max={balance}
                            step="0.01"
                          />
                        </div>
                      </div>

                      {modalPaymentMethod === paymentMethods[2].name && (
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">Bank Name</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="Enter bank name"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Routing Number</label>
                              <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                                placeholder="9 digits"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Account Number</label>
                              <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                                placeholder="Account number"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {modalPaymentMethod === paymentMethods[1].name && (
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">Card Number</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="Card number"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">Expiration Date</label>
                              <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                                placeholder="MM/YY"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">Zip Code</label>
                              <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                                placeholder="Billing zip code"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {modalPaymentMethod === paymentMethods[3].name && (
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">Mailing Address</label>
                            <textarea
                              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                              placeholder="Enter your mailing address"
                              rows={3}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>
                            {modalPaymentMethod === paymentMethods[0].name ? 'Available immediately' :
                              modalPaymentMethod === paymentMethods[1].name ? 'Typically takes 10-30 minutes' :
                                modalPaymentMethod === paymentMethods[2].name ? 'Processing time: 1-3 business days' :
                                  'Delivery time: 5-7 business days'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          <span>Secure, encrypted transfer</span>
                        </div>
                      </div>

                      <button
                        onClick={handleTransfer}
                        disabled={!transferAmount || parseFloat(transferAmount) <= 0 || parseFloat(transferAmount) > balance}
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all 
                          ${!transferAmount || parseFloat(transferAmount) <= 0 || parseFloat(transferAmount) > balance
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'}`}
                      >
                        <span>Transfer Funds</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transfer Successful!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    ${parseFloat(transferAmount).toFixed(2)} has been sent to your {modalPaymentMethod.toLowerCase()}.
                  </p>
                  <button
                    onClick={() => {
                      setShowTransferModal(false);
                      setTransferSuccess(false);
                      setTransferAmount('');
                    }}
                    className="px-6 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
    </React.Fragment>
  );
}
