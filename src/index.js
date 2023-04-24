import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <MoralisProvider */}
          {/* serverUrl={process.env.REACT_APP_SERVER_URL ?? ''} */}
          {/* appId={process.env.REACT_APP_APPLICATION_ID ?? ''} */}
        {/* > */}
        <App />
      {/* </MoralisProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
