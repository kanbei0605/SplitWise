import Providers from 'Providers';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import FirstPage from 'pages/FirstPage';
import Dashboard from 'pages/Dashboard';
import ActivityBar from 'components/layouts/bars/ActivityBar';
import DashboardBar from 'components/layouts/bars/DashboardBar';
import AllBar from 'components/layouts/bars/AllBar';
import ProfilePage from 'pages/ProfilePage';
import Type1NavbarLayout from 'components/layouts/Type1NavbarLayout';
import Type2NavbarLayout from 'components/layouts/Type2NavbarLayout';

function AppRoutes() {
  const location = useLocation();
  return (
    <Providers>
      <div className="flex flex-col h-screen">
        <Routes location={location}>
          <Route path="" element={<Type1NavbarLayout />}>
            <Route path="" element={<Dashboard />}>
              <Route path="activity" element={<ActivityBar />} />
              <Route path="dashboard" element={<DashboardBar />} />
              <Route path="all" element={<AllBar />} />
            </Route>
            <Route path="profile" element={<ProfilePage />}></Route>
          </Route>
          <Route path="signup" element={<Type2NavbarLayout />}>
            <Route path="" element={<FirstPage />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="signup" />} />
        </Routes>
      </div>
    </Providers>
  );
}

export default AppRoutes;
