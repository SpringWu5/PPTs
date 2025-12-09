// scripts/build.mjs
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { globby } from 'globby'; // 需要安装这个库

// 配置
const REPO_NAME = 'PPTs'; // 你的 GitHub 仓库名，用于 Base URL
const OUTPUT_DIR = 'dist';

async function build() {
  console.log('🦁 Start building Slidev Hub...');

  // 1. 清理并创建 dist
  if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR);

  // 2. 扫描所有 PPT (排除 template.md 和 README.md)
  const files = await globby(['**/*.md', '!node_modules', '!dist', '!template.md', '!README.md'], {
    ignore: ['**/scripts/**']
  });

  const slidesList = [];

  // 3. 遍历构建每一个 PPT
  for (const file of files) {
    const dir = path.dirname(file);
    const name = path.basename(file, '.md');
    
    // 构建输出路径: dist/2025/week-01
    const outPath = path.join(OUTPUT_DIR, dir, name);
    // Base URL: /PPTs/2025/week-01/
    const base = `/${REPO_NAME}/${dir}/${name}/`;

    console.log(`🔨 Building ${file} -> ${outPath} ...`);

    try {
      // 调用 Slidev Build 命令
      execSync(`npx slidev build ${file} --out ${outPath} --base ${base}`, { stdio: 'inherit' });
      
      // 收集信息用于生成首页
      slidesList.push({
        name: `${dir} - ${name}`,
        link: `.${base.replace(`/${REPO_NAME}`, '')}`, // 相对路径
        date: fs.statSync(file).mtime.toISOString().split('T')[0]
      });
    } catch (e) {
      console.error(`❌ Failed to build ${file}`, e);
    }
  }

  // 4. 复制公共资源 (images 等) 到 dist 根目录
  if (fs.existsSync('public')) {
    console.log('📂 Copying global assets...');
    fs.cpSync('public', path.join(OUTPUT_DIR, 'public'), { recursive: true });
  }

  // 5. 生成 Everforest 风格的索引首页 (index.html)
  console.log('🎨 Generating Index Page...');
  generateIndexHtml(slidesList);

  console.log('✅ All done!');
}

function generateIndexHtml(slides) {
  // 按日期倒序排列
  slides.sort((a, b) => b.date.localeCompare(a.date));

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slidev Hub</title>
  <style>
    :root {
      --bg: #272e33; --fg: #d3c6aa; --accent: #a7c080; --dim: #859289; --card-bg: #2e383c;
    }
    body {
      background-color: var(--bg); color: var(--fg);
      font-family: 'FiraCode Nerd Font', 'Segoe UI', sans-serif;
      margin: 0; padding: 40px; display: flex; flex-direction: column; align-items: center;
    }
    h1 { color: var(--accent); margin-bottom: 40px; font-weight: bold; }
    .grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px; width: 100%; max-width: 1000px;
    }
    .card {
      background: var(--card-bg); padding: 20px; border-radius: 8px;
      text-decoration: none; color: inherit; border: 1px solid transparent;
      transition: all 0.2s;
    }
    .card:hover { border-color: var(--accent); transform: translateY(-2px); }
    .title { font-size: 1.2rem; margin-bottom: 10px; font-weight: bold; display: block; }
    .date { color: var(--dim); font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>Slidev Hub</h1>
  <div class="grid">
    ${slides.map(slide => `
      <a href="${slide.link}" class="card">
        <span class="title">${slide.name}</span>
        <span class="date">${slide.date}</span>
      </a>
    `).join('')}
  </div>
</body>
</html>
  `;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html);
}

build();
