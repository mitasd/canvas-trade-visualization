let currentLimit = 20000000;

document.getElementById('value-slider').addEventListener('input', function(e) {
  currentLimit = parseInt(e.target.value);
  const displayVal = currentLimit >= 1e9 ? (currentLimit/1e9).toFixed(1) + 'B' : (currentLimit/1e6).toFixed(0) + 'M';
  document.getElementById('slider-label').textContent = '$' + displayVal;
  draw(); // Ponovo iscrtava mapu sa novim limitom
});


// ── Embedded flow data ──────────────────────────────────────────────────────
const FLOWS = [{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"United Kingdom","dest_iso":"GBR","dest_lat":51.5,"dest_lon":-0.12,"value":3182931963,"qty":122333},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Germany","dest_iso":"DEU","dest_lat":51.16,"dest_lon":10.45,"value":2749439067,"qty":113883},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Australia","dest_iso":"AUS","dest_lat":-25.27,"dest_lon":133.77,"value":2417278324,"qty":86748},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Indonesia","dest_iso":"IDN","dest_lat":-0.79,"dest_lon":113.92,"value":1796357529,"qty":54217},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Norway","dest_iso":"NOR","dest_lat":60.47,"dest_lon":8.47,"value":1460268341,"qty":43036},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Brazil","dest_iso":"BRA","dest_lat":-14.23,"dest_lon":-51.93,"value":1451947485,"qty":108057},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Malaysia","dest_iso":"MYS","dest_lat":4.21,"dest_lon":101.97,"value":1447089966,"qty":55133},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Mexico","dest_iso":"MEX","dest_lat":23.63,"dest_lon":-102.55,"value":1154796193,"qty":67716},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Israel","dest_iso":"ISR","dest_lat":31.05,"dest_lon":34.85,"value":856411000,"qty":25848},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Spain","dest_iso":"ESP","dest_lat":40.46,"dest_lon":-3.74,"value":696161747,"qty":39421},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"China, Hong Kong SAR","dest_iso":"HKG","dest_lat":22.31,"dest_lon":114.17,"value":692059681,"qty":24471},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Türkiye","dest_iso":"TUR","dest_lat":38.96,"dest_lon":35.24,"value":530082155,"qty":19509},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Japan","dest_iso":"JPN","dest_lat":36.2,"dest_lon":138.25,"value":479086996,"qty":17307},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Belgium","dest_iso":"BEL","dest_lat":50.5,"dest_lon":4.47,"value":466673228,"qty":23003},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Ukraine","dest_iso":"UKR","dest_lat":49.0,"dest_lon":31.17,"value":461927273,"qty":13377},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Singapore","dest_iso":"SGP","dest_lat":1.35,"dest_lon":103.82,"value":389842151,"qty":13440},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Switzerland","dest_iso":"CHE","dest_lat":46.82,"dest_lon":8.23,"value":326087136,"qty":9291},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Egypt","dest_iso":"EGY","dest_lat":26.82,"dest_lon":30.8,"value":283302791,"qty":8551},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Poland","dest_iso":"POL","dest_lat":51.92,"dest_lon":19.15,"value":281504974,"qty":12013},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Italy","dest_iso":"ITA","dest_lat":41.87,"dest_lon":12.57,"value":263366361,"qty":20105},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"New Zealand","dest_iso":"NZL","dest_lat":-40.9,"dest_lon":174.89,"value":213839334,"qty":9475},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Kyrgyzstan","dest_iso":"KGZ","dest_lat":41.2,"dest_lon":74.77,"value":200530701,"qty":5944},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Philippines","dest_iso":"PHL","dest_lat":12.88,"dest_lon":121.77,"value":175914735,"qty":40058},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Finland","dest_iso":"FIN","dest_lat":61.92,"dest_lon":25.75,"value":168696329,"qty":4916},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Chile","dest_iso":"CHL","dest_lat":-35.68,"dest_lon":-71.54,"value":137914035,"qty":4894},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Uzbekistan","dest_iso":"UZB","dest_lat":41.38,"dest_lon":64.59,"value":123307754,"qty":9928},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"India","dest_iso":"IND","dest_lat":20.59,"dest_lon":78.96,"value":122988738,"qty":6119},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Colombia","dest_iso":"COL","dest_lat":4.57,"dest_lon":-74.3,"value":107568902,"qty":5841},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Slovakia","dest_iso":"SVK","dest_lat":48.67,"dest_lon":19.7,"value":101130259,"qty":2511},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Hungary","dest_iso":"HUN","dest_lat":47.16,"dest_lon":19.5,"value":95895546,"qty":4879},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Armenia","dest_iso":"ARM","dest_lat":40.07,"dest_lon":45.04,"value":79285734,"qty":8128},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"China, Macao SAR","dest_iso":"MAC","dest_lat":22.19,"dest_lon":113.54,"value":73427803,"qty":2216},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Netherlands","dest_iso":"NLD","dest_lat":52.13,"dest_lon":5.29,"value":64387173,"qty":21554},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Czechia","dest_iso":"CZE","dest_lat":49.82,"dest_lon":15.47,"value":63032095,"qty":12274},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Ireland","dest_iso":"IRL","dest_lat":53.41,"dest_lon":-8.24,"value":52104091,"qty":5760},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Iceland","dest_iso":"ISL","dest_lat":64.96,"dest_lon":-19.02,"value":49247719,"qty":1486},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Pakistan","dest_iso":"PAK","dest_lat":30.38,"dest_lon":69.35,"value":47913791,"qty":3333},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"South Africa","dest_iso":"ZAF","dest_lat":-30.56,"dest_lon":22.94,"value":37974873,"qty":2712},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Luxembourg","dest_iso":"LUX","dest_lat":49.82,"dest_lon":6.13,"value":31175242,"qty":731},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Slovenia","dest_iso":"SVN","dest_lat":46.15,"dest_lon":14.99,"value":22040755,"qty":1234},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Sweden","dest_iso":"SWE","dest_lat":60.13,"dest_lon":18.64,"value":21788608,"qty":1859},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Mauritius","dest_iso":"MUS","dest_lat":-20.35,"dest_lon":57.55,"value":21178911,"qty":903},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Azerbaijan","dest_iso":"AZE","dest_lat":40.14,"dest_lon":47.58,"value":19955939,"qty":881},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Georgia","dest_iso":"GEO","dest_lat":42.32,"dest_lon":43.36,"value":18835479,"qty":884},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Romania","dest_iso":"ROU","dest_lat":45.94,"dest_lon":24.97,"value":15828866,"qty":16317},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Bolivia","dest_iso":"BOL","dest_lat":-16.29,"dest_lon":-63.59,"value":15108679,"qty":456},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Guatemala","dest_iso":"GTM","dest_lat":15.78,"dest_lon":-90.23,"value":14209071,"qty":425},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Argentina","dest_iso":"ARG","dest_lat":-38.42,"dest_lon":-63.62,"value":13384316,"qty":1402},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Portugal","dest_iso":"PRT","dest_lat":39.4,"dest_lon":-8.22,"value":12537145,"qty":738},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Panama","dest_iso":"PAN","dest_lat":8.54,"dest_lon":-80.78,"value":12319997,"qty":0},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Moldova","dest_iso":"MDA","dest_lat":47.41,"dest_lon":28.37,"value":11649028,"qty":715},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Paraguay","dest_iso":"PRY","dest_lat":-23.44,"dest_lon":-58.44,"value":10276852,"qty":265},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Barbados","dest_iso":"BRB","dest_lat":13.19,"dest_lon":-59.54,"value":9515966,"qty":280},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Greece","dest_iso":"GRC","dest_lat":39.07,"dest_lon":21.82,"value":7738709,"qty":1097},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Bhutan","dest_iso":"BTN","dest_lat":27.51,"dest_lon":90.43,"value":7598599,"qty":310},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Denmark","dest_iso":"DNK","dest_lat":56.26,"dest_lon":9.5,"value":7110807,"qty":2766},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Estonia","dest_iso":"EST","dest_lat":58.6,"dest_lon":25.01,"value":6790824,"qty":1046},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Saudi Arabia","dest_iso":"SAU","dest_lat":23.89,"dest_lon":45.08,"value":5144144,"qty":155},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Guyana","dest_iso":"GUY","dest_lat":4.86,"dest_lon":-58.93,"value":4264470,"qty":148},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Faroe Islands","dest_iso":"FRO","dest_lat":61.89,"dest_lon":-6.91,"value":4045861,"qty":129},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Bulgaria","dest_iso":"BGR","dest_lat":42.73,"dest_lon":25.48,"value":3846399,"qty":1331},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"El Salvador","dest_iso":"SLV","dest_lat":13.79,"dest_lon":-88.9,"value":3801053,"qty":115},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Serbia","dest_iso":"SRB","dest_lat":44.02,"dest_lon":21.01,"value":3178708,"qty":126},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Nigeria","dest_iso":"NGA","dest_lat":9.08,"dest_lon":8.68,"value":2980445,"qty":90},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Croatia","dest_iso":"HRV","dest_lat":45.1,"dest_lon":15.2,"value":1925747,"qty":269},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Bosnia Herzegovina","dest_iso":"BIH","dest_lat":43.92,"dest_lon":17.68,"value":969540,"qty":29},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Peru","dest_iso":"PER","dest_lat":-9.19,"dest_lon":-75.02,"value":956546,"qty":79},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Lithuania","dest_iso":"LTU","dest_lat":55.17,"dest_lon":23.88,"value":844070,"qty":942},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Latvia","dest_iso":"LVA","dest_lat":56.88,"dest_lon":24.6,"value":806733,"qty":223},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Togo","dest_iso":"TGO","dest_lat":8.62,"dest_lon":0.82,"value":327497,"qty":10},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Canada","dest_iso":"CAN","dest_lat":56.13,"dest_lon":-106.35,"value":282432,"qty":828},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Fiji","dest_iso":"FJI","dest_lat":-17.71,"dest_lon":178.07,"value":241877,"qty":8},{"origin_name":"China","origin_lat":35.86,"origin_lon":104.19,"dest_name":"Belize","dest_iso":"BLZ","dest_lat":17.19,"dest_lon":-88.5,"value":184271,"qty":6}];

