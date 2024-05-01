import { COINS } from '@/constants';
import { Row } from './Row';

export const Table = () => {
  return (
    <div className="overflow-hidden rounded-lg border shadow-sm">
      <table className="w-full table-fixed">
        <thead>
          <tr className="text-left">
            <th>Asset</th>
            <th>Price</th>
            <th>24hr change</th>
          </tr>
        </thead>
        <tbody>
          {COINS.map(coin => (
            <Row asset={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
