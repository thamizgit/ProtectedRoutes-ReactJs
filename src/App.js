import { useState } from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Routes,Route } from 'react-router-dom';
import LinkPage from "./Components/LinkPage";

import './App.css';
import UnAuthorized from "./Components/UnAuthorized";
import Admin from "./Components/Admin";
import Editor from "./Components/Editor";
import Home from "./Components/Home";
import Lounge from "./Components/Lounge";

import RequireAuth from "./hooks/RequireAuth";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="App">
      <Routes>
        <Route
          path="/register"
          element={
            <Register isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route path="/login" element={<Login isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/" element={<LinkPage />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />


        <Route element={<RequireAuth allowedRoles={[2012]}/>} >
        <Route path="/admin" element={<Admin />} />
        </Route>
        
        <Route element={<RequireAuth allowedRoles={[3012]} />} >
        <Route path="/editor" element={<Editor />} />
        </Route>
        
        <Route element={<RequireAuth allowedRoles={[4012]} />} >
        <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[2012,3012]} />}>
        <Route path="/lounge" element={<Lounge />} />
        </Route>

      </Routes>
    </section>
  );
}

export default App;
