// Confluent Group concept — page generator (MP Launch, 2026-08-15)
// node build.mjs  → emits 8 static pages sharing one chrome.
// EVERY factual claim traces to the client's capability statement or email —
// see "claims-source table" in the prospect folder's 00-pitch-pack.md.
import { writeFileSync } from "node:fs";

const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%230D2035'/%3E%3Cpath d='M42 22a14 14 0 1 0 0 20' fill='none' stroke='%23fff' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E";

/* ---------- SVG hero art (drawn, not stocked) ---------- */
const ART_CONTOURS = `
<svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="#C7CFD8" stroke-width="1">
    <path opacity=".10" d="M-40,120 C220,60 420,180 700,130 S1140,40 1480,110"/>
    <path opacity=".08" d="M-40,190 C240,130 460,250 740,200 S1160,110 1480,180"/>
    <path opacity=".12" d="M-40,265 C260,205 480,320 760,270 S1180,185 1480,255"/>
    <path opacity=".08" d="M-40,345 C270,285 500,395 780,345 S1200,265 1480,335"/>
    <path opacity=".10" d="M-40,430 C280,370 520,475 800,425 S1220,350 1480,420"/>
    <path opacity=".07" d="M-40,520 C290,465 540,560 820,515 S1240,445 1480,510"/>
    <path opacity=".05" d="M-40,600 C300,550 560,640 840,600 S1260,540 1480,595"/>
    <path opacity=".16" stroke-dasharray="2 7" d="M-40,300 C260,240 480,355 760,305 S1180,220 1480,290"/>
  </g>
  <g stroke="#C7CFD8" stroke-width="1" opacity=".28">
    <path d="M1090,150 v14 M1083,157 h14"/>
    <path d="M330,455 v14 M323,462 h14"/>
    <path d="M1250,472 v14 M1243,479 h14"/>
  </g>
</svg>`;

const ART_BENCHES = `
<svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="#C7CFD8">
    <path opacity=".30" stroke-width="1.5" d="M-20,140 H230 L285,205 H465 L520,270 H700 L755,335 H935 L990,400 H1170 L1225,465 H1480"/>
    <path opacity=".12" stroke-width="1" d="M-20,175 H205 L260,240 H440 L495,305 H675 L730,370 H910 L965,435 H1145 L1200,500 H1480"/>
    <path opacity=".18" stroke-width="1" stroke-dasharray="3 8" d="M60,120 C300,190 560,320 830,420 S1240,540 1440,560"/>
    <g opacity=".25" stroke-width="1">
      <path d="M1330,120 h60 M1330,240 h60 M1330,360 h60 M1330,480 h60"/>
    </g>
  </g>
  <g fill="#C7CFD8" opacity=".30" font-family="Archivo,Arial,sans-serif" font-size="11" letter-spacing="2">
    <text x="1338" y="112">RL 240</text>
    <text x="1338" y="232">RL 180</text>
    <text x="1338" y="352">RL 120</text>
    <text x="1338" y="472">RL 60</text>
  </g>
</svg>`;

const ART_ROAD = `
<svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="#C7CFD8">
    <path opacity=".30" stroke-width="1.5" d="M80,300 L400,282 H1040 L1360,300"/>
    <path opacity=".22" stroke-width="1" d="M120,340 L420,324 H1020 L1320,340 M170,382 L440,368 H1000 L1270,382"/>
    <path opacity=".14" stroke-width="1" d="M60,432 C400,415 1040,415 1380,432"/>
    <path opacity=".34" stroke-width="1.5" stroke-dasharray="26 20" d="M340,262 H1100"/>
    <g opacity=".25" stroke-width="1">
      <path d="M200,300 v-24 M340,290 v-24 M1100,290 v-24 M1240,300 v-24"/>
    </g>
    <g opacity=".20" stroke-width="1">
      <path d="M120,520 v14 M320,520 v14 M520,520 v14 M720,520 v14 M920,520 v14 M1120,520 v14 M1320,520 v14 M120,527 H1320"/>
    </g>
  </g>
  <g fill="#C7CFD8" opacity=".28" font-family="Archivo,Arial,sans-serif" font-size="11" letter-spacing="2">
    <text x="106" y="560">CH 000</text>
    <text x="706" y="560">CH 300</text>
    <text x="1306" y="560">CH 600</text>
  </g>
</svg>`;

const ART_PROGRAM = `
<svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="#C7CFD8">
    <g opacity=".22" stroke-width="1.5">
      <rect x="120" y="120" width="300" height="34" rx="6"/>
      <rect x="360" y="196" width="380" height="34" rx="6"/>
      <rect x="620" y="272" width="300" height="34" rx="6"/>
      <rect x="820" y="348" width="360" height="34" rx="6"/>
      <rect x="1060" y="424" width="260" height="34" rx="6"/>
    </g>
    <g opacity=".10" fill="#C7CFD8" stroke="none">
      <rect x="120" y="120" width="300" height="34" rx="6"/>
      <rect x="620" y="272" width="300" height="34" rx="6"/>
    </g>
    <path opacity=".30" stroke-width="1" d="M420,137 L360,213 M740,213 L620,289 M920,289 L820,365 M1180,365 L1060,441"/>
    <path opacity=".28" stroke-width="1" stroke-dasharray="3 8" d="M760,80 V560"/>
  </g>
  <path d="M760,236 l12,12 -12,12 -12,-12 z" fill="none" stroke="#C7CFD8" opacity=".45" stroke-width="1.5"/>
</svg>`;

