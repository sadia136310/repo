import './App.css';
import Header from './components/Header';
import Options from './components/Options';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import Orders from './components/orders';
import Downloads from './components/downloads';
import Addresses from './components/addresses';
import Details from './components/details';
import Logout from './components/logout'

function App() {
  return (
    <div className="account-app">
      <Header />
      <div className="account-options">
        <Options />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/details" element={<Details />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
