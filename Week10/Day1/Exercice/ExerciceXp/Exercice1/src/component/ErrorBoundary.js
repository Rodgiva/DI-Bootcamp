import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { error: null };
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error: error });
  };

  render() {
    return (
      <>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {/* {this.state.errorInfo.componentStack} */}
        </details>
      </>
    );
  }
}

export default ErrorBoundary;
