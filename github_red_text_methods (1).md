# GitHub Red Text (Preserving Document Font)

Here are the best ways to color text red on GitHub while keeping the standard documentation font style. Below each section, you can see both the syntax and how GitHub renders it live.

---

## 1. KaTeX Sans-Serif (`\textsf`)

This keeps the red text inline while forcing a clean sans-serif typeface to match standard document body text.

**Code:**
```markdown
$\color{red}{\textsf{This is red text in sans-serif style.}}$
```

**Live Result:**  
$\color{red}{\textsf{This is red text in sans-serif style.}}$

---

## 2. KaTeX Bold Sans-Serif (`\mathsf`)

If you want the red text to stand out even more as an emphasis or alert, combining it with sans-serif bold math formatting works very cleanly.

**Code:**
```markdown
$\color{red}{\mathsf{This\ is\ bold\ red\ text\ in\ sans-serif\ style.}}$
```

**Live Result:**  
$\color{red}{\mathsf{This\ is\ bold\ red\ text\ in\ sans-serif\ style.}}$

---

## 3. KaTeX with GitHub CSS Class (`\htmlClass`)

Applies GitHub's native theme color class directly to the math block text.

**Code:**
```markdown
$\htmlClass{text-danger}{This is red text matching standard doc font.}$
```

**Live Result:**  
$\htmlClass{text-danger}{This is red text matching standard doc font.}$

---

## 4. Native Diff Block (Block Warning)

If you need a full highlighted warning line within your documentation, diff code blocks render native red highlights with default font styling.

**Code:**
```diff
- Warning: This is an important alert message.
```

**Live Result:**
```diff
- Warning: This is an important alert message.
```

---

## Quick Reference Summary

| Style | Syntax | Best Used For |
| :--- | :--- | :--- |
| **Sans-Serif Red** | `$\color{red}{\textsf{Text}}$` | Regular inline red text callouts |
| **Bold Sans-Serif Red** | `$\color{red}{\mathsf{Bold\ Text}}$` | Highlighted inline warnings |
| **CSS Class Red** | `$\htmlClass{text-danger}{Text}$` | GitHub theme-integrated text |
| **Diff Line Red** | `` ```diff `- Text` ``` `` | High-visibility warning blocks |
