import { useState } from "react";
import styles from "./search.module.scss";
// import { Loader } from "../loader/loader";

export const Search = () => {
  const [value, setValue] = useState("");

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.serach}>
      <input
        className={styles.serachInput}
        type="text"
        placeholder="Search location"
        onChange={onChangeInput}
        value={value}
      />
      {/* <div className={styles.serachLoader}>
        <Loader />
      </div> */}
    </div>
  );
};
