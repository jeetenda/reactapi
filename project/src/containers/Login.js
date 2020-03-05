import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"", 
            password:"",
            submitted:""
}
    this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
         
        const { username, password } = this.state;
        console.log(this.props)
        document.getElementById("msg").style.display="block";

        if (username && password && username==this.props.data.login.username && password==this.props.data.login.password)
         {
             console.log("sdsds")
            this.props.login(username, password);  
            // dispatch({ type: 'login' })
        // this.props.login(username, password);
        }
        else{}
    }

    render() {
        // const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3"><h1 className="text-danger" id="msg" style={{display:"none"}}> Username AND password not matched</h1>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {!username ? 
                            <div className="text-danger">Username is required</div>:""
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {!password ?
                            <div className="text-danger">Password is required</div>:""
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {data:state}
};


function  mapDispatchToProps (dispatch)  {
    return {
      // dispatching plain actions
    //   login: (username,password) => dispatch({ type: 'login' }),
      login: (username,password) => dispatch({type: "login", Data: {}})  
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Login);


