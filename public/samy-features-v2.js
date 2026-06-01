
// ── SCROLL ──
const featRoot=document.getElementById('feat-page-root');
if(featRoot){
  const obs=new IntersectionObserver(e=>e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('vis');}),{threshold:.1});
  featRoot.querySelectorAll('.fu').forEach(el=>obs.observe(el));
  setTimeout(()=>featRoot.querySelectorAll('.fu').forEach(el=>el.classList.add('vis')),80);
}

// ── FILTER ──
function filterCat(cat,el){ const root=document.getElementById('feat-page-root'); if(!root||!el)return;
  root.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  root.querySelectorAll('.b-card').forEach(c=>{
    const show=cat==='all'||c.dataset.cat===cat;
    c.style.opacity=show?'1':'0.2';
    c.style.pointerEvents=show?'all':'none';
  });
}

// ── OVERLAY HELPERS ──
const overlay=document.getElementById('feat-overlay');
function openOverlay(){ if(!overlay) return; overlay.classList.add('open'); document.body.style.overflow='hidden'; }
function closeOverlay(){ if(overlay) overlay.classList.remove('open'); document.body.style.overflow=''; resetBuilder(); }
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOverlay();});

function featLang(){return window.__FEAT_LANG__||'en';}
function ff(k,fb){const l=featLang();const p=window.__FEAT_FLOW__;return (p&&p[l]&&p[l][k])||(p&&p.en&&p.en[k])||fb;}
function featInfoPanel(id){const l=featLang();const p=window.__FEAT_INFO__;return (p&&p[l]&&p[l][id])||(p&&p.en&&p.en[id])||(typeof infoData!=='undefined'?infoData[id]:null);}

