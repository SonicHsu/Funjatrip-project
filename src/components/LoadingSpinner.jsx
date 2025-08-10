export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-start h-screen pt-20">
      <div className="w-20 h-20 border-8 border-gray-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="text-3xl font-semibold text-gray-500">Loading...</p>
    </div>
  );
}