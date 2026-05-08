import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export function SearchBar({ placeholder = "Search...", className = "" }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-surface-light border border-soft-sage rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-jungle-green/50 text-text-dark placeholder:text-outline transition-shadow"
      />
    </div>
  );
}
