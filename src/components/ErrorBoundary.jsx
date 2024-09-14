//This wrapper is used to catch an errors in the application

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      // Method to update state when an error is encountered
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
      }
    
      // Method to perform side effects like logging the error
      componentDidCatch(error, info) {
        // Log the error to an external service
        console.error("Caught an error:", error, info);
      }
    
      render() {
        if (this.state.hasError) {
          // Render fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
      }
}