/**
 * Created by n0256343 on 3/21/2017.
 */
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {courses.map(course =>
                <CourseListRow key={course.id} course={course}/>
            )}
            </tbody>
        </table>
    );
};

//courses.map needs specific params using 'course => {' broke it

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;