import React, { Component } from 'react';


class ApiCall extends Component {
    state = {
        users: []
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => { console.log(json); this.setState({ users: json }) })

    }


    render() {
        return (
            <table className='table table-striped table-bordered mt-5'>
                <thead className='bg-primary'>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user) => {
                        console.log("Entered");
                        // Return the element. Also pass key     
                        return (<tr>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                        </tr>)
                    })}


                </tbody>

            </table>
        );
    }
}

export default ApiCall;