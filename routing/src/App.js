import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginBody from './LoginBody';
import UserDisplay from './UserDisplay';
import LoginHeader from './LoginHeader';
import QuestionDisplay from './QuestionDisplay';

const App = () =>{
    return (
            <div><LoginHeader/>
            <Routes>
                <Route path="/" element={<LoginBody/>}/>
                <Route path="/admin" element={<UserDisplay/>}/>
                <Route path="/user" element={<QuestionDisplay />}/>
            </Routes>
            </div>
    )
}

export default App;