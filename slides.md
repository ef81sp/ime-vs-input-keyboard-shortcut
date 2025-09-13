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
  ogImage: auto
  # ogImage: https://cover.sli.dev
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

- <VP><template #en>father of twin</template>
  <template #ja>双子の父</template></VP>
- <VP><template #en>like Vue</template>
  <template #ja>Vueが好き</template></VP>

::right::

<div class="h-80 flex flex-col justify-end items-end">

![](/icon_shinkansen_sugoi_katai_ice.jpg){class="h-60"}

X: [@p_craft](https://x.com/p_craft)

</div>

---

<VH level="h1">
<template #en>Enquete</template>
<template #ja>アンケート</template>
</VH>

- <VP><template #en>Is there anyone who prefers English?</template>
  <template #ja>英語での発表がいい人いますか？</template></VP>
- <VP><template #en>This is something I'd like non-Japanese speakers to be aware of.</template>
  <template #ja>テーマ的に非日本語話者にこそ知ってほしい内容です</template></VP>

<SelectLang />

---

<VH level="h1">
<template #en>Today's Slides</template>
<template #ja>今日のスライド</template>
</VH>

::captions::

<VCaptions
  :en-captions="[
    'Today\'s slides are here. I\'ve also shared them on Twitter.',
    'The input field demo may not work on smartphones...'
  ]"
  :ja-captions="[
    '今日のスライドはこちらです。Twitterにも流してあります。',
    '入力欄のデモはスマートフォンだと動かないかもしれませんが……'
  ]"
/>

---

<VH level="h1">
<template #en>Conclusion</template>
<template #ja>結論</template>
</VH>

<VP class="mb-3">
<template #en>Let's do this!</template>
<template #ja>こうしよう！</template>
</VP>

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

::captions::

<VCaptions 
  :en-captions="[
    'IME operations can be hindered by application shortcut keys!',
    'Check <code>KeyboardEvent.isComposing</code> is <strong>false</strong> to avoid interfering with text input.',
    'Also check <code>KeyboardEvent.keyCode</code> is <strong>229</strong>, although it is deprecated.',
    'This is an accessibility issue not covered by WCAG, but',
    'crucial for IME users who perform character conversion.'
  ]"
  :ja-captions="[
    'IMEの操作がアプリのショートカットキーによって妨げられることがあります！',
    '入力を妨げないよう、<code>KeyboardEvent.isComposing</code>が <strong>false</strong> であることを確認しましょう。',
    'また、非推奨プロパティですが、<code>KeyboardEvent.keyCode</code>が<strong>229</strong>であることも確認しましょう。',
    'これはWCAGでカバーされていないアクセシビリティ課題ですが、',
    'IMEで文字変換を行うユーザーにとって非常に重要です。'
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

<VH level="h1">
<template #en>IME DEMO</template>
<template #ja>IMEのデモ</template>
</VH>

<ShowKeyInput class="absolute right-4 top-4"/>

<div class="flex h-63 items-center">
<input class="border-2 border-black text-7xl w-full p-4" @keydown.escape="(e) => { if(!e.isComposing) e.target.blur()}" />
</div>

<!--
hashiといれると、随時ひらがなが表示されます。  
When you type "hashi", hiragana characters appear incrementally.

スペースキーを押すと、漢字に変換されます。  
Pressing the Space key converts the text to kanji.

もう一度押すと、候補の一覧が出て、どんどん移動できます。  
Press it again to open the candidate list and navigate through the options.

Tabやカーソルキーでも移動できます。  
You can also move through candidates using Tab or the arrow keys.

Escを押すと変換前の状態に戻れます。  
Press Esc to cancel the composition and revert to the pre-conversion text.

最初のスペースキーの代わりにTabキーを押すと、補完ができます。  
If you press Tab instead of the initial Space, you can trigger autocompletion.

Enterキーで確定します。
Press Enter to confirm.

こんな感じです。  
That's basically how it works.
-->

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

<div class="flex justify-center space-x-4">
<img src="/boxing.png" alt="ボクシングのイラスト。「IME Shortcuts」の青いボクサーと、「Web App Shortcuts」の赤いボクサーが戦っている。 / Boxing illustration. The blue boxer represents 'IME Shortcuts' and the red boxer represents 'Web App Shortcuts' are fighting." class="h-74"/>
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

