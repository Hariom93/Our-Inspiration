import "./App.css";
import reviews from "./data.js";
import Testimonials from "./Components/Testimonials";
function App() {
  return(
      <div className="flex flex-col w-[100vw] h-[100vh] justify-center item-center bg-gray-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Our Inspiration
      </h1>
      </div>
      <div className="bg-violet-400 h-[4px] w-1/12 mx-auto mt-1"></div>
      <Testimonials reviews={reviews}></Testimonials>
    </div>
  ) 
}
export default App;
