import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  // static getDerivedStateFromError(error) {
  //   return { error: true };
  // }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error });
    // console.log(error, errorInfo.componentStack);
    // return { hasError: true };
  };

  render() {
    if (this.state.hasError) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
