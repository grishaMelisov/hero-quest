import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AccountPage from './pages/AccountPage';
import StubPage from './pages/StubPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to='/account' replace />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='*' element={<StubPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
