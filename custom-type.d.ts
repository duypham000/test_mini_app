import { Theme as ThemeCustom } from '@/themes/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeCustom {}
}

