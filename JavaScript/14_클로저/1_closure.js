const counter = (() => {
  let count = 0;

  const increase = () => {
    return (count += 1);
  };
  const decrease = () => {
    return (count -= 1);
  };

  return { increase, decrease };
})();

const { increase, decrease } = counter;
