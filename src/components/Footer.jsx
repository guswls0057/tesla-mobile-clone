import React from 'react';

const Footer = () => {
  const links = [
    `Tesla © ${new Date().getFullYear()}`,
    "개인정보처리방침",
    "법적 고지",
    "이용 약관",
    "문의하기",
    "새 소식",
    "위치"
  ];

  return (
    <footer>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>{link}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
