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

# Disclaimer <small>おことわり</small>

- <VP><template #en>Today I talk in English because I want to convey my message to those who have never experienced issues with IME.</template>
  <template #ja>今日は、IMEで困ったことのない人に伝えるため、英語で話します。</template></VP>

::captions::
<VCaptions 
  :en-captions="[
    'Today I talk in English because',
    'I want to convey my message to those who have never experienced issues with IME.',
  ]"
  :ja-captions="[
    '今日は英語で話します、なぜなら',
    'IMEで困ったことのない人に伝えたいからです。',
  ]"
/>

---

# Conclusion <small>結論</small>

<VP class="mb-3">
<template #en>IME operations can be hindered by application shortcut keys!</template>
<template #ja>IMEの操作がアプリのショートカットキーによって妨げられることがあります！</template>
</VP>

- <VP><template #en>Check <code>KeyboardEvent.isComposing</code> is <strong>false</strong> to avoid interfering with text input.</template>
  <template #ja>入力を妨げないよう <code>KeyboardEvent.isComposing</code>が <strong>false</strong> であることを確認しましょう。</template></VP>
- <VP><template #en>Also check <code>KeyboardEvent.keyCode</code> is <strong>229</strong>.</template>
  <template #ja><code>KeyboardEvent.keyCode</code> が<strong>229</strong>であることも確認しましょう。</template></VP>

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
    'また、非推奨プロパティではありますが、<code>KeyboardEvent.keyCode</code>が<strong>229</strong>であることも確認しましょう。',
    'これはWCAGでカバーされていないアクセシビリティ課題ですが、',
    'IMEで文字変換を行うユーザーにとって非常に重要です。'
  ]"
/>

---

# IME (Input Method Editor)

- <VP><template #en>IME is software that supports text input on computers.</template>
  <template #ja>IMEは、コンピューターでの文字入力をサポートするためのソフトウェアです。</template></VP>
- <VP><template #en>It offers features like predictive input and character composition.</template>
  <template #ja>入力補完や、文字の合成などを行います。</template></VP>
- <VP><template #en>For languages like Japanese and Chinese, it provides kanji <strong>conversion</strong>.</template>
  <template #ja>とくに日本語、中国語などでは、漢字への<strong>変換</strong>を行います。</template></VP>

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

# Example (in Japanese) <small>例 (日本語の場合)</small>

<div class="text-center text-2xl">
  <div v-click="2">
    hashi
  </div>
  <div v-click="2">
    ↓
  </div>
  <div v-click="4">
    橋 (bridge)
  </div>
  <div v-click="5">
    箸 (chopsticks)
  </div>
  <div v-click="6">
    端 (edge)
  </div>
</div>

::captions::

<VCaptions
  :en-captions="[
    'I introduce an example of IME user experience.',
    'type &quot;hashi&quot; in alphabet and hit space key to see the suggestions.',
    'IME displays a list of candidate characters, like',
    '橋 (means bridge),',
    '箸 (means chopsticks),',
    '端 (means edge)',
  ]"
  :ja-captions="[
    'IMEユーザーの体験例を紹介します。',
    'アルファベットで hashi と入力し、スペースキーを押すと候補が表示されます。',
    'IMEは、次のような候補文字のリストを表示します。',
    '',
    '',
    '',
  ]"
/>

---

# IME Shortcuts <small>IMEのショートカット</small>

<table v-click="[2, 4]">
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
  </tbody>
</table>

<table v-click="4">
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
    'Space to start conversion.',
    'Tab to start completion.',
    'Tab, Space, Down Arrow to move to the next candidate.',
    'Shift + Tab, Shift + Space, Up Arrow to move to the previous candidate.',
    'Enter to confirm the selected candidate.',
  ]"
  :ja-captions="[
    'IMEのショートカットを確認しておきましょう。',
    'Space で変換を開始します。',
    'Tab で補完を開始します。',
    'Tab, Space, 下矢印 で次の候補に移動します。',
    'Shift + Tab, Shift + Space, 上矢印 で前の候補に移動します。',
    'Enter で選択した候補を確定します。',
  ]"
