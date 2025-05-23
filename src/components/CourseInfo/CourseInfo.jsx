// This component shows information about the current chosen course.

// Module 1.
// * Use template to show course's information:
// ** ID of course;
// ** Title;
// ** Description;
// ** Duration;
// ** List of authors;
// ** Creation date;
// * use <Button /> component to replace CourseInfo component with Courses component
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-1/home-task/components#course-info

// Module 2.
// * render component by route '/courses/:courseId'
// * use 'useParam' hook to get course id, remove prop 'showCourseId'
// * remove 'onBack' prop
// * use '<Link />' instead <Button /> component for 'BACK' button
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-2/home-task/components#course-info

// Module 3.
// * remove props 'coursesList', 'authorsList'
// * use selectors from store/selectors.js to get coursesList, authorsList from store

import React from "react";
import { Button } from "../../common";
import { formatCreationDate, getCourseDuration } from "../../helpers";

import styles from "./styles.module.css";

// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for chosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.
export const CourseInfo = ({
  coursesList,
  authorsList,
  onBack,
  showCourseId,
}) => {
  const course = coursesList.find((course) => course.id === showCourseId);

  if (!course) {
    return <p>Course not found.</p>;
  }

  const { id, description, title, duration, creationDate, authors } = course;
  // удалил id и description eslint ругался на возможные ошибки
  //  47:11  warning  'id' is assigned a value but never used           no-unused-vars
  //   47:22  warning  'description' is assigned a value but never used  no-unused-vars

  const courseAuthors = authors
    .map((authorId) => authorsList.find((author) => author.id === authorId))
    .filter(Boolean);

  return (
    <div className={styles.container} data-testid="courseInfo">
      <h1>{title}</h1>
      <div className={styles.courseInfo}>
        <p className={styles.description}>{description}</p>
        <div>
          <p>
            <b>ID: </b>
            {id}
          </p>
          <p>
            <b>Duration: </b>
            {getCourseDuration(duration)}
          </p>
          <p>
            <b>Created: </b>
            {formatCreationDate(creationDate)}
          </p>
          <div>
            <b>Authors</b>
            <ul className={styles.authorsList}>
              {courseAuthors.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button buttonText="Back to courses" handleClick={onBack} />
    </div>
  );
};
