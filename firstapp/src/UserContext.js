import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    dob: '01/01/1990',
  });

  const value = useMemo(() => ({ user }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
