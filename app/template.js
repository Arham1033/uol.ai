// A template is re-created on every page change, so each page fades and slides in
// (the .page-enter animation is in app/globals.css).

export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
