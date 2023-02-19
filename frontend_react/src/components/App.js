import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Layout from './Layout';
// ...

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          {/* ...*/}
        </Route>
      </Routes>
    </>
  );
};

export default App;