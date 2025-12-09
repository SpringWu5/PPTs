---
# 主题选择 neversink
theme: neversink

# 幻灯片标题
title: Everforest Geek Slidev

# 启用 Slidev 的高级功能
highlighter: shiki
lineNumbers: true
drawings:
  persist: false

# 字体配置 (核心！自动从 Google Fonts 拉取)
fonts:
  # 正文/标题字体：霞鹜文楷屏幕阅读版 (温润护眼)
  sans: 'LXGW WenKai Screen'
  serif: 'LXGW WenKai Screen'
  # 代码字体：Fira Code (极客标配)
  mono: 'Fira Code'

# 布局默认值
defaults:
  layout: center

# 动画配置 (极简流：淡入淡出或左滑)
transition: slide-left

# 这里的 css 用于修正一些极端的布局情况
css: unocss
---
---

layout: center
---

# Hello, Everforest

<div class="mt-4 text-mute text-sm font-mono">
  User Interface / Design Protocol / <span class="text-ef-green">Active</span>
</div>

<!-- 模拟终端效果 -->
<div class="mt-8 terminal-window w-120 text-left">
  <div class="terminal-header">
    <div class="terminal-dot bg-ef-red"></div>
    <div class="terminal-dot bg-ef-yellow"></div>
    <div class="terminal-dot bg-ef-green"></div>
    <span class="text-xs text-mute ml-2">zsh — 80x24</span>
  </div>
  <div class="p-4 font-mono text-sm">
    <div class="flex gap-2">
      <span class="text-ef-green">➜</span>
      <span class="text-ef-blue">~</span>
      <span>echo "System Ready"</span>
    </div>
    <div class="text-ef-gray mt-1">Optimization complete.</div>
  </div>
</div>
