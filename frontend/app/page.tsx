export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white dark:bg-black">
      <div className="relative flex flex-col items-center gap-8 text-center">
        {/* Subtle Background Glow */}
        <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/20" />
        
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SioMeiBabahSapi</span>
        </h1>
        
        <p className="max-w-[600px] text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
          A modern platform for managing your business intelligence and data analysis with ease.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Get Started
          </button>
          <button className="rounded-full border border-zinc-200 px-8 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}

