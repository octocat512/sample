import Header from "../components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div
    className="min-h-screen text-white text-sm"
    style={{ background: "rgb(4,4,4)" }}
  >
    <Header />
    <div>{children}</div>
  </div>
);

export default Layout;
