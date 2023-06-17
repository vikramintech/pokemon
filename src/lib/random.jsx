const random = () => {
    const numbers = [];
    while (numbers.length < 16) {
      const randomNumbers = Math.floor(Math.random() * 101);
      numbers.push(randomNumbers);
    }
    console.log(numbers);
    return numbers;
  };
  
  const url =
    "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/dream-world";
  export { random, url };