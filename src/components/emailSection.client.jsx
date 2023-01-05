import { fetchSync } from "@shopify/hydrogen/client";
import { useState } from "react";

export default function EmailSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchSync('/newsletter', {
      method: 'POST',
      body: JSON.stringify({email}),
    });

    // Log the response from our API route
    console.log(await response.json());
  };

  return (
    <div className="bg-blue-300 text-center py-20 px-10 lg:p-20">
        <h1 className="text-3xl font-semibold leading-10 text-black">Get in the loop.</h1>
        <h2 className="text-2xl font-medium leading-10 text-black">Sign up for the newsletter so you are the first to hear about new releases.</h2>
        <form method="POST" action="/" onSubmit={handleSubmit}>
            <input type="email" input='email' placeholder='enter email' className="w-72 lg:w-96 h-10 text-xl bg-transparent text-center focus:border-transparent focus:ring-0 border:transparent" onChange={e => setEmail(e.target.value)}/>
        <div className="h-1 w-72 lg:w-96 bg-black mx-auto"></div>
        <button><h3 className="text-2xl p-5 bg-blue-300 shadow-2xl font-semibold w-60 rounded-xl mx-auto mt-5 cursor-pointer text-black">enter</h3></button>
        </form>
    </div>
  )
}
