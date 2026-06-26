document.addEventListener('DOMContentLoaded', () => {
  const properties = [
    // (same properties array content as before) ...
    // copy your existing objects 1..11 here exactly as before
  ];

  const saved = new Set();

  function badgeClass(text){
    if(text === 'New') return 'badge new';
    if(text === 'Premium') return 'badge premium';
    return 'badge';
  }

  function card(p){
    return `<article class="card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <div class="badge-row">
        <span class="${badgeClass(p.badge)}">${p.badge}</span>
        <span class="badge">${p.location}</span>
      </div>
      <h3>${p.name}</h3>
      <p>${p.type} • ${p.beds} BHK • ${p.area}</p>
      <p><strong>${p.price}</strong></p>
      <div class="card-actions">
        <button class="btn btn-small js-view" data-id="${p.id}">View Details</button>
        <button class="icon-btn js-save ${saved.has(p.id) ? 'saved' : ''}" data-id="${p.id}">♥ Save</button>
      </div>
    </article>`;
  }

  const feat = document.getElementById('featured-listings');
  if(feat) feat.innerHTML = properties.filter(p => p.featured).map(card).join('');

  const grid = document.getElementById('property-grid');
  function render(list){
    if(!grid) return;
    grid.innerHTML = list.map(card).join('');
    // attach event listeners to new DOM nodes
    grid.querySelectorAll('.js-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = Number(btn.dataset.id);
        openModal(id);
      });
    });
    grid.querySelectorAll('.js-save').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = Number(btn.dataset.id);
        toggleSave(id);
      });
    });
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
    // Update only visible cards so saved state is reflected
    const visibleCards = Array.from(document.querySelectorAll('#property-grid .card'));
    visibleCards.forEach(cardEl => {
      const did = Number(cardEl.dataset.id);
      const btn = cardEl.querySelector('.js-save');
      if(btn){
        if(saved.has(did)) btn.classList.add('saved'); else btn.classList.remove('saved');
      }
    });
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
            ${ (p.gallery || []).map(img => `<img src="${img}" alt="${p.name} gallery">`).join('') }
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

  // Attach modal-close button handler (if modal exists now)
  const modalClose = document.querySelector('.modal-close');
  if(modalClose) modalClose.addEventListener('click', closeModal);
});