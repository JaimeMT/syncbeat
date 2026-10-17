export default function ContentArea() {
  return 
    <div>
      <h1 class="text-2xl font-bold mb-4">Albums / Songs</h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="bg-gray-700 p-4 text-white rounded">
          <h2>Album Title</h2>
          <p>Artist Name</p>
        </div>
        <!-- Repeat for other albums/songs -->
      </div>
    </div>
  ;
}
