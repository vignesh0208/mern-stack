import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

import config from "../../config"
import RentIcon from '../../image/rent.svg';
import InsuranceIcon from '../../image/insurance.svg';
import EducationalFeeIcon from '../../image/educational-fee.svg';
import PayrollIcon from '../../image/payroll.svg';
import '../../scss/dashboard.scss';

toast.configure()

const PaymentHistory = (props) => {
    const PaymentHistory = props.getData;
    const sendMail = (val) => {
        axios.post(config.serverUrl + "/sendmail", val)
        .then(res => {
            toast.success('Mail send successful to this mail id: ' + val.mailID , {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }
    return (
        <table className="transactional-dashboard-table">
            <thead>
                <tr>
                    <th className="borderTopLeftRadius">Payee Name</th>
                    <th>Payment ID</th>
                    <th>Due Amount</th>
                    <th>Transaction Date</th>
                    <th>Status</th>
                    <th>Payment Due Date</th>
                    <th>Total Amount</th>
                    <th className="borderTopRightRadius"></th>
                </tr>
            </thead>
            <tbody>
            { PaymentHistory.map(prop => 
                <tr key={ prop.paymentID }>
                    <td>{ prop.transactionID }</td>
                    <td>{ prop.paymentID }</td>
                    <td>{ prop.dueAmount }</td>
                    <td>{ prop.transactionDate }</td>
                    <td>{ prop.status }</td>
                    <td>{ prop.paymentDueDate }</td>
                    <td>{ prop.totalAmount }</td>
                    <td><span onClick={ () => sendMail(prop) }>Send mail</span></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

const ScheduledPayments = (props) => {
    const ScheduledPayments = props.getData;
    const sendMail = (val) => {
        axios.post(config.serverUrl + "/sendmail", val)
        .then(res => {
            toast.success('Mail send successful to this mail id: ' + val.mailID , {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }
    return (
        <table className="transactional-dashboard-table">
            <thead>
                <tr>
                    <th className="borderTopLeftRadius">Payee Name</th>
                    <th>Payment ID</th>
                    <th>Due Amount</th>
                    <th>Scheduled Date</th>
                    <th>Status</th>
                    <th>Payment Due Date</th>
                    <th>Total Amount</th>
                    <th className="borderTopRightRadius"></th>
                </tr>
            </thead>
            <tbody>
            { ScheduledPayments.map(prop => 
                <tr key={ prop.paymentID }>
                    <td>{ prop.transactionID }</td>
                    <td>{ prop.paymentID }</td>
                    <td>{ prop.dueAmount }</td>
                    <td>{ prop.transactionDate }</td>
                    <td>{ prop.status }</td>
                    <td>{ prop.paymentDueDate }</td>
                    <td>{ prop.totalAmount }</td>
                    <td><span onClick={ () => sendMail(prop) }>Send mail</span></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}


const UpcomingPayments = (props) => {
    const UpcomingPayments = props.getData;
    const sendMail = (val) => {
        axios.post(config.serverUrl + "/sendmail", val)
        .then(res => {
            toast.success('Mail send successful to this mail id: ' + val.mailID , {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }
    return (
        <table className="transactional-dashboard-table">
            <thead>
                <tr>
                    <th className="borderTopLeftRadius">Payee Name</th>
                    <th>Payment ID</th>
                    <th>Due Amount</th>
                    <th>Status</th>
                    <th>Payment Due Date</th>
                    <th>Total Amount</th>
                    <th className="borderTopRightRadius"></th>
                </tr>
            </thead>
            <tbody>
            { UpcomingPayments.map(prop => 
                <tr key={ prop.paymentID }>
                    <td>{ prop.transactionID }</td>
                    <td>{ prop.paymentID }</td>
                    <td>{ prop.dueAmount }</td>
                    <td>{ prop.status }</td>
                    <td>{ prop.paymentDueDate }</td>
                    <td>{ prop.totalAmount }</td>
                    <td><span onClick={ () => sendMail(prop) }>Send mail</span></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

const FailedPayments = (props) => {
    const FailedPayments = props.getData;
    const sendMail = (val) => {
        axios.post(config.serverUrl + "/sendmail", val)
        .then(res => {
            toast.success('Mail send successful to this mail id: ' + val.mailID , {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }
    return (
        <table className="transactional-dashboard-table">
            <thead>
                <tr>
                    <th className="borderTopLeftRadius">Payee Name</th>
                    <th>Payment ID</th>
                    <th>Due Amount</th>
                    <th>Status</th>
                    <th>Payment Due Date</th>
                    <th>Total Amount</th>
                    <th className="borderTopRightRadius"></th>
                </tr>
            </thead>
            <tbody>
            { FailedPayments.map(prop => 
                <tr key={ prop.paymentID }>
                    <td>{ prop.transactionID }</td>
                    <td>{ prop.paymentID }</td>
                    <td>{ prop.dueAmount }</td>
                    <td>Failed</td>
                    <td>{ prop.paymentDueDate }</td>
                    <td>{ prop.totalAmount }</td>
                    <td><span onClick={ () => sendMail(prop) }>Send mail</span></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'payment-history',
            activeLink: 'payment-history',
            data: [
                { 
                    transactionID: "Madelyn Press",
                    mailID: "v19ne5h2894@gmail.com",
                    paymentID: "1234434",
                    dueAmount: "₹ 5,000",
                    transactionDate: "10/05/2020",
                    status: "Pending",
                    paymentDueDate: "11/05/2020",
                    totalAmount: "₹ 50,000"
                },
                { 
                    transactionID: "Ann Carder",
                    mailID: "vbcc8702@gmail.com",
                    paymentID: "1234433",
                    dueAmount: "₹ 6,000",
                    transactionDate: "09/05/2020",
                    status: "Pending",
                    paymentDueDate: "10/05/2020",
                    totalAmount: "₹ 60,000"
                },
                { 
                    transactionID: "Justin Baptista",
                    mailID: "sample@gmail.com",
                    paymentID: "1234432",
                    dueAmount: "₹ 9,000",
                    transactionDate: "11/05/2020",
                    status: "Pending",
                    paymentDueDate: "09/05/2020",
                    totalAmount: "₹ 90,000"
                },
                { 
                    transactionID: "Carter Baptista",
                    mailID: "sample@gmail.com",
                    paymentID: "1234431",
                    dueAmount: "₹ 1,000",
                    transactionDate: "07/05/2020",
                    status: "Pending",
                    paymentDueDate: "08/05/2020",
                    totalAmount: "₹ 10,000"
                },
                { 
                    transactionID: "Jaylon Ekstrom Bothman",
                    mailID: "sample@gmail.com",
                    paymentID: "1234430",
                    dueAmount: "₹ 4,000",
                    transactionDate: "08/05/2020",
                    status: "Pending",
                    paymentDueDate: "07/05/2020",
                    totalAmount: "₹ 40,000"
                }
            ]
        };
    }
    setTab = (val) => {
        this.setState({
            currentTab: val,
            activeLink: val
        })
        sessionStorage.setItem('activeLink', val);
    }

    componentDidMount() {
        if (sessionStorage.getItem('activeLink') !== null) {
            var activeClicks = sessionStorage.getItem('activeLink');
            this.setState({
                currentTab: activeClicks,
                activeLink: activeClicks,
            });
        }
    }

    render() {
        const { activeLink, data } = this.state;
        const project = () => {
            switch(this.state.currentTab) {
                case 'payment-history': return <PaymentHistory getData={data} />
                case 'scheduled-payments' : return <ScheduledPayments getData={data} />
                case 'upcoming-payments': return <UpcomingPayments getData={data} />
                case 'failed-payments': return <FailedPayments getData={data} />
                default: return <PaymentHistory getData={data} />
            }
        }

        return <section className="dashboard">
            <div className="title d-flex justify-content-between">
                <p>Frequently Used</p>
                <a href="/main/dashboard">View all</a>
            </div>
            <div className="d-flex frequently-used top-card">
                <div className="main-card card-1">
                    <div className="card-icon">
                        <img alt="Rent" src={RentIcon} />
                    </div>
                    <div className="card-text my-auto w-100">
                        <div className="card-main-title">Rent</div>
                        <div className="card-sub-title">Pay now</div>
                    </div>
                </div>
                <div className="main-card card-2">
                    <div className="card-icon">
                        <img alt="Insurance" src={InsuranceIcon} />
                    </div>
                    <div className="card-text my-auto w-100">
                        <div className="card-main-title">Insurance</div>
                        <div className="card-sub-title">Pay now</div>
                    </div>
                </div>
                <div className="main-card card-3">
                    <div className="card-icon">
                        <img alt="Educational Fee" src={EducationalFeeIcon} />
                    </div>
                    <div className="card-text my-auto w-100">
                        <div className="card-main-title">Educational Fee</div>
                        <div className="card-sub-title">Pay now</div>
                    </div> 
                </div>
                <div className="main-card card-4">
                    <div className="card-icon">
                        <img alt="Payroll" src={PayrollIcon} />
                    </div>
                    <div className="card-text my-auto w-100">
                        <div className="card-main-title">Payroll</div>
                        <div className="card-sub-title">Pay now</div>
                    </div>
                </div>
            </div>
            <div className="title d-flex justify-content-between title-last m-t-32">
                <p>Transactional Dashboard</p>
                <a href="/main/dashboard">View all</a>
            </div>
            <div className="transactional-dashboard">
                <div className="transactional-dashboard-list d-flex justify-content-center">
                    <div className={('payment-history' === activeLink ? "active_item" : "")} onClick={ () => this.setTab('payment-history') }>Payment History</div>
                    <div className={('scheduled-payments' === activeLink ? "active_item" : "")} onClick={ () => this.setTab('scheduled-payments') }>Scheduled Payments</div>
                    <div className={('upcoming-payments' === activeLink ? "active_item" : "")} onClick={ () => this.setTab('upcoming-payments') }>Upcoming Payments</div>
                    <div className={('failed-payments' === activeLink ? "active_item" : "")} onClick={ () => this.setTab('failed-payments') }>Failed Payments</div>
                </div>
                <div className="transactional-dashboard-content">
                    { project() }
                </div>
            </div>
        </section>
    }
}

export default Dashboard