import type { Preferences } from "./types";

interface Props {
  data: Preferences;
  update: (data: Preferences) => void;
  error?: boolean;
}

export default function StepPreferences({ data, update, error }: Props) {
  return (
    <div className="space-y-4">
      <select
        className={`w-full px-4 py-2 border rounded-lg ${
          error && !data.theme ? "border-red-500" : "border-gray-300"
        }`}
        value={data.theme}
        onChange={(e) =>
          update({ ...data, theme: e.target.value as "light" | "dark" })
        }
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={data.subscribe}
          onChange={(e) => update({ ...data, subscribe: e.target.checked })}
          className="accent-green-600"
        />
        <span>Subscribe to newsletter</span>
      </label>
    </div>
  );
}
