import Nav from "./nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />

      <main>{children}</main>
    </div>
  );
}
