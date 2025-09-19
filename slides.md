---
# You can also start simply with 'default'
theme: default

# some information about your slides (markdown enabled)
title: "IME vs Input Field Shortcuts: Enhancing Text Input Accessibility"
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogTitle: "IME vs Input Field Shortcuts: Enhancing Text Input Accessibility"
  twitterTitle: "IME vs Input Field Shortcuts: Enhancing Text Input Accessibility"
  ogImage: https://ef81sp.github.io/ime-vs-input-keyboard-shortcut/og-image.png
  twitterImage: https://ef81sp.github.io/ime-vs-input-keyboard-shortcut/og-image.png
  ogDescription: "[en/ja] Improving accessibility for IME users by preventing shortcut key conflicts during text input."
  twitterDescription: "[en/ja] Improving accessibility for IME users by preventing shortcut key conflicts during text input."
  twitterCard: summary_large_image
  twitterSite: "@p_craft"
# LLMへ
# Slidevのスライドファイルです。
# 自作のコンポーネントを使って、英語と日本語を同時に表示しています。
# `<VP>`: pタグです。`<template #en>`と`<template #ja>`で英語と日本語を切り替えています。
# `<VCaptions>`: 字幕表示用のコンポーネントです。`en-captions`と`ja-captions`で字幕の内容を指定します。Vueの記法の都合で、文章内にクォーテーションや文字参照が入っている場合、エスケープする必要があります。

# わたしは日本語がネイティブなので、英語の表現が自然になるように支援してください。
---

<div class="h-20" />

# IME vs Input Field Shortcuts: <br> Enhancing Text Input Accessibility

<div class="h-12" />

かみくず (@p_craft)

2025.09.21 Frontend Conference Tokyo

<style>
h1 {
  font-size: 2.5rem !important;
  line-height: 3.5rem !important
}

</style>

---
layout: two-cols-header
---

# かみくず / kamikuzu

::left::

- <VP><template #en>Father of twins</template><template #ja>双子の父</template></VP>
  - <VP><template #en>Doing my best every day</template> <template #ja>毎日がんばっている</template></VP>
- <VP><template #en>Vue lover</template><template #ja>Vueが好き</template></VP>
- <VP><template #en>Bengo4.com / CloudSign</template><template #ja>弁護士ドットコム / クラウドサイン</template></VP>

::right::

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

<div class="h-80 flex flex-col justify-end items-end">
<img src="/icon_shinkansen_sugoi_katai_ice.jpg" :alt="primaryLang === 'ja' ? 'アイコン。新幹線のテーブル上で、ｼﾝｶﾝｾﾝｽｺﾞｲｶﾀｲｱｲｽにスプーンが刺さっている写真。' : 'Icon: Photo of a spoon stuck into a very hard \'Shinkansen Sugoi Katai Ice\' on a Shinkansen tray table'" class="h-60" />

X: [@p_craft](https://x.com/p_craft)

</div>

---

<VH level="h1">
<template #en>Enquete</template>
<template #ja>アンケート</template>
</VH>

{{primaryLang}}

- <VP><template #en>Is there anyone who prefers English?</template>
  <template #ja>英語での発表がいい人いますか？</template></VP>
- <VP><template #en>This is something I'd like people unfamiliar with Japanese to be aware of.</template>
  <template #ja>日本語に詳しくない方にこそ知ってほしい内容です</template></VP>

<SelectLang />

---

<VH level="h1">
<template #en>Conclusion</template>
<template #ja>結論</template>
</VH>

<VP class="mb-3">
<template #en>No shortcuts during IME input!</template>
<template #ja>IME入力中　ショートカット　動かさないで！</template>
</VP>

<div class="[&_pre]:text-3.5! [&_pre]:lh-5!">

````md magic-move
```js {*|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});
```

```js {3-5|3-5|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    submit();
  }
});
```
````

</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'IME operations can be hindered by application shortcut keys!',
    'Check <code>KeyboardEvent.isComposing</code> is <strong>false</strong> to avoid interfering with text input.',
    'Also check <code>KeyboardEvent.keyCode</code> is <strong>229</strong>, although it is deprecated.',
    'I recognize this as an accessibility issue not covered by WCAG.',
    'IME users who perform character conversion,',
    'such as Japanese people, face significant difficulties.',
    'Everyone! 120 million people!'
  ]"
  :ja-captions="[
    'IMEの操作がアプリのショートカットキーによって妨げられることがあります！',
    '入力を妨げないよう、<code>KeyboardEvent.isComposing</code>が <strong>false</strong> であることを確認しましょう。',
    'また、非推奨プロパティですが、<code>KeyboardEvent.keyCode</code>が<strong>229</strong>であることも確認しましょう。',
    'わたしはこれをWCAGでカバーされていないアクセシビリティ課題と認識しています。',
    'IMEで文字変換を行うユーザー、',
    'つまり少なくとも日本人は大変困るのです。',
    '全員です！1億2千万人です！'
  ]"
