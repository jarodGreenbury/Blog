import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'hello this is my blog', author: 'Jarod', id: 1},
        {title: 'My  website', body: 'my blog', author: 'bob', id: 2},
        {title: 'website', body: 'hello ', author: 'rod', id: 3}
    ]);

    return ( 
        <div className="home">
            
            <BlogList blogs = {blogs} title = "All blogs"/>
        </div>
     );
}
 
export default Home;