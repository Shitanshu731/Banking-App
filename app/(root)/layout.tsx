import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: "Shitanshu", lastName: "Sahu" };
  return (
    <html lang="en">
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
              src={"/icons/logo.svg"}
              alt="menu-icon"
              height={30}
              width={30}
            />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
      </main>
    </html>
  );
}
