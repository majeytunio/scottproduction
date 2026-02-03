// Create /app/test/page.jsx
export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Tailwind CSS Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30">
            <h2 className="text-2xl font-semibold text-white mb-3">Card 1</h2>
            <p className="text-white/80">This should have padding and margin</p>
          </div>
          
          <div className="bg-yellow-100/90 backdrop-blur-lg rounded-xl p-6 border-2 border-yellow-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Card 2</h2>
            <p className="text-gray-600">This should have yellow background</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Test Button
          </button>
          <button className="ml-4 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors">
            Another Button
          </button>
        </div>
      </div>
    </div>
  )
}