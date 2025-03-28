import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "400", "600"],
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} ${montserrat.style} antialiased`}>
        {children}
      </body>
    </html>
  );
}
