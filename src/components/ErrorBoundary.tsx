"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Column, Heading, Text, Button } from '@once-ui-system/core';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Column 
          maxWidth="m" 
          gap="24" 
          padding="32" 
          horizontal="center"
          style={{ minHeight: '50vh' }}
        >
          <Heading variant="heading-strong-l" align="center">
            Something went wrong
          </Heading>
          <Text onBackground="neutral-weak" align="center">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </Text>
          <Button
            onClick={() => window.location.reload()}
            variant="primary"
            size="m"
          >
            Refresh Page
          </Button>
        </Column>
      );
    }

    return this.props.children;
  }
} 