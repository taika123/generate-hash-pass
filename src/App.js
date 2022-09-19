import './App.css';
import Index from './components/Index';
import {Provider} from 'react-redux'
import  { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate className="App" persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
}

export default App;