const ART_GRID = `
<svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g fill="none" stroke="#C7CFD8">
    <g opacity=".07" stroke-width="1">
      <path d="M180,0 V640 M420,0 V640 M660,0 V640 M900,0 V640 M1140,0 V640"/>
      <path d="M0,140 H1440 M0,300 H1440 M0,460 H1440"/>
    </g>
    <g opacity=".30" stroke-width="1">
      <path d="M660,290 v20 M650,300 h20"/>
      <path d="M420,130 v20 M410,140 h20"/>
      <path d="M1140,450 v20 M1130,460 h20"/>
    </g>
    <rect x="900" y="140" width="240" height="160" opacity=".14" stroke-width="1.5"/>
  </g>
</svg>`;

/* ---------- shared chrome ---------- */
const NAV = [
  ["about.html", "About"],
  ["mining.html", "Mining"],
  ["civil.html", "Civil &amp; Delivery"],
  ["advisory.html", "Advisory"],
  ["projects.html", "Projects"],
  ["careers.html", "Careers"],
];

const head = (title, desc, extra = "") => `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="icon" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
${extra}</head>
<body>
<a class="skip" href="#main">Skip to content</a>`;

const header = (current) => `
<header class="hdr">
  <div class="wrap hdr-in">
    <a class="lockup" href="index.html" aria-label="Confluent Group — home">
      <span class="l1">CONFLUENT</span><span class="l2">GROUP</span>
    </a>
    <input type="checkbox" id="nav-t" aria-hidden="true">
    <label class="burger" for="nav-t" aria-label="Menu"><span></span><span></span><span></span></label>
    <nav class="nav" aria-label="Main">
      ${NAV.map(([href, label]) => `<a class="lnk" href="${href}"${current === href ? ' aria-current="page"' : ""}>${label}</a>`).join("\n      ")}
      <a class="btn btn-light" href="contact.html">Start a conversation</a>
    </nav>
  </div>
</header>
<main id="main">`;

const ctaBand = (h, sub) => `
<section class="cta-band on-navy">
  <div class="art" style="position:absolute;inset:0;opacity:.5">${ART_CONTOURS}</div>
  <div class="wrap cta-in" style="position:relative">
    <div class="cta-copy">
      <div data-r>
        <p class="eyebrow">Start a conversation</p>
        <h2 class="h-sec">${h}</h2>
        <p class="sub">${sub}</p>
      </div>
      <div class="cta-actions" data-r data-d="1">
        <a class="btn btn-light" href="mailto:info@confluentgroup.com.au">info@confluentgroup.com.au</a>
        <a class="btn btn-ghost" href="tel:+61425014666">0425 014 666</a>
      </div>
    </div>
    <div class="cta-form" data-r data-d="1">
      <div class="f-row">
        <div class="f-field"><label for="q-name">Name</label><input id="q-name" type="text" autocomplete="name"></div>
        <div class="f-field"><label for="q-phone">Phone</label><input id="q-phone" type="tel" autocomplete="tel"></div>
      </div>
      <div class="f-field"><label for="q-email">Email</label><input id="q-email" type="email" autocomplete="email"></div>
      <div class="f-field"><label for="q-msg">The project in front of you</label><textarea id="q-msg" rows="3"></textarea></div>
      <a class="btn btn-solid" href="mailto:info@confluentgroup.com.au?subject=Project%20enquiry%20%E2%80%94%20via%20confluentgroup.com.au">Send enquiry <span class="arr">&rarr;</span></a>
      <p class="fnote">Concept note: on the live site this delivers straight to your inbox with spam protection.</p>
    </div>
  </div>
</section>`;

const footer = `
</main>
<footer class="ftr">
  <div class="wrap ftr-in">
    <div>
      <a class="lockup" href="index.html"><span class="l1">CONFLUENT</span><span class="l2">GROUP</span></a>
      <p class="about">A South Australian civil and mining consultancy with delivery capability — partnering with Tier&nbsp;1 contractors, resource owners and government.</p>
    </div>
    <div>
      <h4>Explore</h4>
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4>Services</h4>
      <ul>
        <li><a href="mining.html">Mining Operations &amp; Optimisation</a></li>
        <li><a href="mining.html">Crushing &amp; Processing Advisory</a></li>
        <li><a href="civil.html">Civil Infrastructure Delivery</a></li>
        <li><a href="civil.html">Project &amp; Construction Management</a></li>
        <li><a href="advisory.html">Commercial &amp; Contract Advisory</a></li>
        <li><a href="advisory.html">Constructability &amp; Program Management</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:info@confluentgroup.com.au">info@confluentgroup.com.au</a></li>
        <li><a href="tel:+61425014666">0425 014 666</a></li>
        <li><span class="plain">Adelaide, South Australia</span></li>
      </ul>
    </div>
  </div>
  <div class="wrap ftr-bar">
    <span class="abn">CONFLUENT GROUP PTY LTD &middot; ABN 51 699 418 098 &middot; Adelaide, South Australia</span>
    <span class="motif">LEADERSHIP&nbsp;&nbsp;|&nbsp;&nbsp;SYSTEMS</span>
    <span class="mpl">Website concept by <a href="https://mplaunch.com.au">MP Launch</a></span>
  </div>
</footer>
<a class="ribbon" href="https://mplaunch.com.au"><span class="dot"></span>Design concept &middot; MP Launch</a>
<script>
(function(){try{
  if(navigator.webdriver)return;
  var v=new URLSearchParams(location.search).get('v');
  if(!v)return;
  var slug="confluent-group-preview", label="Michael — Confluent Group", phone="+61425014666";
  var k="mpl_seen_"+slug, last=+localStorage.getItem(k)||0;
  if(Date.now()-last<432e5)return;
  var fired=false,dwell=0,t=null;
  function live(){return document.visibilityState==="visible";}
  function send(how){
    if(fired||!live())return; fired=true; if(t)clearInterval(t);
    localStorage.setItem(k,String(Date.now()));
    new Image().src="https://mplaunch.com.au/api/preview-view?slug="+encodeURIComponent(slug)
      +"&label="+encodeURIComponent(label)+"&phone="+encodeURIComponent(phone)
      +"&src="+encodeURIComponent(v)+"&via="+how+"&t="+Date.now();
  }
  function start(){
    t=setInterval(function(){if(!live())return; dwell+=500; if(dwell>=5000)send("dwell");},500);
    ["pointerdown","scroll","keydown"].forEach(function(e){
      addEventListener(e,function(){send("interaction");},{once:true,passive:true});});
  }
  if(document.prerendering){document.addEventListener("prerenderingchange",start,{once:true});}
  else{start();}
}catch(e){}})();
</script>
</body>
</html>`;

