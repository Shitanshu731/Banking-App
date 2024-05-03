import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: "Shitanshu", lastName: "Sahu" };
  return (
    <html lang="en">
      <main className="flex h-screen w-full font-inter">
        <Sidebar />
        {children}
      </main>
    </html>
  );
}
