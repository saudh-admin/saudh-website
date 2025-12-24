'use client';
import { useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from './theme-provider';
import "@theme-toggles/react/css/DarkSide.css";
import { DarkSide } from "@theme-toggles/react";
type AnimationVariant = 
  | 'circle' 
  | 'circle-blur' 
  | 'gif'
  | 'polygon';
type StartPosition = 
  | 'center' 
  | 'top-left' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-right';
export interface ThemeToggleButtonProps {
  theme?: 'light' | 'dark';
  showLabel?: boolean;
  variant?: AnimationVariant;
  start?: StartPosition;
  url?: string; // For gif variant
  className?: string;
  onClick?: () => void;
}
export const ThemeToggleButton = ({
  theme = 'light',
  showLabel = false,
  variant = 'circle',
  start = 'center',
  url,
  className,
  onClick,
}: ThemeToggleButtonProps) => {
  
  const handleClick = useCallback(() => {
    // Inject animation styles for this specific transition
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;
    
    // Generate animation CSS based on variant
    let css = '';
    const positions = {
      center: 'center',
      'top-left': 'top left',
      'top-right': 'top right',
      'bottom-left': 'bottom left',
      'bottom-right': 'bottom right',
    };
    
    if (variant === 'circle') {
      const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
      const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${positions[start]};
          }
          @keyframes circle-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
            }
          }
        }
      `;
    } else if (variant === 'circle-blur') {
      const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
      const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;
    } else if (variant === 'gif' && url) {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: fade-out 0.4s ease-out;
          }
          ::view-transition-new(root) {
            animation: gif-reveal 2.5s cubic-bezier(0.4, 0, 0.2, 1);
            mask-image: url('${url}');
            mask-size: 0%;
            mask-repeat: no-repeat;
            mask-position: center;
          }
          @keyframes fade-out {
            to {
              opacity: 0;
            }
          }
          @keyframes gif-reveal {
            0% {
              mask-size: 0%;
            }
            20% {
              mask-size: 35%;
            }
            60% {
              mask-size: 35%;
            }
            100% {
              mask-size: 300%;
            }
          }
        }
      `;
    } else if (variant === 'polygon') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: ${theme === 'light' ? 'wipe-in-dark' : 'wipe-in-light'} 0.55s ease-out;
          }
          @keyframes wipe-in-dark {
            from {
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            }
            to {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
          @keyframes wipe-in-light {
            from {
              clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            }
            to {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        }
      `;
    }
    
    if (css) {
      style.textContent = css;
      document.head.appendChild(style);
      
      // Clean up animation styles after transition
      setTimeout(() => {
        const styleEl = document.getElementById(styleId);
        if (styleEl) {
          styleEl.remove();
        }
      }, 3000);
    }
    
    // Call the onClick handler if provided
    onClick?.();
  }, [onClick, variant, start, url, theme]);
  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10',
        showLabel && 'h-auto px-4 py-2 gap-2',
        'relative overflow-hidden transition-all',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {/* @ts-expect-error - DarkSide component has complex prop types */}
      <DarkSide 
        duration={900} 
        toggled={theme === 'dark'}
        className="h-[1.2rem] w-[1.2rem]"
      />
      {showLabel && (
        <span className="text-sm">
          {theme === 'light' ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
// Export a helper hook for using with View Transitions API
export function useThemeTransition() {
  const startTransition = useCallback((updateFn: () => void) => {
    if ('startViewTransition' in document) {
      (document as Document).startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);
  return { startTransition };
};

// ModeToggle component that uses polygon variant
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { startTransition } = useThemeTransition();

  useEffect(() => {
    // Set view-transition-name on root element for View Transitions API
    if ('startViewTransition' in document) {
      document.documentElement.style.viewTransitionName = 'root';
    }
  }, []);

  const handleThemeToggle = useCallback(() => {
    const currentTheme = theme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Start view transition with theme change
    // CSS injection is handled by ThemeToggleButton's handleClick
    startTransition(() => {
      setTheme(newTheme);
    });
  }, [theme, setTheme, startTransition]);

  const currentTheme = theme === 'system' 
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : (theme as 'light' | 'dark');

  return (
    <ThemeToggleButton
      theme={currentTheme}
      onClick={handleThemeToggle}
      variant="polygon"
    />
  );
}