import React from 'react';
import Image from 'next/image';
import { publicAsset } from '@/utils/publicAsset';

interface LoaderProps {
  className?: string;
}

export default function Loader({ className = '' }: LoaderProps) {
  return (
    <div className={`loader ${className}`}>
      <Image
        src={publicAsset('/img/dragon4.png')}
        alt="Dragon illustration"
        width={100}
        height={100}
        className="loader__img w-24 lg:w-40"
        quality={100}
        unoptimized={true}
      />
    </div>
  );
}
