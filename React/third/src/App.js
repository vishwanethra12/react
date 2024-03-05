
import Child from "./Child";
function App() {
  let name=["vishwa","Nethra","Hey"]
  let age=[20,30,35]
  return (
  <div>
    {name.map((n,index) =>
    (<Child na={n} age={age[index]} key={index}/>))} 
    </div>)}
export default App;
