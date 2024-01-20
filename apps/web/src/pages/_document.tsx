import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-gray-900">
      <Head>
        <meta
          name="description"
          content="Inflear Study Alert - 내가 원하는 스터디/팀프로젝트, 이제 알림으로 받아보세요! 카카오톡, 이메일 등 다양한 알림 수단을 지원 중입니다."
        />
        <link rel="icon" href="/isa_logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
