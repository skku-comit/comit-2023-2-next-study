export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full h-[56px] bg-black">
        <input placeholder="검색"/>
      </div>

      <main>{children}</main>
    </div>
  );
}
