
let map, markers=[], data=[];
const FALLBACK_STALLS = {"stalls": [{"id": 1, "name": "Jalan Alor Char Kuey Teow", "type": "Char Kuey Teow", "area": "Bukit Bintang", "address": "Jalan Alor, Kuala Lumpur", "lat": 3.1457, "lng": 101.71, "desc": "Famous wok-fried noodles with smoky flavour at Jalan Alor."}, {"id": 2, "name": "Gerai Satay Kajang", "type": "Satay", "area": "Kajang", "address": "Kajang, Selangor", "lat": 2.9935, "lng": 101.7909, "desc": "Traditional skewered satay served with peanut sauce in Kajang."}, {"id": 3, "name": "Kampung Baru Nasi Lemak", "type": "Nasi Lemak", "area": "Kampung Baru", "address": "Kampung Baru, Kuala Lumpur", "lat": 3.1626, "lng": 101.7053, "desc": "Classic Malaysian coconut rice with sambal in Kampung Baru."}, {"id": 4, "name": "Penang Assam Laksa Van", "type": "Assam Laksa", "area": "George Town", "address": "Air Itam Market, Penang", "lat": 5.3981, "lng": 100.2796, "desc": "Authentic Penang-style Assam Laksa at Air Itam Market."}, {"id": 5, "name": "Petaling Street Claypot Chicken Rice", "type": "Claypot Chicken", "area": "Petaling Street", "address": "Petaling Street, Kuala Lumpur", "lat": 3.1446, "lng": 101.6979, "desc": "Old\u2011school claypot rice with caramelised soy, lap cheong and crispy rice bits."}, {"id": 6, "name": "SS2 Wai Sek Kai Satay", "type": "Satay", "area": "SS2, PJ", "address": "Jalan SS 2/60, Petaling Jaya", "lat": 3.1179, "lng": 101.6147, "desc": "Popular night hawker street in PJ; smoky satay with chunky peanut sauce."}, {"id": 7, "name": "Taman Connaught Night Market", "type": "Assorted Snacks", "area": "Cheras", "address": "Taman Connaught Night Market, Cheras", "lat": 3.0845, "lng": 101.7401, "desc": "KM\u2011long pasar malam with Thai milk tea, grilled skewers and apam balik."}, {"id": 8, "name": "Ipoh Bean Sprout Chicken", "type": "Chicken Rice", "area": "Ipoh", "address": "Jalan Yau Tet Shin, Ipoh", "lat": 4.5975, "lng": 101.0865, "desc": "Crisp\u2011skin chicken with crunchy taugeh; classic Ipoh supper."}, {"id": 9, "name": "Kota Bharu Sup Gearbox", "type": "Sup Tulang", "area": "Kota Bharu", "address": "Wakaf Che Yeh Night Market, Kelantan", "lat": 6.1128, "lng": 102.2587, "desc": "Rich bone\u2011marrow soup served late into the night."}, {"id": 10, "name": "Muar Otak\u2011Otak", "type": "Otak-Otak", "area": "Muar", "address": "Jalan Haji Abu, Muar, Johor", "lat": 2.047, "lng": 102.5675, "desc": "Charcoal\u2011grilled fish paste in banana leaf; smoky and spicy."}, {"id": 11, "name": "Kuching Kolo Mee", "type": "Kolo Mee", "area": "Kuching", "address": "Carpenter Street, Kuching, Sarawak", "lat": 1.5599, "lng": 110.3449, "desc": "Springy noodles with minced pork and oil, Sarawak staple."}, {"id": 12, "name": "KK Gaya Street Night Market", "type": "Seafood Snacks", "area": "Kota Kinabalu", "address": "Gaya Street, Kota Kinabalu, Sabah", "lat": 5.9848, "lng": 116.0735, "desc": "Sunday market with grilled seafood, kuih and kopi."}, {"id": 13, "name": "Alor Setar Nasi Kandar", "type": "Nasi Kandar", "area": "Alor Setar", "address": "Jalan Putra, Alor Setar, Kedah", "lat": 6.121, "lng": 100.367, "desc": "Northern\u2011style nasi kandar with spicy gravies."}, {"id": 14, "name": "Taiping Charcoal Char Kuey Teow", "type": "Char Kuey Teow", "area": "Taiping", "address": "Market Square, Taiping, Perak", "lat": 4.85, "lng": 100.739, "desc": "Charcoal\u2011fired wok hei and duck egg richness."}, {"id": 15, "name": "Batu Ferringhi Night Market", "type": "Grilled Seafood", "area": "Batu Ferringhi", "address": "Jalan Batu Ferringhi, Penang", "lat": 5.4722, "lng": 100.2417, "desc": "Beach night market with stingray and satay celup."}, {"id": 16, "name": "Melaka Satay Celup Capitol", "type": "Satay Celup", "area": "Melaka", "address": "Lorong Bukit Cina, Melaka", "lat": 2.1951, "lng": 102.2501, "desc": "Dip skewers into bubbling peanut gravy\u2014city icon."}, {"id": 17, "name": "Johor Bahru Kway Teow Kia", "type": "Kway Teow Kia", "area": "Johor Bahru", "address": "Jalan Wong Ah Fook, JB", "lat": 1.4606, "lng": 103.7649, "desc": "Silky noodles with braised offal and dark soy."}, {"id": 18, "name": "Terengganu Nasi Dagang", "type": "Nasi Dagang", "area": "Kuala Terengganu", "address": "Pasar Payang, Kuala Terengganu", "lat": 5.335, "lng": 103.132, "desc": "Aromatic rice with gulai ikan tongkol; breakfast favourite."}, {"id": 19, "name": "Bentong Tau Fu Fah", "type": "Dessert", "area": "Bentong", "address": "Jalan Loke Yew, Bentong, Pahang", "lat": 3.5266, "lng": 101.9075, "desc": "Smooth soy pudding with palm sugar syrup."}, {"id": 20, "name": "Sitiawan Gong Pian", "type": "Biscuit", "area": "Sitiawan", "address": "Jalan Raja Omar, Sitiawan, Perak", "lat": 4.2166, "lng": 100.6984, "desc": "Crispy Hock Chew biscuit stuffed with savoury onions."}, {"id": 21, "name": "Klang Bak Kut Teh", "type": "Bak Kut Teh", "area": "Klang", "address": "Jalan Besar, Klang", "lat": 3.0431, "lng": 101.4489, "desc": "Herbal pork stew in the cradle of BKT."}, {"id": 22, "name": "Penang Chulia Street Roti Canai", "type": "Roti Canai", "area": "George Town", "address": "Lebuh Chulia, George Town", "lat": 5.4171, "lng": 100.3354, "desc": "Night roti canai with dhal and sardine curry."}, {"id": 23, "name": "Sandakan UFO Tart", "type": "Dessert", "area": "Sandakan", "address": "Harbour Square, Sandakan, Sabah", "lat": 5.8383, "lng": 118.117, "desc": "Classic sabahan custard tart with meringue dome."}, {"id": 24, "name": "Labuan Mee Kolok", "type": "Mee Kolok", "area": "Labuan", "address": "Jalan Merdeka, Labuan", "lat": 5.2767, "lng": 115.2417, "desc": "Labuan take on Sarawakian kolo mee."}]};

