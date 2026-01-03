

import { Shield, Globe, Clock } from "lucide-react";
import { Card } from "../ui/Card";

export const cardFeatures = [
  {
    title: "Secure Access",
    description: "Bank-grade security protecting your virtual card details",
    icon: Shield,
  },
  {
    title: "Global Acceptance",
    description: "Use your virtual card anywhere Mastercard is accepted",
    icon: Globe,
  },
  {
    title: "Real-time Updates",
    description: "Track transactions and balance updates instantly",
    icon: Clock,
  },
];

export function AdditionalFeatures() {
  return (
    <section className="max-w-5xl mx-auto mt-10 grid grid-cols-3 gap-4">
      {
        cardFeatures && cardFeatures.map((item, index) =>
          <Card key={index} title={item.title} description={item.description} icon={item.icon}></Card>
        )
      }
    </section>
  );
}
