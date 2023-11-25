import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BlogCard from './BlogCard';


const Blogs = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {       
        
        const fetchBlogs = async () => {
          const URL = 'http://localhost:5000/api/generateRandomPosts';
          try {
            const response = await axios.get(URL);
            console.log(response.data.posts);
            setPosts(response.data.posts);
          } catch (error) {
            console.error('Error fetching categories:', error);    
          }  
        };
        fetchBlogs();
    },[])


  return (

    <div className=' px-4 mb-4'>
        <h2 className="text-2xl font-bold mb-4">Blogs:</h2>
 <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
        
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
    </div>
    </div>
    
   
  )
}

export default Blogs
