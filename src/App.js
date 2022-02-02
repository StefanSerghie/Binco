import './App.css';
import {Helmet} from 'react-helmet';
import {Route, BrowserRouter, Routes,} from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage";
import MainMenu from "./MainMenu/MainMenu";
import About from "./About/About"


function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<FirstPage />} />
                  <Route path="/menu" element={<MainMenu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/my_profile" element={<About />} />
                  <Route path="/employees" element={<About />} />
                  <Route path="/production" element={<About />} />
                  <Route path="/stations" element={<About />} />
                  <Route path="/to_do" element={<About />} />
              </Routes>
          </BrowserRouter>
          <Helmet>
              <style>{'body { background-color: #ffc266; }'}</style>
          </Helmet>
      </div>
  );
}

export default App;