/>

---

# IME (Input Method Editor)

- <VP><template #en>Software that supports text input</template>
  <template #ja>文字入力をサポートするためのソフトウェア</template></VP>
- <VP><template #en>Predictive input, character composition, etc.</template>
  <template #ja>入力補完、文字の合成など</template></VP>
- <VP><template #en>Kanji <strong>conversion</strong> (Japanese and Chinese).</template>
  <template #ja>漢字への<strong>変換</strong> (日本語と中国語)。</template></VP>

::captions::

<VCaptions
  :en-captions="[
    'IME is software that supports text input on computers.',
    'It offers features like predictive input and character composition.',
    'For languages like Japanese and Chinese, it provides kanji conversion.'
  ]"
  :ja-captions="[
    'IMEは、コンピューターでの文字入力をサポートするためのソフトウェアです。',
    '入力補完や、文字の合成などを行います。',
    'とくに日本語、中国語などでは、漢字への変換を行います。'
  ]"
/>

---

<script setup lang="ts">
import { useIsVideo } from "./composables/useIsVideo";
const { isVideo } = useIsVideo();
</script>

<VH level="h1">
<template #en>IME DEMO</template>
<template #ja>IMEのデモ</template>
</VH>

<ShowKeyInput class="absolute right-4 top-4"/>

<div class="flex h-63 items-center">
<VSwitch at="2" v-if="isVideo">
<template #1>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-1.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #2>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-2.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #3>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-3.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #4>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-4.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #5>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-5.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #6>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-6.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #7>
<SlidevVideo autoplay autoreset="click" loop controls>
  <source src="/demo1-7.mp4" type="video/mp4" />
</SlidevVideo>
</template>
</VSwitch>

<input v-else class="border-2 border-black text-7xl w-full p-4" @keydown.meta.right="(e) => { $nav.next() }" @keydown.meta.left="(e) => { $nav.prev() }" />

</div>

<IsVideo />

::captions::

<VCaptions
at="1"
:en-captions="[
'Let\'s try it out.',
'When you type &quot;hashi&quot;, hiragana characters appear incrementally.',
'Pressing the Space key converts the text to kanji.',
'Press it again to open the candidate list and navigate through the options.',
'You can also move through candidates using Tab or the arrow keys.',
'Press Esc to cancel the composition and revert to the pre-conversion text.',
'If you press Tab instead of the initial Space, you can trigger autocompletion.',
'Press Enter to confirm.',
'That\'s basically how it works.'
]"
:ja-captions="[
'実際の操作を見てみましょう。',
'hashiといれると、随時ひらがなが表示されます。',
'スペースキーを押すと、漢字に変換されます。',
'もう一度押すと、候補の一覧が出て、どんどん移動できます。',
'Tabやカーソルキーでも移動できます。',
'Escを押すと変換前の状態に戻れます。',
'最初のスペースキーの代わりにTabキーを押すと、補完ができます。',
'Enterキーで確定します。',
'こんな感じです。'
]"
/>

---

<VH level="h1">
<template #en>IME Shortcuts</template>
<template #ja>IMEのショートカット</template>
</VH>

<table v-click="[3, 6]">
  <thead>
    <tr>
      <th class="text-align-center!">shortcuts</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-align-center!"><kbd>Space</kbd></th>
      <td>
        <VP>
          <template #en>Start conversion</template>
          <template #ja>変換を開始します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th class="text-align-center!"><kbd>Tab</kbd></th>
      <td>
        <VP>
          <template #en>Start completion</template>
          <template #ja>補完を開始します</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th class="text-align-center!"><kbd>Enter</kbd></th>
      <td>
        <VP>
          <template #en>Confirm selected candidate</template>
          <template #ja>選択した候補を確定します。</template>
        </VP>
      </td>
    </tr>
  </tbody>
</table>

<table v-click="6">
  <thead>
    <tr>
      <th class="text-align-center!">shortcuts</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-align-center!"><span><kbd>Tab</kbd> / <kbd>Space</kbd> / <kbd>↓</kbd></span></th>
      <td>
        <VP>
          <template #en>Move to next candidate</template>
          <template #ja>次の候補に移動します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th class="text-align-center!"><kbd>Shift</kbd> + <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Space</kbd> / <kbd>↑</kbd></th>
      <td>
        <VP>
          <template #en>Move to previous candidate</template>
          <template #ja>前の候補に移動します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th class="text-align-center!"><kbd>Esc</kbd></th>
      <td>
        <VP>
          <template #en>Cancel composition</template>
          <template #ja>変換をキャンセルします。</template>
        </VP>
      </td>
    </tr>
  </tbody>
