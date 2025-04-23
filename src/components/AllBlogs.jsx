import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { FiArrowRight } from 'react-icons/fi'
const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState(
    "https://hr.mediusware.xyz/api/website/blogs/"
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.results);
        setNextUrl(data.next);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, [apiUrl]);

  useEffect(() => {
    setLoading(true);
    fetch("https://hr.mediusware.xyz/api/website/blogs/categories/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, [apiUrl]);

  const handleNext = () => {
    if (nextUrl) {
      setLoading(true);
      fetch(nextUrl)
        .then((res) => res.json())
        .then((data) => {
          setBlogs((prevBlogs) => [...prevBlogs, ...data.results]);
          setNextUrl(data.next);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching blogs:", err);
          setLoading(false);
        });
    }
  }

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="container">
      <div className="flex items-center justify-center gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]">Blogs</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:py-20 sm:py-12 py-5 px-2 sm:px-4 overflow-x-auto">
        <div>
          <button
            onClick={() => setSelectedCategory("All")}
            className={`whitespace-nowrap sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl transition-colors duration-200 ${
              selectedCategory === "All"
                ? "bg-[#0060AF] text-white"
                : "bg-white text-black"
            }`}
          >
            All{" "}
            <span className="px-[6px] py-1 rounded-lg ms-1 text-[#008F79] bg-[#EAECF0]">
              {categories.length}
            </span>
          </button>
        </div>
        {
          categories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => setSelectedCategory(category?.slug)}
                className={`whitespace-nowrap sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl transition-colors duration-200 ${
                  selectedCategory === category?.slug
                    ? "bg-[#0060AF] text-white"
                    : "bg-white text-black"
                }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 bg-[#EAECF0] px-[6px] py-1 rounded-lg text-gray-600">
                  {category?.total_blog}
                </span>
              </button>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button onClick={handleNext} className="button bg-primary-3 text-white">
          <FiArrowRight className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
