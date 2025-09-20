import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer mt-40 lg:mt-64 mx-auto w-full">
      <div className="footer__links">
        <a href="https://t.me/grmnche" target="_blank">
          <Image
            src="./img/tg-clean.png"
            alt="Telegram"
            width={20}
            height={20}
            unoptimized={true}
          />
        </a>
        <a href="https://github.com/grmnche" target="_blank">
          <Image
            src="./img/github-clean.png"
            alt="GitHub"
            width={20}
            height={20}
            unoptimized={true}
          />
        </a>
      </div>

      <p className="text-[#818181] text-sm mt-2 lg:text-base">© 2025 webdragon</p>
    </footer>
  );
}
