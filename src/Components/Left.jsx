import Data from "../Utils/Data"
var Base_URL = import.meta.env.BASE_URL;

function Left(){
    return (

        <div id = "Left" className = "grow-0 lg:basis-1/4">
            <div className = "lg:fixed left-0 top-0 lg:h-screen lg:w-1/4 flex flex-col gap-y-7 mx-4 scroll p-0 lg:p-5 mt-2 lg:mt-6">
                <div className='flex items-center justify-between'>
                    <div className='flex justify-start items-center gap-3 mt-2 lg:mt-6 '>

                        <img alt = "profile" loading="lazy" className='border-2 rounded-full bg-gray-500 w-[3.5em] sm:w-[4em]' src={Base_URL + "/Images/Portrait.jpeg"} width={81} height={81} />
                        <div className="flex flex-col">
                            <h1 className='text-lg font-bold text-white'>Stephen Whyte</h1>
                            <a>Analyst | Developer</a>
                        </div>
                    
                    </div>
                </div>
                
                <a>{Data.About}</a>

                <div>
                    <h1 className="text-lg font-bold text-white pb-3">Traits</h1>
                    <div className="flex flex-wrap gap-2">
                        {
                            Object.entries(Data.Traits).map(([key, value]) => (
                                <li 
                                    key={key}
                                    className='inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs' >
                                    {value}
                                </li>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h1 className="text-lg font-bold text-white pb-3">Socials</h1>
                    <div className='flex gap-5 items-center justify-center lg:items-start lg:justify-start '>
                        <a className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center" target="_blank" rel="noopener noreferrer" href={Data.Github}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-9 h-9 p-1 "><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
                        <a className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center" target="_blank" rel="noopener noreferrer" href={Data.LinkedIn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-9 h-9 p-1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center" target="_blank" rel="noopener noreferrer" href={"mailto:draconicwhyte@gmail.com"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail w-9 h-9 p-1.5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></a>
                    </div>
                </div>

                <a className="">
                    © Developed by Saheim Whyte
                </a>
          
            </div>
        </div>

    )
};


export default Left