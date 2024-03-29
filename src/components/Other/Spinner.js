import { React, useContext } from "react";
import { FadeLoader } from "react-spinners";
import { ThemeContext } from "../Theme/themeContext";

export default function Spinner() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container flex flex-col justify-center items-center py-32">
      {theme === "dark" ? (
        <FadeLoader color="#fff" loading={true} size={100} />
      ) : (
        <FadeLoader color="#176B87" loading={true} size={100} />
      )}
      <p className="text-darkTo dark:text-gray-100 text-lg">loading...</p>
    </div>
  );
}
