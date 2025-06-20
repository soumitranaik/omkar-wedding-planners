export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8 text-center">
      <h1 className="text-5xl font-bold mb-6 animate-pulse">Coming Soon</h1>
      <p className="text-xl mb-8 max-w-md">
        We're working hard to launch our amazing new site. Stay tuned!
      </p>
      
      

      <div className="flex space-x-6">
        <a href="#" className="text-2xl hover:text-blue-400">Twitter</a>
        <a href="#" className="text-2xl hover:text-pink-500">Instagram</a>
        <a href="#" className="text-2xl hover:text-blue-600">Facebook</a>
      </div>
    </div>
  );
}