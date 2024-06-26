import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Collections } from './Collections/Collections';
import { Male } from './Male/Male';
import { Female } from './Female/Female';
import { BuyPage } from './Buy/BuyPage';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Collections />} />
                <Route path='/male' element={<Male />} />
                <Route path='/female' element={<Female />} />
                <Route path="/product/:id" element={<BuyPage />} />
            </Routes>
        </Router>
    );
}