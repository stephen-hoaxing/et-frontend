import classNames from "classnames";

export const changeStyle = (theme, baseClassName) => {
  return classNames({
    baseClassName: true,
    "light-color": theme === "light",
    "dark-color": theme === "dark",
  });
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
