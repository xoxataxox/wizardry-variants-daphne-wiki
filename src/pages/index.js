import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="辟邪除妖VA WIKI" description="完整攻略主線、裝備、系統指南">
      <main>
        <h1>辟邪除妖VA WIKI</h1>
        <p>主要會整合所有巴哈和Gamerch上的資訊，方便查閱，不然有的東西真的不好查，當然會附上來源拉</p>
        <p>龜速整合中...</p>
        <h2>快速導航</h2>
        <ul>
          <li><a href="/docs/mainstory/chapter1">主線攻略</a></li>
          <li><a href="/docs/equipment/weapons">裝備一覽</a></li>
          <li><a href="/docs/system/sameification">系統指南</a></li>
          <li><a href="/docs/newbie">新手須知</a></li>
        </ul>
        <h2>預計製作內容</h2>
        <ul>
          <li><input type="checkbox" disabled />主線攻略 </li>
          <li><input type="checkbox" disabled />地下城 </li>
          <li><input type="checkbox" disabled />結緣 </li>
          <li><input type="checkbox" disabled />心燈 </li>
          <li><input type="checkbox" disabled />遺物酒 </li>
          <li><input type="checkbox" disabled />刷刷刷相關 </li>
          <li><input type="checkbox" disabled />裝備 </li>
          <li><input type="checkbox" disabled />還沒想到 </li>
          <li><input type="checkbox" disabled />還沒想到 </li>
        </ul>
        <h2><a href="/docs/changelog">更新日誌</a></h2>
        <ul>
          <li>2026-01-10: 新增全改、下改石使用方法</li>
          <li>2026-01-09: 裝備武器表更新</li>
          <li>2026-01-09: 網站剛弄好，東西還沒放</li>
        </ul>
      </main>
    </Layout>
  );
}
