import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddingField from './components/AddingField';
import Form from './components/Form'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddingField />}/>
      <Route path="/form" element={<Form />}/>
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
