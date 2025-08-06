export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Test Page</h1>
      <p className="text-gray-600 mt-2">This is a simple test page to verify the setup is working.</p>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg font-medium mb-4">Basic Styling Test</h2>
        <div className="space-y-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Test Button
          </button>
          <div className="text-sm text-gray-500">
            If you can see this page with proper styling, the basic setup is working.
          </div>
        </div>
      </div>
    </div>
  );
}