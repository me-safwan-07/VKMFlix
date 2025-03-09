import clsx from "clsx";
import { twMerge } from "tailwind-merge";



export const getErrorMessage = (error) => {
  let errorMessage;

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      errorMessage = errMsg;
    } else {
      errorMessage = error.message;
    }
  } else {
    errorMessage = "Unable to fetch the data. Please try again later.";
  }

  return errorMessage;
};

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "";
};

export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}