/* ---------- reusable content blocks ---------- */
const MODELS = `
<div class="grid3">
  <div class="card model" data-r><span class="tag">ADVISORY</span><h3>Scoped studies, audits, commercial reviews</h3><p class="d">A defined question, answered with delivery-grade rigour — then handed back.</p></div>
  <div class="card model" data-r data-d="1"><span class="tag">EMBEDDED</span><h3>Interim leadership and project management</h3><p class="d">Senior capability inside your team for the phase that needs it.</p></div>
  <div class="card model" data-r data-d="2"><span class="tag">DELIVERY</span><h3>End-to-end project execution and oversight</h3><p class="d">Accountability for the outcome, from planning through to handover.</p></div>
</div>`;

const STATS = `
<section class="stats on-navy">
  <div class="wrap stats-in">
    <div class="stat" data-r><span class="n">25+</span><span class="l">Years combined</span></div>
    <div class="stat" data-r data-d="1"><span class="n">$500M+</span><span class="l">Projects delivered</span></div>
    <div class="stat" data-r data-d="2"><span class="n">Tier 1</span><span class="l">Contractor lineage</span></div>
    <div class="stat" data-r data-d="3"><span class="n">SA</span><span class="l">National reach</span></div>
  </div>
</section>`;

const DISCLAIMER = `<p class="disclaim" data-r>Representative project exposure across civil infrastructure and open cut mining. Our directors have led delivery, commercial and operational outcomes on projects of this type and scale in Tier&nbsp;1 environments.</p>`;

const proj = (tag, title, items, d = 0) => `
<article class="card proj" data-r${d ? ` data-d="${d}"` : ""}>
  <span class="tag">${tag}</span>
  <h3>${title}</h3>
  <ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>
</article>`;

/* ================================================================
   PAGE: index.html
   ================================================================ */
