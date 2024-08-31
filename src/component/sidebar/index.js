"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Index = () => {
  const path = usePathname();
  return (
    <div
      className="d-flex flex-column vh-100 p-3 bg-light"
      style={{ width: "250px" }}
    >
      <h2>Sidebar</h2>
      <ul className="nav nav-pills flex-column mb-auto">
        {/* <li className="nav-item">
          <Link
            href="/"
            className={path == "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path == "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={path === "/contact" ? "nav-link active" : "nav-link"}
            href="/contact"
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={path === "/posts" ? "nav-link active" : "nav-link"}
            href="/posts"
          >
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={path === "/login" ? "nav-link active" : "nav-link"}
            href="/login"
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={path === "/blog" ? "nav-link active" : "nav-link"}
            href="/blog"
          >
            blog
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Index;
