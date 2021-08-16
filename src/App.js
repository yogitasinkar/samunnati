import './App.scss';
import Header from './pages/header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Vision from './pages/vision/Vision';
import Stories from './pages/stories/Stories';
import Journey from './pages/journey/Journey';
import OurActions from './pages/ourActions/OurActions';
import Reports from './pages/reports/Reports';

function App() {
  return (
    <div>
      <header>
        <Header />
        <Switch>
          <Route path='/' component={OurActions} exact/>
          <Route path='/vision' component={Vision} />
          <Route path='/stories' component={Stories} />
          <Route path='/journey' component={Journey} />
          <Route path='/our-actions' component={OurActions} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
