// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './component/protectedRoute';
import Home from './page/home';
import Login from './page/login';
// import ProtectedRoute from './';
function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;