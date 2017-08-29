import React from 'react';
import {connect} from 'react-redux';
import DeckList from './deck-list';
import * as actions from '../actions/actions';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.exitGame());
    }

    render() {
        return (
            <div className="dashboard">
                <DeckList />
            </div>
        )        
    } 
}

const mapStateToProps = (state, props) => {
  return state;
}
export default connect(mapStateToProps)(Dashboard);
