import React from "react";

export const CourseContext = React.createContext();

const CourseProvider = CourseContext.Provider;
const CourseConsumer = CourseContext.Consumer;

export { CourseConsumer, CourseProvider }; 