import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResultPage from './page/ResultPage';
import InfoPage1 from'./page/InfoPage1';
import InfoPage2 from './page/InfoPage2';
import EatPage from './page/EatPage';
import LifePage from './page/LifePage';
import SafePage from './page/SafePage';
import InternetPage from './page/InternetPage';
import DrunkPage from './page/DrunkPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Style = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
