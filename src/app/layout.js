export const metadata = {
  title: 'Next.js를 이용한 포토폴리오 사이트 만들기',
  description: 'Next.js를 이용하여 포톨폴리오 사이트를 만들었습니다.',
  keywords: ["포토폴리오", "Next.js", "portfolio", "리액트"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
