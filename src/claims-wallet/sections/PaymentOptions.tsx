
import { VirtualCard } from "./VirtualCard";
import { SecondaryPaymentOptions } from "./SecondaryPaymentOptions";

export function PaymentOptions({ onVirtualCard }: { onVirtualCard: () => void }) {
  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <VirtualCard onSelect={onVirtualCard} />
      <SecondaryPaymentOptions />
    </section>
  );
}
