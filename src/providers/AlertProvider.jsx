import React, { useCallback, useMemo, useState } from "react";
import { AlertContext } from "../contexts/AlertContext";

function AlertProvider({ children }) {
  const [alert, setAlert] = useState(undefined);

  const removeAlert = useCallback(() => {
    setAlert(null);
  }, []);

  const showAlert = useCallback((message, type = "info") => {
    setAlert({ message, type });
  }, []);

  const alertValue = useMemo(
    () => ({
      alert,
      setAlert: showAlert,
      removeAlert,
    }),
    [alert, showAlert, removeAlert]
  );
  return (
    <AlertContext.Provider value={alertValue}>{children}</AlertContext.Provider>
  );
}

export default AlertProvider;
