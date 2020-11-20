import React from 'react';
import { ReactComponent as Logo } from "../../image/logo.svg"
import { ReactComponent as DashboardIcon } from '../../image/dashboard.svg';
import { ReactComponent as PaymentScheduleIcon } from '../../image/payment-schedule.svg';
import { ReactComponent as AddanPayeeIcon } from '../../image/add-an-payee.svg';
import { ReactComponent as BillingIcon } from '../../image/billing.svg';
import { ReactComponent as SupportIcon } from '../../image/support.svg';
import { ReactComponent as LogOutIcon } from '../../image/logout.svg';
import UserImage from '../../image/user.jpg';
import DotIcon from '../../image/dot.svg'
import { ReactComponent as NotificationIcon } from '../../image/notification.svg';
import { ReactComponent as DarkModeIcon } from '../../image/dark-icon.svg';
import { ReactComponent as LightModeIcon } from '../../image/light-icon.svg';

import { Route, NavLink } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import '../../scss/main.scss'
import '../../scss/dark-mode.scss'

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        var storedClicks = false;
        
        if (sessionStorage.getItem('clicks')) {
            storedClicks = parseInt(sessionStorage.getItem('clicks'));
        }
        this.state = {
            visible: storedClicks,
        }
    }

    visibleButton() {
        var clickState = !this.state.visible;
        this.setState({visible: clickState});
        sessionStorage.setItem('clicks', clickState);
    }

    userLogout() {
        localStorage.setItem("jwtToken", "");
        this.props.history.push("/");
    }

    componentDidMount() {
        var clickState = sessionStorage.getItem('clicks');
        this.setState({visible: clickState});
        if (localStorage.getItem("jwtToken") === "") {
            this.props.history.push("/");
        }
    }

    render() {
        const { visible } = this.state;
        let DarkLightIcon;
        if(visible) {
            DarkLightIcon = <LightModeIcon />
        }
        else {
            DarkLightIcon = <DarkModeIcon />
        }
        
        return (
        <section className={ visible ? "dark-mode main-content d-flex h-100" : "main-content d-flex h-100"}>
            <div className="side-nav">
                <div className="image-responsive">
                    <Logo />
                </div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" className="d-flex" to="/main/dashboard">
                            <div className="image-svg"><DashboardIcon /></div>
                            <div className="my-auto">Dashboard</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="d-flex" to="/main/payment-schedule">
                            <div className="image-svg"><PaymentScheduleIcon /></div>
                            <div className="my-auto">Payment Schedule</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="d-flex" to="/main/add-an-payee">
                            <div className="image-svg"><AddanPayeeIcon /></div>
                            <div className="my-auto">Add an Payee</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="d-flex" to="/main/billing">
                            <div className="image-svg"><BillingIcon /></div>
                            <div className="my-auto">Billing</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="d-flex" to="/main/support">
                            <div className="image-svg"><SupportIcon /></div>
                            <div className="my-auto">Support</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="display-container">
                <Route exact path="/main/dashboard" component={Dashboard} />
            </div>
            <div className="user-profile">
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="user-notification">
                        <img alt="" src={UserImage} />
                        <div className="notification">
                            <img className="dot-icon" alt="" src={DotIcon} />
                            <NotificationIcon />
                        </div>
                        <div className="logout" onClick={ () => this.userLogout() }>
                           <LogOutIcon />
                        </div>
                    </div>
                    <div className="dark-light-mode mx-auto" onClick={ () => this.visibleButton() }>
                        { DarkLightIcon }
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default MainContent