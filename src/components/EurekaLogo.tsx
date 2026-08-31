import React from 'react';
import logoSvg from '../assets/images/eureka-logo.svg';

interface EurekaLogoProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  variant?: 'full' | 'compact' | 'white';
  id?: string;
}

export const EurekaLogo: React.FC<EurekaLogoProps> = ({
  className = 'h-10 sm:h-12 w-auto',
  height,
  width,
  variant = 'full',
  id = 'eureka-logo-img'
}) => {
  return (
    <img
      id={id}
      src={logoSvg}
      alt="Eureka Facilities Management Solutions Logo"
      className={`${className} object-contain transition-all ${
        variant === 'white' ? 'brightness-105' : ''
      }`}
      style={{
        height: height || undefined,
        width: width || undefined,
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      referrerPolicy="no-referrer"
    />
  );
};

