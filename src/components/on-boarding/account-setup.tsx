import type { AccountSetup } from "./types";

interface Props {
  data: AccountSetup;
  update: (data: AccountSetup) => void;
  error?: boolean;
}

export default function StepAccountSetup({ data, update, error }: Props) {
  return (
    <div className="space-y-4">
      <input
        className={`w-full px-4 py-2 border rounded-lg ${
          error && !data.username ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Username"
        value={data.username}
        onChange={(e) => update({ ...data, username: e.target.value })}
      />
      <input
        className={`w-full px-4 py-2 border rounded-lg ${
          error && data.password.length < 6
            ? "border-red-500"
            : "border-gray-300"
        }`}
        placeholder="Password"
        type="password"
        value={data.password}
        onChange={(e) => update({ ...data, password: e.target.value })}
      />
    </div>
  );
}
