import { Routes, Route } from 'react-router-dom';
import RegistrationForm from '../routes/RegistrationForm';
import Profile from '../routes/Profile';
import Layout from './Layout';
// ...

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationForm />} />
          <Route path="profile" element={<Profile />} />
          {/* ...*/}
        </Route>
      </Routes>
    </>
  );
};

export default App;