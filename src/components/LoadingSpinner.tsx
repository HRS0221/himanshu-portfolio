"use client";

import { Flex, Text } from '@once-ui-system/core';

interface LoadingSpinnerProps {
  message?: string;
  size?: 's' | 'm' | 'l';
}

export default function LoadingSpinner({ 
  message = "Loading...", 
  size = 'm' 
}: LoadingSpinnerProps) {
  return (
    <Flex 
      direction="column" 
      gap="16" 
      horizontal="center" 
      vertical="center"
      style={{ minHeight: '200px' }}
    >
      <div
        style={{
          width: size === 's' ? '24px' : size === 'm' ? '32px' : '48px',
          height: size === 's' ? '24px' : size === 'm' ? '32px' : '48px',
          border: '2px solid var(--color-border-neutral-weak)',
          borderTop: '2px solid var(--color-border-brand-strong)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <Text onBackground="neutral-weak" align="center">
        {message}
      </Text>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Flex>
  );
} 