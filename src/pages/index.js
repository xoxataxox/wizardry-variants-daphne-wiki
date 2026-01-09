import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="辟邪除妖VA WIKI" description="完整攻略主線、裝備、系統指南">
      <main>
        <h1>辟邪除妖VA WIKI</h1>
        <p>現在這裡甚麼都沒有，畢竟是個大工程，網站我不會弄得變好看，方便為主，弄css跟js太累了</p>
        <p>主要會整合所有巴哈和Gamerch上的資訊，方便查閱，不然有的東西真的不好查，當然會附上來源拉</p>
        <p>龜速整合中...</p>
        <h2>快速導航</h2>
        <ul>
          <li><a href="/docs/mainstory/chapter1">主線攻略</a></li>
          <li><a href="/docs/equipment/weapons">裝備一覽</a></li>
          <li><a href="/docs/system/sameification">系統指南</a></li>
          <li><a href="/docs/newbie">新手須知</a></li>
        </ul>
        <h2><a href="/docs/changelog">更新日誌</a></h2>
        <ul>
          <li>2026-01-09: 裝備武器表更新</li>
          <li>2026-01-09: 網站剛弄好，東西還沒放</li>
        </ul>
      </main>
    </Layout>
  );
}
