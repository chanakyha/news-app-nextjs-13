import "../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Chan News App</title>
      </head>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
