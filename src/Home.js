import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'hello this is my blog', author: 'Jarod', id: 1},
        {title: 'My  website', body: 'my blog', author: 'bob', id: 2},
        {title: 'website', body: 'hello ', author: 'rod', id: 3}
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            
            <BlogList blogs = {blogs} title = "All blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;