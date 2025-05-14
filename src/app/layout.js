import "./globals.css";

export const metadata = {
  title: "Nafriel’s Website",
  description: "Personal site of Muhammad Nafriel Ramadhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
