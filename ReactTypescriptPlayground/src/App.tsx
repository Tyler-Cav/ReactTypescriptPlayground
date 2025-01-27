import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Test from './Pages/Test.tsx'
import Home from './Pages/Home.tsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/test" element={<Test />} />
                <Route path='/' element= {<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
