import React from 'react';
import Users from './Users';
//import * as axios from 'axios';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Preloader from '../common/preloader/Preloader.jsx';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getUsers, getPageSize, getPortionSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';


let mapStateToProps = (state) =>{
    return {
        users: getUsers(state),
        portionSize: getPortionSize(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};


class UsersContainer extends React.Component {
    componentDidMount(){
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(pageNumber, pageSize);
    }
    render(){
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            portionSize={this.props.portionSize}
            currentPage={this.props.currentPage} selectedPage={this.props.selectedPage}
            onPageChanged ={this.onPageChanged} isFetching={this.props.isFetching}
            follow={this.props.follow} unfollow={this.props.unfollow} users={this.props.users}

            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapDispatchToProps = {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
