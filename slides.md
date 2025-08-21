---
# You can also start simply with 'default'
theme: default

# some information about your slides (markdown enabled)
title: 'IME vs Input Field Shortcuts: Enhancing Text Input Accessibility'
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

---

# Conclusion <small>結論</small>

<VP>
<template #en>Design shortcuts with IME users in mind:</template>
<template #ja>IMEユーザーの存在を念頭においてショートカットを設計しましょう</template>
</VP>

- <VP><template #en>Use <strong>form submit</strong> events, not keyup/keydown, for submissions.</template>
  <template #ja>送信のためには、keyup/keydownではなく<strong>form submit</strong>イベントを使用しましょう。</template></VP>
- <VP><template #en>Prefer <strong>native dialog</strong>s for Esc to close.</template>
  <template #ja>Escキーで閉じる場合は<strong>標準のdialog要素</strong>を使いましょう。</template></VP>
- <VP><template #en>Check <code>KeyboardEvent.isComposing</code> is false to avoid interfering with text input.</template>
  <template #ja>入力を妨げないよう、<code>KeyboardEvent.isComposing</code>がfalseであることを確認しましょう。</template></VP>

::captions::

<!-- <VSwitch :unmount="true">
<template #1>
<VP v-click.hide>
  <template #en>Let's talk about why it's important to design shortcuts with IME users in mind.</template>
  <template #ja>IMEユーザーを意識したショートカット設計がなぜ大切なのか、改めて考えてみましょう。</template>
</VP>
</template>

<template #2>
<VP v-click.hide>
<template #en>Use <strong>form submit</strong> events, not keyup/keydown, for submissions.</template>
<template #ja>送信のためには、keyup/keydownではなく<strong>form submit</strong>イベントを使用しましょう。</template>
</VP>
</template>

<template #3>
<VP v-click.hide>
<template #en>Prefer <strong>native dialog</strong>s for Esc to close.</template>
<template #ja>Escキーで閉じる場合は<strong>標準のdialog要素</strong>を使いましょう。</template>
</VP>
</template>

<template #4>
<VP v-click.hide>
<template #en>Check <code>KeyboardEvent.isComposing</code> is false to avoid interfering with text input.</template>
<template #ja>入力を妨げないよう、<code>KeyboardEvent.isComposing</code>がfalseであることを確認しましょう。</template>
</VP>
</template>

<template #5>
<VP v-click.hide>
<template #en>This is an accessibility issue not covered by WCAG, but crucial for non-Latin IME users.</template>
<template #ja>これはWCAGでカバーされていないアクセシビリティ課題ですが、非ラテン文字IMEユーザーにとって非常に重要です。</template>
</VP>
</template>
</VSwitch> -->

---

# IME (Input Method Editor)

- <VP><template #en>IME is a tool for entering non-Latin characters.</template>
  <template #ja>IMEは、非ラテン文字を入力するためのツールです。</template></VP>
- <VP><template #en>Used for languages like Japanese, Chinese, Korean, etc.</template>
  <template #ja>日本語、中国語、韓国語などの言語で使用されます。</template></VP>
- <VP><template #en>Type in alphabet, then select from multiple conversion candidates to confirm.</template>
  <template #ja>アルファベットで入力後、複数の変換候補から選択して確定します。</template></VP>

---

# Example (in Japanese) <small>例 (日本語の場合)</small>

<div class="text-center text-2xl">
<VClicks>
  <div>
    hashi
  </div>
  <div>
    ↓
  </div>
  <div>
    橋 (bridge)
  </div>
  <div>
    箸 (chopsticks)
  </div>
  <div>
    端 (edge)
  </div>
</VClicks>
</div>

---

# IME Shortcuts <small>IMEのショートカット</small>

