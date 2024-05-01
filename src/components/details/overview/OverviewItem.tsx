import { OverviewItemInterface } from './OverviewItems.interface';

export const OverviewItem = ({ label, children }: OverviewItemInterface) => (
  <div className="flex flex-col gap-y-1 text-xl text-gray-700">
    <h2 className="font-bold text-sm">{label}</h2>
    {children}
  </div>
);
