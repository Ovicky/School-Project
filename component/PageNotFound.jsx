import React from "react";
import { Container, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary";

function PageNotFound() {
  return (
    <Container pt={[4, 8]}>
      <Heading>404 - Not Found</Heading>
      <p>The page you are looking for does not exist.</p>
      <Link to='./'>
        <ErrorBoundary>
          <Button mt={4} colorScheme="blue">Go back to main page</Button>
        </ErrorBoundary>
      </Link>
    </Container>
  );
}

export default PageNotFound;
