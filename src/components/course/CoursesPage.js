/**
 * Created by n0256343 on 3/16/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

// THIS IS A HIGH LEVEL CONTAINER
class CoursesPage extends React.Component {

    // constructor function - setting up initial state and binding child functions
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {title: ""}
        };
        // bind statements (bind functions so this in context of this component and not function itself)
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // child functions called by render (used within this class/container)
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }
    onClickSave() {
        console.log(this.state.course.title+" saved to state");
        this.props.actions.createCourse(this.state.course);
        console.log(this.state);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    // main render function (while in a container, should really be putting this markup in child components)
    // {this.props.courses.map(this.courseRow)} USED before CourseList component
    // FURTHER IDEA: break the input fields into separate components
    render() {
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses}/>
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

// prop types that provide prop type validation
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// 'connect' function with mapStateToProps & mapDispatchToProps
// essentially exposing what state we're changing in the store and what actions we're making available to change stuff
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // all actions in one
        actions: bindActionCreators(courseActions, dispatch)
    };
};

// connect returns a function, of which CoursesPage will be a param
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);