import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Appbody min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5 lg:px-20 lg:py-20 md:px-12 md:py-12">
      <div className="TodoContainer w-full mx-auto rounded-lg border bg-gray-700 border-gray-600 p-6 lg:py-12 lg:px-14 text-gray-300 max-w-800px">
        <div className="Todo-header mb-8 text-2xl font-bold">
          <h1 className=''>Coucou toi</h1>
        </div>
        <div className="Todo-content mb-10">
          <div className="Todo-submit-container mb-5 flex flex-col">
            <input className=" text-white placeholder:text-white bg-gray-700 p-1 max-w-sm rounded drop-shadow-under" type="text" placeholder='Type a new todo...'></input>
            <button className="bg-button my-2 text-extrabold w- " >Add Todo</button>
          </div>
          {/* <template> */}
          <ul className="break-words text-justify">
              <li>
                <input className="Todo-tickbox mx-1 my-1 " type="checkbox"></input>
                <input className="opacity-0 text-white" type="text"></input> 
              </li>
          </ul>
          {/* </template> */}
        </div>
      </div>
    </div>
  );
}

export default App;
