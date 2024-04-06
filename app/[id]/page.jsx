// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Form from "@components/Form";

// const UpdatePrompt = () => {
//   const router = useRouter();
//   const {id} = router.query;

//   const [post, setPost] = useState({ prompt: "", tag: "" });
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       if (!id) return;

//       try {
//         const response = await fetch(`https://shine-parakeet-a0xwik3fp-komal-pauls-projects.vercel.app/api/prompt/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch prompt details");
//         }

//         const data = await response.json();
//         setPost({
//           prompt: data.prompt,
//           tag: data.tag,
//         });
//       } catch (error) {
//         console.error("Error fetching prompt details:", error);
//       }
//     };

//     getPromptDetails();
//   }, [update-prompt]);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       const response = await fetch(`/api/prompt/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push("/");
//       } else {
//         throw new Error("Failed to update prompt");
//       }
//     } catch (error) {
//       console.error("Error updating prompt:", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Prompt</h1>
//       <Form
//         type="Edit"
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={updatePrompt}
//       />
//     </div>
//   );
// };

// export default UpdatePrompt;

import React from 'react'

const UpdatePrompt = () => {
  return (
    <div>UpdatePrompt</div>
  )
}

export default UpdatePrompt