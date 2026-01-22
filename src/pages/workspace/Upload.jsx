import { UploadCloud } from "lucide-react";
import { useState } from "react";

function Upload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!title || !file) {
      setMessage("Please enter title and select file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/documents/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setMessage(`Uploaded successfully: ${data.title}`);
      setTitle("");
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-2xl">

       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">Upload Documents</h1>
          <p className="text-gray-400 text-sm mt-1">
            Add files to train your AI workspace
          </p>
        </div>

       
        <input
          type="text"
          placeholder="Document title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#071426]/80 border border-white/20 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />

       
        <div className="relative">
          
          <div className="absolute -inset-1 bg-indigo-500/20 rounded-xl blur-xl" />

          <div className="relative border-2 border-dashed border-white/20 rounded-xl p-14 text-center bg-[#071426]/80 backdrop-blur hover:bg-[#071426] transition">

            
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files[0]);
                handleUpload();
              }}
            />

            <UploadCloud size={44} className="mx-auto text-indigo-400" />

            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
              className="m-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-2xl text-sm px-3 py-2.5 text-center leading-5"
            >
              Browse
            </button>

            <h3 className="mt-5 font-medium text-lg">
              Drag & drop files here
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              or click to browse from your device
            </p>

            <p className="text-xs text-gray-500 mt-5">
              Supported formats: PDF, DOCX, TXT • Max 10MB
            </p>
          </div>
        </div>

    
        {message && (
          <p className="text-center text-sm text-indigo-400 mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Upload;
