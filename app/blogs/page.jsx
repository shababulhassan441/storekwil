import { fetchData } from "@/appwrite/data";
import React from "react";
import Link from "next/link";
const BlogPage = async () => {
  const data = await fetchData();
  const blogHead = data?.blogPageData ?? {};
  const BlogCards = data?.blogCardsData  ?? [];
  const { heading, paragraph } = blogHead;
  // const { title, shortDescription, description, thumbnail } = BlogCards;


  // console.log(blogData)
  return (
    <section class="pb-0 ipad-top-space-margin md-pt-0 mb-4">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-xl-6 col-lg-8 text-center position-relative page-title-double-large">
            <div class="d-flex flex-column justify-content-center extra-very-small-screen">
              <h1 class="text-dark-gray alt-font ls-minus-1px fw-bold">
                {heading || ""}
              </h1>
              <h2 class="text-dark-gray d-inline-block fw-normal ls-normal w-80 w-xs-100 mx-auto">
                {paragraph || ""}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 ps-11 pe-11 xl-ps-2 xl-pe-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11">
              <ul className="blog-grid blog-wrapper grid-loading grid  grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                <li className="grid-sizer" />
                {/* start blog item */}
                {BlogCards && BlogCards.map((blog) => (
                  <li key={blog.$id} className="grid-item">
                    <div className="card shadow-sm border-0 rounded-3">
                      <img
                        src={blog.thumbnail || "placeholder-image.webp"}
                        alt="image"
                        className="card-img-top rounded-top"
                      />
                      <div className="card-body">
                        <div className="d-flex gap-2 align-items-center fs-6 text-black-50">
                          <span className="fs-5 text-black">
                            {" "}
                            {blog.authorName}
                          </span>
                          <span>-</span>
                          <span className="">
                            {new Date(blog.$createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <p className="card-text fs-4 fw-semibold mt-2 text-black">
                          {blog.title}
                        </p>
                        <a href={`blogs/${blog.$id}`} className="">
                          Read More ...
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

// {/* <li key={blog.id} className="grid-item">
//                     {/* <a href={blog.blogLink} className="d-block"> */}
//                     <div className="card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover">
//                       <div className="blog-image">
//                         <img src={blog.thumbnail} alt="" />
//                         <div className="blog-categories">
//                           <a
//                             href=""
//                             className="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase alt-font fw-700"
//                           >
//                             {blog.category}
//                           </a>
//                         </div>
//                       </div>
//                       <div className="card-body p-12">
//                         <span className="card-title mb-15px fw-600 fs-17 lh-26 text-dark-gray text-dark-gray-hover d-inline-block">
//                           {blog.title}
//                         </span>
//                         <p>{blog.shortDescription}</p>
//                         <div className="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
//                           <div class="me-auto">
//                             <span class="blog-date fw-500 d-inline-block">
//                             {new Date(blog.$createdAt).toLocaleDateString()}
//                             </span>
//                             <div class="d-inline-block author-name">
//                               By{" "}
//                               <a
//                                 href="blog-classic.html"
//                                 class="text-dark-gray text-dark-gray-hover text-decoration-line-bottom fw-600"
//                               >
//                                 {blog.authorName}
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* </a> */}
//                   </li> */}
