import React from 'react';

interface CtaButtonProps {
  text: string;
  primary?: boolean;
  testId?: string;
  onClick?: () => void;
  href?: string; // ← 新しく追加！
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  text, 
  primary = true, 
  testId,
  onClick,
  href // ← 新しく追加！
}) => {
  const baseClasses = `px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    primary 
      ? 'bg-cyan-400 text-blue-900 hover:bg-cyan-300 focus:ring-cyan-400' 
      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:ring-white'
  }`;

  // hrefがある場合は<a>タグでリンク、なければ<button>
  return href ? (
    <a
      href={href}
      className={baseClasses}
      data-test-id={testId}
    >
      {text}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={baseClasses}
      data-test-id={testId}
    >
      {text}
    </button>
  );
};

export default CtaButton;
