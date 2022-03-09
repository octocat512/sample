import {
  List as ListIcon,
  Grid as GridIcon,
  Search as SearchIcon,
  Plus as PlusIcon,
} from "react-feather";

export enum ViewType {
  Grid = "Grid",
  List = "List",
}

const SearchInputBox = () => {
  return (
    <div className="flex flex-row items-center bg-slate-800/50 px-4 py-2 rounded-lg w-80">
      <SearchIcon className="pr-2 text-gray-500" size={28} strokeWidth={2} />
      <input
        className="bg-transparent outline-none text-white"
        placeholder="Search for a Silo"
      />
    </div>
  );
};

const ToolBar = ({
  type,
  onToggle,
}: {
  type: ViewType;
  onToggle: () => void;
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex-1">
        <h6 className="text-2xl font-bold">Markets</h6>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <SearchInputBox />

        {type === ViewType.Grid && (
          <button className="bg-slate-800/60 hover:bg-slate-800 text-white font-semibold p-3 rounded-lg inline-flex items-center">
            <ListIcon className="mr-2" size={20} /> Market size
          </button>
        )}

        <button className="bg-slate-800/60 hover:bg-slate-800 text-white font-semibold p-3 rounded-lg inline-flex items-center">
          <PlusIcon className="mr-1" size={16} /> Request Silo
        </button>

        <button
          className="bg-slate-700 hover:bg-slate-800 text-white font-bold p-3 rounded-lg inline-flex items-center"
          onClick={onToggle}
        >
          {type === ViewType.Grid ? (
            <ListIcon size={20} />
          ) : (
            <GridIcon size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
