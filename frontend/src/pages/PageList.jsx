import React from 'react'
import {useState,useEffect} from 'react'
import PostCard from '../components/PostCard';
import {Link} from 'react-router-dom'

const PageList = () => {

  const [posts,setPosts] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
    fetchCategories();
  },[]);

  const fetchCategories = async () =>{
    try{
        const response = await fetch('http://localhost:5000/api/categories/');
        const data = await response.json();
        setCategories(data);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
  };


  return (
    <>
       {/* //Main Content */}
       <div className="w-full flex gap-6 mt-4 px-14 py-6">
            {/* left-side */}
            <div className="w-[60%]">
                <h1 className="text-4xl font-extrabold">Latest Posts</h1>
                <div className="flex flex-col gap-4 mt-6">
                    {
                        posts.map((post) => (
                            <PostCard key={post._id} post ={post} />
                        ))
                    }
                </div>
            </div>

            {/* right-side */}
            <div className="flex flex-col gap-4 w-[40%]">
                <div className="p-6 border-gray-300 border-1 rounded-xl">
                    <h1 className="font-extrabold text-2xl ">About me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit adipisci quod in illum eos cupiditate corporis quibusdam ipsum ratione!</p>
                </div>

                <div className="p-6 border-gray-300 border-1 rounded-xl">
                    <h1 className="font-extrabold text-2xl ">Categories</h1>
                    <ul className="flex flex-col gap-2 mt-4">
                      {
                        categories.map((category) => (
                          <li key={category._id} className="cursor-pointer hover:underline mx-2">
                            <Link to={`/categories/${category._id}`}>
                              {category.name}
                            </Link>
                          </li>
                        ))
                      }

                    </ul>
                </div>
            </div>
       </div>
    </>
  )
}

export default PageList