// ── Format helpers ──────────────────────────────────────────────────────────
function fmtUSD(v) {
  if (v >= 1e9) return '$' + (v/1e9).toFixed(2) + 'B';
  if (v >= 1e6) return '$' + (v/1e6).toFixed(1) + 'M';
  if (v >= 1e3) return '$' + (v/1e3).toFixed(0) + 'K';
  return '$' + v;
}
function fmtNum(v) {
  if (v >= 1e6) return (v/1e6).toFixed(2) + 'M';
  if (v >= 1e3) return (v/1e3).toFixed(0) + 'K';
  return v.toString();
}

// ── Stats ───────────────────────────────────────────────────────────────────
const totalValue = FLOWS.reduce((s,d) => s + d.value, 0);
const totalQty   = FLOWS.reduce((s,d) => s + d.qty, 0);
document.getElementById('s-value').textContent = fmtUSD(totalValue);
document.getElementById('s-qty').textContent   = fmtNum(totalQty) + ' units';

// ── Rankings ─────────────────────────────────────────────────────────────────
const top10 = FLOWS.slice(0, 10);
const maxVal = top10[0].value;
const rankList = document.getElementById('rank-list');
top10.forEach((d, i) => {
  const pct = (d.value / maxVal * 100).toFixed(1);
  rankList.innerHTML += `
    <div class="rank-row">
      <span class="rank-num">${i+1}</span>
      <span class="rank-name">${d.dest_name.replace('China, ','')}</span>
      <div class="rank-bar-wrap"><div class="rank-bar" style="width:${pct}%"></div></div>
      <span class="rank-val">${fmtUSD(d.value)}</span>
    </div>`;
});

