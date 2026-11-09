export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="site-container mx-auto flex max-w-6xl flex-col gap-2 text-xs leading-6 text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
        <p>每个工作日一节中文短课，保留每一步学习轨迹。</p>
        <p>AI 智能体与 FDE · 编程 · Web · 游戏引擎 · 设计 · 影视后期 · 30 条路线</p>
      </div>
    </footer>
  );
}