<table>
  <thead>
    <tr>
      <th>shortcuts</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tab / Space / ↓</td>
      <td>
        <VP>
          <template #en>Move to next candidate</template>
          <template #ja>次の候補に移動します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <td>Shift + Tab / Shift + Space / ↑</td>
      <td>
        <VP>
          <template #en>Move to previous candidate</template>
          <template #ja>前の候補に移動します。</template>
        </VP>
      </td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>
        <VP>
          <template #en>Confirm selected candidate</template>
          <template #ja>選択した候補を確定します。</template>
        </VP>
      </td>
    </tr>
  </tbody>
</table>

---

# DEMO <small>デモ</small>
<ShowKeyInput class="absolute right-4 top-4"/>

<div class="flex h-63 items-center">
<input class="border-2 border-black text-7xl w-full" />
</div>

---

# Problem <small>問題</small>

<VP>
<template #en>What happens when web app shortcuts conflict with IME shortcuts...?</template>
<template #ja>もしWebアプリのショートカットキーがIMEのショートカットキーと衝突したら……？</template>
</VP>

---

# Bad Sample: Chat app "S" <small>悪い例</small>

---
layout: two-cols-header
---

# Bad Sample: "G"

Try to input 「日本語が途中で送信される」 (means "Japanese text is sent halfway through") incrementally.

::left::

<kbd class="text-xl!">Enter</kbd>
- IME: Confirm
- Input Element: Submit

::right::

<div class="flex justify-center">
<video src="./public/ServiceG.mp4" controls class="w-100"></video>
</div>

---

# Solution: `KeyboardEvent.isComposing`

<div class="[&_pre]:text-4! [&_pre]:lh-5!">

````md magic-move
```js
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submit()
  }
})
```

```js {3-5|*}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (event.isComposing) {
      return
    }
    submit()
  }
})
```
````

</div>

---

# Bad DEMO

1. Input "<ruby>要素<rt>youso</rt>と<rt>to</rt>属性<rt>zokusei</rt></ruby>" (means "elements and attributes")
2. Hit <kbd>Enter</kbd> to submit

<VFormKeydown class="my-4 flex justify-center" type="bad" />

<div class="[&_pre]:text-4!">

```js
inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submit()
  }
})
```

</div>

<ShowKeyInput class="absolute right-4 top-4"/>

---

# Good DEMO

1. Input "<ruby>要素<rt>youso</rt>と<rt>to</rt>属性<rt>zokusei</rt></ruby>" (means "elements and attributes")
2. Hit <kbd>Enter</kbd> to submit

<VFormKeydown class="my-4 flex justify-center" type="good" />

<div class="[&_pre]:text-3!">

```js
inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (event.isComposing) {
      return
    }
    submit()
  }
})
```

</div>

<ShowKeyInput class="absolute right-4 top-4"/>

---

# BTW...

Use the `<form>` submit event for submissions.

<VForm class="my-4 flex justify-center"  />

<div class="[&_pre]:text-4!">

```js
formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  submit()
})
```

<ShowKeyInput class="absolute right-4 top-4"/>

</div>

---

# Is this issue covered by WCAG?

<p v-click class="text-9xl text-center h-63 flex justify-center items-center"> NO </p>

---

# Conclusion <small>結論</small>

<VP>
<template #en>Design shortcuts with IME users in mind:</template>
<template #ja>IMEユーザーの存在を念頭においてショートカットを設計しましょう</template>
</VP>

- <VP><template #en>Use <strong>form submit</strong> events, not keyup/keydown, for submissions.</template>
  <template #ja>送信のためには、keyup/keydownではなく<strong>form submit</strong>イベントを使用しましょう。</template></VP>
- <VP><template #en>Prefer <strong>native dialog</strong>s for Esc to close.</template>
  <template #ja>Escキーで閉じる場合は<strong>標準のdialog要素</strong>を使いましょう。</template></VP>
- <VP><template #en>Check <code>KeyboardEvent.isComposing</code> is false to avoid interfering with text input.</template>
  <template #ja>入力を妨げないよう、<code>KeyboardEvent.isComposing</code>がfalseであることを確認しましょう。</template></VP>

::captions::
