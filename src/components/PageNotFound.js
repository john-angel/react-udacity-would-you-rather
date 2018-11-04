import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const PageNotFound = () => {

    const url = window.sessionStorage.getItem('urlRequested')
    
    if(url !== null){
        window.sessionStorage.removeItem('urlRequested')
    }
    
    return (
            <Fragment>
                <h3><span className='urlNotFound'>404</span> - Oops <span className='urlNotFound'>{url}</span> page is no longer with us :-(</h3>
                <Link className='logInRedirect' to="/">Log in ?</Link>
            </Fragment>
        )    
}

export default PageNotFound;