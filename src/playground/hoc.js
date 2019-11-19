import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
     <div>
         {props.isAuthenticated ? (<WrappedComponent {...props}/>
         ) : (<p>Jesus is the king. Please to the world</p>
         )}
     </div>
    )
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Please to the world" />, document.getElementById('app'));