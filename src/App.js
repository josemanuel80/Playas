import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { Results } from './pages/Results.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results/:city" component={Results} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
