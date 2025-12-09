import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    // 注入 Everforest Dark Hard 色板
    colors: {
      ef: {
        bg: '#272e33',       // 主要背景 (Hard Dark)
        bgDim: '#2d353b',    // 次要背景 (用于代码块背景/侧边栏)
        fg: '#d3c6aa',       // 前景米白
        red: '#e67e80',      // 错误/强调
        green: '#a7c080',    // 成功/重点
        yellow: '#dbbc7f',   // 警告/高亮
        blue: '#7fbbb3',     // 信息/链接
        purple: '#d699b6',   // 特殊
        aqua: '#83c092',     // 辅助
        gray: '#859289',     // 注释/弱化文字
      },
    },
  },
  shortcuts: {
    // 1. 布局类 (Tiling Window Manager 风格)
    'layout-grid': 'grid grid-cols-2 gap-4 h-full p-4',
    
    // 2. 文本类 (语义化)
    'text-norm': 'text-ef-fg',
    'text-mute': 'text-ef-gray',
    'text-code': 'font-mono text-ef-blue',
    'text-em': 'text-ef-green font-bold',  // 强调 (Emphasis)
    'text-err': 'text-ef-red font-bold',   // 错误/警示
    
    // 3. 容器类 (极简卡片)
    'card-base': 'bg-ef-bgDim rounded-md p-4 border border-ef-bgDim/50',
    'card-hover': 'hover:border-ef-green/50 transition-colors duration-300',
    
    // 4. 终端窗口风格 (你的最爱)
    'terminal-window': 'bg-ef-bgDim rounded-md border border-ef-bg shadow-xl overflow-hidden',
    'terminal-header': 'bg-[#374145] px-4 py-1 flex items-center gap-2 border-b border-ef-bg',
    'terminal-dot': 'w-3 h-3 rounded-full', // 红黄绿三个点
    
    // 5. 绝对定位极简标签
    'badge-float': 'absolute top-4 right-4 bg-ef-green/10 text-ef-green px-2 py-1 rounded text-xs font-mono',
  },
})
