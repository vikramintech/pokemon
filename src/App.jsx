import PokemonList from "./components/PokemonList";
import { random } from "./lib/random";

const App = () => {
  return (
    <div>
      <PokemonList nums={random()} />
    </div>
  );
};
export default App;