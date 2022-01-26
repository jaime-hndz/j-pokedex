interface Props {
    key : number
    id : number
    name :string
    type : string
    sprite : string

}

const PokemonThumnail = ({key,id,name,type,sprite}:Props) =>{
    return(
        <div className={`thumb-container ${type}`} key={key}>
        <div className="number">
            <small>#{id}</small>
        </div>
        <img src={sprite} alt={name} />
        <div className="detail-wrapper">
            <h3>{name}</h3>
            <small>Tipo: {type}</small>
        </div>
      </div>

    )
}

export default PokemonThumnail