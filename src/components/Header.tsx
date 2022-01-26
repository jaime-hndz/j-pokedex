import { Input } from 'antd';

interface Props{
    title : string
    plcHolder: string
    funOnChange: (e:any) => void
}

const Header : React.FC<Props> = ({title, plcHolder,funOnChange}) =>{

    return(
        <div className="pokemon-container">
            <h1>{title} </h1>
            <div className="search-container">
            <Input placeholder={plcHolder} onChange={funOnChange} />
            </div>
        </div>
    )
}

export default Header;