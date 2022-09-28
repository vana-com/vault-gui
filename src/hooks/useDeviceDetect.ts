import { useCallback, useEffect, useState } from "react";

interface DeviceDetect {
  isMobileUserAgent: boolean;
  isMobileViewport: boolean;
}

const useDeviceDetect = (): DeviceDetect => {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  const deviceProperties = detectDevice(userAgent);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const onWindowSizeChanged = useCallback(() => {
    setIsMobileViewport(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    onWindowSizeChanged();
    window.addEventListener("resize", onWindowSizeChanged, true);

    return () => {
      window.removeEventListener("resize", onWindowSizeChanged, true);
    };
  }, []);

  return {
    isMobileViewport,
    isMobileUserAgent: deviceProperties.isMobile(),
  } as DeviceDetect;
};

/**
 * Categorize device based on user agent
 * @param userAgent
 * @returns
 */
const detectDevice = (userAgent: string) => {
  const isAndroid = (): boolean => Boolean(userAgent.match(/Android/i));
  const isIos = (): boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = (): boolean => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = (): boolean => Boolean(userAgent.match(/IEMobile/i));
  const isSSR = (): boolean => Boolean(userAgent.match(/SSR/i));

  const isMobile = (): boolean =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = (): boolean => Boolean(!isMobile() && !isSSR());
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
};

export { useDeviceDetect };
