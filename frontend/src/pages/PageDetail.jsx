import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const PageDetail = () => {

  const {id} = useParams();

  const [post,setPost] = useState(null);


    
  useEffect(() => {
    const fetchPost = async () => {
        try{
            const response = await fetch(`http://localhost:5000/api/posts/${id}`);
            const data = await response.json();
            console.log(data);
            setPost(data);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }
    fetchPost();
  },[])
    
   if (!post) return <div>Loading...</div>;
   const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                        });

  return (
    <>  
        <main className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* <!-- Blog Content --> */}
                <article className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-500 mb-4">
                             {formattedDate} by <a href="#" className="text-blue-500 hover:underline">{post.author}</a>
                        </p>

                        <div className="h-[300px] w-[300px] bg-gray-400 mb-4">
 
                        </div>

                    {/* <!-- Blog Content --> */}
                    <div className="space-y-4 text-gray-700">
                        <p>
                            {post.content}
                        </p>
                    </div>
                </article>

                    {/* <!-- Sidebar --> */}
                    <aside>
                        <div className="p-4 bg-gray-100 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>

                                {/* <!-- Related Post 1 --> */}
                                <div className="flex items-center gap-4 mb-4">
                                        <img 
                                            src="https://via.placeholder.com/100" 
                                            className="w-20 h-20 object-cover rounded"
                                            alt=""
                                        />
                                        <div>
                                            <h4 className="font-semibold">
                                            <a href="#" className="hover:text-blue-500">
                                                Related Post Title 1
                                            </a>
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                            Short description or excerpt of the related post.
                                            </p>
                                        </div>
                                </div>

                            {/* <!-- Related Post 2 --> */}
                             <div className="flex items-center gap-4">
                                <img 
                                    src="https://via.placeholder.com/100" 
                                    className="w-20 h-20 object-cover rounded"
                                    alt=""
                                />
                                <div>
                                    <h4 className="font-semibold">
                                    <a href="#" className="hover:text-blue-500">
                                        Related Post Title 2
                                    </a>
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                    Short description or excerpt of the related post.
                                    </p>
                                </div>
                            </div>

                        </div>
                     </aside>

            </div>
        </main>
    </>
  )
}

export default PageDetail;