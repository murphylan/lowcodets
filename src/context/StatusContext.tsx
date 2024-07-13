import React, { ReactNode, createContext, useContext, useState } from 'react';

interface StatusContextInterface {
  changeStatus: boolean;
  setChangeStatus: (changeStatus: boolean) => void;
}

const StatusContext = createContext<StatusContextInterface | undefined>(undefined);

export function StatusContextProvider({ children }: { children: ReactNode }) {
  const [changeStatus, setChangeStatus] = useState(false);

  const contextValue: StatusContextInterface = {
    changeStatus,
    setChangeStatus,
  };

  return (
    <StatusContext.Provider value={contextValue}>{children}</StatusContext.Provider>
  );
}

export const useStatusContext = () => {
  const context = useContext(StatusContext);
  if (!context) {
    throw new Error('useStatusContext must be used within a StatusContextProvider');
  }
  return context;
};
