export default function RootLayout({ children }) {
    return (
      <html lang="nl">
        <body>
          {children}
          {/* Draft mode is uitgeschakeld in statische export modus */}
        </body>
      </html>
    )
  }
  
  