import {React} from 'react';
import './index.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResultPage from './page/ResultPage';
import InfoPage1 from'./page/InfoPage1';
import InfoPage2 from './page/InfoPage2';
import EatPage from './page/EatPage';
import LifePage from './page/LifePage';
import SafePage from './page/SafePage';
import InternetPage from './page/InternetPage';
import DrunkPage from './page/DrunkPage';
import "./App.css"
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

function App() {

  return (
      <BrowserRouter> 
        <Style.Wrapper>               
            <Routes>
                    <Route path="/" element={ <HomePage />}/> 
                    <Route path="/eat" element={ <EatPage />} />
                    <Route path="/life" element={<LifePage />} />
                    <Route path="/safe" element={<SafePage />} />
                    <Route path="/internet" element={<InternetPage />} />
                    <Route path='/drunk' element={<DrunkPage />} />

                    <Route path="/info1" element= { <InfoPage1 /> }/>
                    <Route path="/info2" element={<InfoPage2 />} />
                    <Route path="/result" element={ <ResultPage />} />
                  </Routes>             
        </Style.Wrapper>            

      </BrowserRouter>
      
  );
}

export default App;
