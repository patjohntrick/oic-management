import { createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from './DashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
]);
