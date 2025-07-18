/**
 * Generic HOC Creator that takes any context and returns an HOC
 * This eliminates the need to create separate HOCs for each context
 * 
 * Usage:
 * const withUser = withProvider(UserContext);
 * const withAlert = withProvider(AlertContext);
 * 
 * export default withAlert(MyComponent);
 */
export function withProvider(Context) {
  return function(WrappedComponent) {
    const ComponentWithProvider = (props) => {
      return (
        <Context.Consumer>
          {(contextValue) => (
            <WrappedComponent {...props} {...contextValue} />
          )}
        </Context.Consumer>
      );
    };

    // Set display name for better debugging
    ComponentWithProvider.displayName = `withProvider(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithProvider;
  };
}
