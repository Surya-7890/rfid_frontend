import { Link } from "react-router-dom";
import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
    <div>
    </div>
    </QueryClientProvider>
  );
}
  