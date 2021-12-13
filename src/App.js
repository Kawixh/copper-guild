import logo from './logo.svg';
import './App.css';
import { Topbar } from "./components/ui/topbar/Topbar";
import { Sidebar } from "./components/ui/sidebar/Sidebar";

function App() {
  return (
    <div className="App container mx-auto">
      <Topbar/>
      <div className="body grid grid-cols-5 gap-3">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
