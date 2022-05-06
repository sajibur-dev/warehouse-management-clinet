import { faArrowRight, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blog = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl text-center text-slate-800 my-3">My Blogs</h1>
      {/* question 1  */}
      <div className="md:w-1/2 w-full m-auto p-3 space-y-5 rounded-xl shadow-lg mb-5">
        <h2 className="text-2xl">
          <FontAwesomeIcon icon={faQuestion} /> Difference between javascript
          and nodejs ?{" "}
        </h2>
        <div className="space-y-5">
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Javascript is programming language that is used for writing scripts
            on the websites.Node js is a javascript runtime environment that
            allows to run javascript outside browser ..
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            it is basically used on clint side.It is mostly used on server-side
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            It is the upgraded version of ECMA script that uses Chrome’s V8
            engine written in C++.Nodejs is written in C, C++ and Javascript.
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Javascript is capable enough to add HTML and play with the DOM.
            Nodejs does not have capability to add HTML tags.
          </p>
        </div>
      </div>
      {/* question 2  */}
      <div className="md:w-1/2 w-full  m-auto p-3 space-y-5 rounded-xl shadow-lg mb-5">
        <h2 className="text-2xl">
          <FontAwesomeIcon icon={faQuestion} /> When should you use nodejs ?{" "}
        </h2>
        <div className="space-y-5">
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Node.js is a great choice for constructing an API application with
            both relational and non-relational databases. ..
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Due to the event-driven and asynchronous nature, Node.js is good at
            building real-time applications like messaging, notifications
            delivery, live streaming and collaboration tools.
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Node can also be used to build microservices — an architectural
            approach based on building an application as a collection of small
            services. Each microservice has its own data model and manages its
            own data.
          </p>
        </div>
      </div>
      {/* question 3  */}
      <div className="md:w-1/2 w-full  m-auto p-3 space-y-5 rounded-xl shadow-lg mb-5">
        <h2 className="text-2xl">
          <FontAwesomeIcon icon={faQuestion} /> When should you use MongoDB ?{" "}
        </h2>
        <div className="space-y-5">
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            When you need availibility of data with automatic , fast and instant data recovary
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            if you have unstable schema and you want to reduce schema migration cost 
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
                If most of your services are cloud-based then MongoDB suitable for you
          </p>
        </div>
      </div>
      {/* question 4 */}
      <div className="md:w-1/2 w-full m-auto p-3 space-y-5 rounded-xl shadow-lg mb-5">
        <h2 className="text-2xl">
          <FontAwesomeIcon icon={faQuestion} /> Differences between sql and nosql databases. ?{" "}
        </h2>
        <div className="space-y-5">
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            sql databases have fixed or static or predefined schema.NoSql have dynamic schema
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Sql databases are not suited for hierarchical data storage.NoSql databases are  suited for hierarchical data storage.
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            Sql Vertically Scalable.NoSQl Horizontally scalable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
