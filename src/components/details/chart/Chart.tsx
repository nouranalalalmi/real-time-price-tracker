'use client';
import { useGetAssetHistory } from '@/services/details';
import { IntervalEnum } from '@/services/types/details';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const Chart = () => {
  const [interval, setInterval] = useState(IntervalEnum.DAY_1);
  const { id } = useParams();
  const { data, isLoading } = useGetAssetHistory(id as string, interval);

  console.log(data);
  return <p>chart</p>;
};