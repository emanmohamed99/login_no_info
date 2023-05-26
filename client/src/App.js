
import LoginForm from "./Components/LoginForm/LoginForm";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {AuthProvider, RequireAuth} from "react-auth-kit"
import Searchpage from "./Components/searchpage";
import "./i18n"
function App() {
  return (
    <>
    <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    >
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={ <LoginForm></LoginForm>  }></Route>
        <Route path="/" element={ <RequireAuth loginPath="/login"><Searchpage></Searchpage> </RequireAuth>  }></Route>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
