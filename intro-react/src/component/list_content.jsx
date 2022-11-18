export default function List_content(){
    return(
        <ul className="Todo-list-container break-words text-justify">
            <li className="flex flex-row">
                <input className="Todo-tickbox mx-1 my-1 " type="checkbox"></input>
                <p className="text-white bg-transparent" type="text">Hello</p> 
            </li>
            <li className="flex flex-row">
                <input className="Todo-tickbox mx-1 my-1 " type="checkbox"></input>
                <p className="text-white bg-transparent" type="text">Hello</p> 
            </li>
            <li className="flex flex-row">
                <input className="Todo-tickbox mx-1 my-1 " type="checkbox"></input>
                <p className="text-white bg-transparent" type="text">Hello</p> 
            </li>
        </ul>
    );
}