/>

---

# DEMO <small>デモ</small>

<ShowKeyInput class="absolute right-4 top-4"/>

<div class="flex h-63 items-center">
<input class="border-2 border-black text-7xl w-full p-4" />
</div>

---

# Problem <small>問題</small>

<VP>
<template #en>What happens when web app shortcuts conflict with IME shortcuts...?</template>
<template #ja>もしWebアプリのショートカットキーがIMEのショートカットキーと衝突したら……？</template>
</VP>

::captions::

<VCaptions
  :en-captions="[
    'Well, what happens when web app shortcuts conflict with IME shortcuts?',
  ]"
  :ja-captions="[
    'さて、WebアプリのショートカットキーがIMEのショートカットキーと衝突するとどうなるでしょうか？'
  ]"
/>

---

# Bad DEMO

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

---
layout: two-cols-header
---

# Bad Sample: "G"

Try to input 「<ruby>日本語が/途中で/送信される<rt>Japanese text is sent halfway through</rt></ruby>」 incrementally.

::left::

<kbd class="text-xl!">Enter</kbd>

- **IME**: Confirm
- **Input Element**: Submit

::right::

<div class="flex justify-center h-52">
<SlidevVideo v-click="2" autoplay controls class="border-1 border-black">
  <source src="./ServiceG.mp4" type="video/mp4" />
</SlidevVideo></div>

::captions::

<VCaptions
  :en-captions="[
    'This is a very very very very very common issue.',
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

# Bad Sample: Chat app "S" <small>悪い例</small>

Type 「しけん」 and try to find the correct Kanji

::left::

<kbd class="text-xl!">Tab</kbd>

- **IME**: Move to next candidate
- **Search box**: Complete candidate

::right::

<div class="flex justify-center">
<SlidevVideo v-click="2" autoplay controls class="border-1 border-black">
  <source src="./ServiceS.mp4" type="video/mp4" />
</SlidevVideo>
</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'There are also cases where keys other than the Enter key can cause problems.',
    'Tab key is used to move to the next candidate in IME,',
    'but it can also be used to select completion candidates in the app.',
    'As a result, the app can take precedence ',
    'and interfere with IME operations.'
  ]"
  :ja-captions="[
    'Enterキー以外にも問題になるケースがあります。',
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

# Good DEMO

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

---
layout: two-cols-header
---

# But……

**Safari** has a bug with `KeyboardEvent.isComposing`.

::left::
<small>

