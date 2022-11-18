import logo from './logo.svg';
import Submit_section from './component/submit';
import List_content from './component/list_content';
import './App.css';

function App() {
  return (
    <div className="Appbody min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5 lg:px-20 lg:py-20 md:px-12 md:py-12">
      <div className="TodoContainer w-full mx-auto rounded-lg border bg-gray-700 border-gray-600 p-6 lg:py-12 lg:px-14 text-gray-300 max-w-800px">
        <div className="Todo-header mb-8 text-2xl font-bold">
          <h1 className=''>To do list</h1>
        </div>
        <div className="Todo-content mb-10">
          <Submit_section />
          <List_content />
        </div>
      </div>
    </div>
  );
}

export default App;
