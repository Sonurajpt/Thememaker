// Sample dynamic data (replace with API in future)
let data = [];
for(let i=1;i<=50;i++){
data.push({
title:'Image '+i,
img:'https://picsum.photos/300/300?random='+i
});
}

let gallery = document.getElementById('gallery');

// Function to render items
function loadItems(items){
gallery.innerHTML = '';
items.forEach(item => {
let div = document.createElement('div');
div.className = 'item';
div.innerHTML = "<img src="${item.img}" alt="${item.title}"><h3>${item.title}</h3>";
gallery.appendChild(div);
});
}

// Initial load
loadItems(data);

// Search filter
document.getElementById('search').addEventListener('input', function(){
let filtered = data.filter(d => d.title.toLowerCase().includes(this.value.toLowerCase()));
loadItems(filtered);
});
