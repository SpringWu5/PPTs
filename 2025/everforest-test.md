---
# 1. 主题设置
theme: neversink

# 2. 引擎设置 (删除 css: ./style.css，保持 unocss)
css: unocss

# 3. 语法高亮
highlighter: shiki
codeThemes:
  dark: everforest-dark
  light: everforest-light

# 4. 全局样式类 (应用我们在 uno.config.ts 里定义的)
class: "bg-ever" 

# 5. 幻灯片信息
title: Everforest Slidev
info: |
  My Presentation
---

# 核心概念

这里是正文内容，使用了 Everforest 配色。

<!-- 
关键修正：
1. layout: two-cols 指定布局
2. ::right:: 下面必须空一行！
-->

---

layout: two-cols
---

# 左侧标题

这里是左侧的内容。

- 列表项 1
- 列表项 2

::right::

<!-- 注意：这里必须留空行，否则报错 -->
