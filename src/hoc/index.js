import { withProvider } from './withProvider';
import { AlertContext } from '../contexts/AlertContext';
import { UserContext } from '../contexts/UserContext';

export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);

export const withAlertAndUser = (Component) => withAlert(withUser(Component));
