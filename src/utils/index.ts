const formatToCurrency = (number: number,significantDigits:number = 4): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: significantDigits,
  }).format(number);
};

const magintudeSymbol = (number: number): string => {
  const numStr = Math.round(number).toString();

  if (numStr.length > 15) return "Q";
  if (numStr.length > 12) return "T";
  if (numStr.length > 9) return "B";
  if (numStr.length > 6) return "M";
  if (numStr.length > 3) return "K";

  return "";
};

export { formatToCurrency, magintudeSymbol };
