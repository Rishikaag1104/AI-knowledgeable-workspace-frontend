
import bg from "../assets/bg.jpg";

function Landing() {
  return (
    <div className="max-h-full">
      
      <section
        className="relative h-[calc(100vh)] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-[#020817]/60 to-black/40 "></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            AI Knowledge Workspace
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Organize documents, ask AI questions, and extract insights — all in one intelligent workspace.
          </p>

          <button
            className="mt-8 px-6 py-3 bg-indigo-800 hover:bg-indigo-700 rounded-lg font-medium transition"
            onClick={() => window.location.href = "/workspace"}
          >
            Enter Workspace →
          </button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
