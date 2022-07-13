import React from 'react';
import './App.css';
import UsersList from "./components/User/UsersList";
import {Routes, Route} from "react-router-dom";
import UserPage from "./components/User/UserPage";
import PostPage from "./components/User/Posts/PostPage";
import AlbumPage from "./components/User/Albums/AlbumPage";

function App() {
    return (
        <div className={'wrapper'}>
            <Routes>
                <Route path={'/'} element={<UsersList/>}/>
                <Route path={'/users/:userId'} element={<UserPage/>}/>
                <Route path={'/posts/:postId'} element={<PostPage/>}/>
                <Route path={'/albums/:albumId'} element={<AlbumPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
