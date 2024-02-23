import { sizeResponsive } from '@/themes/media-queries';
import { useMediaQuery } from './use-media-query';

interface ResponsiveRes {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}

export const useResponsive = (): ResponsiveRes => {
  const isDesktop = useMediaQuery(`(${sizeResponsive.desktop})`);
  const isMobile = useMediaQuery(`(${sizeResponsive.mobile})`);
  const isTablet = useMediaQuery(`(${sizeResponsive.tablet})`);

  return {
    isDesktop: isDesktop == null || isDesktop,
    isMobile: isMobile == null || isMobile,
    isTablet: isTablet == null || isTablet,
  };
};