</table>

<style>
td {
  padding: 0
}
tbody th {
  width: 24rem;
  & kbd {
    font-size: 1.1em
  }
}
.slidev-vclick-hidden {
  display: none;
}
</style>

::captions::

<VCaptions
  :en-captions="[
    'Let\'s review IME shortcuts.',
    'It depends on the type of IME, but generally it works like this',
    'Space to start conversion.',
    'Tab to start completion.',
    'Enter to confirm the selected candidate. Then...',
    '',
    '...Well,',
    'There are various others, but the important point is that',
    'unexpected keys might be used as common shortcuts.',
  ]"
  :ja-captions="[
    'IMEのショートカットを確認しておきましょう。',
    'ソフトによりますが、だいたいこんな感じです。',
    'Space で変換を開始します。',
    'Tab で補完を開始します。',
    'Enter で選択した候補を確定します。そして……',
    '',
    '……まぁ、',
    'いろいろありますが、重要なのは、',
    'おもいもよらないキーが当たり前に使われているかもしれない、ということです。',
  ]"
/>

---

<VH level="h1" class="mb-0!">
<template #en>Problem</template>
<template #ja>問題</template>
</VH>

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

<div class="flex justify-center space-x-4">
<img src="/boxing.png" :alt="primaryLang === 'ja' ? 'ボクシングのイラスト。「IME Shortcuts」の青いボクサーと、「Web App Shortcuts」の赤いボクサーが戦っている。' : 'Boxing illustration. The blue boxer represents \'IME Shortcuts\' and the red boxer represents \'Web App Shortcuts\' are fighting.'" class="h-74"/>
</div>

::captions::

<VCaptions
  :en-captions="[
    'Well, what happens when web app shortcuts conflict with IME shortcuts?',
  ]"
  :ja-captions="[
    'さて、WebアプリとIMEのショートカットキーが衝突するとどうなるでしょうか？'
  ]"
/>

---

<script setup lang="ts">
import { useIsVideo } from "./composables/useIsVideo";
const { isVideo } = useIsVideo();
</script>

<VH level="h1" class="mb-2!">
<template #en>Bad DEMO</template>
<template #ja>悪いデモ</template>
</VH>

1. Input "<ruby>要素<rt>youso</rt>と<rt>to</rt>属性<rt>zokusei</rt></ruby>" (means "elements and attributes")
2. Hit <kbd>Enter</kbd> to submit

<VSwitch at="1" v-if="isVideo">
<template #1-3>
<SlidevVideo >
  <source src="/demo2-1.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #3>
<SlidevVideo autoplay loop controls >
  <source src="/demo2-2.mp4" type="video/mp4" />
</SlidevVideo>
</template>
<template #4-7>
<SlidevVideo autoplay loop controls>
  <source src="/demo2-3.mp4" type="video/mp4" />
</SlidevVideo>
</template>
</VSwitch>
<VFormKeydown v-else class="my-4 flex justify-center" type="bad" />

<div class="[&_pre]:text-4!">

```js
inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});
```

</div>

<IsVideo />

<ShowKeyInput class="absolute right-4 top-4"/>

::captions::

<VCaptions
at="1"
:en-captions="[
'It\'s a form that can be submitted with the Enter key.',
'Often seen in chat applications.',
'I will try to input 「要素と属性」 little by little.',
'Here, I press the Enter key to confirm once.',
'However, the app side sends it with the Enter key.',
'Despite being in the halfway of input.'
]"
:ja-captions="[
'Enterキーで送信できるフォームです。',
'チャットとかでよくあります。',
'「要素と属性」と少しずつ入力してみます。',
'ここでいったん確定のためにEnterキーを押します。',
'しかし、アプリ側がEnterキーで送信してしまいます。',
'途中にも関わらずです。',
]"
/>

---
layout: two-cols-header
---

<VH level="h1">
<template #en>Problematic Sample: "G"</template>
<template #ja>問題例: "G"</template>
</VH>

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

Try to input 「<ruby>日本語が/途中で/送信される<rt>Japanese text is sent halfway through</rt></ruby>」 incrementally.

::left::
<kbd class="text-xl!">Enter</kbd>

- **IME**: Confirm
- **Input Element**: Submit

