import { Dog, Cat, Bird, Turtle } from "lucide-react";
import SideIcon from "./components/sideIcon";

const Sidebar = () => {
  return (
    <div className="fixed space-y-2 top-0 left-0 h-screen w-16 m-0 p-2 flex flex-col bg-gray-900 text-white shadow-lg">
      <i>
        <SideIcon icon={<Dog />} tooltipText="the lazy dog" />
      </i>
      <i className="sidebar-icon">
        <SideIcon icon={<Cat />} tooltipText="the lazy cat" />
      </i>
      <i className="sidebar-icon">
        <SideIcon icon={<Bird />} tooltipText="the lazy bird" />
      </i>
      <i className="sidebar-icon">
        <SideIcon icon={<Turtle/>} tooltipText="the lazy*2 tutle" />
      </i>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
