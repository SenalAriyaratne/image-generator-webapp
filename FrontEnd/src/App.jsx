import Header  from "./components/Header"
import InfoCard from "./components/InfoCard"
import FormCard from "./components/FormCard"
function App() {
 

  return (
    <div>
      <Header/>
      <div className="lg:flex sm:grid grid-cols-1 gap-4 bg-gradient-to-r from-indigo-200 to-violet-600 ">
        <InfoCard/>
        <FormCard/>
      </div>
      
      
    </div>
      
    
    
  )
}

export default App