function initMap(){
  map = L.map('map');
  map.setView([3.1390,101.6869], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19,
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(map);
  setTimeout(()=> map.invalidateSize(), 250);
}
function colorFor(type){
  if(/Satay/i.test(type)) return '#dc3545';
  if(/Nasi/i.test(type)) return '#198754';
  if(/Laksa/i.test(type)) return '#fd7e14';
  if(/Char|Kuey|Kway/i.test(type)) return '#0d6efd';
  return '#6c757d';
}
function iconFor(type){
  const svg=c=>`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="42" viewBox="0 0 24 24" fill="${c}" stroke="white" stroke-width="1.5"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.3 8 12 8 12s8-6.7 8-12c0-4.4-3.6-8-8-8zm0 11.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/></svg>`;
  return L.divIcon({className:'', html:svg(colorFor(type)), iconSize:[28,42], iconAnchor:[14,42], popupAnchor:[0,-38]});
}
function clearMarkers(){ markers.forEach(m=>map.removeLayer(m)); markers=[]; }
function addMarkers(items){
  clearMarkers();
  items.forEach(s=>{
    const m=L.marker([s.lat,s.lng],{icon:iconFor(s.type)}).addTo(map);
    m.bindPopup(`<strong>${s.name}</strong><br>${s.type} · ${s.area}<br><small>${s.address}</small><br>${s.desc?('<em>'+s.desc+'</em><br>'):''}<a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.lat+','+s.lng)}">Open in Google Maps</a>`);
    markers.push(m);
  });
}
function renderList(items){
  const ul=document.getElementById('list'); ul.innerHTML='';
  if(!items.length){ ul.innerHTML='<li class="list-group-item bg-transparent text-white">No results.</li>'; return; }
  items.forEach(s=>{
    const li=document.createElement('li'); li.className='list-group-item bg-transparent text-white';
    li.innerHTML=`<div class="d-flex justify-content-between align-items-start">
      <div><div class="fw-semibold">${s.name}</div><div class="text-light">${s.area} · ${s.type}</div><div class="small">${s.address}</div>${s.desc?('<div class="small fst-italic">'+s.desc+'</div>'):''}</div>
      <div>
      <div><div class="fw-semibold">${s.name}</div><div class="text-light">${s.area} · ${s.type}</div><div class="small">${s.address}</div></div>
      <a class="btn btn-sm btn-outline-light" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.lat+','+s.lng)}">Route</a>
    </div>`;
    li.addEventListener('click', e=>{
      if(e.target.tagName.toLowerCase()==='a') return;
      map.flyTo([s.lat,s.lng], 16);
      const mk=markers.find(m=>Math.abs(m.getLatLng().lat-s.lat)<1e-7 && Math.abs(m.getLatLng().lng-s.lng)<1e-7);
      mk?.openPopup();
    });
    ul.appendChild(li);
  });
}
function normalize(str){ return (str||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,''); }
function applyFilters(){
  const q=document.getElementById('q').value.trim().toLowerCase();
  const t=document.getElementById('type').value.trim().toLowerCase();
  const items=data.filter(s=>{ const nq=normalize(q); const inQ=!nq || normalize(s.name).includes(nq) || normalize(s.area).includes(nq) || normalize(s.type).includes(nq); const inT=!t || s.type.toLowerCase()===t; return inQ && inT; }); addMarkers(items); renderList(items); }
document.addEventListener('DOMContentLoaded', ()=>{
  initMap();
  fetch('assets/data/stalls.json')
  .then(r=>{ if(!r.ok) throw new Error('HTTP '+r.status); return r.json(); })
  .then(j=>{ data=j.stalls||[]; if(!data.length) throw new Error('Empty data'); addMarkers(data); renderList(data); })
  .catch(err=>{ console.warn('Using fallback stalls due to fetch error:', err); data = FALLBACK_STALLS.stalls; addMarkers(data); renderList(data); });['q','type'].forEach(id=>{
    document.getElementById(id).addEventListener('input', applyFilters);
    document.getElementById(id).addEventListener('change', applyFilters);
  });
  document.getElementById('locateBtn').addEventListener('click', ()=>{
    if(!navigator.geolocation){ alert('Geolocation not supported.'); return; }
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude}=pos.coords;
      map.flyTo([latitude,longitude], 15);
      L.circle([latitude,longitude],{radius:150}).addTo(map);
    }, ()=> alert('Unable to retrieve your location.'));
  });
});
