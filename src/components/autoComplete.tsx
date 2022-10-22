import { useEffect, useState, useRef } from "react";

const AutoComplete = () => {
    const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon: any = [];
    const promises: any = new Array(20).fill(undefined).map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then(pokemonArr => {
      return pokemonArr.map(value =>
        value
          .json()
          .then(({ name, sprites: { front_default: sprite } }: any) =>
            pokemon.push({ name, sprite })
          )
      );
    });
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event: any) => {
    const { current: wrap }: any = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = (poke: any) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <div className="container">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Nombre de Pokemon"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }: any) => name.indexOf(search.toLowerCase()) > -1)
            .map((value: any, i: any) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex={0}
                >
                  <span>{value.name}</span>
                  <img src={value.sprite} alt="pokemon" />
                </div>
              );
            })}
        </div>
      )}
    </div>
    </div>
  );
}
 
export default AutoComplete;
