import React from 'react';
import ReactDOM from 'react-dom';

const Dashboard = props => {
    return (
        <div className="card">
            <div className="card-header">Dashboard</div>

            <div className="card-body">
                {props.children}

                You are logged in!
            </div>
        </div>
    );
}

export default Dashboard;


if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
