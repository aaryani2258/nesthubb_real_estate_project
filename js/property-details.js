document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const container = document.getElementById('property-details');

  if (!container || !id) {
    container.innerHTML = '<p>No property selected.</p>';
    return;
  }

  try {
    const res = await fetch('data/properties.json');
    const properties = await res.json();
    const p = properties.find(item => item.id === id);

    if (!p) {
      container.innerHTML = '<p>Property not found.</p>';
      return;
    }

    const images = {
      1:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      2:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      3:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      4:'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80',
      5:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      6:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      7:'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
      8:'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1200&q=80',
      9:'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
      10:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      11:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80'
    };

    container.innerHTML = `
      <div class="modal-grid">
        <div>
          <img src="${images[p.id] || images[1]}" alt="${p.name}">
        </div>
        <div>
          <div class="badge-row">
            <span class="badge">${p.location}</span>
            <span class="badge">${p.type}</span>
          </div>
          <h1>${p.name}</h1>
          <p><strong>${p.price}</strong></p>
          <p>${p.beds} BHK • ${p.area}</p>
          <p>This property is listed in one of Hyderabad’s popular neighborhoods. It is suitable for buyers looking for a modern home with good connectivity.</p>
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
  } catch (error) {
    container.innerHTML = '<p>Unable to load property details.</p>';
  }
});