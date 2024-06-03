import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import Quiz from './component/Quiz/Quiz';
import ScrollToTop from './component/ScrollToTop/scrollToTop';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Mxpertz" element={<Home />}></Route>
        <Route path="/cartDetails/:_id" element={<Quiz />}></Route>
      </Routes>

    </>
  );
}

export default App;
