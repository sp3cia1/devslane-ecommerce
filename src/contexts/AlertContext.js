import { createContext } from 'react';

export const AlertContext = createContext({
  alert: null,
  setAlert: () => {},
  removeAlert: () => {}
});
