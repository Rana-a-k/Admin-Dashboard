import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import UsersList from './pages/users/UsersList';
import Posts from './pages/posts/Posts';
import Error from './pages/error/Error';
import Admins from './pages/admins/Admins';
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signUp/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/admins" element={<Admins />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/posts" element={<Posts />} />

          
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
