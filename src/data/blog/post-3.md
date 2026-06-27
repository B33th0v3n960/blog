---
title: "Advanced Markdown Features"
pubDate: 2022-07-01
editDate: 2022-07-05
description: |
    This document covers some of the more powerful features of Markdown, especially 
    those supported by GitHub Flavored Markdown (GFM) and other modern renderers.
image:
  url: "/src/assets/windows.png"
  alt: "Test image from wiz."
tags: ["astro", "blogging", "learning in public"]
---

# Advanced Markdown Features

This document covers some of the more powerful features of Markdown, especially 
those supported by GitHub Flavored Markdown (GFM) and other modern renderers.

## 1. Task Lists

````markdown
---

Use `- [ ]` for a checkbox.

```markdown
- [x] Write basic Markdown
- [ ] Learn advanced features
- [ ] Conquer the world
````

List of things I want to get done.
* [x] Write basic Markdown
* [ ] Learn advanced features
* [ ] Conquer the world

---

## 2. Footnotes

Add extra information without cluttering your main text.[^1]

```markdown
This is a sentence with a footnote.[^1]

[^1]: Here's the footnote!
```

[^1]: Here's the footnote!

---

## 3. Tables with Alignment

You can align text left, center, or right using colons (`:`).

```markdown
| Name     | Role       | Score |
|:---------|:----------:|------:|
| Alice    | Developer  |    95 |
| Bob      | Designer   |    87 |
| Charlie  | **Manager**|   100 |
```

| Name    |     Role    | Score |
| :------ | :---------: | ----: |
| Alice   |  Developer  |    95 |
| Bob     |   Designer  |    87 |
| Charlie | **Manager** |   100 |

---

## 4. Collapsible Sections (HTML only)

```html
<details>
  <summary>Click to expand!</summary>
  Hidden content goes here. You can include **Markdown** inside!
</details>
```

<details>
  <summary>Click to expand!</summary>
  Hidden content goes here. You can include **Markdown** inside!
</details>

---

## 5. Emoji

GitHub and some renderers support emoji codes:

```markdown
:+1: :smile: :tada:
```

👍 😄 🎉

---

## 6. Strikethrough

Use `~~text~~` to strike through.

```markdown
~~This text is crossed out~~
```

~~This text is crossed out~~

---

## 7. Inline HTML

Markdown allows some HTML:

```html
<b>Bold HTML</b> <i>Italic HTML</i> <span style="color:red">Red Text</span>
```

<b>Bold HTML</b> <i>Italic HTML</i> <span style="color:red">Red Text</span>

---

## 8. Math (LaTeX, only in supported renderers)

Use dollar signs for inline math: `$E = mc^2$`
Or double for blocks:

```markdown
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

👉 *Note: You need a renderer like Jupyter Notebook, Typora, Obsidian, or MathJax/GitHub with math support for this to work properly.*

---

## 9. Autolinks

URLs and emails become links automatically:

```markdown
https://www.openai.com  
email@example.com
```

[https://www.openai.com](https://www.openai.com)
[email@example.com](mailto:email@example.com)

---

## 10. Mentions & References (GitHub only)

```markdown
@octocat referenced issue #42
```

> These features work on GitHub or similar platforms that support team mentions and issue linking.

## 11. Alerts

```md
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

