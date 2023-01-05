import { useEffect, useRef, useState } from "react";
import emailjs from 'emailjs-com';


const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE;
const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE;
const apiKey = import.meta.env.VITE_EMAILJS_API;


export default function QueryClient() {
    const [query, setQuery] = useState('')
    useEffect(() => {
        var item = window.location.href;
        if (item.includes('variable=')){
            setQuery(`I\'m interested in ${item.substring(item.indexOf('variable=') + 9)}`);
        } 
    });
    
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
      
        emailjs.sendForm(serviceKey, templateKey, e.target, apiKey)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div>
            
            <form ref={form} onSubmit={sendEmail}>
            <div className="w-full flex flex-row items-center justify-center">
            <div className="w-3/4 lg:w-1/3 items-center">
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10 mb-5">
                <label className="font-semibold ml-1">
                Your email
                <input type="text" name='user_email' placeholder="Enter email address" className="border-2 rounded-xl border-black p-3 w-full" />
                </label>
                <label className="font-semibold ml-1">
                Your name
                <input type="text" name='user_name' placeholder="Enter first and last name" className="border-2 rounded-xl border-black p-3 w-full" />
                </label>
                </div>
                <label className="font-semibold ml-1">
                Subject line
                <input type="text" name='subject' placeholder='Enter a subjet line' defaultValue={query} className="border-2 rounded-xl border-black p-3 w-full mb-5 font-normal"  />
                </label>
                <label className="font-semibold ml-1">
                Enter any additional information
                <textarea name="message" id="body" cols="" rows="10" placeholder="Can I see additional pictures and videos? Where would I pick this item up? I would pay $500 for this item, would you be willing to negociate?" className="w-full mt-1 border-black border-2 rounded-xl p-3 font-normal"></textarea>
                </label>
                <div className="flex flex-row">
                <div className="w-full"></div>
                <button type='submit' value='Send' className="py-2 px-5 rounded-full bg-blue-200 drop-shadow-2xl">
                    Submit
                </button>
                </div>
            </div>

            </div> 
            </form>
        </div>
    )
}