import { ClaimsWalletCardPlus } from "@/src/components/ClaimsWalletCardPlus";

interface Wallet {
    balance: number,
    handleRefreshWallet: () => void
}

export default function WalletDisplay({ balance, handleRefreshWallet }: Wallet) {
    return (
        <div className="max-w-5xl mx-auto mb-10">
            <ClaimsWalletCardPlus
                balance={ balance }
                onRefresh={handleRefreshWallet}
            />
        </div>
    )
}