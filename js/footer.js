(function () {
  const mount = document.getElementById('footer_template');
  if (!mount) return;

  if (document.getElementById('footerElite')) return;

  mount.innerHTML = `
<section id="footerElite" aria-label="사이트 푸터" style="position:relative;">
<script src="https://kit.fontawesome.com/2d323a629b.js" crossorigin="anonymous"></script>

<style>
#footerElite{
  --bg:#033b1e;--ink:#e5e7eb;--muted:#9aa1aa;--line:rgba(255,255,255,.08);
  --glass:rgba(255,255,255,.06);--max:1280px;
  font-family:Pretendard,"Noto Sans KR",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:var(--bg);color:var(--muted);
}

#footerElite .wrap{max-width:var(--max);margin:0 auto;padding:1.5rem 1.25rem}

#footerElite .navGrid{
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:2.2rem;
  border-bottom:1px solid var(--line);
  padding-bottom:1rem;
}

#footerElite .brandCol{
  grid-column:span 4;
  display:flex;
  flex-direction:column;
  gap:.9rem
}

#footerElite .logoRow{
  display:flex;
  align-items:center
}

#footerElite .footBar{
  display:flex;
  justify-content:space-between;
  gap:1rem;
  padding:1.15rem 0 0;
}

#footerElite .addr{
  font-size:.86rem;
  line-height:1.7
}

#footerElite .corpLine{
  display:flex;
  flex-wrap:wrap;
  gap:.45rem .55rem
}

#footerElite .corpName{
  color:var(--ink);
  font-weight:800
}

#footerElite .corpMeta{
  display:flex;
  flex-wrap:wrap;
  gap:.35rem .55rem;
  color:#b9c0cb
}

#footerElite .sep{
  color:rgba(255,255,255,.22)
}

#footerElite .meta b{
  color:#d7dde6
}

#footerElite .policies{
  display:flex;
  gap:.9rem;
  flex-wrap:wrap;
  margin:0 auto
}

#footerElite .copy{
  margin-top:.6rem;
  font-size:.8rem;
  color:#88919c
}

/* ===============================
📱 모바일 왼쪽 정렬 완전 적용
=============================== */
@media(max-width:760px){

  #footerElite .navGrid{
    grid-template-columns:1fr;
    gap:1.5rem;
    text-align:left;
  }

  #footerElite .brandCol{
    grid-column:1/-1;
    align-items:flex-start;
  }

  #footerElite .footBar{
    flex-direction:column;
    align-items:flex-start;
    text-align:left;
  }

  #footerElite .corpLine{
    flex-direction:column;
    align-items:flex-start;
    gap:.4rem;
  }

  #footerElite .corpMeta{
    flex-direction:column;
    align-items:flex-start;
    gap:.25rem;
  }

  #footerElite .sep{
    display:none;
  }

  #footerElite .meta{
    display:block;
    width:100%;
    font-size:.85rem;
    line-height:1.6;
    text-align:left;
  }

  #footerElite .policies{
    justify-content:flex-start;
    margin-top:.8rem;
  }

  #footerElite .copy{
    margin-top:.7rem;
    text-align:left;
  }
}
</style>

<div class="wrap">
<div class="navGrid">

<div class="brandCol">
<div class="logoRow">
<img src="./img/logo-w.png" alt="비즈니스 혁신 연구소 로고" style="width:200px;">
</div>
</div>

</div>

<div class="footBar">
<div class="addr">

<div class="corpLine"
data-corp=""
data-ceo="이유리"
data-corpno="581-81-03408"
data-bizno="HTU GLOBAL HOLDINGS">

<span class="corpName" id="corpName"></span>

<span class="corpMeta">
<span class="sep">·</span>
<span class="meta">회사명 : <b id="bizNo">HTU </b></span>

<span class="sep">·</span>
<span class="meta">법인 : <b id="corpNo">110-230-129994</b></span>

<span class="sep">·</span>
<span class="meta">대표 : <b id="corpCEO">강영수</b></span>

<span class="sep">·</span>
<span class="meta">주소 : <b>강남구 역삼로 114, 현죽빌딩 8층 8016호</b></span>
</span>

</div>



<div class="copy">
COPYRIGHT © 2025 HTU GLOBAL HOLDINGS<br>
ALL RIGHTS RESERVED
</div>

</div>
</div>
</div>

</section>
`;

  const root = mount.querySelector('.corpLine');
  if (!root) return;

  const map = {
    corpName: root.dataset.corp,
    corpCEO: root.dataset.ceo,
    corpNo: root.dataset.corpno,
    bizNo: root.dataset.bizno
  };

  Object.entries(map).forEach(([id, value]) => {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
})();