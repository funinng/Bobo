export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="glow-orb absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="glow-orb absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
