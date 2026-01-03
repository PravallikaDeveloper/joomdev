
import ClaimsWalletMax from "@/src/claims-wallet/ClaimsWalletMax";
import { Footer } from "@/src/components/layout/Footer/Footer";
import { Header } from "@/src/components/layout/Header/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <ClaimsWalletMax></ClaimsWalletMax>
      <Footer></Footer>
    </div>
  );
}
