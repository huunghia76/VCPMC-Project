import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from './firebase';
import Login from './page/user/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    const [users, setUser] = useState([])
    const dbRef = ref(database);

    const loadUser = () => {
        get(child(dbRef, `users`)).then((data) => {
            if (data.exists()) {
                console.log(data.val(), JSON.stringify(data.val()));
                setUser(data.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            console.log('abc');
        });
    }
    useEffect(() => {
        loadUser();
    }, []);
    return (
        <>

            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>

        </>
    );
}

export default App;