// ── Map setup ───────────────────────────────────────────────────────────────
const map = L.map('map', {
  center: [20, 30],
  zoom: 2,
  zoomControl: false,
  attributionControl: false,
  minZoom: 2, maxZoom: 7,
  worldCopyJump: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ── Canvas overlay for bezier curves ────────────────────────────────────────
const canvas = document.createElement('canvas');
const mapPane = document.getElementById('map');
canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:500;';
mapPane.appendChild(canvas);

function resize() {
  canvas.width  = mapPane.offsetWidth;
  canvas.height = mapPane.offsetHeight;
}
resize();
window.addEventListener('resize', () => { resize(); draw(); });

// ── Coordinate → pixel ───────────────────────────────────────────────────────
function project(lat, lon) {
  const pt = map.latLngToContainerPoint([lat, lon]);
  return [pt.x, pt.y];
}

// ── Line width scale ─────────────────────────────────────────────────────────
const minV = Math.log10(FLOWS[FLOWS.length-1].value);
const maxV = Math.log10(FLOWS[0].value);
function lineWidth(v) {
  const t = (Math.log10(v) - minV) / (maxV - minV);
  return 0.5 + t * 9;
}

// ── Draw all flows ────────────────────────────────────────────────────────────
let animOffset = 0;
function draw() {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // POSTAVI LIMIT: npr. 20.000.000 $ (20 miliona)
  // Sve ispod ovog iznosa se neće crtati, što drastično smanjuje "šum"
  const limit = currentLimit;

  FLOWS.forEach(d => {
    // 1. FILTRIRANJE: Preskačemo male tokove
    if (d.value < limit) return;

    const [ox, oy] = project(d.origin_lat, d.origin_lon);
    const [dx, dy] = project(d.dest_lat, d.dest_lon);

    // Kalkulacija luka (Bezier)
    const mx = (ox + dx) / 2;
    const my = (oy + dy) / 2;
    const dist = Math.hypot(dx - ox, dy - oy);
    const nx = -(dy - oy) / dist;
    const ny =  (dx - ox) / dist;
    const bend = dist * 0.25;
    const cx = mx + nx * bend;
    const cy = my + ny * bend;

    const lw = lineWidth(d.value);
    
    // 2. DINAMIČKI ALPHA (Providnost): 
    // Veći izvoznici su jasniji, manji su bleđi
    const intensity = Math.min(1, d.value / 1000000000); // Max intenzitet na 1 mlrd
    const alpha = 0.1 + (intensity * 0.6);

    // Crtanje osnovnog luka
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.quadraticCurveTo(cx, cy, dx, dy);
    ctx.strokeStyle = `rgba(232,19,42,${alpha})`;
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Crtanje animirane tačkice (protok)
    const totalLen = dist * 1.3;
    const dashPos = (animOffset * 0.6) % totalLen;
    const t = dashPos / totalLen;
    const bt = Math.max(0, Math.min(1, t));

    const bx = (1-bt)*(1-bt)*ox + 2*(1-bt)*bt*cx + bt*bt*dx;
    const by = (1-bt)*(1-bt)*oy + 2*(1-bt)*bt*cy + bt*bt*dy;

    ctx.beginPath();
    ctx.arc(bx, by, Math.max(1.5, lw * 0.5), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${alpha * 1.5})`;
    ctx.fill();
  });

  // Crtanje glavne tačke (Kina)
  const [ox, oy] = project(35.86, 104.19);
  const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 500);
  ctx.beginPath();
  ctx.arc(ox, oy, 6 + pulse * 5, 0, Math.PI*2);
  ctx.fillStyle = `rgba(232,19,42,${0.12 + pulse * 0.12})`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(ox, oy, 6, 0, Math.PI*2);
  ctx.fillStyle = '#e8132a';
  ctx.fill();

// 3. TAČKE DESTINACIJA SA ANIMACIJOM I LABELAMA
  FLOWS.forEach(d => {
    if (d.value < limit) return; 
    
    const [px, py] = project(d.dest_lat, d.dest_lon);
    const r = Math.max(2, lineWidth(d.value) * 0.4);

    // EFEKAT PULSIRANJA (FADE)
    // Koristimo Date.now() da dobijemo glatku animaciju koja se pali i gasi
    const countryFade = 0.4 + 0.6 * Math.abs(Math.sin(Date.now() / 1500 + d.value)); 
    // d.value unutar sinusa služi kao "offset" da ne pulsiraju sve države u istom sekundu

    // Crtanje tačke (Glavna boja)
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(232, 19, 42, ${0.7 * countryFade})`;
    ctx.fill();

    // Sjaj u sredini tačke
    ctx.beginPath();
    ctx.arc(px, py, Math.max(1, r*0.4), 0, Math.PI*2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * countryFade})`;
    ctx.fill();

    // --- CRTANJE LABELE ---
    const percentage = ((d.value / totalValue) * 100).toFixed(1);
    const labelText = `${d.dest_name.replace('China, ', '')} ${percentage}%`;
    
    ctx.font = '10px "IBM Plex Mono"';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    // Outline teksta (kao u CSS-u stroke)
    ctx.strokeStyle = `rgba(8, 11, 16, ${0.8 * countryFade})`;
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.strokeText(labelText, px + r + 6, py);

    // Glavni tekst sa laganim fade-om
    ctx.fillStyle = `rgba(200, 205, 214, ${0.8 * countryFade})`;
    ctx.fillText(labelText, px + r + 6, py);
  });
}

// Animation loop
let last = 0;
function animate(ts) {
  animOffset += (ts - last) * 0.1;
  last = ts;
  draw();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

map.on('move zoom', () => draw());

// ── Tooltip on hover ──────────────────────────────────────────────────────────
const tooltip = document.getElementById('tooltip');
canvas.style.pointerEvents = 'auto';

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  let closest = null;
  let minDist = Infinity;
  FLOWS.forEach(d => {
    const [px, py] = project(d.dest_lat, d.dest_lon);
    const dist = Math.hypot(px - mx, py - my);
    if (dist < minDist) { minDist = dist; closest = d; }
  });

  // Also check origin
  const [ox, oy] = project(35.86, 104.19);
  if (Math.hypot(ox - mx, oy - my) < minDist) closest = null;

  if (closest && minDist < 30) {
    document.getElementById('tt-name').textContent = closest.dest_name;
    document.getElementById('tt-val').textContent  = fmtUSD(closest.value) + ' imported from China';
    document.getElementById('tt-qty').textContent  = closest.qty > 0 ? fmtNum(closest.qty) + ' vehicles' : '';
    const tipW = 200, tipH = 80;
    let tx = e.clientX + 14;
    let ty = e.clientY - 40;
    if (tx + tipW > window.innerWidth) tx = e.clientX - tipW - 14;
    if (ty < 0) ty = e.clientY + 10;
    tooltip.style.left = tx + 'px';
    tooltip.style.top  = ty + 'px';
    tooltip.style.display = 'block';
  } else {
    tooltip.style.display = 'none';
  }
});
canvas.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });