export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <title>BEETYFOOD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5'
      }}>
        {children}
      </body>
    </html>
  );
}
