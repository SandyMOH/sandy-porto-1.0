import { useState, useEffect } from 'react';

// Define a type for a single SVG configuration object for reusability.
type SvgConfig = {
  lineCount: number;
  viewBox: string;
};

// Define the specific breakpoints we'll use as keys.
type Breakpoint = 'default' | 'xl';

// Type the main configuration object to ensure it matches our defined types.
const configs: Record<Breakpoint, SvgConfig> = {
  default: { lineCount: 20, viewBox: '0 0 100 100' },
  xl: { lineCount: 20, viewBox: '0 0 100 60' },
};

/**
 * A custom hook that provides a responsive SVG configuration
 * based on the current viewport width.
 * @returns An object containing the lineCount and viewBox string.
 */
export function useResponsiveSvgConfig(): SvgConfig {
  // Type the state using the SvgConfig type.
  const [config, setConfig] = useState<SvgConfig>(configs.default);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1250) {
        setConfig(configs.xl);
      } else {
        setConfig(configs.default);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return config;
}
