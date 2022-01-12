import './App.css';
import { AmplifyCollection, NavBar, MarketingFooter } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBar widthh={"100vw"}/>
      <AmplifyCollection/>
      <MarketingFooter widthh={"100vw"}/>
    </div>
  );
}

export default App;
