export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPrac2 = () => getTotalFee(100);
  return (
    <div>
      <p>返却値の型指定</p>
      <button onClick={onClickPrac2}>Action</button>
    </div>
  );
};
