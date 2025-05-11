import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StudentContext = createContext(null);

const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({});

  const value = { student, setStudent };
  return <StudentContext value={value}>{children}</StudentContext>;
};

export default StudentProvider;
