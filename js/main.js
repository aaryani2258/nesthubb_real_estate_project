const properties = [
  {
    id:1,
    name:'Skyline Crest',
    location:'Gachibowli',
    type:'Apartment',
    price:'₹1.8 Cr',
    beds:3,
    area:'2,100 sq ft',
    featured:true,
    badge:'Featured',
    image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:2,
    name:'Aurum Villas',
    location:'Kokapet',
    type:'Villa',
    price:'₹4.2 Cr',
    beds:4,
    area:'3,600 sq ft',
    featured:true,
    badge:'Premium',
    image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:3,
    name:'Urban Nest',
    location:'Madhapur',
    type:'Apartment',
    price:'₹1.4 Cr',
    beds:2,
    area:'1,450 sq ft',
    featured:true,
    badge:'New',
    image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:4,
    name:'Green Court',
    location:'Manikonda',
    type:'House',
    price:'₹96 L',
    beds:3,
    area:'1,780 sq ft',
    featured:false,
    badge:'Value Deal',
    image:'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:5,
    name:'Regal Heights',
    location:'Secunderabad',
    type:'Apartment',
    price:'₹1.1 Cr',
    beds:3,
    area:'1,620 sq ft',
    featured:false,
    badge:'Hot',
    image:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:6,
    name:'Palm Vista',
    location:'Kompally',
    type:'Villa',
    price:'₹2.3 Cr',
    beds:4,
    area:'2,900 sq ft',
    featured:true,
    badge:'Premium',
    image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:7,
    name:'Serenity Park',
    location:'Sainikpuri',
    type:'House',
    price:'₹1.05 Cr',
    beds:3,
    area:'1,650 sq ft',
    featured:false,
    badge:'New',
    image:'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:8,
    name:'Bachupally Heights',
    location:'Bachupally',
    type:'Apartment',
    price:'₹78 L',
    beds:2,
    area:'1,220 sq ft',
    featured:false,
    badge:'Value Deal',
    image:'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185008-b033106af5cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448075-bb0df6b8c8a5?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:9,
    name:'Pragathi Royale',
    location:'Pragathi Nagar',
    type:'Apartment',
    price:'₹92 L',
    beds:3,
    area:'1,480 sq ft',
    featured:false,
    badge:'Hot',
    image:'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:10,
    name:'Sunview Residency',
    location:'Suncity',
    type:'Villa',
    price:'₹2.8 Cr',
    beds:4,
    area:'3,100 sq ft',
    featured:true,
    badge:'Premium',
    image:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id:11,
    name:'Meadow Residency',
    location:'Sangareddy',
    type:'House',
    price:'₹68 L',
    beds:2,
    area:'1,100 sq ft',
    featured:false,
    badge:'Value Deal',
    image:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    gallery:[
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

const saved = new Set();

function badgeClass(text){
  if(text === 'New') return 'badge new';
  if(text === 'Premium') return 'badge premium';
  return 'badge';
}

function card(p){
  return `<article class="card">
    <img src="${p.image}" alt="${p.name}">
    <div class="badge-row">
      <span class="${badgeClass(p.badge)}">${p.badge}</span>
      <span class="badge">${p.location}</span>
    </div>
    <h3>${p.name}</h3>
    <p>${p.type} • ${p.beds} BHK • ${p.area}</p>
    <p><strong>${p.price}</strong></p>
    <div class="card-actions">
      <a class="btn btn-small" href="property-details.html?id=${p.id}">View Details</a>
      <button class="icon-btn ${saved.has(p.id) ? 'saved' : ''}" onclick="toggleSave(${p.id})">♥ Save</button>
    </div>
  </article>`;
}

const feat = document.getElementById('featured-listings');
if(feat) feat.innerHTML = properties.filter(p => p.featured).map(card).join('');

const grid = document.getElementById('property-grid');
function render(list){
  if(grid) grid.innerHTML = list.map(card).join('');
}
render(properties);

function applyFilters(){
  const s = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const l = document.getElementById('locationFilter')?.value || 'all';
  const t = document.getElementById('typeFilter')?.value || 'all';
  const filtered = properties.filter(p =>
    (!s || p.name.toLowerCase().includes(s) || p.location.toLowerCase().includes(s)) &&
    (l === 'all' || p.location === l) &&
    (t === 'all' || p.type === t)
  );
  render(filtered);
}
window.applyFilters = applyFilters;

function toggleSave(id){
  if(saved.has(id)) saved.delete(id); else saved.add(id);
  render(properties);
}
window.toggleSave = toggleSave;

function openModal(id){
  const p = properties.find(x => x.id === id);
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  if(!modal || !body || !p) return;

  body.innerHTML = `
    <div class="modal-grid">
      <div>
        <img src="${p.image}" alt="${p.name}">
        <div class="modal-thumbs">
          ${p.gallery.map(img => `<img src="${img}" alt="${p.name} gallery">`).join('')}
        </div>
      </div>
      <div>
        <div class="badge-row">
          <span class="${badgeClass(p.badge)}">${p.badge}</span>
          <span class="badge">${p.location}</span>
        </div>
        <h2>${p.name}</h2>
        <p>${p.type} • ${p.beds} BHK • ${p.area}</p>
        <p><strong>${p.price}</strong></p>
        <p>Located in one of Hyderabad’s residential zones, this property is ideal for modern families and professionals.</p>
        <ul>
          <li>Verified listing</li>
          <li>Modern interiors</li>
          <li>Good connectivity</li>
          <li>Premium neighborhood</li>
        </ul>
        <a href="contact.html" class="btn">Contact Now</a>
      </div>
    </div>
  `;
  modal.classList.add('show');
}
window.openModal = openModal;

function closeModal(){
  const modal = document.getElementById('modal');
  if(modal) modal.classList.remove('show');
}
window.closeModal = closeModal;

document.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if(modal && e.target === modal) closeModal();
});

const menuToggle = document.getElementById('menuToggle');
if(menuToggle){
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}