import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResultPage from './page/ResultPage';
import QNAPage from './page/QNAPage';
import InfoPage1 from'./page/InfoPage1';
import InfoPage2 from './page/InfoPage2';

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
          <Route path="/qna" element={ <QNAPage />} />
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
