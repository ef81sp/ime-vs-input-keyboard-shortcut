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
---

# IME vs Input Field Shortcuts: Enhancing Text Input Accessibility

かみくず

2025.09.21 Frontend Conference Tokyo

---

# かみくず / kamikuzu

- <VP><template #en>father of twin</template>
  <template #ja>双子の父</template></VP>
- <VP><template #en>like Vue</template>
  <template #ja>Vueが好き</template></VP>

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

<VP>
<template #en>Design shortcuts with IME users in mind:</template>
<template #ja>IMEユーザーの存在を念頭においてショートカットを設計しましょう</template>
</VP>

- <VP><template #en>Check <code>KeyboardEvent.isComposing</code> is false to avoid interfering with text input.</template>
  <template #ja>入力を妨げないよう、<code>KeyboardEvent.isComposing</code>がfalseであることを確認しましょう。</template></VP>
- <VP><template #en>Use <strong>form submit</strong> events, not keyup/keydown, for submissions.</template>
  <template #ja>送信のためには、keyup/keydownではなく<strong>form submit</strong>イベントを使用しましょう。</template></VP>

::captions::

<VCaptions 
  :en-captions="[
    'Let\'s talk about why it\'s important to design shortcuts with IME users in mind.',
    'Check <code>KeyboardEvent.isComposing</code> is false to avoid interfering with text input.',
    'Use <strong>form submit</strong> events, not keyup/keydown, for submissions.',
    'This is an accessibility issue not covered by WCAG, but',
    'crucial for IME users who perform character conversion.'
  ]"
  :ja-captions="[
    'IMEユーザーを意識したショートカット設計がなぜ大切なのか、改めて考えてみましょう。',
    '入力を妨げないよう、<code>KeyboardEvent.isComposing</code>がfalseであることを確認しましょう。',
    '送信のためには、keyup/keydownではなく<strong>form submit</strong>イベントを使用しましょう。',
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
      <th>shortcuts</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><kbd>Space</kbd></th>
      <td>
        <VP>
          <template #en>Start conversion</template>
          <template #ja>変換を開始します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th><kbd>Tab</kbd></th>
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
      <th>shortcuts</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><kbd>Tab</kbd> / <kbd>Space</kbd> / <kbd>↓</kbd></th>
      <td>
        <VP>
          <template #en>Move to next candidate</template>
          <template #ja>次の候補に移動します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th><kbd>Shift</kbd> + <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Space</kbd> / <kbd>↑</kbd></th>
      <td>
        <VP>
          <template #en>Move to previous candidate</template>
          <template #ja>前の候補に移動します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <th><kbd>Enter</kbd></th>
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

Try to input 「日本語が途中で送信される」 (means "Japanese text is sent halfway through") incrementally.

::left::

<kbd class="text-xl!">Enter</kbd>

- **IME**: Confirm
- **Input Element**: Submit

::right::

<div class="flex justify-center">
<SlidevVideo v-click autoplay controls>
  <source src="./ServiceG.mp4" type="video/mp4" />
</SlidevVideo></div>

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
<SlidevVideo v-click autoplay controls>
  <source src="./ServiceS.mp4" type="video/mp4" />
</SlidevVideo>
</div>

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

---

# `isComposing`

> <VP><template #en>
>
> The **`KeyboardEvent.isComposing`** read-only property returns a boolean value indicating if the event is fired within a composition session, i.e., <span v-mark.green="1">after `compositionstart` and before `compositionend`</span>.
>
> </template>
> <template #ja>
>
> **`KeyboardEvent.isComposing`** は読み取り専用プロパティで、イベントが変換セッションの途中、すなわち <span v-mark.green="1">`compositionstart` の後かつ `compositionend` の前</span>に発行されたことを示す論理値を返します。
>
> </template></VP>

[KeyboardEvent: isComposing property | MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/isComposing)

---
layout: two-cols-header
---

# W3C Spec VS Safari

::left::

## **W3C Spec**

<div class="flex justify-center">

| No. | Event Type        | KeyboardEvent<br>.isComposing |
| --- | ----------------- | ----------------------------- |
| 1   | keydown           | false                         |
| 2   | compositionstart  |                               |
| 3   | compositionupdate |                               |
| 4   | keyup             | true                          |
| ... | —                 | —                             |
| 5   | keydown           | true                          |
| 6   | compositionend    |                               |
| 7   | keyup             | false                         |

</div>

::right::

## **Safari**

<div class="flex justify-center">

| No. | Event Type        | KeyboardEvent<br>.isComposing |
| --- | ----------------- | ----------------------------- |
| 1   | compositionstart  |                               |
| 2   | compositionupdate |                               |
| 3   | keydown           | true                          |
| 4   | keyup             | true                          |
| ... | —                 | —                             |
| 5   | compositionend    |                               |
| 6   | keydown           | false                         |
| 7   | keyup             | false                         |

</div>

::captions::
<VCaptions
  :en-captions="[
    'In W3C specifications, the behavior of <code>KeyboardEvent.isComposing</code> is well-defined.',
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

# BTW...

<VP>
  <template #en>Use the <strong>form submit</strong> event for submissions. ( <code>&lt;textarea&gt;</code>? I'm sorry.)</template>
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

---

# Is this issue covered by WCAG?

<p v-click class="text-9xl text-center h-63 flex justify-center items-center"> NO </p>

---

# a11y ∋ WCAG

---

# Conclusion <small>結論</small>

<VP>
<template #en>Design shortcuts with IME users in mind:</template>
<template #ja>IMEユーザーの存在を念頭においてショートカットを設計しましょう</template>
</VP>

- <VP><template #en>Use <strong>form submit</strong> events, not keyup/keydown, for submissions.</template>
  <template #ja>送信のためには、keyup/keydownではなく<strong>form submit</strong>イベントを使用しましょう。</template></VP>
- <VP><template #en>Check <code>KeyboardEvent.isComposing</code> is false to avoid interfering with text input.</template>
  <template #ja>入力を妨げないよう、<code>KeyboardEvent.isComposing</code>がfalseであることを確認しましょう。</template></VP>

::captions::

---

## layout: fact

End

<PoweredBySlidev />
