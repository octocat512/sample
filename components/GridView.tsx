import { Image as ImageIcon } from "react-feather";
import styled from "styled-components";

const GridItem = ({ data }: { data: any }) => {
  return (
    <div className="rounded-lg p-4 bg-slate-800/50 flex flex-col gap-4 max-w-xs w-full">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center">
          <ImageIcon width={36} height={36} />
          <ImageIcon width={24} height={24} />
        </div>
        <strong className="px-1 text-white">{data.assetSymbol}</strong>
        <span className="text-gray-50">{data.assetName}</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <div className="text-center text-gray-400 text-sm">Market size</div>
          <div className="text-center text-white">$183.2M</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-center text-gray-400 text-sm">
            Total ETH borrowed
          </div>
          <div className="text-center text-white">$158.5M</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-center text-gray-400 text-sm">
            ETH left to borrow
          </div>
          <div className="text-center text-white">$11.7M</div>
        </div>
      </div>

      <div className="w-full border-b-2 border-gray-400" />

      <div className="flex flex-row">
        <div className="flex-1 flex flex-col items-start gap-1">
          <div className="text-center text-gray-400 text-sm">Deposit APY</div>
          <div className="text-center text-white">1.46%</div>
        </div>

        <div className="flex-1 flex flex-col items-start gap-1">
          <div className="text-center text-gray-400 text-sm">Borrow APY</div>
          <div className="text-center text-white">3.48%</div>
        </div>
      </div>
    </div>
  );
};

const StyledGridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
  gap: 2rem;
`;

const GridView = ({ list }: { list: any[] }) => {
  return (
    <StyledGridView>
      {list.map((item) => (
        <GridItem key={item.id} data={item} />
      ))}
    </StyledGridView>
  );
};

export default GridView;