::right::

<div class="flex justify-center w-78 border-1 border-black" v-click="1">

<VSwitch at="1">
<template #0-3>
<img src="/ServiceG-1.png" :alt="primaryLang === 'ja' ? '[図1] IMEの入力が進行中' : '[Figure 1] IME composition in progress'" />
</template>
<template #3-5>
<img src="/ServiceG-2.png" :alt="primaryLang === 'ja' ? '[図2] IMEの候補リストを移動中' : '[Figure 2] Navigating the IME candidate list'" />
</template>
<template #5-6>
<img src="/ServiceG-3.png" :alt="primaryLang === 'ja' ? '[図3] IMEの候補確定時の競合' : '[Figure 3] IME candidate confirmation conflict'" />
</template>
<template #6>
<img src="/ServiceG-4.png" :alt="primaryLang === 'ja' ? '[図4] 途中で送信された結果' : '[Figure 4] Result after premature submission'" />
</template>

</VSwitch>
</div>
::captions::

<VCaptions
  :en-captions="[
    'This is an extremely common issue.',
    'Try to input 「日本語が途中で送信される」 incrementally.',
    'When inputting Japanese, it is rare to enter the entire text at once,',
    'and users often confirm the text little by little as they type.',
    'Therefore, they frequently press the Enter key in the middle of input,',
    'which can lead to premature submission.'
  ]"
  :ja-captions="[
    'これはもうほんっとうにめちゃめちゃよくある問題です。',
    '「日本語が途中で送信される」と少しずつ入力してみます。',
    '日本語の入力時は、全文を一気に入れることは稀で、',
    '少しずつ確定しながら入力を進めます。',
    'そのため、途中でEnterキーを押すことが多く、',
    'そのときに途中で送信されてしまいます。',
  ]"
/>

---
layout: two-cols-header
---

<VH level="h1">
<template #en>Problematic Sample: "S"</template>
<template #ja>問題例: "S"</template>
</VH>

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

Type 「しけん」 and try to find the correct Kanji

::left::

<div v-click="1">
<kbd class="text-xl!">Tab</kbd>

- **IME**: Move to next candidate
- **Search box**: Complete candidate

</div>
::right::

<div class="flex justify-center w-78 border-1 border-black" v-click="1">
<!-- <SlidevVideo v-click="2" autoplay controls class="border-1 border-black">
  <source src="/ServiceS.mp4" type="video/mp4" />
</SlidevVideo> -->

<VSwitch at="1">
<template #1-2>
<img src="/ServiceS-1.png" :alt="primaryLang === 'ja' ? '[図1] 「しけん」と入力中、IMEの候補リストが表示されている' : '[Figure 1] Typing \'しけん\' with IME candidate list visible'" />
</template>
<template #2-4>
<img src="/ServiceS-2.png" :alt="primaryLang === 'ja' ? '[図2] IMEで候補を移動・選択している様子' : '[Figure 2] Navigating and selecting IME candidates'" />
</template>
<template #4-5>
<img src="/ServiceS-3.png" :alt="primaryLang === 'ja' ? '[図3] アプリの補完候補がIMEの選択を上書き' : '[Figure 3] App autocomplete overrides IME selection'" />
</template>
<template #5>
<img src="/ServiceS-4.png" :alt="primaryLang === 'ja' ? '[図4] IME操作が妨げられた結果' : '[Figure 4] Interference with IME operation'" />
</template>
<template #6>
<img src="/ServiceS-5.png" :alt="primaryLang === 'ja' ? '[図5] 最終的に誤った文字列や途中の確定が入力された状態' : '[Figure 5] Final state with incorrect or premature text'" />
</template>
</VSwitch>
</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'Other keys, not just Enter, can also cause issues.',
    'Let\'s try searching in Japanese in the search box.',
    'Tab key is used to move to the next candidate in IME,',
    'but it can also be used to select completion candidates in the app.',
    'As a result, the app can take precedence ',
    'and interfere with IME operations.'
  ]"
  :ja-captions="[
    'Enterキー以外にも問題になるケースがあります。',
    '検索欄で日本語で検索してみましょう。',
    'TabキーはIMEにおいて次の候補に移動するキーですが、',
    'アプリ側でも検索ワードの補完候補の選択に使われることがあります。',
    'その結果、アプリ側が勝ってしまって、',
    'IMEの操作が妨げられてしまいます。',
  ]"
/>

---

# Solution: `KeyboardEvent.isComposing`

- <VP><template #en> <code>true</code> while IME is composing (during character conversion).</template>
  <template #ja>IMEが文字を編集中（変換中）の間は <code>true</code>。</template></VP>

<div class="[&_pre]:text-4! [&_pre]:lh-5!">

````md magic-move
```js {*|*|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});
```

```js {3-5|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing) {
      return;
    }
    submit();
  }
});
```
````

</div>

::captions::

<VCaptions
  at='1'
  :en-captions="[
    'Use <code>KeyboardEvent.isComposing</code> to detect IME composition.',
    'It is <code>true</code> while the IME is composing text.',
    'So, in keyboard handlers, check this flag and skip processing when it\'s <code>true</code>.',
    'Very easy.'
  ]"
  :ja-captions="[
    'これを解決してくれるのが、<code>KeyboardEvent.isComposing</code> です。',
    'これはIMEの文字変換中、trueになります。',
    'ですので、ハンドラーでこれを見て、早期リターンすればよいのです。',
    'ね、簡単でしょう？'
  ]"
/>

---

<script setup lang="ts">
import { useIsVideo } from "./composables/useIsVideo";
const { isVideo } = useIsVideo();
</script>

<VH level="h1" class="mb-2!">
<template #en>Good DEMO</template>
<template #ja>良いデモ</template>
</VH>

1. Input "<ruby>要素<rt>youso</rt>と<rt>to</rt>属性<rt>zokusei</rt></ruby>" (means "elements and attributes")
2. Hit <kbd>Enter</kbd> to submit

<SlidevVideo v-if="isVideo" autoplay loop controls class="border-1 border-black" v-click="3">
  <source src="/demo3.mp4" type="video/mp4" />
</SlidevVideo>

<VFormKeydown v-else class="my-2 flex justify-center" type="good" />

<div class="[&_pre]:text-3!">

```js
inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing) {
      return;
    }
    submit();
  }
});
```

</div>

<IsVideo />

<ShowKeyInput class="absolute right-4 top-4"/>

::captions::

<VCaptions
at="1"
:en-captions="[
'This time, the form checks <code>event.isComposing</code> before submitting.',
'If it is true, it means the IME is in the middle of composition, so it does not submit.',
'Let\'s try the same case as before.',
'This time, even if we press the Enter key in the middle, it will not be sent.',
'We were able to enter and send it safely to the end.'
]"
:ja-captions="[
'今回は、送信する前に <code>event.isComposing</code> を確認しています。',
'もしtrueなら、IMEが編集中なので、送信しません。',
'さっきと同じケースを試してみます。',
'今度は途中でEnterキーを押しても、送信されません。',
'無事に最後まで入力して送信できました。',
]"
/>

---
layout: two-cols-header
---

<VH level="h1">
<template #en>But……</template>
<template #ja>しかし……</template>
</VH>

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

**Safari** has a bug with `KeyboardEvent.isComposing`.

::left::
<small>

- [165004 – The event order of keydown/keyup events and composition events are wrong on macOS](https://bugs.webkit.org/show_bug.cgi?id=165004)
- [3.8.5. Key Events During Composition](https://w3c.github.io/uievents/#events-composition-key-events)

</small>

::right::

<div class="flex justify-center w-78 border-1 border-black" v-click="1">
<!-- <SlidevVideo autoplay controls class="border-1">
  <source src="/safari_bug.mp4" type="video/mp4" />
</SlidevVideo> -->

<VSwitch at="1">
<template #1>
<img src="/safari-1.png" :alt="primaryLang === 'ja' ? '[図1] Safariでサンプルを表示中' : '[Figure 1] Safari displaying the sample'" />
</template>
<template #2>
<img src="/safari-2.png" :alt="primaryLang === 'ja' ? '[図2] Safariで「要素」と入力中' : '[Figure 2] Typing \'要素\' in Safari'" />
</template>
<template #3>
<img src="/safari-3.png" :alt="primaryLang === 'ja' ? '[図3] Enterキー押下での途中送信' : '[Figure 3] Premature submission on Enter key press'" />
</template>
</VSwitch>
</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'But, unfortunately, Safari has a bug with <code>KeyboardEvent.isComposing</code>.',
    'When pressing the Enter key to confirm conversion, it becomes false.',
    'This causes the premature submission issue.'
  ]"
  :ja-captions="[
    'しかし、残念ながら、Safariには<code>KeyboardEvent.isComposing</code>にバグがあります。',
    '変換確定のEnterキーを押したとき、値がfalseになってしまいます。',
    'そのため、途中で送信が発生してしまいます。',
  ]"
/>

---

# `isComposing`

[KeyboardEvent: isComposing property | MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/isComposing)

> <VP><template #en>
>
> The **`KeyboardEvent.isComposing`** read-only property returns a boolean value indicating if the event is fired within a composition session, i.e., <span v-mark.green="2">after `compositionstart` and before `compositionend`</span>.
>
> </template>
> <template #ja>
>
> **`KeyboardEvent.isComposing`** は読み取り専用プロパティで、イベントが変換セッションの途中、すなわち <span v-mark.green="2">`compositionstart` の後かつ `compositionend` の前</span>に発行されたことを示す論理値を返します。
>
> </template></VP>

::captions::

<VCaptions
  :en-captions="[
    'Check the specification of isComposing.',
    'It is true after <code>compositionstart</code> and before <code>compositionend</code>.'
  ]"
  :ja-captions="[
    'isComposingの仕様を確認しておきましょう。',
    'これは<code>compositionstart</code>の後、<code>compositionend</code>の前でtrueになります。'
  ]"
/>

---
layout: two-cols-header
---

# W3C Spec v.s. Safari

::left::

## [**W3C Spec**](https://w3c.github.io/uievents/#events-composition-key-events)

<div class="flex justify-center">

| No. | Event Type                                               | KeyboardEvent<br>.isComposing               |
| --- | -------------------------------------------------------- | ------------------------------------------- |
| 1   | <span v-mark.delay1000.highlight.pink="1">keydown</span> | false                                       |
| 2   | <span v-mark.highlight.lime="1">compositionstart</span>  |                                             |
| 3   | <span v-mark.highlight.lime="1">compositionupdate</span> |                                             |
| 4   | keyup                                                    | true                                        |
| ... | —                                                        | —                                           |
| 5   | <span v-mark.delay1000.highlight.pink="1">keydown</span> | <span v-mark.highlight.pink="2">true</span> |
| 6   | <span v-mark.highlight.lime="1">compositionend</span>    |                                             |
| 7   | keyup                                                    | false                                       |

</div>

::right::

## **Safari**

<div class="flex justify-center">

| No. | Event Type                                               | KeyboardEvent<br>.isComposing                |
| --- | -------------------------------------------------------- | -------------------------------------------- |
| 1   | <span v-mark.highlight.lime="4">compositionstart</span>  |                                              |
| 2   | <span v-mark.highlight.lime="4">compositionupdate</span> |                                              |
| 3   | <span v-mark.delay1000.highlight.pink="4">keydown</span> | true                                         |
| 4   | keyup                                                    | true                                         |
| ... | —                                                        | —                                            |
| 5   | <span v-mark.highlight.lime="4">compositionend</span>    |                                              |
| 6   | <span v-mark.delay1000.highlight.pink="4">keydown</span> | <span v-mark.highlight.pink="5">false</span> |
| 7   | keyup                                                    | false                                        |

</div>

::captions::

<VCaptions
  :en-captions="[
    'According to the W3C specification\, composition events should be fired after keydown events.',
    'Therefore, the final keydown event\'s <code>isComposing</code> will be <code>true</code>.',
    'This refers to pressing the <kbd>Enter</kbd> key.',
    'However, on Safari, composition events are fired before keydown events.',
    'As a result, the last keydown event\'s <code>isComposing</code> becomes <code>false</code>.',
    'This is the cause of the problem.'
  ]"
  :ja-captions="[
    'W3C仕様では、Compositionイベントはkeydownイベントの後に発火する必要があります。',
    'したがって、最後のkeydownイベントの<code>isComposing</code>は<code>true</code>になります。',
    'Enterキーの押下がこれに該当します。',
    'しかし、Safariでは、Compositionイベントはkeydownイベントの前に発火します。',
    'そのため、最後のkeydownイベントの<code>isComposing</code>は<code>false</code>になります。',
    'これが問題の原因です。'
  ]"
/>

<style>
h1 {
  margin-block: 0
}
h2 {
  font-size: 1.2rem;
  text-align: center;
}
table {
  font-size: 0.7rem;
  width: 80%;
}
td, th {
  padding-block: 0.25rem
}
th {
  font-size: 0.7rem;
}
</style>

---

<VH level="h1" class="mb-2!">
<template #en>MDN says...</template>
<template #ja>MDNによると...</template>
</VH>

[Element: Keydown event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

> <strong>Note:</strong> <code>compositionstart</code> may fire <em>after</em> <code>keydown</code> when typing the first character that opens up the IME, and <code>compositionend</code> may fire <em>before</em> <code>keydown</code> when typing the last character that closes the IME. In these cases, <code>isComposing</code> is false even when the event is part of composition. However, <span v-mark.highlight.yellow="{at:1,multiline:true}"><a href="/en-US/docs/Web/API/KeyboardEvent/keyCode"><code>KeyboardEvent.keyCode</code></a> is still <code>229</code> in these cases, so it's still advisable to check <code>keyCode</code> as well, although it's deprecated</span>.

<div class="h-2"/>

> <strong>メモ:</strong> IME を開くための最初の文字を入力したときに、 <code>compositionstart</code> が <code>keydown</code> の後に発行されることがあります。また、 IME を閉じる最後の文字を入力したときに、 <code>compositionend</code> が <code>keydown</code> の前に発行されることがあります。これらの場合、イベントが変換の一部であっても、<code>isComposing</code> は false となります。しかし、<span v-mark.highlight.yellow="{at:1,multiline:true}">これらの場合でも <a href="/ja/docs/Web/API/KeyboardEvent/keyCode"><code>KeyboardEvent.keyCode</code></a> は <code>229</code> のままなので、非推奨ではあるものの、やはり <code>keyCode</code> も調べることをお勧めします</span>。

<VP class="text-xs!">
  <template #en>Note: While the IME is composing, any KeyboardEvent will have keyCode 229.</template>
  <template #ja>注記: IME入力中に発火したKeyboardイベントのkeyCodeはすべて229になる</template>
</VP>

::captions::

<VCaptions
  :en-captions="[
    'Based on this, MDN says,',
    'check <code>keyCode</code> is <code>229</code>, although it\'s deprecated.'
  ]"
  :ja-captions="[
    'これを踏まえて、MDNは、',
    '非推奨であるものの、<quot>keyCode</quot>が<quot>229</quot>であることを確認するように言っています。'
  ]"
/>

<style>
blockquote {
  font-size: 0.8rem;
  & p {
    line-height: 1.3;
  }
}

</style>

---

# Solution 1: check `keyCode` === 229

<div class="[&_pre]:text-4! [&_pre]:lh-5!">

````md magic-move
```js {*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing) {
      return;
    }
    submit();
  }
});
```

```js {3|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    submit();
  }
});
```
````

</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'So, the solution 1 is check <code>keyCode</code> is <code>229</code>.',
    'You may not be comfortable with checking a deprecated parameter,',
    'but it\'s advisable to do so now.',
    'Hopefully, Safari will address this eventually.'
  ]"
  :ja-captions="[
    'ということで、解決策1は<code>keyCode</code>が<code>229</code>であることを確認することです。',
    '非推奨のパラメータを確認することに抵抗があるかもしれませんが、',
    '今はそうすることをお勧めします。',
    'Safariが直ってほしいですね。'
  ]"
/>

---

# Solution 2: add Meta / Ctrl Key

<div class="[&_pre]:text-4! [&_pre]:lh-5!">

````md magic-move
```js {*|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing) {
      return;
    }
    submit();
  }
});
```

```js {2|*}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
    if (event.isComposing) {
      return;
    }
    submit();
  }
});
```
````

</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'This is more of a \'side note\'...',
    'Another solution, limited to submission, is to add Meta / Ctrl key to submit.',
    'You don\'t have to rely solely on the Enter key for submission.',
    'This is a better option if an app allows line breaks in an input field.'
  ]"
  :ja-captions="[
    'これは蛇足ですが……',
    '送信限定の別の解決策は、Meta / Ctrlキーを追加することです。',
    'そもそもEnterキーだけで送信しなければいいという話ですね。',
    '入力欄で改行ができるようなアプリなら、よりよい選択肢でしょう。'
  ]"
/>

---

<VH level="h1">
<template #en>BTW...</template>
<template #ja>ところで...</template>
</VH>

<VP>
  <template #en>Use the <strong>form submit</strong> event for submissions. ( <code>&lt;textarea&gt;</code>? I'm sorry...)</template>
  <template #ja>送信には<strong>form submit</strong>イベントを使用しましょう。（<code>&lt;textarea&gt;</code>？すまん……）</template>
</VP>

<VForm class="my-4 flex justify-center"  />

<div class="[&_pre]:text-4!">

```js
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
```

<ShowKeyInput class="absolute right-4 top-4"/>

</div>

::captions::

<VCaptions
  :en-captions="[
    'By the way, if it is for submission, consider using the form submit event.',
    'This way, the browser handles it perfectly. No Safari bugs either.',
    'However, for <code>\&\lt;textarea\&\gt;</code>, you cannot submit with the Enter key.',
    'In that case, you would need to use the keydown event as we discussed earlier.'
  ]"
  :ja-captions="[
    'それはそれとして、それが送信であるなら、form要素のsubmitイベントも検討すべきです。',
    'これなら、ブラウザが完璧にハンドリングしてくれます。Safariのバグも関係ありません。',
    'ただし、<code>\&\lt\;textarea&gt;</code>の場合は、Enterキーによる送信はできません。',
    'その場合は、これまでのお話のように、keydownイベントを使用する必要があるでしょう。'
  ]"
/>

---
drawings:
  persist: true
---

# a11y ∋ WCAG

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

<div class="flex justify-center">

<VSwitch aria-live="polite">
<template #0-2>
<img src="/venn_1.svg" :alt="primaryLang === 'ja' ? '[図1] \'This issue\'と書かれた点が表示されている' : '[Figure 1] Diagram showing a single dot labeled \'This issue\''" class="w-82 mt-[-3rem]" />
</template>
<template #2-5>
<img src="/venn_2.svg" :alt="primaryLang === 'ja' ? '[図2] \'This issue\'と書かれた点と、\'WCAG\'と書かれた円がベン図として表示されている。重ならず、隣り合っている。' : '[Figure 2] Venn-style diagram with a dot labeled \'This issue\' adjacent to (non-overlapping) a circle labeled \'WCAG\''" class="w-82 mt-[-3rem]" />
</template>
<template #5>
<img src="/venn_3.svg" :alt="primaryLang === 'ja' ? '[図3] \'This issue\'と書かれた点と、\'WCAG = known issues\'と書かれた円がベン図として表示されている。重ならず、隣り合っている。' : '[Figure 3] Venn-style diagram with a dot labeled \'This issue\' adjacent to (non-overlapping) a circle labeled \'WCAG = known issues\''" class="w-82 mt-[-3rem]" />
</template>
<template #6-10>
<img src="/venn_4.svg" :alt="primaryLang === 'ja' ? '[図4] これまでのものを包含する、\'a11y issues include unknown issues\'と書かれた円が表示されている。' : '[Figure 4] Diagram showing a large circle labeled \'a11y issues include unknown issues\' that encompasses the previous elements'" class="w-82 mt-[-3rem]" />
</template>
</VSwitch>

</div>

::captions::

<VCaptions
at="1"
:en-captions="[
'I consider this an accessibility issue,',
'but it is not covered by WCAG.',
'Of course, WCAG does not cover all accessibility issues.',
'We can address issues covered by WCAG.',
'This is because we &quot;know&quot; those issues.',
'Conversely, the issue arises because it is &quot;unknown&quot; to implementers.',
'Other unknown accessibility issues like this one must exist.',
'Therefore, if we are stakeholders, we should raise our voices,',
'and it\'s important for developers to listen to users\' voices.',
]"
:ja-captions="[
'わたしはこれをアクセシビリティの問題だと考えていますが、',
'WCAGではカバーされていません。',
'当然ながら、WCAGがすべてのアクセシビリティ課題をカバーしているわけではありません。',
'WCAGにカバーされている問題は、わたしたちは対処することができます。',
'これは、その問題を「知っている」からです。',
'逆に言えば、今回の問題は、実装者にとって「未知」だから発生しています。',
'このような未知のアクセシビリティ問題は、ほかにも必ずあるはずです。',
'ですから、自分たちが当事者であれば、しっかり声を上げなければなりませんし、',
'開発者はユーザーの声に耳を傾けることが重要です。',
]"
/>

<style>
h1 {
  margin: 0
}
</style>

---

<VH level="h1">
<template #en>Conclusion</template>
<template #ja>結論</template>
</VH>

<VP class="mb-3">
<template #en>Let's do this!</template>
<template #ja>こうしよう！</template>
</VP>

<div class="[&_pre]:text-3.5! [&_pre]:lh-5!">

```js {3-5}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    submit();
  }
});
```

</div>

::captions::

<VCaptions 
  :en-captions="[
    'In conclusion, let\'s do this!',
  ]"
  :ja-captions="[
    '今日の結論は……こうしよう！',
  ]"
/>

---

<script setup lang="ts">
import { usePrimaryLang } from "./composables/usePrimaryLang";
const { primaryLang } = usePrimaryLang();
</script>

<div class="grid grid-cols-2 h-full">
<div class="flex flex-col justify-center items-center">

End

<PoweredBySlidev />

</div>

<div class="flex flex-col justify-center items-center">

<figure>
<img src="/QR.png" :alt="primaryLang === 'ja' ? 'QRコード' : 'QR code'" class="h-68 mx-auto"/>
<figcaption class="text-xs text-align-center">今日のスライド <br> Today's slides</figcaption>
</figure>
</div>

</div>