const home = head(
  "Confluent Group — Civil &amp; Mining Consultancy | Adelaide, South Australia",
  "South Australian civil and mining consultancy with delivery capability. We partner with Tier 1 contractors, resource owners and government to plan, commercialise and execute complex projects end to end.",
  `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"ProfessionalService","name":"Confluent Group","legalName":"Confluent Group Pty Ltd","url":"https://confluentgroup.com.au","email":"info@confluentgroup.com.au","telephone":"+61425014666","address":{"@type":"PostalAddress","addressLocality":"Adelaide","addressRegion":"SA","addressCountry":"AU"},"description":"South Australian civil and mining consultancy with delivery capability, partnering with Tier 1 contractors, resource owners and government.","knowsAbout":["Mining Operations & Optimisation","Crushing & Processing Advisory","Civil Infrastructure Delivery","Project & Construction Management","Commercial & Contract Advisory","Constructability & Program Management"]}
</script>
`
) + header("index.html") + `
<section class="hero on-navy">
  <div class="art">${ART_CONTOURS}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Civil &amp; mining consultancy — Adelaide, South Australia</p>
    <h1 class="h-display" data-r data-d="1">Proven civil and mining delivery.</h1>
    <p class="lede" data-r data-d="2">Confluent Group is a South Australian civil and mining consultancy with delivery capability. We partner with Tier&nbsp;1 contractors, resource owners and government to plan, commercialise and execute complex projects end to end.</p>
    <div class="cta-row" data-r data-d="3">
      <a class="btn btn-light" href="contact.html">Start a conversation <span class="arr">&rarr;</span></a>
      <a class="btn btn-ghost" href="projects.html">View our experience</a>
    </div>
    <div class="hero-foot" data-r data-d="3">
      <span>Mining</span><span>Civil Infrastructure</span><span>Defence</span><span>Adelaide &middot; SA</span>
    </div>
  </div>
</section>
${STATS}

<section class="sec">
  <div class="wrap">
    <div class="sec-head">
      <div data-r><p class="eyebrow">Leadership</p><h2 class="h-sec">Directors who have delivered.</h2></div>
      <a class="btn btn-ghost-dark" href="about.html" data-r>Meet the directors <span class="arr">&rarr;</span></a>
    </div>
    <div class="dir">
      <div class="card dir-card" data-r>
        <img class="headshot" src="assets/morgan-taylor.jpg" alt="Morgan Taylor" width="512" height="512" loading="lazy" decoding="async">
        <span class="role">Director &middot; Mining &amp; Commercial</span>
        <h3>Morgan Taylor</h3>
        <p class="cred">MBA</p>
        <p class="bio">Senior executive experience at South Australia's largest open cut miner — overseeing production, maintenance and crushing operations — with delivery lead experience on Tier&nbsp;1 infrastructure.</p>
        <ul class="str">
          <li>Commercial and operational integration</li>
          <li>MSA negotiation and contract strategy</li>
          <li>Fleet and plant optimisation</li>
        </ul>
      </div>
      <div class="card dir-card" data-r data-d="1">
        <img class="headshot" src="assets/michael-pastore.jpg" alt="Michael Pastore" width="512" height="512" loading="lazy" decoding="async">
        <span class="role">Director &middot; Construction</span>
        <h3>Michael Pastore</h3>
        <p class="cred">BEng (Hons) &middot; Building Work Supervisor — Civil Construction (BLD 321368)</p>
        <p class="bio">Civil construction specialist with delivery experience across contractor environments from Tier&nbsp;1 to Tier&nbsp;3 — earthworks, structures, mining, defence and infrastructure projects.</p>
        <ul class="str">
          <li>Large-scale civil earthworks and infrastructure delivery</li>
          <li>Subcontractor and supplier management</li>
          <li>Production discipline in Tier&nbsp;1 environments</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-tint">
  <div class="wrap">
    <div class="sec-head">
      <div data-r>
        <p class="eyebrow">Core services</p>
        <h2 class="h-sec">Six ways we take responsibility.</h2>
        <p class="lede">Senior leadership with direct delivery accountability — credentialled advisors who have led the projects, plants and contracts they now advise on.</p>
      </div>
    </div>
    <div class="grid3">
      <a class="card" href="mining.html" data-r><span class="num">01</span><h3>Mining Operations &amp; Optimisation</h3><p class="d">Production management, bench sequencing, drill and blast oversight, grade control and fleet productivity.</p><span class="go">Explore mining <span class="arr">&rarr;</span></span></a>
      <a class="card" href="mining.html" data-r data-d="1"><span class="num">02</span><h3>Crushing &amp; Processing Advisory</h3><p class="d">ROM walls, fixed plant, structural and conveyor installation oversight, commissioning and ramp-up.</p><span class="go">Explore mining <span class="arr">&rarr;</span></span></a>
      <a class="card" href="civil.html" data-r data-d="2"><span class="num">03</span><h3>Civil Infrastructure Delivery</h3><p class="d">Earthworks, structures, drainage and pavements — including staged construction under live traffic.</p><span class="go">Explore civil <span class="arr">&rarr;</span></span></a>
      <a class="card" href="civil.html" data-r><span class="num">04</span><h3>Project &amp; Construction Management</h3><p class="d">Construction staging, program management, temporary works and coordination of self-performed and subcontracted works.</p><span class="go">Explore civil <span class="arr">&rarr;</span></span></a>
      <a class="card" href="advisory.html" data-r data-d="1"><span class="num">05</span><h3>Commercial &amp; Contract Advisory</h3><p class="d">MSA negotiation, contract strategy, margin protection and dispute resolution at scale.</p><span class="go">Explore advisory <span class="arr">&rarr;</span></span></a>
      <a class="card" href="advisory.html" data-r data-d="2"><span class="num">06</span><h3>Constructability &amp; Program Management</h3><p class="d">Constructability review, detailed sequencing, crew utilisation and execution governance.</p><span class="go">Explore advisory <span class="arr">&rarr;</span></span></a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Sectors</p><h2 class="h-sec">Where we work.</h2></div></div>
    <div class="sectors">
      <div class="sector" data-r>MINING<small>Open cut operations, crushing and processing for resource owners and operators.</small></div>
      <div class="sector" data-r data-d="1">CIVIL&nbsp;INFRASTRUCTURE<small>Roads, rail, water and structures — delivered with Tier&nbsp;1 discipline.</small></div>
      <div class="sector" data-r data-d="2">DEFENCE<small>Delivery lineage across DIT and Defence-adjacent civils, with Defence-ready governance.</small></div>
    </div>
  </div>
</section>

<section class="sec sec-navy on-navy">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Engagement models</p><h2 class="h-sec">Three ways to bring us in.</h2></div></div>
    ${MODELS}
  </div>
</section>

${ctaBand("Let's talk about your next project.", "Advisory, embedded or end-to-end delivery — engagement scoped to the project in front of you.")}
${footer}`;

/* ================================================================
   PAGE: about.html
   ================================================================ */
