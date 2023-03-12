import './App.css';
import PageOne from './Pages/PageOne/PageOne';
import PageThree from './Pages/PageThree/PageThree';
import PageTwo from './Pages/PageTwo/PageTwo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageOne/>} />
        <Route path="/home" element={<PageOne/>} />
        <Route path="/pageTwo" element={<PageTwo/>} />
        <Route path="/pageThree" element={<PageThree/>} />

       </Routes>
    </div>
  );
}

export default App;
