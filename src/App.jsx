import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<ItemDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
