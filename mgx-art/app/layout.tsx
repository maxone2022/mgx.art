
import "./globals.css";
export const metadata = { title: "MGX — Modular Genericized Architecture" };
export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
