export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#312e81_0%,#020617_45%,#020617_100%)]" />

      {/* Top Left Glow */}
      <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] rounded-full bg-indigo-600/30 blur-[140px] animate-pulse" />

      {/* Top Right Glow */}
      <div className="absolute top-[80px] right-[-150px] w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse" />

      {/* Bottom Left Glow */}
      <div className="absolute bottom-[-180px] left-[10%] w-[350px] h-[350px] rounded-full bg-purple-600/20 blur-[130px] animate-pulse" />

      {/* Bottom Right Glow */}
      <div className="absolute bottom-[-150px] right-[8%] w-[450px] h-[450px] rounded-full bg-pink-500/20 blur-[140px] animate-pulse" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(255,255,255,.02)_100%)]" />

    </div>
  );
}