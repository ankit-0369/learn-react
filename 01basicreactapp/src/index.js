import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kavita from './lines';
// import reportWebVitals from './reportWebVitals';

function Myapp(){
  return (
    <div>HI this is MyApp div
      <div>We can render functions directly my defining here also </div>
    </div>
  )
}


const elem= React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  `
    An examle that how react actually understand the jsx 
  `

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Myapp/> */}
    {/* Myapp() will not work */}
    <Kavita/>
    {elem}
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
