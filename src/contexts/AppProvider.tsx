import React, { createContext, useState } from 'react';

interface IContext {
  modalActived: boolean;
  setModalActived: React.Dispatch<boolean>;
}

export const AppContext = createContext<IContext>({} as any);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalActived, setModalActived] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        modalActived,
        setModalActived,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
