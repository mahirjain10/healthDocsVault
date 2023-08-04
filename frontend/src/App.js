import Header from "./component/common/Header";
import Wrapper from "./component/common/Wrapper";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpVerificationPage from "./pages/OtpVerification";
import SignUpPage from "./pages/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Trial from "./pages/Trial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path:"/auth/sign-up",
    element:<SignUpPage/>
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path:"/auth/forgot-password",
    element:<ForgotPasswordPage/>
  },
  {
    path:"/auth/otp-verification",
    element:<OtpVerificationPage/>
  },
  {
    path:"/auth/trial",
    element:<Trial/>
  }
]);

export default function App() {
  return (
    <>
      <Wrapper>
      <RouterProvider router={router}/>
      </Wrapper>
    </>
  )
}