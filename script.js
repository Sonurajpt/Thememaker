const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search');
let data = [];

// Fetch images from backend
async function fetchImages(){
  const res = await fetch('http://localhost:5000/api/images');
  data = await res.json();
  renderItems(data);
}

function renderItems(items){
  gallery.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<img src="${item.img}" alt="${item.title}"><h3>${item.title}</h3>`;
    gallery.appendChild(div);
  });
}

// Initial load
fetchImages();

// Search filter
searchInput.addEventListener('input', function(){
  const filtered = data.filter(d => d.title.toLowerCase().includes(this.value.toLowerCase()));
  renderItems(filtered);
});
