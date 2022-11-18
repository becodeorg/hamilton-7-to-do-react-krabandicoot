export default function Submit_section(){
    return(
        <div className="Todo-submit-container mb-5 flex flex-col">
            <input className=" text-white placeholder:text-white bg-gray-700 p-1 max-w-sm rounded drop-shadow-under" type="text" placeholder='Type a new list...'></input>
            <button className="submit-button bg-button my-2 text-extrabold w-28 rounded-full " >Add list</button>
        </div>
    );
}
