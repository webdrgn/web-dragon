import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-40 mb-4 lg:mt-64 h-20 mx-auto w-full">
      <a href="https://t.me/grmnche" target="_blank">
        <img
          src="./img/tg-clean.png"
          className="icon mr-6 mb-4 inline-block"
        />
      </a>

      <a href="https://github.com/grmnche" target="_blank">
        <img
          src="./img/github-clean.png"
          className="icon mb-4 inline-block"
        />
      </a>

      <p className="text-[#818181] text-sm mt-2 lg:text-base">
        © 2025 webdragon
      </p>
    </footer>
  );
}
