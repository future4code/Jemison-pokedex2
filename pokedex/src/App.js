
import Router from './Routes/Router.js';
import GlobalState from './Context/GlobalState.js';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
