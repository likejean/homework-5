import React from 'react';
import './App.css';
import CounterMainWrapper from './components/MainCounterWrapper';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
    return (
          <div>
              <CounterMainWrapper name={"Counters"}/>
          </div>
    );
}

export default App;
