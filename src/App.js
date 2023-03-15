import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<RootLayout />}>
        <Route index element ={<Homepage />}/>
        <Route path="/login" element ={<LoginPage />}/>
        <Route path="/signup" element ={<SignupPage />}/>
    </Route>
  ));
  return <RouterProvider router={router} />;
}

export default App;
