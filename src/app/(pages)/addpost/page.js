import clientPromise from "@/lib/mongodb";
import React from "react";

const addPost = () => {
  const creat = async (formData) => {
    "use server";
    const title = formData.get("title");
    const conten = formData.get("content");

    const client = await clientPromise;
    const db = client.db("nextjs");
    const res = await db.collection("posts").insertOne({ title, conten });

    console.log(res, "ressssssssss");
  };
  return (
    <>
      <form action={creat}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Title
          </label>
          <input
            // onChange={handleChange}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            name="title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            // onChange={handleChange}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="content"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            file input
          </label>
          <input
            // onChange={handleChange}
            name="image"
            class="form-control"
            type="file"
            id="formFile"
          />
        </div>
        <input
          class="form-control btn btn-info active w-25"
          type="submit"
          id=""
          value="Add Post"
        />
      </form>
    </>
  );
};
export default addPost;

// "use client";
// import React, { useState } from "react";

// const Page = () => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;

//     setFormData((formData) => ({ ...formData, [key]: value }));
//   };
//   const handdleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:3000/api/posts", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     console.log("response", res);
//   };

//   // console.log(formData, "data");
//   return (
//     <>
//       <form onSubmit={handdleSubmit}>
//         <div class="mb-3">
//           <label for="exampleFormControlInput1" class="form-label">
//             Title
//           </label>
//           <input
//             onChange={handleChange}
//             type="text"
//             class="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Title"
//             name="title"
//           />
//         </div>
//         <div class="mb-3">
//           <label for="exampleFormControlTextarea1" class="form-label">
//             Description
//           </label>
//           <textarea
//             onChange={handleChange}
//             class="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"
//             name="content"
//           ></textarea>
//         </div>
//         <div class="mb-3">
//           <label for="formFile" class="form-label">
//             file input
//           </label>
//           <input
//             onChange={handleChange}
//             name="image"
//             class="form-control"
//             type="file"
//             id="formFile"
//           />
//         </div>
//         <input
//           class="form-control btn btn-info active w-25"
//           type="submit"
//           id=""
//           value="Add Post"
//         />
//       </form>
//     </>
//   );
// };

// export default Page;
