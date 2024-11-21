import React from "react";
import { fetchData } from "@/appwrite/data";

const page = async ({ params }) => {
  // Destructure the dynamic ID from params
  const { id } = params;

  // Fetch all blog data
  const data = await fetchData();
  const blogPosts = data.blogCardsData;

  // Find the specific blog post by its ID
  const blogPost = blogPosts.find((blog) => blog.$id === id);

  // Handle case when no blog post is found
  if (!blogPost) {
    return (
      <section className="container my-5 text-center">
        <h1 className="display-4 text-danger">Blog Post Not Found</h1>
      </section>
    );
  }

  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Blog Thumbnail */}
          <div className="mb-4">
            <img
              src={blogPost.thumbnail}
              alt={blogPost.title}
              className="img-fluid rounded-3"
              style={{  objectFit: "cover" }}
            />
          </div>

          {/* Blog Title */}
          <h1 className="fs-3 mb-3 text-dark">{blogPost.title}</h1>

          {/* Blog Author and Date */}
          <div className="mb-4 text-muted d-flex gap-2">
            <span className="fs-5 text-dark">{blogPost.authorName}</span>
            <span>-</span>
            <span>
              {new Date(blogPost.$createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Blog Description */}
          <p className=" text-muted">{blogPost.description}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
