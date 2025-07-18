import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import { withAlert } from '../hoc';

function Alert({ alert, removeAlert }) {
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        removeAlert();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert, removeAlert]);

  if (!alert) return null;

  const getAlertStyles = () => {
    switch (alert.type) {
      case 'success':
        return {
          container: 'bg-green-50 border border-green-200 text-green-800',
          icon: <FaCheckCircle className="text-green-400" />,
          button: 'text-green-500 hover:text-green-700'
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border border-yellow-200 text-yellow-800',
          icon: <FaExclamationTriangle className="text-yellow-400" />,
          button: 'text-yellow-500 hover:text-yellow-700'
        };
      case 'danger':
        return {
          container: 'bg-red-50 border border-red-200 text-red-800',
          icon: <FaExclamationCircle className="text-red-400" />,
          button: 'text-red-500 hover:text-red-700'
        };
      default:
        return {
          container: 'bg-blue-50 border border-blue-200 text-blue-800',
          icon: <FaExclamationCircle className="text-blue-400" />,
          button: 'text-blue-500 hover:text-blue-700'
        };
    }
  };

  const styles = getAlertStyles();

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md w-full ${styles.container} rounded-lg p-4 shadow-lg`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3 mt-0.5">
          {styles.icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{alert.message}</p>
        </div>
        <button
          onClick={removeAlert}
          className={`flex-shrink-0 ml-3 ${styles.button} transition-colors`}
        >
          <FaTimes className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default withAlert(Alert)