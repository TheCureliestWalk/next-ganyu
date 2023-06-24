import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Ganyu App",
  description: "All apps that created by iho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="http://localhost:8097"></script>
      </head>
      <body className={openSans.className}>
        <main className="bg-gradient-to-r from-sky-100 to-pink-100 w-full min-h-screen">
          <Header />
          <div className="p-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
