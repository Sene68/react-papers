import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-400 w-full h-screen">
      <div className="border-2 border-white w-2/5 absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 px-8 py-10">
        <div className="relative bg-white px-8 py-5 rounded-md shadow-lg">
          <div className="bg-white h-12 px-1 py-1.5 mt-1.5 flex items-center justify-between">
              <span className="text-lg font-normal font-mono">Menu1</span>
              <FontAwesomeIcon icon={faArrowRight} size="2xs" className='bg-violet-500 text-white h-full w-10 rounded-md border-0 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
