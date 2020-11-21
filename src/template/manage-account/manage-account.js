import React from 'react';
import axios from 'axios';
import Switch from "react-switch";
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

import config from '../../config'
import 'react-toastify/dist/ReactToastify.css'; 
import '../../scss/manage-account.scss';

toast.configure()

class ManageAccount extends React.Component {

    state = {
        userInfo: []
    }


    userPermissions(info) {
        axios.post(config.serverUrl + "/api/admin/user-role", info)
        .then(res => {
            console.log(res.data.success);
            toast.success('This account is ' + res.data.success + ' sucessfully.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    componentDidMount() {
        axios.get(config.serverUrl + "/api/admin/user-detail")
        .then(res => {
            console.log(res.data.data);
            const userInfo = res.data.data;
            this.setState({ userInfo });
        })
    }

    render() {
        return <section className="manage-account">
            <table className="transactional-dashboard-table">
                <thead>
                    <tr>
                        <th className="borderTopLeftRadius">Name</th>
                        <th>Email</th>
                        <th className="borderTopRightRadius"></th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.userInfo.map(userInfo => 
                        <tr key={ userInfo._id }>
                            <td>{ userInfo.name} </td>
                            <td>{ userInfo.email }</td>
                            <td><Switch onChange={() => this.userPermissions(userInfo)} checked={userInfo.active} className="react-switch" /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    }
}

export default ManageAccount