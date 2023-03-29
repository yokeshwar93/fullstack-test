import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BaseLayout, GlobalViewContainer, ArticleViewContainer } from './components';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import {QueryClient, QueryClientProvider} from "react-query";
import {PAGE_ROUTES} from "./util/constants";


const mdTheme = createTheme();
const router = createBrowserRouter([
  {
    path: PAGE_ROUTES.root,
    element: <BaseLayout />,
    errorElement: <h2>Something doesn't look right, please try again.</h2>,
    children: [
      {
        path: PAGE_ROUTES.root,
        element: <GlobalViewContainer />
      },
      {
        path: PAGE_ROUTES.articleDetails,
        element: <ArticleViewContainer />,
      }
    ]
  },
])
function App() {

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={mdTheme}>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
