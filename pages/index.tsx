import type { NextPage } from "next";
import { useState } from "react";
import useSiloMarkets from "../hooks/useSiloMarkets";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import Overview from "../components/Overview";
import ToolBar, { ViewType } from "../components/ToolBar";

const Home: NextPage = () => {
  const { data } = useSiloMarkets();

  const [viewType, setViewType] = useState(ViewType.List);

  const toggleView = () => {
    setViewType(viewType === ViewType.List ? ViewType.Grid : ViewType.List);
  };

  return (
    <div className="grid gap-9 px-8 my-9">
      <Overview />
      <ToolBar type={viewType} onToggle={toggleView} />

      {viewType === ViewType.Grid ? (
        <GridView list={(data || []) as any[]} />
      ) : (
        <ListView list={(data || []) as any[]} />
      )}
    </div>
  );
};

export default Home;
