

function App() {
  return (
    <>
      <div className="bg-indigo-500 w-[100vw] h-[100vh] mt-[-1px] pt-[1px]">
        <div className='bg-white w-[30vw] h-[60vh] m-auto my-[18vh] rounded-2xl'>
            <div className='text-2xl text-center text-indigo-600 font-bold pt-[1vh]'>Notes App</div>
            <div className='text-center'>Add Note</div>
            <form className='flex flex-col'>
                <input
                 type="text"
                  placeholder="Title" 
                  className='mx-[2vw] mt-[7vh] border-b-2 border-gray-400 focus:border-indigo-600' />
                <textarea 
                 placeholder="Write your Note here"
                  className='mx-[2vw] mt-[7vh] border-b-2 border-gray-400 focus:border-indigo-600' />
                <button className=' bg-indigo-600 mx-[2vw] mt-[4vh] p-2 text-white'>Add</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default App;
