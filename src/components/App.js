/**
 * Created by n0256343 on 3/16/2017.
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

// prop type validation
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;