// ══════════════════════════════════
// FLOW BUILDER — FULL INTERACTIVE
// ══════════════════════════════════
function openFlow(){
  if(typeof window.buildFeatFlowOverlay==='function'){
    document.getElementById('feat-overlay-content').innerHTML=window.buildFeatFlowOverlay();
    openOverlay();
    initBuilder();
    return;
  }
  document.getElementById('feat-overlay-content').innerHTML=`
    <div class="fb-overlay">
      <div class="fb-overlay-nav">
        <button class="fb-back" onclick="closeOverlay()">← Back to features</button>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-size:12px;font-family:var(--font-body);color:var(--muted);">Flow Builder — Interactive Demo</div>
          <button class="fb-close" onclick="closeOverlay()">×</button>
        </div>
      </div>
      <div class="fb-content">
        <div class="status-bar">
          <div class="status-chips">
            <div class="status-chip" id="chip-nodes"><span class="chip-dot"></span><span id="chip-nodes-txt">0 nodes</span></div>
            <div class="status-chip" id="chip-conn"><span class="chip-dot"></span><span id="chip-conn-txt">0 connections</span></div>
            <div class="status-chip" id="chip-status"><span class="chip-dot"></span><span>Draft</span></div>
          </div>
          <span class="hint-text" id="hint-text">← Drag a node onto the canvas to start</span>
        </div>
        <div class="builder-wrap" id="builder">
          <div class="sidebar-left">
            <div class="sidebar-title">Nodes</div>
            <div style="flex:1;overflow-y:auto;padding:6px 0;">
              <div class="tool-group">
                <div class="tool-group-label">Triggers</div>
                <div class="tool-node" draggable="true" data-type="trigger" data-label="User Message">
                  <div class="node-icon ni-trigger"><svg viewBox="0 0 16 16"><path d="M8 2v4l3 1.5" stroke="#EF9F27"/><circle cx="8" cy="8" r="6" stroke="#EF9F27"/></svg></div>
                  <div><div class="node-label">User Message</div><div class="node-desc">Any incoming msg</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="trigger" data-label="Keyword Match">
                  <div class="node-icon ni-trigger"><svg viewBox="0 0 16 16"><path d="M3 8h10M6 5l-3 3 3 3" stroke="#EF9F27"/></svg></div>
                  <div><div class="node-label">Keyword Match</div><div class="node-desc">When user says...</div></div>
                </div>
              </div>
              <div class="tool-group">
                <div class="tool-group-label">Actions</div>
                <div class="tool-node" draggable="true" data-type="message" data-label="Send Message">
                  <div class="node-icon ni-message"><svg viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="9" rx="2" stroke="#7F77DD"/><path d="M5 7h6M5 10h4" stroke="#7F77DD"/></svg></div>
                  <div><div class="node-label">Send Message</div><div class="node-desc">Text, image, card</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="question" data-label="Ask Question">
                  <div class="node-icon ni-question"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="#378ADD"/><path d="M8 5.5c0-1 1.5-1 1.5 0C9.5 7 8 7 8 8.5M8 10.5v.5" stroke="#378ADD"/></svg></div>
                  <div><div class="node-label">Ask Question</div><div class="node-desc">Wait for answer</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="condition" data-label="Condition">
                  <div class="node-icon ni-condition"><svg viewBox="0 0 16 16"><path d="M8 2v4M4 10l4-4 4 4M4 14h8" stroke="#D85A30"/></svg></div>
                  <div><div class="node-label">Condition</div><div class="node-desc">If / else logic</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="action" data-label="API Action">
                  <div class="node-icon ni-action"><svg viewBox="0 0 16 16"><rect x="2" y="5" width="5" height="6" rx="1" stroke="#1D9E75"/><rect x="9" y="5" width="5" height="6" rx="1" stroke="#1D9E75"/><path d="M7 8h2" stroke="#1D9E75"/></svg></div>
                  <div><div class="node-label">API Action</div><div class="node-desc">Call webhook/API</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="handoff" data-label="Human Handoff">
                  <div class="node-icon ni-handoff"><svg viewBox="0 0 16 16"><circle cx="6" cy="5" r="2.5" stroke="#D4537E"/><path d="M2 13c0-2.5 1.8-4 4-4M10 9l2 2 2-2M12 11V7" stroke="#D4537E"/></svg></div>
                  <div><div class="node-label">Human Handoff</div><div class="node-desc">Transfer to agent</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="canvas-area" id="canvas">
            <div class="canvas-toolbar">
              <div class="canvas-label" id="canvas-label">New Flow — Untitled</div>
              <div class="canvas-actions">
                <button class="canvas-btn" onclick="clearCanvas()">Clear</button>
                <button class="canvas-btn" onclick="autoLayout()">Auto Layout</button>
                <button class="canvas-btn run-btn" onclick="runFlow()" id="run-btn">▶ Run</button>
              </div>
            </div>
            <div class="drop-hint" id="drop-hint">
              <div class="drop-hint-icon"><svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#7F77DD" stroke-width="1.5"><path d="M11 4v14M4 11h14"/></svg></div>
              <p>Drag nodes here to build your flow</p>
              <small>Connect them with lines, then hit ▶ Run</small>
            </div>
            <svg id="connections-svg"></svg>
          </div>
          <div class="panel-right">
            <div class="panel-tabs">
              <div class="panel-tab active" onclick="switchTab('props',this)">Props</div>
              <div class="panel-tab" onclick="switchTab('preview',this)">Preview</div>
              <div class="panel-tab" onclick="switchTab('log',this)">Log</div>
            </div>
            <div class="panel-content" id="panel-props">
              <div class="empty-panel">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#9B97C4" stroke-width="1.2"><rect x="4" y="4" width="24" height="24" rx="4"/><path d="M10 16h12M10 21h8M10 11h12"/></svg>
                <p>Select a node to edit its properties</p>
              </div>
            </div>
            <div class="panel-content" id="panel-preview" style="display:none;">
              <div class="chat-preview" id="chat-preview">
                <div class="chat-bubble system">Preview will appear here</div>
                <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:8px;">Run the flow to see the conversation</p>
              </div>
            </div>
            <div class="panel-content" id="panel-log" style="display:none;">
              <div id="log-content"><p style="font-size:10px;color:var(--muted);font-family:var(--font-body);">Waiting for run...</p></div>
            </div>
          </div>
        </div>
        <div class="below-section">
          <div class="info-card">
            <div class="info-card-icon" style="background:var(--amber-dim);border:0.5px solid rgba(239,159,39,0.3);"><svg viewBox="0 0 18 18" stroke="#EF9F27"><path d="M9 2v5l3 1.5"/><circle cx="9" cy="9" r="7"/></svg></div>
            <h3>3 Flow Types</h3>
            <p>Sub Flow, Workflow, and Function Flow — each for a different automation pattern.</p>
          </div>
          <div class="info-card">
            <div class="info-card-icon" style="background:var(--purple-dim);border:0.5px solid var(--purple-border);"><svg viewBox="0 0 18 18" stroke="#7F77DD"><rect x="2" y="5" width="6" height="8" rx="1"/><rect x="10" y="5" width="6" height="8" rx="1"/><path d="M8 9h2"/></svg></div>
            <h3>7 Node Types</h3>
            <p>Send Message, Question, Action, Condition, Split, Email, and Goto — every pattern covered.</p>
          </div>
          <div class="info-card">
            <div class="info-card-icon" style="background:var(--green-dim);border:0.5px solid var(--green-border);"><svg viewBox="0 0 18 18" stroke="#1D9E75"><path d="M3 9h12M9 3v12"/></svg></div>
            <h3>Publish & Draft</h3>
            <p>Edit in Draft — your live bot keeps running until you publish the new version.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  openOverlay();
  initBuilder();
}

// ── BUILDER STATE ──
let nodes=[],connections=[],selectedNode=null,connectingFrom=null,nodeCounter=0;
let isDraggingNode=false,dragOffset={x:0,y:0};

function resetBuilder(){nodes=[];connections=[];selectedNode=null;connectingFrom=null;nodeCounter=0;isDraggingNode=false;}

const NODE_COLORS={
  trigger:{bg:'rgba(239,159,39,0.12)',border:'rgba(239,159,39,0.35)',icon:'#EF9F27',head:'rgba(239,159,39,0.08)'},
  message:{bg:'rgba(127,119,221,0.1)',border:'rgba(127,119,221,0.3)',icon:'#7F77DD',head:'rgba(127,119,221,0.06)'},
  question:{bg:'rgba(55,138,221,0.1)',border:'rgba(55,138,221,0.3)',icon:'#378ADD',head:'rgba(55,138,221,0.06)'},
  condition:{bg:'rgba(216,90,48,0.1)',border:'rgba(216,90,48,0.3)',icon:'#D85A30',head:'rgba(216,90,48,0.06)'},
  action:{bg:'rgba(29,158,117,0.1)',border:'rgba(29,158,117,0.3)',icon:'#1D9E75',head:'rgba(29,158,117,0.06)'},
  handoff:{bg:'rgba(212,83,126,0.1)',border:'rgba(212,83,126,0.3)',icon:'#D4537E',head:'rgba(212,83,126,0.06)'},
};
const NODE_ICONS={
  trigger:`<svg viewBox="0 0 16 16" fill="none" stroke-width="1.8"><path d="M8 2v4l3 1.5"/><circle cx="8" cy="8" r="6"/></svg>`,
  message:`<svg viewBox="0 0 16 16" fill="none" stroke-width="1.8"><rect x="2" y="3" width="12" height="9" rx="2"/><path d="M5 7h6M5 10h4"/></svg>`,
  question:`<svg viewBox="0 0 16 16" fill="none" stroke-width="1.8"><circle cx="8" cy="8" r="6"/><path d="M8 5.5c0-1 1.5-1 1.5 0C9.5 7 8 7 8 8.5M8 10.5v.5"/></svg>`,
  condition:`<svg viewBox="0 0 16 16" fill="none" stroke-width="1.8"><path d="M8 2v4M4 10l4-4 4 4M4 14h8"/></svg>`,
  action:`<svg viewBox="0 0 16 16" fill="none" stroke-width="1.8"><rect x="2" y="5" width="5" height="6" rx="1"/><rect x="9" y="5" width="5" height="6" rx="1"/><path d="M7 8h2"/></svg>`,
  handoff:`<svg viewBox="0 0 16 16" fill="none" stroke-width="1.8"><circle cx="6" cy="5" r="2.5"/><path d="M2 13c0-2.5 1.8-4 4-4M10 9l2 2 2-2M12 11V7"/></svg>`,
};
const NODE_DEFAULTS={
  trigger:{fields:[{key:'event',label:'Trigger on',value:'User sends message'}]},
  message:{fields:[{key:'text',label:'Message text',value:'Hello! How can I help you today? 👋'}]},
  question:{fields:[{key:'text',label:'Question',value:'What is your name?'},{key:'save',label:'Save to',value:'{{user_name}}'}]},
  condition:{fields:[{key:'if',label:'If variable',value:'{{user_name}}'},{key:'op',label:'Operator',value:'is not empty'}]},
  action:{fields:[{key:'url',label:'Webhook URL',value:'https://api.example.com/data'},{key:'method',label:'Method',value:'POST'}]},
  handoff:{fields:[{key:'group',label:'Agent group',value:'Support Team'},{key:'msg',label:'Handoff message',value:'Connecting you to an agent...'}]},
};

function initBuilder(){
  setTimeout(()=>{
    setupDragListeners();
    setupCanvasListeners();
    // preload demo nodes
    addNode('trigger',ff('nodeUserMessage','User Message'),30,60);
    setTimeout(()=>{
      addNode('message',ff('nodeSendMessage','Send Message'),210,60);
      setTimeout(()=>{
        addNode('question',ff('nodeAskQuestion','Ask Question'),390,60);
        setTimeout(()=>{
          addNode('condition',ff('nodeCondition','Condition'),570,60);
          const ids=nodes.map(n=>n.id);
          addConnection(ids[0],ids[1]);addConnection(ids[1],ids[2]);addConnection(ids[2],ids[3]);
          selectNode(null);
        },100);
      },100);
    },100);
  },150);
}

function setupDragListeners(){
  document.querySelectorAll('.tool-node').forEach(el=>{
    el.addEventListener('dragstart',e=>{
      e.dataTransfer.setData('type',el.dataset.type);
      e.dataTransfer.setData('label',el.dataset.label);
      const g=document.getElementById('feat-drag-ghost');g.innerHTML=el.outerHTML;g.style.display='block';g.style.width=el.offsetWidth+'px';
      e.dataTransfer.setDragImage(g,60,18);
      el.classList.add('highlight');setTimeout(()=>el.classList.remove('highlight'),600);
    });
    el.addEventListener('dragend',()=>{document.getElementById('feat-drag-ghost').style.display='none';});
  });
  const canvas=document.getElementById('canvas');
  if(!canvas)return;
  canvas.addEventListener('dragover',e=>e.preventDefault());
  canvas.addEventListener('drop',e=>{
    e.preventDefault();
    const type=e.dataTransfer.getData('type'),label=e.dataTransfer.getData('label');
    if(!type)return;
    const r=canvas.getBoundingClientRect();
    addNode(type,label,Math.max(10,e.clientX-r.left-60),Math.max(44,e.clientY-r.top-25));
  });
}

function setupCanvasListeners(){
  const canvas=document.getElementById('canvas');
  if(!canvas)return;
  canvas.addEventListener('mousedown',e=>{if(e.target===canvas||e.target.id==='connections-svg')selectNode(null);});
}

function addNode(type,label,x,y){
  const id='node_'+(++nodeCounter);
  const col=NODE_COLORS[type];
  const defs=NODE_DEFAULTS[type];
  const el=document.createElement('div');
  el.className='c-node';el.id=id;
  el.style.cssText=`left:${x}px;top:${y}px;border-color:${col.border};background:${col.bg};`;
  const fields=JSON.parse(JSON.stringify(defs.fields));
  el.innerHTML=`
    <div class="node-head" style="background:${col.head};border-color:${col.border}20;">
      <div class="node-head-icon" style="background:${col.bg};border:0.5px solid ${col.border};">${NODE_ICONS[type].replace('stroke-width','stroke="'+col.icon+'" stroke-width')}</div>
      <div class="node-head-title">${label}</div>
      <div class="node-head-menu" onclick="deleteNode('${id}')">×</div>
    </div>
    <div class="node-body">${fields.map(f=>`<div class="node-field"><span>${f.value}</span></div>`).join('')}</div>
    <div class="port in" data-node="${id}" data-dir="in"></div>
    <div class="port out" data-node="${id}" data-dir="out"></div>
  `;
  document.getElementById('canvas').appendChild(el);
  nodes.push({id,type,label,x,y,fields,el});
  el.addEventListener('mousedown',e=>{
    if(e.target.classList.contains('port')||e.target.classList.contains('node-head-menu'))return;
    selectNode(id);isDraggingNode=true;
    const r=document.getElementById('canvas').getBoundingClientRect(),n=getNode(id);
    dragOffset={x:e.clientX-r.left-n.x,y:e.clientY-r.top-n.y};e.stopPropagation();
  });
  el.querySelectorAll('.port').forEach(p=>{
    p.addEventListener('mousedown',e=>{e.stopPropagation();if(p.dataset.dir==='out'){connectingFrom=id;p.classList.add('active');}});
    p.addEventListener('mouseup',e=>{if(connectingFrom&&connectingFrom!==id&&p.dataset.dir==='in')addConnection(connectingFrom,id);connectingFrom=null;document.querySelectorAll('.port').forEach(pt=>pt.classList.remove('active'));});
  });
  updateDropHint();updateStatus();selectNode(id);
  showToast(label+' added');
}

document.addEventListener('mousemove',e=>{
  if(!isDraggingNode||!selectedNode)return;
  const canvas=document.getElementById('canvas');if(!canvas)return;
  const r=canvas.getBoundingClientRect(),n=getNode(selectedNode);if(!n)return;
  n.x=Math.max(0,e.clientX-r.left-dragOffset.x);n.y=Math.max(40,e.clientY-r.top-dragOffset.y);
  n.el.style.left=n.x+'px';n.el.style.top=n.y+'px';drawConnections();
});
document.addEventListener('mouseup',()=>{
  isDraggingNode=false;
  if(connectingFrom){connectingFrom=null;document.querySelectorAll('.port').forEach(p=>p.classList.remove('active'));drawConnections();}
});

function addConnection(from,to){
  if(connections.find(c=>c.from===from&&c.to===to))return;
  connections.push({from,to,active:false});drawConnections();updateStatus();showToast('Nodes connected');
}
function drawConnections(){
  const svg=document.getElementById('connections-svg');if(!svg)return;
  svg.innerHTML='';
  const cr=document.getElementById('canvas').getBoundingClientRect();
  connections.forEach(conn=>{
    const f=getNode(conn.from),t=getNode(conn.to);if(!f||!t)return;
    const fr=f.el.getBoundingClientRect(),tr=t.el.getBoundingClientRect();
    const x1=fr.right-cr.left,y1=fr.top+fr.height/2-cr.top,x2=tr.left-cr.left,y2=tr.top+tr.height/2-cr.top;
    const cp=Math.abs(x2-x1)*.5;
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',`M${x1},${y1} C${x1+cp},${y1} ${x2-cp},${y2} ${x2},${y2}`);
    path.setAttribute('class','conn-path'+(conn.active?' active':''));
    svg.appendChild(path);
  });
}
function getNode(id){return nodes.find(n=>n.id===id);}
function selectNode(id){
  selectedNode=id;
  document.querySelectorAll('.c-node').forEach(el=>el.classList.remove('selected'));
  if(id){const n=getNode(id);if(n)n.el.classList.add('selected');renderProps(id);}
  else renderEmptyProps();
}
function renderProps(id){
  const n=getNode(id);if(!n)return;
  const col=NODE_COLORS[n.type];
  let html=`<div class="prop-section"><div class="prop-label">Node Type</div><div style="font-size:11px;color:${col.icon};font-family:var(--font-body);padding:3px 0;">${n.label}</div></div><div class="prop-section"><div class="prop-label">Properties</div>`;
  n.fields.forEach((f,i)=>{
    if(f.key==='method'||f.key==='op'){
      html+=`<div style="margin-bottom:7px;"><div style="font-size:9px;color:var(--muted);margin-bottom:3px;">${f.label}</div><select class="prop-select" onchange="updateField('${id}',${i},this.value)">${(f.key==='method'?['GET','POST','PUT','DELETE']:['is not empty','equals','contains','starts with']).map(v=>`<option ${v===f.value?'selected':''}>${v}</option>`).join('')}</select></div>`;
    }else{
      html+=`<div style="margin-bottom:7px;"><div style="font-size:9px;color:var(--muted);margin-bottom:3px;">${f.label}</div><input class="prop-input" value="${f.value}" oninput="updateField('${id}',${i},this.value)"/></div>`;
    }
  });
  html+=`</div><div class="prop-section"><div class="prop-label">Options</div><div class="prop-toggle"><span>Enabled</span><div class="toggle-sw on" onclick="this.classList.toggle('on')"></div></div><div class="prop-toggle"><span>Log output</span><div class="toggle-sw" onclick="this.classList.toggle('on')"></div></div></div><div style="margin-top:6px;"><button onclick="deleteNode('${id}')" style="width:100%;padding:7px;border-radius:6px;background:rgba(216,90,48,0.08);border:0.5px solid rgba(216,90,48,0.2);color:#F0997B;font-size:11px;cursor:pointer;">Delete Node</button></div>`;
  const pp=document.getElementById('panel-props');if(pp)pp.innerHTML=html;
}
function renderEmptyProps(){const pp=document.getElementById('panel-props');if(pp)pp.innerHTML=`<div class="empty-panel"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#9B97C4" stroke-width="1.2"><rect x="4" y="4" width="24" height="24" rx="4"/><path d="M10 16h12M10 21h8M10 11h12"/></svg><p>Select a node to edit properties</p></div>`;}
function updateField(id,idx,val){const n=getNode(id);if(!n)return;n.fields[idx].value=val;const fs=n.el.querySelectorAll('.node-field span');if(fs[idx])fs[idx].textContent=val;}
function deleteNode(id){connections=connections.filter(c=>c.from!==id&&c.to!==id);nodes=nodes.filter(n=>{if(n.id===id){n.el.remove();return false;}return true;});if(selectedNode===id)selectNode(null);drawConnections();updateStatus();updateDropHint();}
function clearCanvas(){nodes.forEach(n=>n.el.remove());nodes=[];connections=[];selectedNode=null;const svg=document.getElementById('connections-svg');if(svg)svg.innerHTML='';renderEmptyProps();updateStatus();updateDropHint();const cp=document.getElementById('chat-preview');if(cp)cp.innerHTML=`<div class="chat-bubble system">Preview will appear here</div>`;const lc=document.getElementById('log-content');if(lc)lc.innerHTML=`<p style="font-size:10px;color:var(--muted);font-family:var(--font-body);">Waiting for run...</p>`;}
function autoLayout(){if(!nodes.length)return;const cols=Math.ceil(Math.sqrt(nodes.length));nodes.forEach((n,i)=>{n.x=30+i%cols*180;n.y=60+Math.floor(i/cols)*120;n.el.style.left=n.x+'px';n.el.style.top=n.y+'px';});drawConnections();}
async function runFlow(){
  if(!nodes.length){showToast('Add nodes first!');return;}
  const btn=document.getElementById('run-btn');btn.textContent='Running...';btn.disabled=true;
  switchTab('preview',document.querySelectorAll('.panel-tab')[1]);
  const cp=document.getElementById('chat-preview');if(cp)cp.innerHTML='';
  connections.forEach(c=>c.active=true);drawConnections();
  const sorted=[...nodes.filter(n=>n.type==='trigger'),...nodes.filter(n=>n.type!=='trigger').sort((a,b)=>a.x-b.x)];
  for(const n of sorted){n.el.classList.add('running');await sleep(500);await simNode(n);n.el.classList.remove('running');await sleep(150);}
  connections.forEach(c=>c.active=false);drawConnections();
  addChat('system','✓ Flow completed');
  logMsg('Flow finished — '+sorted.length+' nodes executed');
  btn.textContent='▶ Run';btn.disabled=false;showToast('Flow ran!',true);
}
function sortNodes(){return[...nodes.filter(n=>n.type==='trigger'),...nodes.filter(n=>n.type!=='trigger').sort((a,b)=>a.x-b.x)];}
async function simNode(n){
  switch(n.type){
    case 'trigger':addChat('system','⚡ '+n.fields[0].value);addChat('user','Hello!');logMsg('[TRIGGER] '+n.fields[0].value);break;
    case 'message':addTyping();await sleep(700);removeTyping();addChat('bot',n.fields[0].value);logMsg('[MESSAGE] '+n.fields[0].value.substring(0,40));break;
    case 'question':addTyping();await sleep(700);removeTyping();addChat('bot',n.fields[0].value);await sleep(500);addChat('user','Ahmed');logMsg('[QUESTION] '+n.fields[0].value);break;
    case 'condition':addChat('system','⚙ Checking: '+n.fields[0].value+' '+n.fields[1].value);logMsg('[CONDITION] → TRUE');break;
    case 'action':addChat('system','⚡ Calling: '+n.fields[0].value);await sleep(300);addChat('system','✓ 200 OK');logMsg('[ACTION] '+n.fields[1].value+' → 200 OK');break;
    case 'handoff':addTyping();await sleep(500);removeTyping();addChat('bot',n.fields[1].value);await sleep(300);addChat('system','👤 Handoff: '+n.fields[0].value);logMsg('[HANDOFF] → '+n.fields[0].value);break;
  }
}
function addChat(type,text){const cp=document.getElementById('chat-preview');if(!cp)return;const d=document.createElement('div');d.className='chat-bubble '+type;d.textContent=text;d.style.animation='nodeAppear .3s ease forwards';cp.appendChild(d);cp.scrollTop=cp.scrollHeight;}
function addTyping(){const cp=document.getElementById('chat-preview');if(!cp)return;const d=document.createElement('div');d.className='typing-dots';d.id='td';d.innerHTML='<span></span><span></span><span></span>';cp.appendChild(d);cp.scrollTop=cp.scrollHeight;}
function removeTyping(){const t=document.getElementById('td');if(t)t.remove();}
function logMsg(msg){const lc=document.getElementById('log-content');if(!lc)return;const ts=new Date().toLocaleTimeString();lc.innerHTML+=`<div style="font-size:9px;font-family:var(--font-body);color:var(--muted);margin-bottom:5px;"><span style="color:var(--purple);opacity:.6;">${ts}</span> ${msg}</div>`;lc.scrollTop=lc.scrollHeight;}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
function switchTab(name,el){
  const tabs=document.querySelectorAll('.panel-tab');tabs.forEach(t=>t.classList.remove('active'));if(el)el.classList.add('active');
  const pp=document.getElementById('panel-props'),pv=document.getElementById('panel-preview'),pl=document.getElementById('panel-log');
  if(pp)pp.style.display=name==='props'?'':'none';if(pv)pv.style.display=name==='preview'?'':'none';if(pl)pl.style.display=name==='log'?'':'none';
}
function updateStatus(){
  const cn=document.getElementById('chip-nodes-txt'),cc=document.getElementById('chip-conn-txt'),ht=document.getElementById('hint-text');
  const nSing=ff('nodeSingular','node'),nPlur=ff('nodesPlural','nodes'),cSing=ff('connectionSingular','connection'),cPlur=ff('connectionsPlural','connections');
  if(cn)cn.textContent=nodes.length+' '+(nodes.length!==1?nPlur:nSing);
  if(cc)cc.textContent=connections.length+' '+(connections.length!==1?cPlur:cSing);
  const chipN=document.getElementById('chip-nodes'),chipC=document.getElementById('chip-conn');
  if(chipN)chipN.className='status-chip'+(nodes.length?' active':'');
  if(chipC)chipC.className='status-chip'+(connections.length?' active':'');
  if(ht){if(!nodes.length)ht.textContent=ff('hintDragStart','← Drag a node onto the canvas to start');else if(!connections.length)ht.textContent=ff('hintConnect','Connect nodes by dragging from right port to left port');else ht.textContent=ff('hintRun','Click ▶ Run to simulate the flow');}
}
function updateDropHint(){const dh=document.getElementById('drop-hint');if(dh)dh.classList.toggle('hidden',nodes.length>0);}
function showToast(msg,ok){const t=document.getElementById('feat-toast');if(!t)return;t.textContent=msg;t.className='toast'+(ok?' success':'');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000);}

