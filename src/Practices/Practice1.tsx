export const Practice1 = () => {
  const calcTotalFee = (num: number): void => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPrac1 = () => calcTotalFee(100);
  return (
    <div>
      <p>引数の型指定</p>
      <button onClick={onClickPrac1}>Action</button>
    </div>
  );
};
