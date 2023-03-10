import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Kocca from './routes/Kocca';
import Megabox from './routes/Megabox';
import Soomgo from './routes/Soomgo';
import Todolist from './routes/Todolist';
import Trello from './routes/Trello';
import Cointracker from './routes/Cointracker';
import Netflix from './routes/Netflix';
import Home from './components/Home';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/kocca' element={<Kocca/>}/>
                    <Route path='/megabox' element={<Megabox/>}/>
                    <Route path='/soomgo' element={<Soomgo/>}/>
                    <Route path='/todolist' element={<Todolist/>}/>
                    <Route path='/trello' element={<Trello/>}/>
                    <Route path='/cointracker' element={<Cointracker/>}/>
                    <Route path='/netflix' element={<Netflix/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;  