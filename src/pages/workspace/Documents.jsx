import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/documents")
      .then((res) => res.json())
      .then((data) => {
        setDocuments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching documents:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-gray-400 text-center mt-10 text-lg">
        Loading documents...
      </p>
    );
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-2">Documents</h2>
      <p className="text-gray-400 mb-6">
        Keep all your AI knowledge organized and accessible.
      </p>

      {documents.length === 0 ? (
        <p className="text-gray-400 text-lg">No documents uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc._id}
              className="bg-[#071426]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-md hover:shadow-lg hover:bg-[#0a1d34]/90 transition duration-300 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 mb-2">
                
                <FileText size={20} className="text-indigo-400" />
                <h3 className="text-lg font-semibold">{doc.title}</h3>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    doc.status === "uploaded"
                      ? "bg-green-600 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {doc.status}
                </span>

              </div>
              
              <p className="text-gray-400 text-sm mt-auto">
                Uploaded on: {new Date(doc.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Documents;
