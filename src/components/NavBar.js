import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../App.css'

const NavBar = (props) => {

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/home" className={props.option === 'answered' ? 'selected' : 'notSelected'} onClick={() => props.onAnswered()}
                    >
                        Answered
                            </NavLink>
                </li>
                <li>
                    <NavLink to="/home" className={props.option === 'unanswered' ? 'selected' : 'notSelected'} onClick={() => props.onUnanswered()}>
                        Unanswered
                            </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" className={props.option === 'leaderboard' ? 'selected' : 'notSelected'} onClick={() => props.onLeaderboard()}>
                        Leaderboard
                            </NavLink>
                </li>
                <li>
                    <NavLink to="/add" className={props.option === 'add' ? 'selected' : 'notSelected'} onClick={() => props.onAddPoll()}>
                        Add Poll
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/adduser" className={props.option === 'addUser' ? 'selected' : 'notSelected'} onClick={() => props.onAddUser()}>
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


const mapStateToProps = state => {
    return { 
        user: state.users[state.authedUser].name,
    }
}

export default connect(mapStateToProps)(NavBar);