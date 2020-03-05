import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {

    render () {
       
        return (
            <div className="container text-primary" style={{border:"5px solid green"}}>
                <h1 className="btn-success" >Employee Dashboard</h1>
                <table className="table table-striped">
  <thead>
      {console.log(this.props.data) }
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">GENDER</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
    </tr>
  </thead>
  <tbody>
    {
         this.props.data.map(data => (
            <tr>
          
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.gender}</td>
          <td>{data.email}</td>
          <td>{data.phoneNo}</td>
        </tr>
          ))


    }
    
  </tbody>
</table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.user,
        is_loggedin:state.is_loggedin
    };
};



export default connect(mapStateToProps)(Dashboard);















