import React,{Component} from 'react'

class PageNotFound extends Component{
    componentDidMount(){
        window.sessionStorage.removeItem('urlRequested')
    }
    render(){
        return(
            <h3>Oops that page is no longer with us :-(</h3>

        )
    }
}

export default PageNotFound;