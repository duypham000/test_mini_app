import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      '&.drawer-container': {
        '--transition-speed': '0.3s',
      },

      '& .drawer': {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.color.dc023,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        position: 'fixed',
        // boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        transition: 'transform var(--transition-speed) ease',
        zIndex: '1000',
        padding: '16px',
      },

      '& .drawer_header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '-16px -16px 0px',
        padding: '16px',
        borderBottom: `1px solid ${theme.color.white_opacity5}`,
      },

      '& .drawer_content': {
        marginTop: '16px',
      },

      '& .drawer.bottom': {
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        transform: 'translateY(100%)',
        height: '100%',
      },

      '&.drawer-container.in.open .left, &.drawer-container.in.open .right': {
        transform: 'translateX(0)',
      },

      '&.drawer-container.in.open .top, &.drawer-container.in.open .bottom': {
        transform: 'translateY(0)',
      },

      '& .backdrop': {
        visibility: 'hidden',
        opacity: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transition:
          'opacity var(--transition-speed) ease, visibility var(--transition-speed) ease',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: '0',
      },

      '&.drawer-container.in.open .backdrop': {
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'auto',
        zIndex: '999',
      },
    }),
};

export default styles;
