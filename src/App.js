//precisioncleaning/FRONTEND/Components/App


import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./FRONTEND/Components/Pages/home";
import Page404 from './FRONTEND/Components/Pages/page404';
import DwList from './FRONTEND/Components/Tables/dwList';
import PageDw from './FRONTEND/Components/Pages/pageDw';
import DwForm from './FRONTEND/Components/Forms/dwForm';
import Login from './FRONTEND/Components/Pages/login'
import UserContext from './FRONTEND/Components/Contexts/userContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: '',
    logged: false
  });

  if (!user.logged) {
    return (
      <UserContext.Provider value={[user, setUser]}>
        <Login />
      </UserContext.Provider>
    )
  }
  
  else{
      return (
        <div className="App">
          <UserContext.Provider value={[user, setUser]}>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Dw" element={<PageDw />} />
                <Route path="/DwList" element={<DwList />} />
                <Route path="/DwForm" element={<DwForm />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </div>
      );
  }
}




export default App;


//          <Route path="/caminhoDoArquivo" element={nomeDaFuncao} />