import "./globals.css";

export const metadata = {
  title: "Novusterria World Expo 1972",
  description: "Official Website of Novusterria World Expo 1972"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
