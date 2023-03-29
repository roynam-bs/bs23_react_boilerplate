import './App.css';
import './components/TopBar/TopBar';
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
      <div>
        <TopBar />
        <SideBar />
      </div>
  );
}

export default App;
