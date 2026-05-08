import { Search } from "lucide-react";
import { Button } from "./Button";

export function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 md:p-2 bg-white rounded-2xl shadow-nav-float max-w-4xl mx-auto w-full">
      <div className="flex-1 flex items-center px-4">
        <Search className="w-5 h-5 text-outline mr-3" />
        <input
          type="text"
          placeholder="Destination or Campsite"
          className="w-full bg-transparent focus:outline-none text-text-dark placeholder:text-outline"
        />
      </div>
      
      <div className="hidden md:block w-px bg-soft-sage h-8 my-auto" />
      
      <div className="flex-1 flex items-center px-4">
        <select className="w-full bg-transparent focus:outline-none text-text-dark cursor-pointer appearance-none">
          <option value="">Trip Type</option>
          <option value="camping">Camping</option>
          <option value="guided">Guided Trip</option>
          <option value="rental">Gear Rental</option>
        </select>
      </div>

      <div className="hidden md:block w-px bg-soft-sage h-8 my-auto" />

      <div className="flex-1 flex items-center px-4">
        <input
          type="date"
          className="w-full bg-transparent focus:outline-none text-text-dark cursor-pointer"
        />
      </div>

      <Button className="w-full md:w-auto mt-2 md:mt-0">Search</Button>
    </div>
  );
}