- [165004 – The event order of keydown/keyup events and composition events are wrong on macOS](https://bugs.webkit.org/show_bug.cgi?id=165004)
- [3.8.5. Key Events During Composition](https://w3c.github.io/uievents/#events-composition-key-events)

</small>

::right::

<div class="flex justify-center">
<SlidevVideo autoplay controls class="border-1">
  <source src="./safari_bug.mp4" type="video/mp4" />
</SlidevVideo>
</div>

::captions::

<VCaptions
  at="1"
  :en-captions="[
    'But, unfortunately, Safari has a bug with <code>KeyboardEvent.isComposing</code>.',
    'When pressing the Enter key to confirm conversion, it becomes false.'
  ]"
  :ja-captions="[
    'しかし、残念ながら、Safariには<code>KeyboardEvent.isComposing</code>にバグがあります。',
    '変換確定のEnterキーを押したとき、値がfalseになってしまいます。'
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

# MDN says...

[Element: Keydown event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

> <strong>Note:</strong> <code>compositionstart</code> may fire <em>after</em> <code>keydown</code> when typing the first character that opens up the IME, and <code>compositionend</code> may fire <em>before</em> <code>keydown</code> when typing the last character that closes the IME. In these cases, <code>isComposing</code> is false even when the event is part of composition. However, <span v-mark.highlight.yellow="{at:1,multiline:true}"><a href="/en-US/docs/Web/API/KeyboardEvent/keyCode"><code>KeyboardEvent.keyCode</code></a> is still <code>229</code> in these cases, so it's still advisable to check <code>keyCode</code> as well, although it's deprecated</span>.

<div class="h-2"/>

> <strong>メモ:</strong> IME を開くための最初の文字を入力したときに、 <code>compositionstart</code> が <code>keydown</code> の後に発行されることがあります。また、 IME を閉じられり最後の文字を入力したときに、 <code>compositionend</code> が <code>keydown</code> の前に発行されることがあります。これらの場合、イベントが変換の一部であっても、<code>isComposing</code> は false となります。しかし、<span v-mark.highlight.yellow="{at:1,multiline:true}">これらの場合でも <a href="/ja/docs/Web/API/KeyboardEvent/keyCode"><code>KeyboardEvent.keyCode</code></a> は <code>229</code> のままなので、非推奨ではあるものの、やはり <code>keyCode</code> も調べることをお勧めします</span>。

::captions::

<VCaptions
  :en-captions="[
  'MDN says check <code>keyCode</code> is <code>229</code>, although it\'s deprecated.'
  ]"
  :ja-captions="[
    'MDNは、非推奨であるものの、<quot>keyCode</quot>が<quot>229</quot>であることを確認するように言っています。'
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
    'but it\'s advisable to do so now.'
  ]"
  :ja-captions="[
    'ということで、解決策1は<code>keyCode</code>が<code>229</code>であることを確認することです。',
    '非推奨のパラメータを確認することに抵抗があるかもしれませんが、',
    '今はそうすることをお勧めします。'
  ]"
/>

---

# Solution 2: add Meta / Ctrl Key

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
    'The another solution is add Meta / Ctrl key to submit.',
    'You don\'t have to rely solely on the Enter key for submission.'
  ]"
  :ja-captions="[
    '別の解決策は、Meta / Ctrlキーを追加して送信することです。',
    'そもそもEnterキーだけで送信しなければいいという話ですね。',
  ]"
/>

---

# BTW...

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
    'However, for <code>\&\lt;textarea\&\gt;</code>, you cannot submit with the Enter key.',
    'In that case, you would need to use the keydown event as we discussed earlier.'
  ]"
  :ja-captions="[
    'それはそれとして、それが送信であるなら、form要素のsubmitイベントを使うことも検討すべきです。',
    'ただし、<code>\&\lt\;textarea&gt;</code>の場合は、Enterキーによる送信はできません。',
    'その場合は、これまでのお話のように、keydownイベントを使用する必要があるでしょう。'
  ]"
/>

---

# Is this issue covered by WCAG?

<p v-click="3" class="text-9xl text-center h-63 flex justify-center items-center"> NO </p>

::captions::

<VCaptions
:en-captions="[
  'I consider this an accessibility issue.',
  'Is this issue covered by WCAG?',
  'The answer is NO.',
]"
:ja-captions="[
  'わたしはこれをアクセシビリティの問題だと考えています。',
  'この問題はWCAGでカバーされているのでしょうか？',
  '答えはNOです。',
]"
/>

---

# a11y ∋ WCAG

<div class="flex justify-center">

![alt text](/a11y_wcag_venn.svg){class="w-82 mt-[-3rem]"}

</div>

::captions::

<VCaptions
:en-captions="[
  'Of course, WCAG does not cover all accessibility issues.',
  'This issue arises because it is unknown to implementers.',
  'There must be other unknown issues like this.',
  'Therefore, if we are stakeholders, we must raise our voices,',
  'and developers need to listen to users\' voices.',
]"
:ja-captions="[
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
src: ./slides.md#4
---

---
layout: fact
---

End

<PoweredBySlidev />
