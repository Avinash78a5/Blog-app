import React from 'react'
import {useState,useEffect} from 'react'
import PostCard from '../components/PostCard';
import {useParams} from 'react-router-dom'

const CategoryPosts = () => {

    const {id} = useParams();

    const [category,setCategory] = useState(null);
    const [posts,setPosts] = useState([]);

    const fetchCategory = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/categories/${id}`);
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    }

    const fetchPosts = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/categories/category/${id}`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchCategory();
        fetchPosts();
    },[]);

    if (!category) return <div>Loading...</div>;

  return (
    <>
       {/* //Main Content */}
       <div className="w-full flex gap-6 mt-4 px-14 py-6">
            {/* left-side */}
            <div className="w-[60%]">
                <h1 className="text-4xl font-extrabold">{category.name}</h1>
                <div className="flex flex-col gap-4 mt-6">
                    {
                        posts.map((post) => (
                            <PostCard key={post._id} post ={post} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryPosts