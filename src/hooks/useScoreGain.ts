type UseScoreGainProps = {
  amount: number;
};

export const useScoreGain = ({ amount }: UseScoreGainProps) => {
  const scoreGain = Math.floor(amount / 10);
  if (amount < 100) {
    return 0;
  } else if (amount > 1000) {
    return 100;
  }
  return scoreGain;
};
