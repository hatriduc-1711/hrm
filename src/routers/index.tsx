import { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import AuthLayout from '~/layouts/auth-layout';
import LayoutDefault from '~/layouts/default-layout';
import * as Pages from '~/routers/pages';
import Loading from '~/components/Loading';
import ProtectedRouter from './ProtectedRouter';
import ROUTER from '~/variables/router';

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        element: (
          <Suspense fallback={<Loading styles={{ height: '100vh' }} />}>
            <AuthLayout />
          </Suspense>
        ),
        children: [
          {
            element: <Pages.AuthLoginPage />,
            path: ROUTER.login,
          },
          {
            element: <Pages.AuthForgotPasswordPage />,
            path: ROUTER.forgotPassword,
          },
          // {
          //   element: <Pages.AuthResetPasswordPage />,
          //   path: ROUTER.resetPasswordAuth,
          // },
        ],
      },
      {
        element: <ProtectedRouter />,
        children: [
          {
            element: <LayoutDefault />,
            children: [
              {
                element: <Pages.HomePage />,
                path: ROUTER.home,
              },
              {
                element: <Pages.EmployeePage />,
                path: ROUTER.employee,
              },
              {
                element: <Pages.AddEmployeePage />,
                path: ROUTER.addAndUpdateEmployee,
              },
              {
                element: <Pages.EditEmployeePage />,
                path: `${ROUTER.addAndUpdateEmployee}/:id`,
              },
              {
                element: <Pages.SettingsPage />,
                path: ROUTER.settings,
              },
              {
                element: <Pages.SettingResetPasswordPage />,
                path: ROUTER.resetPasswordSetting,
              },
              {
                element: <Pages.SettingsChangeCompanyInformation />,
                path: ROUTER.changeCompanyInformation,
              },
            ],
          },
        ],
      },
      {
        element: (
          <Suspense fallback={<Loading styles={{ height: '100vh' }} />}>
            <Pages.NotFoundPage />
          </Suspense>
        ),
        path: ROUTER.notFound,
      },
    ],
  },
]);

export default router;
