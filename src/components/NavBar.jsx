
import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

    return (
        <div class="absolute bottom-0 border-t-[1px] border-slate-600 border-black- fap left-0 flex px-7 py-3 justify-between items-center w-[100%]">
        <Link to="/home"><i class="fas fa-home fa-2x text-[#38BDF8]"></i></Link>
        <Link to="/food"><i class="fas fa-home fa-2x text-[#38BDF8]"></i></Link>
        <Link to="/add"><i class="fas fa-home fa-2x text-[#38BDF8]"></i></Link>
        <Link to="/profil"><i class="fas fa-home fa-2x text-[#38BDF8]"></i></Link>
      </div>
    )
}

export default NavBar