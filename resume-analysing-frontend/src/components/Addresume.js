import React from 'react'

const Addresume =() =>{
    const AddEmployee = () => {
        const [resume, setresume] = useState({
          id: "",
          Name: "",
          emailId: "",
          fileId,
        });
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setresume({ ...resume, [e.target.name]: value });
      };

      const saveresume = (e) => {
        e.preventDefault();
        resumeService.saveresume(resume)
          .then((response) => {
            console.log(response);
            navigaye("/resumeList");
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add Resume</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Name
          </label>
          <input
            type="text"
            name="Name"
            value={resume.Name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={resume.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            upload resume
          </label>
          <input
            type="file"
            name="file"
            value={resume.fileId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveresume}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Submit
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default Addresume
