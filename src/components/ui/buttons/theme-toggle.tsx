import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/features/theme/theme-slice";
import type { RootState } from "../../../redux/store";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm"
    >
      Switch to {theme === "light" ? "Light" : "Dark"} Mode
    </button>
  );
};
