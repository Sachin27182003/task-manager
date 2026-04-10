export default function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* SVG Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <h1 className="text-xl font-bold text-white tracking-wide">
            Task Manager
          </h1>
        </div>
        <span className="text-blue-100 text-md font-medium hidden sm:block">
          A simple app to manage your daily tasks efficiently. ✌️
        </span>
      </div>
    </nav>
  );
}