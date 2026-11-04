// A decorative, softly animated network of nodes for the hero (the "AI" idea in the logo).
// Plain SVG with CSS animation (see .net-line and .net-node in app/globals.css).

const nodes = [
  [60, 70], [150, 30], [250, 80], [340, 40], [420, 110],
  [110, 150], [210, 170], [310, 140], [400, 210], [70, 240],
  [170, 270], [280, 250], [370, 300], [250, 330],
];
const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7], [3, 7], [4, 8],
  [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [8, 12], [9, 10], [10, 11],
  [11, 12], [10, 13], [11, 13],
];

export default function HeroNetwork({ className = "" }) {
  return (
    <svg viewBox="0 0 480 360" className={className} aria-hidden="true" fill="none">
      <g stroke="#ebd593" strokeOpacity="0.4" strokeWidth="1.3">
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            className="net-line"
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      <g>
        {nodes.map(([x, y], i) => (
          <g key={i} className="net-node">
            <circle cx={x} cy={y} r={i % 3 === 0 ? 11 : 7} fill="#c29a3a" fillOpacity="0.18" />
            <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 4 === 0 ? "#52d6a0" : "#ebd593"} />
          </g>
        ))}
      </g>
    </svg>
  );
}
