import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { Search, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { nodes, themes, type MapNode as MapNodeType } from "@/data/nodes";
import MapNodeComponent from "./MapNode";
import MiniMap from "./MiniMap";

const MAP_WIDTH = 1650;
const MAP_HEIGHT = 1420;

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-1">
      <button onClick={() => zoomIn()} className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
        <ZoomIn size={18} />
      </button>
      <button onClick={() => zoomOut()} className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
        <ZoomOut size={18} />
      </button>
      <button onClick={() => resetTransform()} className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
        <RotateCcw size={18} />
      </button>
    </div>
  );
}

export default function ConspiracyMap() {
  const [search, setSearch] = useState("");
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<MapNodeType | null>(null);
  const [transformState, setTransformState] = useState({ x: 0, y: 0, scale: 1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState({ w: 1200, h: 800 });

  useEffect(() => {
    const update = () => {
      setViewportSize({ w: window.innerWidth, h: window.innerHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const themeMap = useMemo(() => {
    const m = new Map(themes.map((t) => [t.id, t]));
    return m;
  }, []);

  const searchLower = search.toLowerCase();

  const matchesSearch = useCallback(
    (node: MapNodeType) => {
      if (!searchLower) return true;
      return node.label.toLowerCase().includes(searchLower);
    },
    [searchLower]
  );

  const matchesTheme = useCallback(
    (node: MapNodeType) => {
      if (!activeTheme) return true;
      return node.theme === activeTheme;
    },
    [activeTheme]
  );

  const handleNodeClick = useCallback((node: MapNodeType) => {
    setSelectedNode((prev) => (prev?.id === node.id ? null : node));
  }, []);

  const hasFilter = !!search || !!activeTheme;

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Search bar */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2 max-w-xs">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" size={14} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search nodes..."
            className="w-64 pl-8 pr-8 py-2 rounded bg-white/5 border border-white/10 text-white/90 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 backdrop-blur-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Theme filter */}
      <div className="fixed top-16 left-4 z-50 flex flex-wrap gap-1 max-w-sm">
        <button
          onClick={() => setActiveTheme(null)}
          className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
            !activeTheme ? "bg-white/15 border-white/30 text-white" : "bg-white/5 border-white/10 text-white/50 hover:text-white/80"
          }`}
        >
          All
        </button>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTheme(activeTheme === t.id ? null : t.id)}
            className="px-2 py-0.5 rounded text-[10px] border transition-colors"
            style={{
              backgroundColor: activeTheme === t.id ? `hsl(${t.color} / 0.2)` : `hsl(${t.color} / 0.05)`,
              borderColor: activeTheme === t.id ? `hsl(${t.color} / 0.5)` : `hsl(${t.color} / 0.15)`,
              color: activeTheme === t.id ? `hsl(${t.color})` : `hsl(${t.color} / 0.6)`,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Map */}
      <TransformWrapper
        initialScale={0.85}
        minScale={0.3}
        maxScale={3}
        limitToBounds={false}
        onTransformed={(_, state) => {
          setTransformState({ x: state.positionX, y: state.positionY, scale: state.scale });
        }}
      >
        <Controls />
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
          contentStyle={{ width: MAP_WIDTH, height: MAP_HEIGHT }}
        >
          <div className="relative" style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}>
            {/* Subtle grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Center title */}
            <div className="absolute pointer-events-none" style={{ left: MAP_WIDTH / 2, top: MAP_HEIGHT / 2 - 100, transform: "translate(-50%, -50%)" }}>
              <h1
                className="text-[60px] font-serif font-bold tracking-widest text-white/[0.03] select-none"
                style={{ textShadow: "0 0 80px rgba(255,255,255,0.02)" }}
              >
                THE GREAT AWAKENING
              </h1>
            </div>

            {/* Nodes */}
            {nodes.map((node) => {
              const matches = matchesSearch(node) && matchesTheme(node);
              const isHighlighted = hasFilter ? matches : selectedNode?.id === node.id;
              const isDimmed = hasFilter ? !matches : false;
              return (
                <MapNodeComponent
                  key={node.id}
                  node={node}
                  theme={themeMap.get(node.theme)}
                  scale={transformState.scale}
                  isHighlighted={isHighlighted}
                  isDimmed={isDimmed}
                  onClick={handleNodeClick}
                />
              );
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* Minimap */}
      <MiniMap
        nodes={nodes}
        themes={themes}
        viewportX={transformState.x}
        viewportY={transformState.y}
        viewportWidth={viewportSize.w}
        viewportHeight={viewportSize.h}
        mapWidth={MAP_WIDTH}
        mapHeight={MAP_HEIGHT}
        scale={transformState.scale}
      />

      {/* Selected node detail */}
      {selectedNode && (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm p-4 rounded-lg border border-white/10 bg-black/90 backdrop-blur-md">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-white font-serif text-lg leading-tight">{selectedNode.label}</h3>
              <span
                className="inline-block mt-1 px-2 py-0.5 rounded text-[10px]"
                style={{
                  color: `hsl(${themeMap.get(selectedNode.theme)?.color || "0 0% 50%"})`,
                  backgroundColor: `hsl(${themeMap.get(selectedNode.theme)?.color || "0 0% 50%"} / 0.1)`,
                  border: `1px solid hsl(${themeMap.get(selectedNode.theme)?.color || "0 0% 50%"} / 0.3)`,
                }}
              >
                {themeMap.get(selectedNode.theme)?.label}
              </span>
            </div>
            <button onClick={() => setSelectedNode(null)} className="text-white/40 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <p className="mt-2 text-white/50 text-xs">Click to view explainer page (coming soon)</p>
        </div>
      )}

      {/* Node count */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/20 text-[10px] tracking-widest uppercase">
        {nodes.length} nodes mapped · Zoom & pan to explore
      </div>
    </div>
  );
}
