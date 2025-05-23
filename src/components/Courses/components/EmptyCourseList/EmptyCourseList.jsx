import React from "react";
import styles from "./emptyCourseList.module.css";
import { Button } from "../../../../common";

export const EmptyCourseList = () => {
  return (
    <div className={styles.emptyContainer}>
      <h2>Your List Is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      <Button buttonText="Add New Course" data-testid="addCourse" />
    </div>
  );
};
