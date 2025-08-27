// components/SearchBar.tsx
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';


const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      tabIndex={0} // allows div to be focusable
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`rounded flex items-center px-1.5 transition-colors ${
        isFocused ? 'border border-white' : 'border border-zinc-500'
      }`}
    >
      <Search size={18} className="text-zinc-400" />
      <Input
        type="text"
        placeholder="Search"
        className="w-80 px-3 py-6 text-white rounded bg-black border-0 focus-visible:ring-0 focus-visible:outline-none"
      />
    </div>
  );
};

export default SearchBar;