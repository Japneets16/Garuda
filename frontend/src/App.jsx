import { Signup } from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;