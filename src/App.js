import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Garments from './components/pages/garments/Garments';
import Moods from './components/pages/moods/Moods';
import Outfits from './components/pages/outfits/Outfits';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/garments" component={Garments}></Route>
          <Route exact path="/moods" component={Moods}></Route>
          <Route exact path="/outfits" component={Outfits}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
