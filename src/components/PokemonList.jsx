import PokemonShow from "./PokemonShow";
const PokemonList = ({ nums }) => {
  const renderList = nums.map((num, id) => (
    <PokemonShow key={id} id={num} num={id} />
  ));

  return <div>{renderList}</div>;
};

export default PokemonList;