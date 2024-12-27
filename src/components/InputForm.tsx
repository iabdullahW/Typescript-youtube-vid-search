import { useState } from "react";

interface InputFormProps {
  onSearch: (query: string) => void;
}

const InputForm = ({ onSearch }: InputFormProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 justify-center py-4"
    >
      <input
        type="text"
        placeholder="Search for a video..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;
