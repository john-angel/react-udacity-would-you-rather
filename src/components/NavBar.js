import React, {Component} from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../App.css'

class NavBar extends Component {

    state = {
        classAnswered: 'notSelected',
        classUnanswered: 'selected',
        classLeaderboard: 'notSelected',
        classAddPoll: 'notSelected'
    }

    resetLinkClasses = () => {
        this.setState({classAnswered: 'notSelected',classUnanswered:'notSelected',classLeaderboard:'notSelected',classAddPoll: 'notSelected'})

    }

    onAnsweredSelected = () => {
        this.resetLinkClasses()
        this.setState({classAnswered: 'selected'})
        this.props.onAnsweredSelected()
    }

    onUnansweredSelected = () => {
        this.resetLinkClasses()
        this.setState({classUnanswered: 'selected'})
        this.props.onUnansweredSelected()
    }

    onLeaderboardSelected = () => {
        this.resetLinkClasses()
        this.setState({classLeaderboard: 'selected'})
        this.props.onLeaderboardSelected()
    }

    onAddPollSelected = () => {
        this.resetLinkClasses()
        this.setState({classAddPoll: 'selected'})
    }

  

    render(){
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to="/home" className={this.state.classAnswered} onClick={() => this.onAnsweredSelected()}
                        >
                            Answered
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" className={this.props.pollAdded ? 'selected'  : this.state.classUnanswered} onClick={() => this.onUnansweredSelected()}>
                            Unanswered
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" className={this.props.pollAdded ? 'notSelected' : this.state.classLeaderboard} onClick={() => this.onLeaderboardSelected()}>
                            Leaderboard
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" className={this.props.pollAdded ? 'notSelected'  : this.state.classAddPoll} onClick={() => this.onAddPollSelected()}>
                            Add Poll
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="notSelected" onClick={() => this.props.onLogOutSelected()}>
                            {this.props.user} - LogOut
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )

    }
}

const mapStateToProps = (state,ownProps) => {
    return { 
        user: state.users[state.authedUser].name,
        pollAdded:ownProps.pollAdded
    }
}

export default connect(mapStateToProps)(NavBar);