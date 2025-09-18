import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routes/routes'
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
      <>
          <Toaster />
          <RouterProvider router={routing} />
      </>
  );
}
