import './globals.css'

export const metadata = {
  title: 'Smart SOS Command Center',
  description: 'Smart SOS Elderly Monitoring Solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
