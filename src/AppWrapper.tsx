import { useAppSelector } from "./redux/hooks";
import type { RootState } from "./redux/store";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useAppSelector((state: RootState) => state.theme.mode);

  return (
    <div className={theme === "dark" ? "" : "dark"}>
      <>{children}</>
    </div>
  );
}
