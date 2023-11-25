import Blogs from "./Blogs";
import Categories from "./Categories";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

const Home = () => {
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
           
      <Footer />
    </>
  )
}

export default Home
