import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


import CurrentUserProvider from './CurrentUserContext';

const rootElement = document.getElementById('root');

ReactDOM.render(

  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>, 

rootElement
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <
//       <App />
  
//   </React.StrictMode>,
//   document.getElementById('root')
// );
