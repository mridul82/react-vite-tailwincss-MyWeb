
import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";


function App() {


  return (
    <>
      <Navbar />
      
      <ImageSlider />
      <div className="container mx-auto px-3">
        
        
        <div className=" my-8">
        <Categories />
        </div>
        <div className=" my-8">
        <Blogs />
        </div>
    
      </div>
           
      
    </>  
      
    
  )
}

export default App
