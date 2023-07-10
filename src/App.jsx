import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./components/Home"
import Features from "./components/Features"
import Blogs from "./components/Blogs"
import Contacts from "./components/Contacts"
import RootLayout from "./pages/Root"
import Dashboard from "./components/Dashboard"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <Features /> },
        { path: 'blogs', element: <Blogs /> },
        { path: 'trade', element: <Dashboard /> },
        { path: 'contact', element: <Contacts /> },
      ]
    }
  ]
)

export default function App() {
  return <RouterProvider router={router} />;

}