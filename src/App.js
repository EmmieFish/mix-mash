import MobileLayout from './components/MobileLayout';
import DesktopLayout from './components/DesktopLayout';
import useViewport from './utils/useViewport';
import './App.css';


function App() {
    const viewWidth = useViewport();
    const breakpoint = 620;
    return (
        <div className="App">
            {viewWidth < breakpoint ? <MobileLayout /> : <DesktopLayout />}
        </div>
    );
}

export default App;