<VH level="h1">
<template #en>Bad DEMO</template>
<template #ja>悪いデモ</template>
</VH>

1. Input "<ruby>要素<rt>youso</rt>と<rt>to</rt>属性<rt>zokusei</rt></ruby>" (means "elements and attributes")
2. Hit <kbd>Enter</kbd> to submit

<VFormKeydown class="my-4 flex justify-center" type="bad" />

<div class="[&_pre]:text-4!">

```js
inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});
```

</div>

<ShowKeyInput class="absolute right-4 top-4"/>

<!--
Enterキーで送信できるフォームです。チャットとかでよくあります。\
It's a form that can be submitted with the Enter key. Often seen in chat applications.

「要素と属性」と少しずつ入力してみます。\
I will try to input 「要素と属性」 little by little.

ここでいったん確定のためにEnterキーを押します。\
Here, I press the Enter key to confirm once.

しかし、アプリ側がEnterキーで送信してしまいます。途中にも関わらずです。\
However, the app side sends it with the Enter key. Despite being in the halfway of input.
-->

---
layout: two-cols-header
---

<VH level="h1">
<template #en>Problematic Sample: "G"</template>
<template #ja>問題例: "G"</template>
</VH>

Try to input 「<ruby>日本語が/途中で/送信される<rt>Japanese text is sent halfway through</rt></ruby>」 incrementally.

::left::
<kbd class="text-xl!">Enter</kbd>

- **IME**: Confirm
- **Input Element**: Submit

::right::

<div class="flex justify-center w-78 border-1 border-black" v-click="1">

<VSwitch at="1">
<template #0-3>
<img src="/ServiceG-1.png" alt="図1: IMEの入力が進行中のテキスト入力 — 部分的に変換された日本語テキストと候補リストが表示されている。 / Figure 1: Text input with IME composition in progress — partially composed Japanese text and the IME candidate list are visible." />
</template>
<template #3-5>
<img src="/ServiceG-2.png" alt="図2: ユーザーがIMEの候補リストを移動中 — 別の候補がハイライトされ、変換が継続している。 / Figure 2: User navigating the IME candidate list — a different candidate is highlighted while composition continues." />
</template>
<template #5-6>
<img src="/ServiceG-3.png" alt="図3: ユーザーがEnterキーでIMEの候補を確定しようとするが、アプリのEnter処理がIMEと競合して途中で送信されてしまう。 / Figure 3: The user presses Enter to confirm an IME candidate; the app’s Enter handling conflicts with the IME, causing a premature submit." />
</template>
<template #6>
<img src="/ServiceG-4.png" alt="図4: 送信後の結果 — 部分的に確定された日本語テキストや、早期送信後の入力状態が表示されている。 / Figure 4: Result after submission showing the partially confirmed Japanese text or the input state after the premature submit." />
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
<img src="/ServiceS-1.png" alt="図1: 検索ボックスに「しけん」と入力中、IMEの候補リストが表示されている / Figure 1: Typing ‘しけん’ in the search box with IME candidate list visible." />
</template>
<template #2-4>
<img src="/ServiceS-2.png" alt="図2: IMEで候補を移動・選択している様子（矢印キーやTabで操作） / Figure 2: Navigating and selecting IME candidates (arrow keys / Tab)." />
</template>
<template #4-5>
<img src="/ServiceS-3.png" alt="図3: アプリ側の補完候補が表示され、Tabでアプリの候補が選ばれてしまう場面 / Figure 3: App autocomplete appears and Tab selects the app's suggestion, overriding IME." />
</template>
<template #5>
<img src="/ServiceS-4.png" alt="図4: IME操作が妨げられ、意図しない補完や検索候補が入力される結果 / Figure 4: IME operation interfered with, resulting in unintended completion or search input." />
</template>
<template #6>
<img src="/ServiceS-5.png" alt="図5: 最終的に誤った文字列や途中の確定が入力される（ユーザー体験の問題） / Figure 5: Final state showing incorrect or prematurely confirmed text (user-impacting issue)." />
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

<VH level="h1">
<template #en>Good DEMO</template>
<template #ja>良いデモ</template>
</VH>

1. Input "<ruby>要素<rt>youso</rt>と<rt>to</rt>属性<rt>zokusei</rt></ruby>" (means "elements and attributes")
2. Hit <kbd>Enter</kbd> to submit

