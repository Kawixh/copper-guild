import logo from './logo.svg';
import './App.css';
import { Topbar } from "./components/ui/topbar/Topbar";
import { Sidebar } from "./components/ui/sidebar/Sidebar";
import {LandingPage} from "./components/ui/landingPage/LandingPage"

function App() {
  return (
    <div className="App container mx-auto">
      <Topbar/>
      <div className="body flex flex-col">
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
