import React, {createContext, useContext, useState} from 'react';

const AuthHelper = createContext();

export function useAuthHelper() {
  return useContext(AuthHelper);
}

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const userList = [
        {id: 1, email: 'User@gmail.com', password: '12345', name: 'User'},

        {id: 2, email: 'Test@gmail.com', password: '12345', name: 'Test'},

        {id: 3, email: 'Host@gmail.com', password: '12345', name: 'Host'},
      ];
      const user = userList.find(
        user => user.email === email && user.password === password,
      );
      if (user) {
        setUser(user);
        setLoading(false);
        setError(null);
      } else {
        setError('Please check your data');
        setLoading(false);
      }
    } catch (error) {
      setError('Error in login');
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };
  const contextVal = {
    user,
    loading,
    login,
    logout,
  };
  return (
    <AuthHelper.Provider value={contextVal}>{children}</AuthHelper.Provider>
  );
}
