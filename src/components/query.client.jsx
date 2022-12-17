import { useEffect, useState } from "react";

export default function QueryClient() {
    const [query, setQuery] = useState('')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');


    useEffect(() => {
        var item = window.location.href;
        if (item.includes('variable=')){
            setQuery(item.substring(item.indexOf('variable=') + 9));
        }
    });
    
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeBody = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = () => {
        console.log(email + ' ' + name + ' ' + body)
    }
    return (
        <div>
            {(query) ? 
            <div className="w-full flex flex-row items-center justify-center">
            <div className="w-3/4 lg:w-1/3 items-center">
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10 mb-3">
                <input type="text" onChange={e => changeEmail(e)} placeholder="Enter email address" className="border-2 rounded-xl border-black p-3 w-full" />
                <input type="text" onChange={e => changeName(e)} placeholder="Enter first and last name" className="border-2 rounded-xl border-black p-3 w-full" />
                </div>
                <label className="font-semibold ml-1">
                Subject line
                <input type="text" value={`I'm interested in ${query}`} readOnly={true} className="border-2 rounded-xl border-black p-3 w-full mb-3 font-normal"  />
                </label>
                <label className="font-semibold ml-1">
                Enter any additional information
                <textarea name="body" id="body" cols="" rows="10" onChange={e => changeBody(e)} placeholder="Can I see additional pictures and videos? Where would I pick this item up? I would pay $500 for this item, would you be willing to negociate?" className="w-full mt-1 border-black border-2 rounded-xl p-3 font-normal"></textarea>
                </label>
                <div className="flex flex-row">
                <div className="w-full"></div>
                <button onClick={e => handleSubmit()} className="py-2 px-5 rounded-full bg-blue-200 drop-shadow-2xl">
                    Submit
                </button>
                </div>
            </div>

            </div> 
            
            : null}
        </div>
    )
}