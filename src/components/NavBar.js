import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {

    return (

        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/home" onClick={(e) => props.onAnsweredSelected(e)}>
                        Answered
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/home" onClick={(e) => props.onUnansweredSelected(e)}>
                        Unanswered
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/home">
                        Leaderboard
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/" >
                        {props.user} - LogOut
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

const mapStateToProps = state => {
    return { user: 'Test' }//state.users[state.authedUser].name
}

export default connect(mapStateToProps)(NavBar)