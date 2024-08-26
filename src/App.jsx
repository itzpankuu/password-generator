import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password, setpassword] = useState("");
  const [number,setnumber] = useState(true)
  const [character,setcharacter] = useState(true);
  const [passlength,setlength] = useState("")
  const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    }
  


  const passwordGenerator = useCallback(
    ()=>{
      let pass = "";
       let string = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz";
       if(number==true) string+= "0123456789";
       if(character==true) string+= "!@#$%^&*()_+";


      for (let i = 1; i <= passlength; i++) {
       let char = Math.floor(Math.random()* string.length +1);
        pass+= string.charAt(char);
      
      }

      setpassword(pass)
    
    }, [number, character, passlength]
  )

  const passwordRef = useRef(null)

  const copypassword = useCallback(
    ()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)

    },[password]
  )
  
  useEffect(
    ()=>{
      passwordGenerator()
      
    },[passlength, number, character]
  )

  return (
    <>

    <div className='max-width-[full] bg-black h-screen  grid grid-cols-2 py-10'>
      
      <div className='max-w-[500px]  h-[250px] ml-16 t-10 bg-slate-800 rounded-xl shadow-xl-white'>
        <div className='text-white text-[20px]  text-center my-2 pb-3'>Password Generator</div>
        <div className='flex gap-1 justify-center items-center'>
               <div className='w-[100%] pl-2'>
                  <input className='rounded-xl font-verdana py-2 px-2 shadow-xl outline-none focus:outline-none w-[100%]' type="text" id = "inputbox" value={password} ref={passwordRef} />
               </div>
               <div className='pr-2'>
                  <button className='rounded-xl bg-blue-600 text-white text-[20px] px-4 py-1.5 font-bold hover:bg-blue-800' 
                  onClick={copypassword}>Copy</button>
               </div>

        </div>
        <div className='flex justify-evenly py-5 mb-3 items-center'>
          <div className='text-white'><input type="range" readOnly max = {30} min={0} value={passlength} onChange={(e)=>{setlength(e.target.value)}} /> <label className='text-white'> Length: {passlength}</label></div> 
          <div className='text-white'><input type="checkbox" readOnly defaultChecked={number} name="" id="" onChange={()=>{setnumber((prev)=>!prev)}} /> Numbers</div> 
          <div className='text-white'><input type="checkbox" readOnly defaultChecked={character} name="" id="" onChange={()=>{setcharacter((prev)=>!prev)}}/> Characters</div>
          
         
        </div>
      </div>

      <div>
      <form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input
      type="email"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </label>
    <div className='relative'>
    <input
      type={showPassword ? 'text' : 'password'}
      id="password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
    />
    <button
         type="button"
         onClick={handleToggle}
         className="absolute inset-y-0 right-0 px-3 flex items-center text-blue-500 hover:text-blue-700"
    >
        {showPassword ? 'Hide' : 'Show'}
    </button>
    </div>
  </div>
 
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>

      </div>
    </div>
      
    </>
  );
};

export default App;
