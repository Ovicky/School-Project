// TestErrorBoundaryPage.js
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorThrowing from "./ErrorThrowing";

const ErrorTesting = () => {
  return (
    <div>
      
      <ErrorBoundary>
        <ErrorThrowing />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorTesting;
