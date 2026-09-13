import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-[#020817]/60 to-black/40" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">AI Knowledge Workspace</h1>

          <p className="max-w-2xl text-lg text-gray-200">
            Organize documents, ask questions, and explore your knowledge from one workspace.
          </p>

          <button
            type="button"
            className="mt-8 rounded-lg bg-indigo-800 px-6 py-3 font-medium transition hover:bg-indigo-700"
            onClick={() => navigate("/workspace")}
          >
            Enter Workspace →
          </button>
        </div>
      </section>
    </main>
  );
}

export default Landing;
