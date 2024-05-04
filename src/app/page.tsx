import { Table } from '@/components/home/Table';

export default function HomePage() {
  return (
    <div>
      {process.env.NODE_ENV}
      <h1 className="pb-2 text-3xl font-semibold">Real Time Price Tracker (24hr)</h1>
      <Table />
    </div>
  );
}
