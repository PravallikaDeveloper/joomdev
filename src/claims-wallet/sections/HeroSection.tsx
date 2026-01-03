
import Image from 'next/image';
import juiceImg from '../../assets/images/juice_logo.jpg';

export function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-14">
      <div className="mb-8 flex justify-center">
        <Image
          src={juiceImg}
          alt="Juice Financial"
          className="h-16"
          width={150}
        />
      </div>
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Claims Wallet Max
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Access your funds instantly and choose how you want to receive your payment. Enhanced features with maximum flexibility.
      </p>
    </div>
  );
}
