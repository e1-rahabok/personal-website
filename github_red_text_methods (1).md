# GitHub Red Text (Preserving Document Font)

Here are the best ways to color text red on GitHub while keeping the standard documentation font style instead of switching to math serif typography.

---

## 1. KaTeX with GitHub CSS Class (Recommended)
This applies GitHub's native theme styling to standard text inside a math block, retaining your standard font.

**Code:**
```markdown
$\htmlClass{text-danger}{This is red text matching standard doc font.}$
```

---

## 2. KaTeX Sans-Serif (`\textsf`)
If `\htmlClass` is stripped, `\textsf` forces KaTeX to use a clean sans-serif font instead of the default serif math font.

**Code:**
```markdown
$\color{red}{\textsf{This is red text in sans-serif style.}}$
```

---

## 3. HTML Font Tag Inside `<sub>`
Some GitHub markdown renderers parse `<font color="red">` inside `<sub>` tags while maintaining the native document font.

**Code:**
```markdown
<sub><font color="red">This is red text using native sub/font tags.</font></sub>
```

---

## Quick Comparison Summary

| Method | Syntax | Best Used For |
| :--- | :--- | :--- |
| **GitHub CSS Class** | `$\htmlClass{text-danger}{Text}$` | Matching standard GitHub dark/light mode text font perfectly |
| **Sans-Serif Math** | `$\color{red}{\textsf{Text}}$` | Clean sans-serif fallback if CSS class isn't supported |
| **HTML Sub/Font** | `<sub><font color="red">Text</font></sub>` | Small inline red text callouts without math engine formatting |