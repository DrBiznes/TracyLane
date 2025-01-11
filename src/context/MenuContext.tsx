import { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  isOpen: boolean;
  mode: 'menu' | 'projects';
  openMenu: (mode?: 'menu' | 'projects') => void;
  closeMenu: () => void;
  switchMode: (newMode: 'menu' | 'projects') => void;
  goBack: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'menu' | 'projects'>('menu');

  const openMenu = (newMode: 'menu' | 'projects' = 'menu') => {
    setMode(newMode);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Reset mode after menu is closed
    setTimeout(() => {
      setMode('menu');
    }, 300);
  };

  const switchMode = (newMode: 'menu' | 'projects') => {
    setMode(newMode);
  };

  const goBack = () => {
    if (mode === 'projects') {
      setMode('menu');
    } else {
      closeMenu();
    }
  };

  return (
    <MenuContext.Provider value={{ 
      isOpen, 
      mode, 
      openMenu, 
      closeMenu, 
      switchMode,
      goBack 
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}; 