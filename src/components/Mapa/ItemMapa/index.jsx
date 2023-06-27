import './ItemMapa.module.css'

const ItemMapa = ({num, info}) => {
    return ( 
        <div className="itemMapa">
            <div className="num">{num}</div>
            <div className="etapa">Etapa {num}</div>
            <div className="info">{info}</div>


        </div>
     );
}
 
export default ItemMapa;