const about = head(
  "About — Confluent Group | Civil &amp; Mining Consultancy, Adelaide",
  "Senior leadership with direct delivery accountability. Meet the directors of Confluent Group — credentialled advisors who have led the projects, plants and contracts they now advise on."
) + header("about.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_CONTOURS}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>About Confluent Group</p>
    <h1 class="h-display" data-r data-d="1">Senior leadership with direct delivery accountability.</h1>
    <p class="lede" data-r data-d="2">Credentialled advisors who have led the projects, plants and contracts they now advise on. Confluent Group partners with Tier&nbsp;1 contractors, resource owners and government to plan, commercialise and execute complex projects end to end.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Why Confluent</p><h2 class="h-sec">What you're actually buying.</h2></div></div>
    <div class="vals">
      <div class="val" data-r><h3>Credentialled leadership</h3><p>Postgraduate and engineering qualifications with senior executive delivery experience.</p></div>
      <div class="val" data-r data-d="1"><h3>Commercial strength</h3><p>MSA negotiation, contract strategy, margin protection and dispute resolution at scale.</p></div>
      <div class="val" data-r data-d="2"><h3>Tier 1 pedigree</h3><p>Delivery lineage across DIT, Defence-adjacent civils and major resources projects.</p></div>
    </div>
  </div>
</section>

<section class="sec sec-tint">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Directors</p><h2 class="h-sec">The people you'll deal with.</h2></div></div>
    <div class="dir">
      <div class="card dir-card" data-r>
        <img class="headshot" src="assets/morgan-taylor.jpg" alt="Morgan Taylor" width="512" height="512" loading="lazy" decoding="async">
        <span class="role">Director &middot; Mining &amp; Commercial</span>
        <h3>Morgan Taylor</h3>
        <p class="cred">MBA</p>
        <p class="bio">A career path spanning Defence, civil infrastructure, processing and open cut mining. Senior executive experience at South Australia's largest open cut miner — overseeing production, maintenance and crushing operations. Founder of a South Australian crushing and screening business, with delivery lead experience on Tier&nbsp;1 infrastructure.</p>
        <ul class="str">
          <li>Commercial and operational integration</li>
          <li>MSA negotiation and contract strategy</li>
          <li>Margin protection</li>
          <li>Fleet and plant optimisation</li>
          <li>Execution and governance</li>
        </ul>
      </div>
      <div class="card dir-card" data-r data-d="1">
        <img class="headshot" src="assets/michael-pastore.jpg" alt="Michael Pastore" width="512" height="512" loading="lazy" decoding="async">
        <span class="role">Director &middot; Construction</span>
        <h3>Michael Pastore</h3>
        <p class="cred">BEng (Hons) &middot; Building Work Supervisor — Civil Construction (BLD 321368)</p>
        <p class="bio">Civil construction specialist with delivery experience across contractor environments ranging from Tier&nbsp;1 to Tier&nbsp;3. A proven track record across earthworks, structures, mining, defence and infrastructure projects.</p>
        <ul class="str">
          <li>Large-scale civil earthworks and infrastructure delivery</li>
          <li>Subcontractor and supplier management</li>
          <li>Production discipline in Tier&nbsp;1 environments</li>
          <li>Commercial controls</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Systems, safety &amp; compliance</p><h2 class="h-sec">Governance you can put in a tender.</h2></div></div>
    <ul class="sys">
      <li data-r>WHS systems aligned to ISO&nbsp;45001 principles</li>
      <li data-r data-d="1">DIT prequalification pathway and Defence-ready governance</li>
      <li data-r>Tier&nbsp;1 contractor SMS and permit-to-work integration</li>
      <li data-r data-d="1">Risk-based assurance, audit and contract governance</li>
      <li data-r>Environmental management aligned to ISO&nbsp;14001 principles</li>
    </ul>
  </div>
</section>
${STATS}
<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Engagement models</p><h2 class="h-sec">Bring us in at the right depth.</h2></div></div>
    ${MODELS}
  </div>
</section>
${ctaBand("Talk directly to a director.", "No account managers, no hand-offs — the people on this page are the people on your project.")}
${footer}`;

/* ================================================================
   PAGE: mining.html
   ================================================================ */
const mining = head(
  "Mining Operations &amp; Processing Advisory — Confluent Group",
  "Mining operations and optimisation, and crushing and processing advisory — from directors who have overseen production, maintenance and crushing operations at South Australia's largest open cut miner."
) + header("mining.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_BENCHES}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Sector — Mining</p>
    <h1 class="h-display" data-r data-d="1">From pit to processing.</h1>
    <p class="lede" data-r data-d="2">Mining operations and optimisation, and crushing and processing advisory — led by a director with senior executive experience overseeing production, maintenance and crushing operations at South Australia's largest open cut miner.</p>
    <div class="cta-row" data-r data-d="3">
      <a class="btn btn-light" href="contact.html">Discuss your operation <span class="arr">&rarr;</span></a>
      <a class="btn btn-ghost" href="projects.html">Representative experience</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="svc-block">
      <div data-r>
        <span class="num">01</span>
        <h3>Mining Operations &amp; Optimisation</h3>
        <p class="lead-line">Production systems that hold up shift after shift — and the commercial discipline to know what each improvement is worth.</p>
      </div>
      <ul class="svc-list" data-r data-d="1">
        <li>Multi-bench open cut development and production management</li>
        <li>Pit design review, bench sequencing and strip ratio optimisation</li>
        <li>Drill and blast oversight, grade control and ROM feed planning</li>
        <li>Fleet productivity and haulage cycle optimisation</li>
        <li>Fleet and plant optimisation, execution and governance</li>
      </ul>
    </div>
    <div class="svc-block">
      <div data-r>
        <span class="num">02</span>
        <h3>Crushing &amp; Processing Advisory</h3>
        <p class="lead-line">Advisory grounded in having run crushing operations — and in having founded and built a South Australian crushing and screening business.</p>
      </div>
      <ul class="svc-list" data-r data-d="1">
        <li>ROM wall construction and fixed crushing plant installation</li>
        <li>Platform earthworks, retaining structures and pad preparation</li>
        <li>Structural, mechanical and conveyor installation oversight</li>
        <li>Commissioning support and production ramp-up</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec-tint">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Representative experience</p><h2 class="h-sec">Work of this type and scale.</h2></div></div>
    ${DISCLAIMER}
    <div class="grid2" style="margin-top:2rem">
      ${proj("Mining Operations", "Open Cut Pit Development", [
        "Multi-bench open cut development and production management",
        "Pit design review, bench sequencing and strip ratio optimisation",
        "Drill and blast oversight, grade control and ROM feed planning",
        "Fleet productivity and haulage cycle optimisation",
      ])}
      ${proj("Crushing &amp; Processing", "ROM Wall &amp; Fixed Plant", [
        "ROM wall construction and fixed crushing plant installation",
        "Platform earthworks, retaining structures and pad preparation",
        "Structural, mechanical and conveyor installation oversight",
        "Commissioning support and production ramp-up",
      ], 1)}
    </div>
  </div>
</section>
${ctaBand("Talk to us about your operation.", "Scoped studies, embedded leadership or end-to-end oversight — whatever the pit or the plant needs.")}
${footer}`;

/* ================================================================
   PAGE: civil.html
   ================================================================ */
const civil = head(
  "Civil Infrastructure Delivery &amp; Construction Management — Confluent Group",
  "Civil infrastructure delivery and project & construction management — earthworks, structures, drainage and pavements with production discipline and commercial controls proven in Tier 1 environments."
) + header("civil.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_ROAD}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Sector — Civil Infrastructure</p>
    <h1 class="h-display" data-r data-d="1">Civil infrastructure, delivered end to end.</h1>
    <p class="lede" data-r data-d="2">Delivery and construction management across earthworks, structures, drainage and pavements — with production discipline and commercial controls proven in Tier&nbsp;1 environments, from roads and rail to water infrastructure.</p>
    <div class="cta-row" data-r data-d="3">
      <a class="btn btn-light" href="contact.html">Discuss your project <span class="arr">&rarr;</span></a>
      <a class="btn btn-ghost" href="projects.html">Representative experience</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="svc-block">
      <div data-r>
        <span class="num">03</span>
        <h3>Civil Infrastructure Delivery</h3>
        <p class="lead-line">Large-scale civil earthworks and infrastructure delivery — including staged construction under live traffic on state-controlled corridors.</p>
      </div>
      <ul class="svc-list" data-r data-d="1">
        <li>Bulk and detailed earthworks, mass haul optimisation and material management</li>
        <li>Pavements, drainage, line-marking, signage and safety barriers</li>
        <li>Structural concrete, piling and structural steel fit-out</li>
        <li>Traffic management and staged construction under live traffic</li>
        <li>Groundwater and construction water management within strict EPA limitations</li>
      </ul>
    </div>
    <div class="svc-block">
      <div data-r>
        <span class="num">04</span>
        <h3>Project &amp; Construction Management</h3>
        <p class="lead-line">The management layer that keeps a job moving — staging, program, temporary works and the interfaces between crews, subcontractors and suppliers.</p>
      </div>
      <ul class="svc-list" data-r data-d="1">
        <li>Detailed construction staging and program management</li>
        <li>Subcontractor and supplier management</li>
        <li>Management of self-performed and subcontracted works</li>
        <li>Temporary works planning, oversight and delivery</li>
        <li>Site establishment — workshops, offices, laydown, hardstands and services reticulation</li>
        <li>Stakeholder management and communication</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec-tint">
  <div class="wrap">
    <div class="sec-head">
      <div data-r><p class="eyebrow">Representative experience</p><h2 class="h-sec">Work of this type and scale.</h2></div>
      <a class="btn btn-ghost-dark" href="projects.html" data-r>All experience <span class="arr">&rarr;</span></a>
    </div>
    ${DISCLAIMER}
    <div class="grid2" style="margin-top:2rem">
      ${proj("Civil Infrastructure", "Highway Intersection Upgrade", [
        "Intersection upgrade on a remote state-controlled highway corridor",
        "Pavement design, line-marking, signage and safety barriers",
        "Traffic management and staged construction under live traffic",
      ])}
      ${proj("Rail Construction", "Bulk &amp; Detailed Earthworks", [
        "Topsoil management and rehabilitation in culturally and environmentally sensitive locations",
        "Mass haul optimisation and material management",
        "Management of self-performed and subcontracted works",
      ], 1)}
      ${proj("Concrete Construction", "Structural Concrete", [
        "Coordination of formwork, reinforcement and concrete works",
        "Complex structural cast-in and post-tensioned works",
        "Temporary works planning, oversight and delivery",
      ])}
      ${proj("Haul Road Structures", "Bridges &amp; Overpasses", [
        "Advanced staging accelerating operational readiness with minimal disruption",
        "Management of piling, concrete, earthwork, pavement and sealing works",
        "Procurement of international structural steel and local precast elements",
      ], 1)}
    </div>
  </div>
</section>
${ctaBand("Bring delivery discipline to your next job.", "From site establishment to handover — advisory, embedded or full delivery oversight.")}
${footer}`;

/* ================================================================
   PAGE: advisory.html
   ================================================================ */
const advisory = head(
  "Commercial &amp; Contract Advisory — Confluent Group",
  "MSA negotiation, contract strategy, margin protection and dispute resolution at scale — plus constructability and program management from people who have delivered in Tier 1 environments."
) + header("advisory.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_PROGRAM}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Commercial &amp; Advisory</p>
    <h1 class="h-display" data-r data-d="1">Commercial strength, at the table.</h1>
    <p class="lede" data-r data-d="2">MSA negotiation, contract strategy, margin protection and dispute resolution at scale — backed by constructability and program management from people who have carried delivery accountability themselves.</p>
    <div class="cta-row" data-r data-d="3">
      <a class="btn btn-light" href="contact.html">Get a commercial review <span class="arr">&rarr;</span></a>
      <a class="btn btn-ghost" href="about.html">Meet the directors</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="svc-block">
      <div data-r>
        <span class="num">05</span>
        <h3>Commercial &amp; Contract Advisory</h3>
        <p class="lead-line">The commercial side of delivery, handled by people who have negotiated and governed it at scale.</p>
      </div>
      <ul class="svc-list" data-r data-d="1">
        <li>MSA negotiation and contract strategy</li>
        <li>Margin protection</li>
        <li>Dispute resolution at scale</li>
        <li>Commercial and operational integration</li>
        <li>Risk-based assurance, audit and contract governance</li>
      </ul>
    </div>
    <div class="svc-block">
      <div data-r>
        <span class="num">06</span>
        <h3>Constructability &amp; Program Management</h3>
        <p class="lead-line">Plans that survive contact with site — sequencing, staging and governance built from delivery experience, not theory.</p>
      </div>
      <ul class="svc-list" data-r data-d="1">
        <li>Constructability review and detailed project sequencing</li>
        <li>Detailed construction staging and program management</li>
        <li>Crew availability and utilisation optimisation</li>
        <li>Production discipline and commercial controls</li>
        <li>Execution and governance</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec-navy on-navy">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Engagement models</p><h2 class="h-sec">Advisory is a starting point, not a ceiling.</h2></div></div>
    ${MODELS}
  </div>
</section>
${ctaBand("Put a delivery mind on your commercial problem.", "Scoped commercial reviews, contract strategy or embedded leadership — talk it through with a director.")}
${footer}`;

/* ================================================================
   PAGE: projects.html
   ================================================================ */
const projects = head(
  "Project Experience — Confluent Group",
  "Representative project exposure across civil infrastructure and open cut mining — delivery, commercial and operational outcomes on projects of this type and scale in Tier 1 environments."
) + header("projects.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_GRID}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Project experience</p>
    <h1 class="h-display" data-r data-d="1">Work of this type and scale.</h1>
    <p class="lede" data-r data-d="2">Representative project exposure across civil infrastructure and open cut mining. Our directors have led delivery, commercial and operational outcomes on projects of this type and scale in Tier&nbsp;1 environments.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid2">
      ${proj("Civil Infrastructure", "Highway Intersection Upgrade", [
        "Intersection upgrade on a remote state-controlled highway corridor",
        "Pavement design, line-marking, signage and safety barriers",
        "Traffic management and staged construction under live traffic",
        "Earthworks, drainage and asphalt wearing course",
      ])}
      ${proj("Mining Operations", "Open Cut Pit Development", [
        "Multi-bench open cut development and production management",
        "Pit design review, bench sequencing and strip ratio optimisation",
        "Drill and blast oversight, grade control and ROM feed planning",
        "Fleet productivity and haulage cycle optimisation",
      ], 1)}
      ${proj("Crushing &amp; Processing", "ROM Wall &amp; Fixed Plant", [
        "ROM wall construction and fixed crushing plant installation",
        "Platform earthworks, retaining structures and pad preparation",
        "Structural, mechanical and conveyor installation oversight",
        "Commissioning support and production ramp-up",
      ])}
      ${proj("Project Management", "Site Establishment &amp; Facilities", [
        "Site establishment including workshops, offices and laydown",
        "Heavy vehicle hardstands, fuel farm and wash-down facilities",
        "Services reticulation, power distribution and communications",
        "Fencing, bunding and environmental controls",
      ], 1)}
      ${proj("Rail Construction", "Bulk &amp; Detailed Earthworks", [
        "Topsoil management and rehabilitation in culturally and environmentally sensitive locations",
        "Mass haul optimisation and material management",
        "CSP culvert procurement and installation",
        "Construction water assessment and management",
        "Management of self-performed and subcontracted works",
      ])}
      ${proj("Concrete Construction", "Structural Concrete", [
        "Detailed construction staging and program management",
        "Coordination of formwork, reinforcement and concrete works",
        "Temporary works planning, oversight and delivery",
        "Complex structural cast-in and post-tensioned works",
        "Crew availability and utilisation optimisation",
      ], 1)}
      ${proj("Water Infrastructure", "Regulator &amp; Fishway Structures", [
        "Piling works, including precast driven and sheet piles for temporary and permanent applications",
        "Groundwater management, testing, treatment and discharge within strict EPA limitations",
        "Detailed project sequencing and construction",
        "Concrete works and structural steel fit-out",
        "Mechanical commissioning and testing",
      ])}
      ${proj("Haul Road Structures", "Bridges &amp; Overpasses", [
        "Advanced staging accelerating operational readiness with minimal disruption",
        "Remote concrete batch plant management",
        "Procurement of international structural steel and local precast elements",
        "Management of piling, concrete, earthwork, pavement and sealing works",
        "Stakeholder management and communication",
      ], 1)}
    </div>
  </div>
</section>
${STATS}
${ctaBand("Planning a project like these?", "Talk to a director about advisory, embedded leadership or end-to-end delivery.")}
${footer}`;

/* ================================================================
   PAGE: contact.html
   ================================================================ */
const contact = head(
  "Contact — Confluent Group | Adelaide, South Australia",
  "Start a conversation with Confluent Group — a South Australian civil and mining consultancy. Advisory, embedded leadership or end-to-end delivery."
) + header("contact.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_CONTOURS}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Contact</p>
    <h1 class="h-display" data-r data-d="1">Start a conversation.</h1>
    <p class="lede" data-r data-d="2">Tell us about the project, the plant or the contract in front of you — a director will come back to you directly.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap contact-grid">
    <div data-r>
      <p class="eyebrow">Direct</p>
      <h2 class="h-sub">You deal with a director from the first call.</h2>
      <div class="c-line"><span class="k">Email</span><a href="mailto:info@confluentgroup.com.au">info@confluentgroup.com.au</a></div>
      <div class="c-line"><span class="k">Phone</span><a href="tel:+61425014666">0425 014 666</a></div>
      <div class="c-line"><span class="k">Location</span><span class="plain">Adelaide, South Australia &middot; national reach</span></div>
      <div class="c-line"><span class="k">Engagement</span><span class="plain">Advisory &middot; Embedded &middot; Delivery</span></div>
    </div>
    <div class="form" data-r data-d="1">
      <div class="f-row">
        <div class="f-field"><label for="f-name">Name</label><input id="f-name" type="text" autocomplete="name"></div>
        <div class="f-field"><label for="f-co">Company</label><input id="f-co" type="text" autocomplete="organization"></div>
      </div>
      <div class="f-row">
        <div class="f-field"><label for="f-email">Email</label><input id="f-email" type="email" autocomplete="email"></div>
        <div class="f-field"><label for="f-phone">Phone</label><input id="f-phone" type="tel" autocomplete="tel"></div>
      </div>
      <div class="f-field"><label for="f-model">How would you bring us in?</label>
        <select id="f-model"><option>Not sure yet</option><option>Advisory — a scoped study or review</option><option>Embedded — interim leadership or PM</option><option>Delivery — end-to-end execution</option></select>
      </div>
      <div class="f-field"><label for="f-msg">The project in front of you</label><textarea id="f-msg" rows="4"></textarea></div>
      <a class="btn btn-solid" href="mailto:info@confluentgroup.com.au?subject=Project%20enquiry%20%E2%80%94%20via%20confluentgroup.com.au">Send enquiry <span class="arr">&rarr;</span></a>
      <p class="fnote">Concept note: on the live site this form delivers straight to your inbox with spam protection — shown here as a design preview.</p>
    </div>
  </div>
</section>
${ctaBand("Prefer email?", "Send through the project, the tender or the question — we'll come back to you directly.")}
${footer}`;

/* ================================================================
   PAGE: careers.html
   Sourced: Michael's 2026-08-16 email — "host an open avenue for
   engineers / project managers to apply for advertised positions",
   "aim is to grow and bring on additional project managers / engineers".
   The role card is a clearly-labelled EXAMPLE (design preview) — no real
   listing exists yet, so none is claimed.
   ================================================================ */
const careers = head(
  "Careers — Confluent Group | Project Managers &amp; Engineers",
  "Careers with Confluent Group — experienced project managers and engineers for civil and mining delivery, Adelaide, South Australia. Advertised positions and expressions of interest."
) + header("careers.html") + `
<section class="hero hero-sm on-navy">
  <div class="art">${ART_PROGRAM}</div>
  <div class="wrap hero-in">
    <p class="eyebrow" data-r>Careers</p>
    <h1 class="h-display" data-r data-d="1">Careers built on delivery.</h1>
    <p class="lede" data-r data-d="2">Confluent Group is growing — bringing experienced project managers and engineers into civil and mining delivery. Advertised positions are posted on this page; when nothing is open, register your interest and a director will come back to you directly.</p>
    <div class="cta-row" data-r data-d="3">
      <a class="btn btn-light" href="#register">Register your interest <span class="arr">&rarr;</span></a>
      <a class="btn btn-ghost" href="about.html">Meet the directors</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Current opportunities</p><h2 class="h-sec">Advertised positions.</h2></div></div>
    <div class="grid2">
      <div class="card" data-r>
        <h3>No positions are currently advertised.</h3>
        <p class="d">New roles are posted here as they open. Register your interest below — when a role fits your background, we'll already know each other.</p>
        <a class="go" href="#register">Register your interest <span class="arr">&rarr;</span></a>
      </div>
      <article class="card proj" data-r data-d="1">
        <span class="tag">Example listing &middot; design preview</span>
        <h3>Senior Project Manager — Civil Infrastructure</h3>
        <p class="d">Adelaide SA &middot; Full-time &middot; Applications close 30 September</p>
        <ul>
          <li>Lead delivery on a state infrastructure project</li>
          <li>Own the program, commercial position and client relationship</li>
          <li>Tier 1 delivery experience well regarded</li>
        </ul>
        <p class="fnote">Shown as a design preview — how an advertised role appears on the live site.</p>
      </article>
    </div>
  </div>
</section>

<section class="sec sec-navy on-navy">
  <div class="wrap">
    <div class="sec-head"><div data-r><p class="eyebrow">Why Confluent</p><h2 class="h-sec">Senior work, done properly.</h2></div></div>
    <div class="grid3">
      <div class="card model" data-r><span class="tag">LINEAGE</span><h3>Tier 1 contractor experience</h3><p class="d">Work alongside directors who have led delivery, commercial and operational outcomes in Tier&nbsp;1 environments.</p></div>
      <div class="card model" data-r data-d="1"><span class="tag">BREADTH</span><h3>Mining, civil infrastructure and defence</h3><p class="d">Project exposure across sectors — open cut mining, state infrastructure and defence environments.</p></div>
      <div class="card model" data-r data-d="2"><span class="tag">MODEL</span><h3>Embedded with real clients</h3><p class="d">Advisory, embedded and delivery engagements — professional work inside real project teams.</p></div>
    </div>
  </div>
</section>

<section class="sec" id="register">
  <div class="wrap contact-grid">
    <div data-r>
      <p class="eyebrow">Expressions of interest</p>
      <h2 class="h-sub">When a role fits, we'll already know each other.</h2>
      <div class="c-line"><span class="k">Email</span><a href="mailto:info@confluentgroup.com.au">info@confluentgroup.com.au</a></div>
      <div class="c-line"><span class="k">Phone</span><a href="tel:+61425014666">0425 014 666</a></div>
      <div class="c-line"><span class="k">Location</span><span class="plain">Adelaide, South Australia &middot; national reach</span></div>
      <div class="c-line"><span class="k">Disciplines</span><span class="plain">Project management &middot; Engineering &middot; Commercial &amp; contracts</span></div>
    </div>
    <div class="form" data-r data-d="1">
      <div class="f-row">
        <div class="f-field"><label for="c-name">Name</label><input id="c-name" type="text" autocomplete="name"></div>
        <div class="f-field"><label for="c-phone">Phone</label><input id="c-phone" type="tel" autocomplete="tel"></div>
      </div>
      <div class="f-field"><label for="c-email">Email</label><input id="c-email" type="email" autocomplete="email"></div>
      <div class="f-field"><label for="c-disc">Discipline</label>
        <select id="c-disc"><option>Project management</option><option>Engineering</option><option>Commercial &amp; contracts</option><option>Other</option></select>
      </div>
      <div class="f-field"><label for="c-bg">Your background</label><textarea id="c-bg" rows="4"></textarea></div>
      <a class="btn btn-solid" href="mailto:info@confluentgroup.com.au?subject=Expression%20of%20interest%20%E2%80%94%20via%20confluentgroup.com.au">Register your interest <span class="arr">&rarr;</span></a>
      <p class="fnote">Concept note: on the live site this form delivers straight to your inbox with spam protection — shown here as a design preview.</p>
    </div>
  </div>
</section>
${ctaBand("An experienced PM or engineer?", "Email your CV with a few lines on your background — a director will come back to you directly.")}
${footer}`;

/* ---------- emit ---------- */
const pages = { "index.html": home, "about.html": about, "mining.html": mining, "civil.html": civil, "advisory.html": advisory, "projects.html": projects, "careers.html": careers, "contact.html": contact };
for (const [name, html] of Object.entries(pages)) writeFileSync(new URL(name, import.meta.url), html);
console.log("Built:", Object.keys(pages).join(", "));
