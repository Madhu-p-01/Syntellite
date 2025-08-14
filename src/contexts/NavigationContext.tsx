import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationContextType {
  isNavigating: boolean;
  setIsNavigating: (loading: boolean) => void;
  handleSamePageNavigation: (targetPath: string) => void;
  handleNavigation: (targetPath: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleSamePageNavigation = (targetPath: string) => {
    // Check if we're navigating to the same page
    if (location.pathname === targetPath) {
      setIsNavigating(true);
      // Show loader for a brief moment to provide feedback
      setTimeout(() => {
        setIsNavigating(false);
        // Scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 800);
    } else {
      // Navigate to different page
      navigate(targetPath);
    }
  };

  const handleNavigation = (targetPath: string) => {
    // Always navigate and scroll to top will be handled by useEffect
    navigate(targetPath);
  };

  return (
    <NavigationContext.Provider value={{
      isNavigating,
      setIsNavigating,
      handleSamePageNavigation,
      handleNavigation
    }}>
      {children}
    </NavigationContext.Provider>
  );
};
