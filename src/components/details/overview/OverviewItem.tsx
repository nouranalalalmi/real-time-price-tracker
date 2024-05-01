import { OverviewItemInterface } from './OverviewItems.interface';

export const OverviewItem = ({ label, children }: OverviewItemInterface) => (
  <div className="flex flex-col gap-y-1 break-all text-xl text-gray-700">
    <h2 className="text-sm font-bold">{label}</h2>
    {children}
  </div>
);
