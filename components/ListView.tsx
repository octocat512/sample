import { Image as ImageIcon, ArrowDown as ArrowDownIcon } from "react-feather";
import styled from "styled-components";

const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
`;

const ListItem = ({ data }: { data: any }) => (
  <DashGrid className="rounded-lg p-3 bg-slate-800/50 items-center">
    <div className="flex flex-row items-center gap-3">
      <div className="flex flex-row items-center">
        <ImageIcon width={36} height={36} />
        <ImageIcon width={24} height={24} />
      </div>
      <strong className="px-1 text-white">{data.assetSymbol}</strong>
      <span className="text-gray-50">{data.assetName}</span>
    </div>
    <div className="text-center text-gray-200">$183.2M</div>
    <div className="text-center text-gray-200">$158.5M</div>
    <div className="text-center text-gray-200">$11.7M</div>
    <div className="text-center text-gray-200">$1.46%</div>
    <div className="text-center text-gray-200">$3.48%</div>
  </DashGrid>
);

const ListHeader = () => (
  <DashGrid className="rounded-lg px-3 py-5 bg-slate-800/20 items-center">
    <div className="flex items-center text-gray-400">
      Market <ArrowDownIcon size={16} className="ml-2" strokeWidth={3} />
    </div>
    <div className="flex items-center justify-center text-center text-gray-400">
      Market size <ArrowDownIcon size={16} className="ml-2" strokeWidth={3} />
    </div>
    <div className="flex items-center justify-center text-center text-gray-400">
      Total Eth borrowed{" "}
      <ArrowDownIcon size={16} className="ml-2" strokeWidth={3} />
    </div>
    <div className="flex items-center justify-center text-center text-gray-400">
      ETH left to borrow{" "}
      <ArrowDownIcon size={16} className="ml-2" strokeWidth={3} />
    </div>
    <div className="flex items-center justify-center text-center text-gray-400">
      ETH deposit APY{" "}
      <ArrowDownIcon size={16} className="ml-2" strokeWidth={3} />
    </div>
    <div className="flex items-center justify-center text-center text-gray-400">
      ETH borrow APY{" "}
      <ArrowDownIcon size={16} className="ml-2" strokeWidth={3} />
    </div>
  </DashGrid>
);

const ListView = ({ list }: { list: any[] }) => {
  return (
    <div>
      <div className="grid gap-3">
        <ListHeader />
        {list.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
