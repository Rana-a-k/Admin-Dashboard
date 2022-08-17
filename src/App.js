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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;