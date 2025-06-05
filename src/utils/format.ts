export const formatRupiah = (value: number): string =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);

export const unformatRupiah = (str: string): number => {
  return Number(str.replace(/[^0-9]/g, ''));
};
