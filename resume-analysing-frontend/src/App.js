
import "./App.css";

import Navbar from "./components/Navbar";
import Addresume from "./components/Addresume";

function App() {
  return (
    <>
      
      <Navbar />
      

      <BrowserRouter>
        <Navbar />
        <Route>
          <Route index element={<resumeList />} />
          <Route path="/" element={<resumeList />}><Addresume>
          <Route path="/Addresume" element={<resumeList />} />
          <Route path="/addresume" element={<Addresume />} />
         
        </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;