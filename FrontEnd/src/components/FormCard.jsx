import React, {useState} from "react";
const FormCard = () => {

    const [inputPrompt, setInputPrompt] = useState('');

    const handleInputChange = (event) => {
        setInputPrompt(event.target.value);
    }

    const handleButtonClick = () => {
        console.log(inputPrompt);
        setInputPrompt('');
    }
    
    return (
       <div className="relative scale-95 hover:scale-100 shadow hover:shadow-md opacity-75 hover:opacity-100 shadow-purple-700
                     bg-white rounded-xl w-2/6 mb-5 mt-2 ring-purple-400">
            <label className="block text-md font-medium leading-6 text-violet-900 mx-5 my-2">Prompt</label>

            <div className="flex flex-col items-left justify-center ">
            <input value={inputPrompt} onChange={handleInputChange} className="block mt-2 mx-5 w-6/7 rounded-md px-2 py-2 ring-1 focus:ring-2 hower: ring-purple-400 focus:outline-none focus:shadow-outline shadow-lg focus:shadow-xl"/>
            </div>
            <p class="text-blue-600 text-xs italic mx-6 my-2">{inputPrompt}</p>
           <div className="flex flex-col items-left justify-center mx-5 my-10">
           <button onClick={handleButtonClick} className="absolute text-violet-600 hover:text-white rounded-xl bg-indigo-200 hover:bg-violet-600 px-5 py-2 w-1/2 ring-1 ring-violet-700 focus:ring-violet-200 ">Generate Image</button>
           </div>
            
       </div>
    )
}

export default FormCard