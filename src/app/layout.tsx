export const revalidate = 10

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { timestamp } = await fetch('http://localhost:3001/now').then(res => res.json())

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          Current Time: {(new Date(timestamp)).toString()}
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
