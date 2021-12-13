export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPrac4 = () => calcTotalFee(100);
  return (
    <div>
      <p>引数の型指定</p>
      <button onClick={onClickPrac4}>Action</button>
    </div>
  );
};
