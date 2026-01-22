import { Brain, FileText, Hash } from "lucide-react";
import { useEffect, useState } from "react";

function Insights() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/insights")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p className="text-gray-400">Loading insights...</p>;

  return (
    <div>
      
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">AI Insights</h1>
        <p className="text-gray-300 text-sm">
          Key intelligence extracted from your documents
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        <InsightCard
          icon={<Brain className="text-indigo-400" />}
          title="AI Summary"
          content={data.summary}
        />

        <InsightCard
          icon={<FileText className="text-green-400" />}
          title="Documents Processed"
          content={`${data.docCount} documents are indexed and ready for AI querying.`}
        />

        <InsightCard
          icon={<Hash className="text-yellow-400" />}
          title="Top Keywords"
          content={data.keywords.join(", ")}
        />

      </div>
    </div>
  );
}

function InsightCard({ icon, title, content }) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-xl p-5 hover:bg-white/15 transition">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-gray-300">{content}</p>
    </div>
  );
}

export default Insights;
