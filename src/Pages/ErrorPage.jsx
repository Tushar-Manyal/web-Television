import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(-1)
    }
   const error=useRouteError();
   if(error.status===404){
    return(
        <section className='error-section'>
            <div id="error-text">
                <figure className='figure-img'>
                    <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 not found" />
                </figure>
                <div className='text-center'>
                    <p className='p-a'>
                    The page you were looking for could not be found
                    </p>
                    <p className='p-b'>
                    .....Back to previous page
                    </p>

                </div>
                <NavLink className="navlinkbar flex" to='/'>
                <button className='button-404'>Go back to home page</button>
                </NavLink>
                <button className="previous" onClick={handleNavigate}>Previous page</button>
            </div>
        </section>
    )
   }
   console.log(error);
  return (
    <div>
        <h1>404 not found</h1>
    </div>
  )
}

export default ErrorPage