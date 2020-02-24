import React from "react";

// The only place you have to use classes in a React app

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true, error: info.componentStack });
    // logErrorToMyService(error, info);
  }

  public render() {
    return this.state.hasError ? (
      <div>
        <h2>Something went wrong.</h2>
      </div>
    ) : (
      this.props.children
    );
  }
}
