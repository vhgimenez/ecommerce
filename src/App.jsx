import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Collections } from './Collections/Collections';
import { Home } from './Home/Home';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Collections />} />
                <Route path="/product/:id" element={<Home />} />
            </Routes>
        </Router>
    );
}