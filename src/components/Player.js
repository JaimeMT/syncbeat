export default function Player() {
  return 
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img src="/assets/logo.png" alt="Album Cover" class="w-16 h-16" />
        <div>
          <h2>Track Title</h2>
          <p>Artist Name</p>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">Previous</button>
        <button class="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">Play</button>
        <button class="bg-gray-800 text-white p-2 rounded hover:bg-gray-700">Next</button>
      </div>
      <div class="flex items-center space-x-4">
        <input type="range" min="0" max="100" class="w-32" />
        <input type="range" min="0" max="100" class="w-32" />
      </div>
    </div>
  ;
}
