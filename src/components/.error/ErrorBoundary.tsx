import React from "react";

interface errorBoundaryProps {
  children: React.ReactNode;
}
interface errorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  errorBoundaryProps,
  errorBoundaryState
> {
  constructor(props: errorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
