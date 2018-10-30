import React, {Component} from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../App.css'

class NavBar extends Component {

    onAnsweredSelected = () => {       
        this.props.onAnsweredSelected()
    }

    onUnansweredSelected = () => {        
        this.props.onUnansweredSelected()
    }

    onLeaderboardSelected = () => {        
        this.props.onLeaderboardSelected()
    }

    onAddPollSelected = () => {
        this.props.onAddPoll()
    }


    render(){
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to="/home" className={this.props.option === 'answered' ? 'selected' : 'notSelected'} onClick={() => this.props.onAnswered()}
                        >
                            Answered
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" className={this.props.option === 'unanswered' ? 'selected' : 'notSelected'} onClick={() => this.props.onUnanswered()}>
                            Unanswered
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" className={this.props.option === 'leaderboard' ? 'selected' : 'notSelected'} onClick={() => this.props.onLeaderboard()}>
                            Leaderboard
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" className={this.props.option === 'add' ? 'selected' : 'notSelected'} onClick={() => this.props.onAddPoll()}>
                            Add Poll
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="notSelected" onClick={() => this.props.onLogOut()}>
                            {this.props.user} - LogOut
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )

    }
}

const mapStateToProps = state => {
    return { 
        user: state.users[state.authedUser].name,
    }
}

export default connect(mapStateToProps)(NavBar);