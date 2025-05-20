import React from "react";
import { Button } from "../Button/Button";
import styles from "./emptyCourseList.module.css";

export const EmptyCourseList = () => {
  return (
    <div className={styles.emptyContainer}>
      <h2>Your List Is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      <Button buttonText="Add New Course" />
    </div>
  );
};
