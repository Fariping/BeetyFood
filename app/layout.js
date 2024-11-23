export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <title>BEETYFOOD</title>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
          }
          select {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
        `}</style>
      </head>
      <body dir="rtl">{children}</body>
    </html>
  );
}