<VFormKeydown class="my-4 flex justify-center" type="good" />

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

<ShowKeyInput class="absolute right-4 top-4"/>

<!--
さっきと同じケースを試してみます。\
We will try the same case as before.

今度は途中でEnterキーを押しても、送信されません。\
This time, even if we press the Enter key in the middle, it will not be sent.

無事に最後まで入力して送信できました。\
We were able to enter and send it safely to the end.
-->

---
layout: two-cols-header
---

<VH level="h1">
<template #en>But……</template>
<template #ja>しかし……</template>
</VH>

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
<img src="/safari-1.png" alt="図1: 先ほどのサンプルをSafariで表示している"/>
</template>
<template #2>
<img src="/safari-2.png" alt="図2: 「要素」と入力したところ"/>
</template>
<template #3>
<img src="/safari-3.png" alt="図3: 変換確定のEnterを押したら送信されてしまった"/>
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

<VH level="h1">
<template #en>MDN says...</template>
<template #ja>MDNによると...</template>
</VH>

[Element: Keydown event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

> <strong>Note:</strong> <code>compositionstart</code> may fire <em>after</em> <code>keydown</code> when typing the first character that opens up the IME, and <code>compositionend</code> may fire <em>before</em> <code>keydown</code> when typing the last character that closes the IME. In these cases, <code>isComposing</code> is false even when the event is part of composition. However, <span v-mark.highlight.yellow="{at:1,multiline:true}"><a href="/en-US/docs/Web/API/KeyboardEvent/keyCode"><code>KeyboardEvent.keyCode</code></a> is still <code>229</code> in these cases, so it's still advisable to check <code>keyCode</code> as well, although it's deprecated</span>.

<div class="h-2"/>

> <strong>メモ:</strong> IME を開くための最初の文字を入力したときに、 <code>compositionstart</code> が <code>keydown</code> の後に発行されることがあります。また、 IME を閉じられり最後の文字を入力したときに、 <code>compositionend</code> が <code>keydown</code> の前に発行されることがあります。これらの場合、イベントが変換の一部であっても、<code>isComposing</code> は false となります。しかし、<span v-mark.highlight.yellow="{at:1,multiline:true}">これらの場合でも <a href="/ja/docs/Web/API/KeyboardEvent/keyCode"><code>KeyboardEvent.keyCode</code></a> は <code>229</code> のままなので、非推奨ではあるものの、やはり <code>keyCode</code> も調べることをお勧めします</span>。

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
    'それはそれとして、それが送信であるなら、form要素のsubmitイベントを使うことも検討すべきです。',
    'これなら、ブラウザが完璧にハンドリングしてくれます。Safariのバグも関係ありません。',
    'ただし、<code>\&\lt\;textarea&gt;</code>の場合は、Enterキーによる送信はできません。',
    'その場合は、これまでのお話のように、keydownイベントを使用する必要があるでしょう。'
  ]"
/>

---

# a11y ∋ WCAG

<div class="flex justify-center">

![アクセシビリティ（a11y）とWCAGの関係を示すベン図 — WCAGはアクセシビリティ要件の一部をカバーするが全てを網羅しているわけではない / Venn diagram showing the relationship between accessibility (a11y) and WCAG — WCAG covers some but not all accessibility requirements](/a11y_wcag_venn.svg){class="w-82 mt-[-3rem]"}

</div>

::captions::

<VCaptions
:en-captions="[
  'I consider this an accessibility issue,',
  'but it is not covered by WCAG.',
  'Of course, WCAG does not cover all accessibility issues.',
  'This issue arises because it is unknown to implementers.',
  'There must be other unknown issues like this.',
  'Therefore, if we are stakeholders, we must raise our voices,',
  'and developers need to listen to users\' voices.',
]"
:ja-captions="[
  'わたしはこれをアクセシビリティの問題だと考えていますが、',
  'WCAGではカバーされていません。',
  '当然ながら、WCAGがすべてのアクセシビリティ課題をカバーしているわけではありません。',
  '今回の問題は、実装者にとって未知だから発生しています。',
  'このような未知の問題は、ほかにも必ずあるはずです。',
  'ですから、自分たちが当事者であれば、しっかり声を上げなければなりませんし、',
  '開発者はユーザーの声に耳を傾ける必要があります。',
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
layout: fact
---

End

<PoweredBySlidev />
