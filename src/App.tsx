/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import './App.css';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import PokemonThumnail from './components/PokemonThumnail';
import Header from './components/Header';

function App(): JSX.Element {

  const [allPokemons, setAllPokemons] = useState<any>([])
  const [limiteInferior, setLimiteInferior] = useState(1)
  const [limiteSuperior, setLimiteSuperior] = useState(20) 
  const [paginaActual, setPaginaActual] = useState(1)
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=649')
  const [name, setName] = useState("")

  const getAllPokemons = async () =>{
    const res = await fetch(loadMore)
    const data = await res.json()
    

    setLoadMore(data.next)
    function createPokemonObject(result:[]){
      
      result.forEach(async (pokemon:any) => {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons((allPokemons: any) => [...allPokemons,data])
      });

    }
    
    
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  },[])
  
  allPokemons.sort((a:any, b:any) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
  
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="header-container">
          <Header
            title="Pokedex"
            plcHolder="Busca un pokemon"
            funOnChange={(e) =>{
              console.log(typeof(e))
              setName(e.target.value)
            }} 
          />
        </div>


        <div className="all-container"> 
          {
          allPokemons.filter((val:any) =>{
            if(name === ""){
              if(val.id >= limiteInferior && val.id <= limiteSuperior){
                return val
              }
            }else if (val.name.includes(name)){
                return val

            }
          }).map((pokemon:any, index:number) => 
                <PokemonThumnail
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  sprite={pokemon.sprites.front_default}
                /> 
          )}
          
        </div>
        <div className="pagination-container">
          {name === "" ? 
          <Pagination 
            current={paginaActual}
            defaultCurrent={1}
            onChange={(page) =>{
              setPaginaActual(page)
              setLimiteInferior(((page-1) * 20) + 1)
              setLimiteSuperior(((page) * 20))
            }} 
            total={330}
            showSizeChanger ={false}
          /> 
          : null }
        </div>
      </div>
    </div>
  );
}

export default App;
