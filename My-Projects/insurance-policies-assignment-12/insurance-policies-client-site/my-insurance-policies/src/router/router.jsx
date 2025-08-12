import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Forbidden from "../pages/Forbidden/Forbidden";

// Auth Pages
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

// Dashboard Pages
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/Dashboard/TrackParcel/TrackParcel";
import MyProfile from "../pages/Myprofile/MyProfile";
import BeARider from "../pages/Dashboard/BeARider/BeARider";

// Admin Pages
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
import Fields from "../pages/Dashboard/PendingRiders/Fields";
import ActiveRiders from "../pages/Dashboard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AssignRider from "../pages/Dashboard/AssignRider/AssignRider";

// Rider Pages
import PendingDeliveries from "../pages/Dashboard/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../pages/Dashboard/MyEarnings/MyEarnings";

// Extra
import Faqs from "../pages/Myprofile/Faqs";

// Route Guards
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/AdminRoute";
import RiderRoute from "../routes/RiderRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import Allpolicies from "../pages/Home/Services/Allpolicies";
import Policydetails from "../pages/Home/Services/Policydetails";
import Norfound from "../pages/shared/Error/Norfound";
import ApplicationForm from "../pages/Home/Services/AmountFrom/ApplicationForm";
import Agent from "../pages/Home/Services/Agent/Agent";
import AdminAllPolicies from "./fieldsAllPolicies/AdminAllPolicies";
import UpdatePolicyForm from "./fieldsAllPolicies/UpdatePolicyForm";

export const router = createBrowserRouter([
  // Public Layout
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Norfound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "coverage",
        element: <Coverage />,
        loader: () => fetch("./serviceCenter.json"),
      },
      {
        path: "allpolicies",
        element: <Allpolicies />
      },
      {
        path: "agents",
        element: <Agent />
      },
      {
        path: "policydetails/:id",
        element: <Policydetails />
      },
      { path: "forbidden", element: <Forbidden /> },
      {
        path: "beARider",
        element: (
          <PrivateRoute>
            <BeARider />
          </PrivateRoute>
        ),
        loader: () => fetch("./serviceCenter.json"),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("./serviceCenter.json"),
      },
      // {
      //   path:'multifrom',
      //   element:(
      //     <PrivateRoute>
      //       <MultiStepInsuranceForm/>
      //     </PrivateRoute>
      //   )
      // },
      {
        path: 'applicationfrom',
        element: (
          <PrivateRoute>
            <ApplicationForm />
          </PrivateRoute>
        ),
      }
    ],
  },

  // Auth Layout
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Norfound />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "faqs", element: <Faqs /> },
    ],
  },

  // Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Norfound />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "myParcels", element: <MyParcels /> },
      { path: "payment/:parcelId", element: <Payment /> },
      { path: "myprofile", element: <MyProfile /> },
      { path: "paymentHistory", element: <PaymentHistory /> },
      { path: "track", element: <TrackParcel /> },

      // Rider-only
      {
        path: "pending-deliveries",
        element: (
          <RiderRoute>
            <PendingDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "completed-deliveries",
        element: (
          <RiderRoute>
            <CompletedDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "my-earnings",
        element: (
          <RiderRoute>
            <MyEarnings />
          </RiderRoute>
        ),
      },

      // Admin-only
      {
        path: "assign-rider",
        element: (
          <AdminRoute>
            <AssignRider />
          </AdminRoute>
        ),
      },
      {
        path: "pending-riders",
        element: (
          <AdminRoute>
            <PendingRiders />
          </AdminRoute>
        ),
      },
      {
        path: "fields",
        element: (
          <AdminRoute>
            <Fields />
          </AdminRoute>
        ),
      },
      {
        path: "fieldsAllPolicies",
        element: (
          <AdminRoute>
            <AdminAllPolicies />
          </AdminRoute>
        ),
      },
      {
        path: "active-riders",
        element: (
          <AdminRoute>
            <ActiveRiders />
          </AdminRoute>
        ),
      },
      {
        path: "makeAdmin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
    ],
  },
]);
