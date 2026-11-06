# GitHub Colored Text Workarounds

Since standard HTML `style="color:red"` tags are sanitized by GitHub's Markdown renderer, here are the 4 primary ways to display red elements or highlighted text in GitHub documentation.

---

## 1. KaTeX Math Notation (Best for pure red text)
GitHub natively supports inline LaTeX math syntax using dollar signs. You can wrap text inside `$\color{red}{\text{...}}$`.

**Code:**
```markdown
$\color{red}{\text{This is red text in documentation.}}$
```

**Output Preview:**
$\color{red}{\text{This is red text in documentation.}}$

---

## 2. Diff Code Block (Best for multi-line red warnings)
Using a `diff` code block highlights lines prefixed with `-` in red (as removed text).

**Code:**
```markdown
```diff
- WARNING: This is a highlighted red warning line in your documentation.
```
```

**Output Preview:**
```diff
- WARNING: This is a highlighted red warning line in your documentation.
```

---

## 3. Shields.io Badges (Best for labels, tags, and callouts)
You can embed image badges from Shields.io to display custom red tags or labels.

**Code:**
```markdown
![Red Label](https://img.shields.io/badge/IMPORTANT-RED-red)
![Status](https://img.shields.io/badge/Status-Deprecated-critical)
```

**Output Preview:**
![Red Label](https://img.shields.io/badge/IMPORTANT-RED-red)
![Status](https://img.shields.io/badge/Status-Deprecated-critical)

---

## 4. Hex Color Swatch (Best for color references)
GitHub automatically displays a small clickable red color chip next to any color code in backticks.

**Code:**
```markdown
Color reference: `#ff0000` or `#red`
```

**Output Preview:**
Color reference: `#ff0000`