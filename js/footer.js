/*! HTU CMS site 74166828 */
// ./js/footer.js — HTU 푸터 (HTU CMS 연동판)
// 회사 정보 · 푸터 메뉴 · 패밀리 사이트 · SNS · 정책 링크는 관리자 > 푸터 · 관련 사이트 에서 수정합니다.
(function () {
  const mount = document.getElementById('footer_template');
  if (!mount) return;
  if (document.getElementById('footerElite')) return;

  /* ───────── 기본값 (관리자 연결 실패 시) ───────── */
  const DEFAULT = {
    footer: {
      logo_url: './img/logo-w.png',
      logo_text: 'HTU GLOBAL HOLDINGS',
      slogan: '세계를 더욱 아름답고 건강하게\n만들어가는 뷰티, 헬스 글로벌 플랫폼',
      company: 'HTU GLOBAL HOLDINGS',
      biz_no: '581-81-03408',
      ceo: '이유리',
      address: '강남구 역삼로 114, 현죽빌딩 8층 8016호',
      copyright: 'COPYRIGHT © 2025 HTU GLOBAL HOLDINGS\nALL RIGHTS RESERVED',
      related_label: '패밀리 사이트',
    },
    menus: {
      footer: [
        { label: '회사소개', children: [{ label: '회사소개', url: './introduce.html' }] },
        { label: '대표 인사말', children: [{ label: '대표 인사말', url: './ceo.html' }] },
        { label: '비전 & 철학', children: [{ label: '비전 & 철학', url: './vision.html' }] },
        { label: '산하 독립 연구소', children: [{ label: '비즈니스 혁신 연구소', url: 'https://biznovalab.com', external: true, new_tab: true }] },
        { label: '소식', children: [{ label: 'News & Event', url: './news.html' }, { label: '이벤트', url: './event.html' }, { label: '공지사항', url: './notice.html' }] },
        { label: '오시는 길', children: [{ label: '오시는 길', url: './location.html' }] },
      ],
      related: [
        ['건강소비자 연대', 'http://hcn.or.kr/'], ['비즈니스 혁신 연구소', 'https://biznovalab.com'], ['MAXQ', 'https://www.maxq.kr/'],
        ['MD 저널', 'https://www.mdjournal.kr/'], ['ENDO 저널', 'https://endo365.kr/'], ['헬스컨슈머', 'https://www.healthumer.com/'],
        ['한국뷰티헬시에이징국제교류회', 'https://kbhga.com/'], ['한국헬시에이징학회', 'https://khealthyaging.com/'], ['사피엔스 아일랜드', 'https://www.sapiensland.io/'],
      ].map(function (r) { return { label: r[0], url: r[1], external: true, new_tab: true }; }),
      sns: [],
      policy: [],
    },
  };

  mount.innerHTML = `
<section id="footerElite" aria-label="사이트 푸터" style="position:relative;">
  <style>
    #footerElite{
      --bg:#033b1e;
      --ink:#e5e7eb;
      --muted:#9aa1aa;
      --line:rgba(255,255,255,.08);
      --glass:rgba(255,255,255,.06);
      --max:1280px;
      font-family:Pretendard,"Noto Sans KR",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
      background:var(--bg);
      color:var(--muted);
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
    }

    #footerElite .wrap{
      max-width:var(--max);
      margin:0 auto;
      padding:3.5rem 1.25rem 2.25rem;
    }

    #footerElite .navGrid{
      display:flex;
      align-items:flex-start;
      gap:3rem;
      border-bottom:1px solid var(--line);
      padding-bottom:2rem;
    }

    #footerElite .brandCol{
      flex:0 0 260px;
      display:flex;
      flex-direction:column;
      gap:.9rem;
    }

    #footerElite .logoRow{
      display:flex;
      align-items:center;
    }

    #footerElite .slogan{
      font-size:.92rem;
      line-height:1.55;
    }

    #footerElite .menuRow{
      display:grid;
      grid-template-columns:repeat(5,1fr);
      flex:1 1 0;
      gap:2rem 3rem;
      min-width:0;
    }

    #footerElite .col{
      min-width:0;
    }

    #footerElite h4{
      margin:.1rem 0 .85rem;
      font-size:1rem;
      font-weight:800;
      color:#fff;
      white-space:nowrap;
    }

    #footerElite ul{
      list-style:none;
      margin:0;
      padding:0;
    }

    #footerElite li{
      margin:.48rem 0;
    }

    #footerElite a{
      color:var(--muted);
      text-decoration:none;
      font-size:.92rem;
      transition:color .22s ease;
    }

    #footerElite a:hover{
      color:#fff;
    }

    #footerElite .footBar{
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      gap:1.5rem;
      padding:1.25rem 0 0;
    }

    #footerElite .addr{
      font-size:.86rem;
      line-height:1.7;
      min-width:0;
    }

    #footerElite .corpLine{
      display:flex;
      flex-wrap:wrap;
      gap:.45rem .55rem;
    }

    #footerElite .corpName{
      color:var(--ink);
      font-weight:800;
    }

    #footerElite .sep{
      color:rgba(255,255,255,.22);
    }

    #footerElite .meta b{
      color:#d7dde6;
      font-weight:600;
    }

    #footerElite .copy{
      margin-top:.6rem;
      font-size:.8rem;
      color:#88919c;
    }

    #footerElite .familyArea{
      position:relative;
      flex:0 0 auto;
      min-width:250px;
      display:flex;
      justify-content:flex-end;
    }

    #footerElite .familyDropdown{
      position:relative;
      width:250px;
    }

    #footerElite .familyBtn{
      width:100%;
      height:48px;
      border:1px solid rgba(255,255,255,.14);
      border-radius:999px;
      background:rgba(255,255,255,.045);
      color:#fff;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:0 16px 0 18px;
      font-size:.9rem;
      font-weight:700;
      letter-spacing:-.02em;
      font-family:inherit;
      cursor:pointer;
      backdrop-filter:blur(12px);
      -webkit-backdrop-filter:blur(12px);
      box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
      transition:background .25s ease,border-color .25s ease,transform .25s ease;
    }

    #footerElite .familyBtn:hover{
      background:rgba(255,255,255,.075);
      border-color:rgba(255,255,255,.28);
      transform:translateY(-1px);
    }

    #footerElite .familyIcon{
      width:28px;
      height:28px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(255,255,255,.08);
      transition:transform .28s ease,background .28s ease;
    }

    #footerElite .familyIcon::before{
      content:"";
      width:7px;
      height:7px;
      border-right:2px solid #e5e7eb;
      border-bottom:2px solid #e5e7eb;
      transform:translateY(-2px) rotate(45deg);
    }

    #footerElite .familyDropdown.is-open .familyIcon{
      transform:rotate(180deg);
      background:rgba(255,255,255,.14);
    }

    #footerElite .familyMenu{
      position:absolute;
      right:0;
      bottom:58px;
      width:300px;
      max-height:430px;
      overflow-y:auto;
      padding:8px;
      border-radius:18px;
      background:rgba(247,250,247,.97);
      border:1px solid rgba(255,255,255,.55);
      box-shadow:0 24px 55px rgba(0,0,0,.32);
      opacity:0;
      visibility:hidden;
      transform:translateY(12px) scale(.98);
      transform-origin:bottom right;
      transition:opacity .24s ease, visibility .24s ease, transform .24s ease;
      z-index:30;
    }

    #footerElite .familyMenu::-webkit-scrollbar{
      width:6px;
    }

    #footerElite .familyMenu::-webkit-scrollbar-thumb{
      background:rgba(3,59,30,.28);
      border-radius:999px;
    }

    #footerElite .familyDropdown.is-open .familyMenu{
      opacity:1;
      visibility:visible;
      transform:translateY(0) scale(1);
    }

    #footerElite .familyMenu::after{
      content:"";
      position:absolute;
      right:28px;
      bottom:-7px;
      width:14px;
      height:14px;
      background:rgba(247,250,247,.97);
      transform:rotate(45deg);
      border-right:1px solid rgba(255,255,255,.55);
      border-bottom:1px solid rgba(255,255,255,.55);
    }

    #footerElite .familyMenu a{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:12px 13px;
      border-radius:12px;
      color:#123826;
      font-size:.9rem;
      font-weight:700;
      letter-spacing:-.02em;
      transition:background .2s ease,color .2s ease,transform .2s ease;
    }

    #footerElite .familyMenu a::after{
      content:"↗";
      font-size:.76rem;
      color:rgba(18,56,38,.46);
      transition:transform .2s ease,color .2s ease;
    }

    #footerElite .familyMenu a:hover{
      background:#e7efe9;
      color:#032d19;
      transform:translateX(2px);
    }

    #footerElite .familyMenu a:hover::after{
      transform:translate(2px,-2px);
      color:#032d19;
    }

    @media(max-width:900px){
      #footerElite .navGrid{
        flex-direction:column;
        gap:2rem;
      }

      #footerElite .brandCol{
        flex:none;
        width:100%;
      }

      #footerElite .menuRow{
        grid-template-columns:repeat(3,1fr);
        gap:2rem 2.5rem;
      }

      #footerElite .footBar{
        flex-direction:column;
      }

      #footerElite .familyArea{
        width:100%;
        justify-content:flex-start;
      }

      #footerElite .familyDropdown{
        width:100%;
        max-width:380px;
      }

      #footerElite .familyMenu{
        left:0;
        right:auto;
        width:100%;
        bottom:58px;
        transform-origin:bottom left;
      }

      #footerElite .familyMenu::after{
        left:28px;
        right:auto;
      }
    }

    @media(max-width:600px){
      #footerElite .wrap{
        padding:2.5rem 1.15rem 2rem;
      }

      #footerElite .menuRow{
        grid-template-columns:repeat(2,1fr);
        gap:1.8rem 1.5rem;
      }

      #footerElite .familyDropdown{
        max-width:none;
      }
    }

    /* ===== HTU CMS 추가 ===== */
    #footerElite .slogan{ white-space:pre-line; }
    #footerElite .copy{ white-space:pre-line; }
    #footerElite .logoText{ color:#fff; font-weight:900; font-size:1.3rem; letter-spacing:-.02em; }
    #footerElite .ext{ font-size:.78em; opacity:.6; margin-left:3px; }
    #footerElite .sns{ display:flex; gap:8px; margin-top:.4rem; }
    #footerElite .sns a{ width:36px; height:36px; border-radius:50%; display:grid; place-items:center; color:#e5e7eb;
      background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); transition:background .2s ease, transform .2s ease; }
    #footerElite .sns a:hover{ background:rgba(255,255,255,.14); transform:translateY(-2px); color:#fff; }
    #footerElite .sns svg{ width:16px; height:16px; display:block; }
    #footerElite .policy{ display:flex; flex-wrap:wrap; gap:.3rem 1rem; margin-top:.7rem; }
    #footerElite .policy a{ color:#d7dde6; font-weight:700; font-size:.82rem; }
    #footerElite .policy a:first-child{ color:#7fd3b8; }
    #footerElite .familyArea[hidden]{ display:none; }
    @media(min-width:901px){
      #footerElite .menuRow{ grid-template-columns:repeat(var(--cols,5),minmax(0,1fr)); }
      #footerElite .menuRow.is-dense{ gap:2rem 1.6rem; }
      #footerElite .menuRow.is-dense h4{ white-space:normal; }
    }
  </style>

  <div class="wrap">
    <div class="navGrid">
      <div class="brandCol">
        <div class="logoRow"></div>
        <p class="slogan"></p>
        <div class="sns"></div>
      </div>
      <div class="menuRow"></div>
    </div>

    <div class="footBar">
      <div class="addr">
        <div class="corpLine"></div>
        <div class="policy"></div>
        <div class="copy"></div>
      </div>

      <div class="familyArea">
        <div class="familyDropdown" id="familyDropdown">
          <button type="button" class="familyBtn" id="familyBtn" aria-expanded="false" aria-controls="familyMenu">
            <span class="familyLabel">패밀리 사이트</span>
            <i class="familyIcon" aria-hidden="true"></i>
          </button>
          <div class="familyMenu" id="familyMenu" role="menu"></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

  const root = mount.querySelector('#footerElite');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function linkAttrs(it) {
    var url = String(it.url || '').trim();
    if (!url) return ' href="javascript:void(0);"';
    if (url.charAt(0) === '#' && url.length > 1) url = './index.html' + url;
    var a = ' href="' + esc(url) + '"';
    if (it.new_tab || it.external) a += ' target="_blank" rel="noopener noreferrer"';
    return a;
  }
  var EXT = '<span class="ext" aria-hidden="true">↗</span>';
  var ICON = {
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8ZM9.8 15.1V8.9L15.6 12l-5.8 3.1Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    blog: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6l-2 3-2-3H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3.5 4v6h2.6c1.3 0 2.1-.7 2.1-1.7 0-.7-.4-1.2-1-1.4.5-.2.8-.7.8-1.2C12 7.6 11.3 7 10 7H7.5Zm1.4 1.1h1c.5 0 .8.2.8.6s-.3.6-.8.6h-1V8.1Zm0 2.2h1.1c.6 0 .9.3.9.7s-.3.7-.9.7H8.9v-1.4ZM13.2 7v6h1.4V7h-1.4Zm2.5 2.6v3.4h1.4V9.6h-1.4Zm.7-2.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z"/></svg>',
    kakao: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5c-5 0-9 3.1-9 7 0 2.5 1.7 4.7 4.2 5.9l-.9 3.4c-.1.3.3.6.6.4l4-2.6h1.1c5 0 9-3.1 9-7s-4-7.1-9-7.1Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L5.4 21H2.3l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.5l11.2 14.5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2 1.6 3.4 3.6 3.7v3.1a7 7 0 0 1-3.6-1.1v6.6A6.3 6.3 0 1 1 10.3 9v3.2a3.1 3.1 0 1 0 3.1 3.1V3h3.2Z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
  };

  function toState(layout) {
    if (!layout) return DEFAULT;
    var f = (layout.settings && layout.settings.footer) || {};
    var m = layout.menus || {};
    return {
      footer: Object.assign({}, DEFAULT.footer, f),
      menus: {
        footer: (m.footer && m.footer.length) ? m.footer : DEFAULT.menus.footer,
        related: m.related || [],
        sns: m.sns || [],
        policy: m.policy || [],
      },
    };
  }

  function render(state) {
    var f = state.footer, m = state.menus;

    root.querySelector('.logoRow').innerHTML = f.logo_url
      ? '<img src="' + esc(f.logo_url) + '" alt="' + esc((f.logo_text || 'HTU GLOBAL HOLDINGS') + ' 로고') + '" style="width:200px;">'
      : '<span class="logoText">' + esc(f.logo_text || 'HTU GLOBAL HOLDINGS') + '</span>';
    var slogan = root.querySelector('.slogan');
    slogan.textContent = f.slogan || '';
    slogan.style.display = f.slogan ? '' : 'none';

    root.querySelector('.sns').innerHTML = (m.sns || []).filter(function (s) { return s.url; }).map(function (s) {
      return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '">' + (ICON[s.icon] || ICON.link) + '</a>';
    }).join('');

    var cols = m.footer || [];
    var row = root.querySelector('.menuRow');
    row.style.setProperty('--cols', Math.max(1, Math.min(cols.length, 6)));
    row.classList.toggle('is-dense', cols.length > 5);
    row.innerHTML = cols.map(function (col) {
      var head = col.url ? '<a' + linkAttrs(col) + ' style="color:inherit;font-size:inherit;">' + esc(col.label) + '</a>' : esc(col.label);
      return '<div class="col"><h4>' + head + '</h4><ul>' + (col.children || []).map(function (c) {
        return '<li><a' + linkAttrs(c) + '>' + esc(c.label) + (c.external ? EXT : '') + '</a></li>';
      }).join('') + '</ul></div>';
    }).join('');

    var parts = [];
    if (f.company) parts.push('<span class="corpName">' + esc(f.company) + '</span>');
    [['사업자등록번호', f.biz_no], ['대표', f.ceo], ['주소', f.address], ['TEL', f.tel], ['FAX', f.fax], ['E-mail', f.email]].forEach(function (p) {
      if (p[1]) parts.push('<span class="meta">' + p[0] + ' : <b>' + esc(p[1]) + '</b></span>');
    });
    if (f.extra) parts.push('<span class="meta">' + esc(f.extra) + '</span>');
    root.querySelector('.corpLine').innerHTML = parts.join('<span class="sep">·</span>');

    root.querySelector('.policy').innerHTML = (m.policy || []).map(function (p) { return '<a' + linkAttrs(p) + '>' + esc(p.label) + '</a>'; }).join('');
    root.querySelector('.copy').textContent = f.copyright || '';

    var related = (m.related || []).filter(function (r) { return r.url; });
    var area = root.querySelector('.familyArea');
    area.hidden = !related.length;
    root.querySelector('.familyLabel').textContent = f.related_label || '패밀리 사이트';
    root.querySelector('.familyMenu').innerHTML = related.map(function (r) {
      return '<a' + linkAttrs(r) + ' role="menuitem">' + esc(r.label) + '</a>';
    }).join('');
  }

  /* 패밀리 사이트 드롭다운 (원본 동작) */
  const dropdown = root.querySelector('#familyDropdown');
  const btn = root.querySelector('#familyBtn');
  if (dropdown && btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* 1) 지난 방문 데이터(또는 기본값)로 즉시 표시 → 2) 관리자 최신 데이터로 갱신 */
  var lang = (window.HTU_I18N && window.HTU_I18N.decided && window.HTU_I18N.lang) || (function () { try { return localStorage.getItem('htu_lang') || 'ko'; } catch (e) { return 'ko'; } })();
  var CACHE_KEY = 'htu_layout_v1_' + lang;
  var cached = null;
  try { cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); } catch (e) { }
  render(toState(cached));

  var fetcher = window.__htuFetchLayout;
  var p = fetcher ? fetcher()
    : (window.HTU_CMS_ENDPOINT
      ? (window.HTU_I18N ? window.HTU_I18N.ready : Promise.resolve()).then(function () {
          var u = String(window.HTU_CMS_ENDPOINT).replace(/\/+$/, '') + '/api/public/layout';
          return fetch(window.HTU_I18N ? window.HTU_I18N.q(u) : u, { credentials: 'omit' });
        }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; })
      : Promise.resolve(null));
  p.then(function (layout) {
    if (!layout || !layout.menus) return;
    var norm = { settings: { header: (layout.settings && layout.settings.header) || {}, footer: (layout.settings && layout.settings.footer) || {}, i18n: (layout.settings && layout.settings.i18n) || {} }, menus: layout.menus };
    if (cached && JSON.stringify(cached) === JSON.stringify(norm)) return;
    render(toState(norm));
  });
})();
