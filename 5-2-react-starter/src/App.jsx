import './App.css'
import StudentCard from './components/StudentCard';
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */
                <div>
                         <h1>Student Info</h1>
                         <StudentCard name="Mohammed" id="20223456" dept="ICS" />
                         <StudentCard name="Ahemad" id="20225678" dept="ICS" />
                       </div>
            }
        </div>
      </main>
    </div>
  )
}

export default App
