import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyles from './components/GlobalStyles';
import { GlobalContextProvider } from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <GlobalContextProvider>
                <App />
            </GlobalContextProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
