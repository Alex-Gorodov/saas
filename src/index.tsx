import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.sass"
import { App } from './components/app/App';
import { HistoryRouter } from './components/history-route/history-route';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory} basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
