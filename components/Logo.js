// The University of Layyah AI Notes Library logo mark: a leaf spray, the letters U and L
// and a small network of nodes (the "AI" part). It is plain SVG, so it stays sharp at any size.
//   variant="dark"   for dark backgrounds (navbar, footer, hero)  : the L is ivory
//   variant="light"  for light backgrounds                        : the L is navy
//   animated         makes the network nodes pulse softly
// The high-resolution files are in public/brand/ (PNG and SVG).

export default function Logo({ variant = "dark", animated = true, className = "h-10 w-10", title }) {
  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? "logo-animated" : ""}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : "true"}
    >
      {variant === "dark" ? (
        <>
          <defs>
    <linearGradient id="ud-brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3dc98"/><stop offset=".5" stopColor="#d4a843"/><stop offset="1" stopColor="#a87a1e"/></linearGradient>
    <linearGradient id="ud-leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#52d6a0"/><stop offset="1" stopColor="#16805a"/></linearGradient>
  </defs>
  <g>
    <path d="M66 190 C46 156 44 112 62 62" fill="none" stroke="#25b07a" strokeWidth="5" strokeLinecap="round"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(59.6 177.3) rotate(-71.3) scale(1.05)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(59.6 177.3) rotate(-155.3) scale(1.05 -1.05)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(53.5 159.2) rotate(-62.0) scale(0.95)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(53.5 159.2) rotate(-146.0) scale(0.95 -0.95)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(50.2 139.7) rotate(-53.1) scale(0.85)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(50.2 139.7) rotate(-137.1) scale(0.85 -0.85)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(49.9 118.9) rotate(-45.0) scale(0.75)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(49.9 118.9) rotate(-129.0) scale(0.75 -0.75)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(52.5 96.9) rotate(-37.7) scale(0.65)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(52.5 96.9) rotate(-121.7) scale(0.65 -0.65)" fill="url(#ud-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(62.0 62.0) rotate(-70.2) scale(.8)" fill="url(#ud-leaf)"/>
    <path d="M100 62 V138 a30 30 0 0 0 60 0 V62" fill="none" stroke="url(#ud-brass)" strokeWidth="21" strokeLinecap="butt" strokeLinejoin="round"/>
    <path d="M190 62 V166 H232" fill="none" stroke="#f6f1e3" strokeWidth="21" strokeLinejoin="round"/>
    <g fill="none" stroke="url(#ud-brass)" strokeWidth="3" strokeLinecap="round">
      <path d="M190 62 L214 36 L232 70 L212 100 L190 62 M232 70 L190 62 M190 62 L160 32 L130 24" />
    </g>
    <g className="logo-nodes" stroke="url(#ud-brass)" strokeWidth="3" fill="#131e36">
      <circle className="logo-node n1" cx="214" cy="36" r="6.5"/>
      <circle className="logo-node n2" cx="232" cy="70" r="6"/>
      <circle className="logo-node n3" cx="212" cy="100" r="5.5"/>
      <circle className="logo-node n4" cx="160" cy="32" r="5.5"/>
      <circle className="logo-node n5" cx="130" cy="24" r="4.5"/>
    </g>
    <circle cx="190" cy="62" r="9" fill="url(#ud-brass)"/>
    <circle cx="190" cy="62" r="3.6" fill="#131e36"/>
  </g>
        </>
      ) : (
        <>
          <defs>
    <linearGradient id="ul-brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3dc98"/><stop offset=".5" stopColor="#d4a843"/><stop offset="1" stopColor="#a87a1e"/></linearGradient>
    <linearGradient id="ul-leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#52d6a0"/><stop offset="1" stopColor="#16805a"/></linearGradient>
  </defs>
  <g>
    <path d="M66 190 C46 156 44 112 62 62" fill="none" stroke="#25b07a" strokeWidth="5" strokeLinecap="round"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(59.6 177.3) rotate(-71.3) scale(1.05)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(59.6 177.3) rotate(-155.3) scale(1.05 -1.05)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(53.5 159.2) rotate(-62.0) scale(0.95)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(53.5 159.2) rotate(-146.0) scale(0.95 -0.95)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(50.2 139.7) rotate(-53.1) scale(0.85)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(50.2 139.7) rotate(-137.1) scale(0.85 -0.85)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(49.9 118.9) rotate(-45.0) scale(0.75)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(49.9 118.9) rotate(-129.0) scale(0.75 -0.75)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(52.5 96.9) rotate(-37.7) scale(0.65)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(52.5 96.9) rotate(-121.7) scale(0.65 -0.65)" fill="url(#ul-leaf)"/>
    <path d="M0 0 C5 -9 17 -14 30 -10 C23 -1 10 5 0 0Z" transform="translate(62.0 62.0) rotate(-70.2) scale(.8)" fill="url(#ul-leaf)"/>
    <path d="M100 62 V138 a30 30 0 0 0 60 0 V62" fill="none" stroke="url(#ul-brass)" strokeWidth="21" strokeLinecap="butt" strokeLinejoin="round"/>
    <path d="M190 62 V166 H232" fill="none" stroke="#131e36" strokeWidth="21" strokeLinejoin="round"/>
    <g fill="none" stroke="url(#ul-brass)" strokeWidth="3" strokeLinecap="round">
      <path d="M190 62 L214 36 L232 70 L212 100 L190 62 M232 70 L190 62 M190 62 L160 32 L130 24" />
    </g>
    <g className="logo-nodes" stroke="url(#ul-brass)" strokeWidth="3" fill="#ffffff">
      <circle className="logo-node n1" cx="214" cy="36" r="6.5"/>
      <circle className="logo-node n2" cx="232" cy="70" r="6"/>
      <circle className="logo-node n3" cx="212" cy="100" r="5.5"/>
      <circle className="logo-node n4" cx="160" cy="32" r="5.5"/>
      <circle className="logo-node n5" cx="130" cy="24" r="4.5"/>
    </g>
    <circle cx="190" cy="62" r="9" fill="url(#ul-brass)"/>
    <circle cx="190" cy="62" r="3.6" fill="#ffffff"/>
  </g>
        </>
      )}
    </svg>
  );
}
