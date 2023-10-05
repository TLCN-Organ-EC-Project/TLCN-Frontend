import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom';
import icons from '../../ultils/icons' 


const { MdKeyboardArrowRight}=icons

import React from 'react'

const Breadcumb = ({title}) => {

    const routes = [
        { path: "/", breadcrumb: "Home" },
        { path: "/:title", breadcrumb: title },
    ];
    const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div className='text-xs flex items-center justify-start'>
         {breadcrumbs?.filter(el=>!el.match.route===false).map(({match,breadcrumb}, index, self)=>(
        <Link key={match.pathname} to={match.pathname} className='flex items-center gap-2 text-center gap-2'>
            <span className='flex items-center gap-2 text-center hover:text-main uppercase hover:text-blue-500 transition cursor-pointer '>
            {breadcrumb}    
            </span>
            {index !==self.length-1 && <MdKeyboardArrowRight size={18}/>}
        </Link>
    ))}
</div>
  )
}

export default Breadcumb