import { useCallback, useState } from "react";
import styles from "./search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/weather/slice";
import { selectWeatherData } from "../../redux/weather/selectors";
import { Loader } from "../loader/loader";

export const Search = () => {
  const [value, setValue] = useState("");

  const { status } = useSelector(selectWeatherData);

  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 900),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
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
      {status === "loading" && (
        <div className={styles.serachLoader}>
          <Loader />
        </div>
      )}
    </div>
  );
};
