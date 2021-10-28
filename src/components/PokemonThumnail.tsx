import React from "react";

const PokemonThumnail = (id:string = "aaa", name:string="hola", image:any = `https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/06/29/5fa91c5e49c91.jpeg`, type:string ="rock") =>{
    return(
        <div className="thumb-container">
            <div className="number">
                <small>#{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Tipo: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail