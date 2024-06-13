import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext<{
  ref: React.RefObject<HTMLDivElement> | null;
  onScroll: () => void;
}>({
  ref: null,
  onScroll: () => { },
});

export const ScrollContextProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ ref, onScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
