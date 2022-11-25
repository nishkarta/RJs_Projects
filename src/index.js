import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './App'
import store from './app/store';


// ReactDOM.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);