import React from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

import '../App.css'

const NavBar = (props) => {

    const onUnanswered = () => {
        props.onUnanswered()
    }

    const onAnswered = () => {
        props.onAnswered()
    }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/home" className={props.url === 'answered' ? 'selected' : 'notSelected'} onClick={() => onAnswered()}
                    >
                        Answered
                            </NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={props.url === 'unanswered' ? 'selected' : 'notSelected'} onClick={() => onUnanswered()}>
                        Unanswered
                            </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" className={props.url === '/leaderboard' ? 'selected' : 'notSelected'}>
                        Leaderboard
                            </NavLink>
                </li>
                <li>
                    <NavLink to="/add" className={props.url === '/add' ? 'selected' : 'notSelected'}>
                        Add Poll
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/adduser" className={props.url === '/adduser' ? 'selected' : 'notSelected'}>
                        Add User
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="notSelected" onClick={() => props.onLogOut()}>
                        {props.user} - LogOut
                        </NavLink>
                </li>
            </ul>
        </nav>
    )
}


const mapStateToProps = (state,props) => {
    const referral = (props.location.pathname === '/home' || props.location.pathname.indexOf('/questions/') !== -1) ? (props.displayUnAnsweredPolls === true ? 'unanswered' : 'answered') : props.location.pathname

    return { 
        user: state.users[state.authedUser].name,
        url: referral
    }
}
export default withRouter(connect(mapStateToProps)(NavBar));