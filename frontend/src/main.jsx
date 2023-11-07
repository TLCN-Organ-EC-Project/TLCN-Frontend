import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";
import { store, persistor } from './store/store.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getQueryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={getQueryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      </PersistGate>
    </Provider>
  </QueryClientProvider>
)
