import Header from "./component/common/Header";
import Layout from "./component/common/Layout";
import Main from "./component/common/Main";
import SideBar from "./component/common/SideBar";
import Wrapper from "./component/common/Wrapper";
import AddRecords from "./component/homeScreen/AddRecords";
import AddToRecord from "./component/homeScreen/AddToRecord";
import Profile from "./component/homeScreen/Profile";
import ShowRecord from "./component/homeScreen/ShowRecord";
import Flip from "./pages/Flip";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpVerificationPage from "./pages/OtpVerificationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignUpPage from "./pages/SignUpPage";
import {SideBarProvider}  from './component/context/SideBarContext';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path:"auth/reset-password",
    element:<ResetPasswordPage/>
  },
  {
    path:"/home",
    element:
    <>
     <Layout>
      <SideBar/>
      <Main>
        {/* <AddToRecord/> */}
        {/* <Profile/> */}
        {/* <AddRecords/> */}
        <ShowRecord/>
        </Main>
    </Layout>
    </>
  }
]);

export default function App() {
  return (
    <>
    <SideBarProvider>
      <Wrapper>
      <RouterProvider router={router}/>
      </Wrapper>
       </SideBarProvider>
    </>
  )
}


