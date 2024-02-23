import React from 'react';

const useResponsiveClient = () => {
  // screen resolutions
  const [state, setState] = React.useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  React.useEffect(() => {
    // update the state on window resize
    const onResizeHandler = () => {
      const isMobile = window.innerWidth <= 999;
      const isTablet = window.innerWidth >= 1000 && window.innerWidth <= 1366;
      const isDesktop = window.innerWidth >= 1000;

      setState({ isMobile, isTablet, isDesktop });
    };

    // add event listener
    const Setup = () => {
      window.addEventListener('resize', onResizeHandler, false);
    };

    // remove the listener
    const Cleanup = () => {
      window.removeEventListener('resize', onResizeHandler, false);
    };

    // update the state on the initial load
    onResizeHandler();

    // assign the event
    Setup();

    return () => {
      // remove the event
      Cleanup();
    };
  }, []);

  return state;
};

export default useResponsiveClient;
