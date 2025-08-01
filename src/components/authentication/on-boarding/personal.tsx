import type { PersonalInfo } from "./types";

interface Props {
  data: PersonalInfo;
  update: (data: PersonalInfo) => void;
  error?: boolean;
}

export default function StepPersonalInfo({ data, update, error }: Props) {
  return (
    <div className="space-y-4">
      <input
        className={`w-full px-4 py-2 border rounded-lg ${
          error && !data.fullName ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Full Name"
        value={data.fullName}
        onChange={(e) => update({ ...data, fullName: e.target.value })}
      />
      <input
        className={`w-full px-4 py-2 border rounded-lg ${
          error && !/\S+@\S+\.\S+/.test(data.email)
            ? "border-red-500"
            : "border-gray-300"
        }`}
        placeholder="Email Address"
        type="email"
        value={data.email}
        onChange={(e) => update({ ...data, email: e.target.value })}
      />
    </div>
  );
}
