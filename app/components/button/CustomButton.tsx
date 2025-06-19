'use client';

import React from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import clsx from 'clsx';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

type ButtonProps = {
  href?: string;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'mobile';
  className?: string;
};

const CustomButton = ({
  href,
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const baseStyle =
    'rounded-full px-8 py-4 text-base transition-all duration-200 shadow-md'; // Increased padding and text size

  const variants = {
    primary: 'bg-white text-gray-600 hover:shadow-lg', // Changed text color to gray-600
    outline: 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100', // Changed text color
    mobile: 'bg-orange-600 text-white font-semibold hover:bg-orange-700 text-center',
  };

  const combinedClasses = clsx(
    baseStyle,
    poppins.className,
    variants[variant],
    className
  );

  return href ? (
    <Link href={href} className={combinedClasses}>
      {label}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
};

export default CustomButton;