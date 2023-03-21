const Item = (props) => {
    return ( 
        <li className="border rounded border-primary d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3">{props.txt} </div>
            <button className="btn btn-danger p-2" onClick={() => props.deleteFunc(props.id)}>Supprimer</button>
        </li>
     );
}
 
export default Item;