import './App.css';

import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AccountPage from './pages/AccountPage';
import StubPage from './pages/StubPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to='/account' replace />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='*' element={<StubPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
