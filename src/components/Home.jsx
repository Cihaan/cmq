import NavBar from './NavBar'
import {Link} from 'react-router-dom'

export default function Home() {
    
    return (
        <div>
            <div className='h-screen'>
                <div className='flex'>
                    <h1 className="text-[#37B9F3] font-['Ubuntu'] text-center text-3xl font-medium p-5 flex-1">Home</h1>
                </div>
                <div className='flex flex-col items-center align-middle h-100'>
                    <h2 className='text-xl text-white text-center'>Here's a gif to show how to use the application</h2>
                    <img className='flex-1' src=".gif" alt="gif" />
                    <Link className="w-full mt-auto" to="/food"><button className='text-[#37B9F3] text-3xl font-Ubuntu p-2 w-full rounded border-2 border-[#37B9F3]'>Go to list of restaurants</button></Link>
                </div>
            </div>
            <NavBar />
        </div>
    )
}