// ══════════════════════════════════
// INFO OVERLAY (other features)
// ══════════════════════════════════
const infoData={
  ai:{
    color:'#378ADD',colorBg:'rgba(55,138,221,0.1)',colorBorder:'rgba(55,138,221,0.25)',
    chip:'AI',title:'AI Hub',titleEm:'Intelligent agents',
    sub:'Full AI agents powered by your knowledge base, with web search and MCP server access. Auto-suggests replies to human agents in real time.',
    demoTitle:'AI agent in action',
    demoHTML:`<div style="display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;font-family:var(--font-body);">System Prompt</div>
      <div style="padding:9px 12px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);font-size:12px;color:var(--muted);line-height:1.5;">You are a helpful sales agent for GIVARI Gallery. Answer only about products in the knowledge base.</div>
      <div style="font-size:11px;color:var(--muted);text-align:center;">↓ Customer asks</div>
      <div style="padding:9px 12px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);font-size:12px;color:var(--text);">عندك الفستان ده بمقاس M؟</div>
      <div style="font-size:11px;color:#378ADD;text-align:center;">→ AI responds in 0.4s (Arabic detected)</div>
      <div style="padding:9px 12px;border-radius:8px;background:rgba(55,138,221,0.1);border:0.5px solid rgba(55,138,221,0.25);font-size:12px;color:var(--text);line-height:1.5;">أيوه! فستان Floral Midi (كود 2241) متوفر بمقاس M. تحبي أضيفه للطلب؟ 🌸</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="padding:3px 9px;border-radius:20px;font-size:10px;background:rgba(29,158,117,0.1);border:0.5px solid rgba(29,158,117,0.25);color:#1D9E75;">✓ KB match</span>
        <span style="padding:3px 9px;border-radius:20px;font-size:10px;background:rgba(55,138,221,0.1);border:0.5px solid rgba(55,138,221,0.25);color:#378ADD;">AR detected</span>
      </div>
    </div>`,
    blocks:[
      {icon:'M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5',color:'#378ADD',bg:'rgba(55,138,221,0.1)',border:'rgba(55,138,221,0.25)',title:'AI Agents',desc:'Full agents with web search, MCP server access, and knowledge base — not just GPT wrappers.'},
      {icon:'M3 4h10M3 8h7M3 12h5',color:'#7F77DD',bg:'var(--pd)',border:'var(--pb)',title:'Auto Suggestions',desc:'AI reads the live conversation and suggests the best reply to your human agent — they click to send.'},
      {icon:'M2 3h12v2H2zM2 7h8M2 11h10',color:'#1D9E75',bg:'var(--green-dim)',border:'var(--green-border)',title:'Knowledge Base',desc:'Upload PDFs, docs, or product catalogs. The bot answers exclusively from your own content.'},
    ]
  },
  channels:{
    color:'#1D9E75',colorBg:'rgba(29,158,117,0.1)',colorBorder:'rgba(29,158,117,0.25)',
    chip:'Channels',title:'Omni Channel',titleEm:'One bot, everywhere',
    sub:'Build your flow once and deploy to 15+ channels automatically. Your customers choose where to talk — you only build once.',
    demoTitle:'Active channels — click to toggle',
    demoHTML:`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;" id="ch-toggle-grid">
      ${[
        {n:'WhatsApp',s:'#25D366',on:true,icon:'<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>'},
        {n:'Instagram',s:'#E1306C',on:true,icon:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>'},
        {n:'Facebook',s:'#1877F2',on:false,icon:'<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>'},
        {n:'Webchat',s:'#7F77DD',on:true,icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'},
        {n:'Voice AI',s:'#EF9F27',on:false,icon:'<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>'},
        {n:'SMS',s:'#9B97C4',on:false,icon:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>'},
        {n:'Telegram',s:'#0088cc',on:false,icon:'<path d="M21.5 2l-9.5 9.5M21.5 2H15M21.5 2V8.5"/><path d="M10 4.5H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5"/>'},
        {n:'TikTok',s:'#D4537E',on:false,icon:'<path d="M9 12a4 4 0 100 8 4 4 0 000-8zM15 3v4a4 4 0 004 4"/>'},
      ].map(c=>`<div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid ${c.on?'rgba(29,158,117,0.35)':'var(--border)'};background:${c.on?'rgba(29,158,117,0.08)':'var(--dark3)'};font-size:10px;color:${c.on?'#1D9E75':'var(--muted)'};cursor:pointer;transition:all .2s;" class="${c.on?'on':''}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${c.on?c.s:'currentColor'}" stroke-width="1.5">${c.icon}</svg>${c.n}</div>`).join('')}
    </div>`,
    blocks:[
      {icon:'M2 12l4-4 3 3 5-6',color:'#1D9E75',bg:'rgba(29,158,117,0.1)',border:'rgba(29,158,117,0.25)',title:'15+ channels',desc:'WhatsApp, Instagram, Facebook, Telegram, Voice AI, SMS, TikTok, Webchat, Viber, Line, and more.'},
      {icon:'M3 3h10v6H3zM5 9v6M9 9v6',color:'#7F77DD',bg:'var(--pd)',border:'var(--pb)',title:'Build once',desc:'One flow, all channels. The same conversation logic runs everywhere without rebuilding.'},
      {icon:'M8 2a6 6 0 100 12A6 6 0 008 2z',color:'#EF9F27',bg:'var(--amber-dim)',border:'rgba(239,159,39,0.25)',title:'Per-channel config',desc:'Each channel has its own settings, compliance rules, templates, and message format.'},
    ]
  },
  live:{
    color:'#D4537E',colorBg:'rgba(212,83,126,0.1)',colorBorder:'rgba(212,83,126,0.25)',
    chip:'Human',title:'Live Chat',titleEm:'Seamless handoff',
    sub:'When the bot hits its limits, your agents step in — with full conversation context, AI suggestions, and a clean queue. No customer ever feels the switch.',
    demoTitle:'Live queue — real-time view',
    demoHTML:`<div style="display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px;font-weight:500;">Active conversations</span><span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--green);"><span class="pdot" style="width:6px;height:6px;"></span>Live</span></div>
      ${[
        {av:'AK',col:'#7F77DD',bg:'rgba(127,119,221,0.15)',name:'Ahmed K.',msg:'order #1234 status',badge:'Bot',bc:'rgba(29,158,117,.12)',bt:'#1D9E75'},
        {av:'SM',col:'#EF9F27',bg:'rgba(239,159,39,0.15)',name:'Sara M.',msg:'damaged item refund',badge:'Handoff',bc:'rgba(239,159,39,.12)',bt:'#EF9F27'},
        {av:'IT',col:'#378ADD',bg:'rgba(55,138,221,0.15)',name:'Ibrahim T.',msg:'product availability',badge:'Agent',bc:'rgba(55,138,221,.12)',bt:'#378ADD'},
      ].map(r=>`<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:9px;background:var(--dark3);border:0.5px solid var(--border);">
        <div style="width:28px;height:28px;border-radius:50%;background:${r.bg};color:${r.col};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">${r.av}</div>
        <div style="flex:1;"><div style="font-size:12px;font-weight:500;">${r.name}</div><div style="font-size:11px;color:var(--muted);">${r.msg}</div></div>
        <span style="font-size:10px;padding:3px 9px;border-radius:10px;background:${r.bc};color:${r.bt};">${r.badge}</span>
      </div>`).join('')}
      <div style="padding:10px 12px;border-radius:9px;background:rgba(127,119,221,0.05);border:0.5px dashed rgba(127,119,221,0.2);font-size:11px;color:var(--muted);">💡 AI suggests: "I'll process your refund within 24 hours. Can I get your order number?"</div>
    </div>`,
    blocks:[
      {icon:'M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5M13 9l2 2 2-2M15 11V7',color:'#D4537E',bg:'rgba(212,83,126,0.1)',border:'rgba(212,83,126,0.25)',title:'Smart handoff',desc:'Bot detects escalation and transfers with full conversation history — agent steps in seamlessly.'},
      {icon:'M2 4h12M6 8h8M4 12h8',color:'#7F77DD',bg:'var(--pd)',border:'var(--pb)',title:'Agent groups',desc:'Route to specific teams — sales, support, or technical — based on intent or keywords.'},
      {icon:'M2 4h10v8H2zM10 8h4v6h-4z',color:'#1D9E75',bg:'var(--green-dim)',border:'var(--green-border)',title:'AI suggestions',desc:'AI reads the conversation and suggests the ideal reply. Agent approves with one click.'},
    ]
  },
  analytics:{
    color:'#D85A30',colorBg:'rgba(216,90,48,0.1)',colorBorder:'rgba(216,90,48,0.25)',
    chip:'Analytics',title:'Analytics',titleEm:'Full visibility',
    sub:'Real-time dashboards on every conversation, agent, and channel. Know what\'s working and what\'s not — before your customers tell you.',
    demoTitle:'Live dashboard snapshot',
    demoHTML:`<div style="display:flex;flex-direction:column;gap:10px;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${[{v:'4,841',l:'Conversations',c:'var(--purple)',d:'↑ 31%'},{v:'78%',l:'Resolution',c:'var(--green)',d:'↑ 5%'},{v:'0.4s',l:'Avg response',c:'var(--amber)',d:'↓ 0.1s'}].map(m=>`<div style="padding:10px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);text-align:center;"><div style="font-size:20px;font-weight:500;font-family:var(--font-body);color:${m.c};">${m.v}</div><div style="font-size:10px;color:var(--muted);">${m.l}</div><div style="font-size:10px;color:var(--green);">${m.d}</div></div>`).join('')}
      </div>
      <div style="display:flex;align-items:flex-end;gap:3px;height:64px;padding:0 2px;">
        ${[28,46,38,65,50,80,60,88,70,76,84,92].map((h,i)=>`<div style="flex:1;border-radius:2px 2px 0 0;height:${h}%;background:${i===11?'var(--purple)':'rgba(127,119,221,0.2)'};border-top:0.5px solid ${i===11?'var(--pb)':'transparent'};"></div>`).join('')}
      </div>
      <div style="font-size:10px;color:var(--muted);text-align:center;font-family:var(--font-body);">Last 30 days</div>
    </div>`,
    blocks:[
      {icon:'M2 12l4-4 4 4 4-8',color:'#D85A30',bg:'rgba(216,90,48,0.1)',border:'rgba(216,90,48,0.25)',title:'Real-time data',desc:'Live dashboards update every 30 seconds — conversations, messages, users, resolution, and response time.'},
      {icon:'M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5',color:'#7F77DD',bg:'var(--pd)',border:'var(--pb)',title:'Agent performance',desc:'Track every agent\'s response time, resolution rate, satisfaction score, and chat volume.'},
      {icon:'M2 4h12v10H2zM5 4v10M9 4v10',color:'#EF9F27',bg:'var(--amber-dim)',border:'rgba(239,159,39,0.25)',title:'Custom reports',desc:'Build your own metrics dashboard. Export data as CSV for any time period.'},
    ]
  },
  integrations:{
    color:'#9B97C4',colorBg:'rgba(155,151,196,0.08)',colorBorder:'rgba(155,151,196,0.2)',
    chip:'Connect',title:'Integrations',titleEm:'30+ connections',
    sub:'Connect Samy to every tool your business already uses. One-click integrations for AI models, ecommerce, payments, CRM, and automation platforms.',
    demoTitle:'Integration map',
    demoHTML:`<div style="display:flex;flex-direction:column;gap:10px;">
      ${[
        {cat:'AI Models',col:'#378ADD',items:['OpenAI','Gemini','Deepseek','X.AI','Coze','Dialogflow']},
        {cat:'Ecommerce',col:'#1D9E75',items:['Shopify','WooCommerce','Facebook Shop']},
        {cat:'Payments',col:'#EF9F27',items:['Stripe','PayPal']},
        {cat:'Automation',col:'#7F77DD',items:['Zapier','Make','Pabbly','Integrately']},
        {cat:'Data',col:'#D85A30',items:['Google Sheets','MySQL','PostgreSQL','Cloudinary']},
      ].map(g=>`<div style="display:flex;align-items:center;gap:8px;">
        <div style="font-size:10px;color:${g.col};width:70px;flex-shrink:0;font-family:var(--font-body);">${g.cat}</div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;">
          ${g.items.map(n=>`<span style="padding:3px 8px;border-radius:4px;font-size:10px;font-weight:500;background:var(--dark3);border:0.5px solid var(--border);color:var(--muted);cursor:pointer;transition:all .15s;" onmouseover="this.style.borderColor='${g.col}';this.style.color='${g.col}';" onmouseout="this.style.borderColor='';this.style.color='';">${n}</span>`).join('')}
        </div>
      </div>`).join('')}
    </div>`,
    blocks:[
      {icon:'M2 5h4v6H2zM10 5h4v6h-4zM6 8h4',color:'#9B97C4',bg:'rgba(155,151,196,0.08)',border:'rgba(155,151,196,0.2)',title:'+30 integrations',desc:'AI, payments, ecommerce, CRM, email, databases, and automation — all connected.'},
      {icon:'M3 3l10 10M13 3L3 13',color:'#7F77DD',bg:'var(--pd)',border:'var(--pb)',title:'Inbound webhooks',desc:'Any external system can trigger Samy flows via a simple HTTP webhook.'},
      {icon:'M5 3h8M9 3v10M5 13h8',color:'#1D9E75',bg:'var(--green-dim)',border:'var(--green-border)',title:'One-click connect',desc:'Most integrations connect in under a minute. Paste your key and you\'re live.'},
    ]
  },
};

function openInfo(id){
  const f=featInfoPanel(id);
  if(!f)return;
  const back=ff('backToFeatures','← Back to features');
  const interactive=ff('interactive','Interactive');
  const tryFree=ff('tryFeatureFree','Try {title} free →').replace('{title}',f.title);
  const allFeat=ff('allFeatures','← All features');
  document.getElementById('feat-overlay-content').innerHTML=`
    <div class="info-overlay-inner">
      <div class="ov-nav">
        <button class="ov-back" onclick="closeOverlay()">${back}</button>
        <button type="button" class="ov-close" onclick="closeOverlay()" aria-label="Close">×</button>
      </div>
      <div class="ov-chip" style="background:${f.colorBg};border:0.5px solid ${f.colorBorder};color:${f.color};">${f.chip}</div>
      <h2 class="ov-title">${f.title} — <em style="color:${f.color};">${f.titleEm}</em></h2>
      <p class="ov-sub">${f.sub}</p>
      <div class="ov-body">
        <div class="ov-demo">
          <div class="ov-demo-head">
            <span class="ov-demo-title">${f.demoTitle}</span>
            <span style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--green);"><span class="pdot" style="width:5px;height:5px;"></span>${interactive}</span>
          </div>
          <div class="ov-demo-body">${f.demoHTML}</div>
        </div>
        <div class="ov-blocks">
          ${f.blocks.map(b=>`<div class="ov-block">
            <div class="ov-block-icon" style="background:${b.bg};border:0.5px solid ${b.border};"><svg viewBox="0 0 16 16" fill="none" stroke="${b.color}" stroke-width="1.6"><path d="${b.icon}"/></svg></div>
            <div class="ov-block-title">${b.title}</div>
            <div class="ov-block-desc">${b.desc}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="ov-cta-bar">
        <button class="btn-try">${tryFree}</button>
        <button class="btn-back" onclick="closeOverlay()">${allFeat}</button>
      </div>
    </div>
  `;
  openOverlay();
}
