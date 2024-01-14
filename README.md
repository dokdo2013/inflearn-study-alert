# Inflearn Study Alert (ISA)

Inflearn 커뮤니티의 스터디/팀프로젝트 메뉴에 원하는 키워드로 새로운 글이 올라오면 미리 지정한 알림 수단으로 알림을 보냅니다.

## Service Architecture

### Tech Stacks

- Project : Monorepo (Pnpm Workspace, Turborepo)
- Microservices
  - Frontend Web : Next.js, Tailwind UI
  - Backend API : NestJS, MySQL(Planetscale), Redis
  - Parser Microservice : NestJS, Kafka(Producer)
  - Sender Microservice : NestJS, Kafka(Consumer)
- Deployment
  - Frontend : Vercel
  - Backend, Parser, Sender : Kubernetes (Vultr Kubernetes Engine)
  - Database : Planetscale (Serverless)
  - Redis, Kafka : Upstash (Serverless)
- Alert
  - Email : Mailgun
  - SMS : Twilio
- Authorization : Auth0
- Monitoring : Sentry

### Microservices

- Frontend
  - 유저가 접속하는 페이지
  - 인증, 키워드 설정, 알림 발송수단 설정, 단축 URL 역할
- Backend
  - Frontend에서 호출하는 API
  - 기본적인 인증, 키워드 설정, 알림 수단 설정 등 역할
- Parser
  - Parser 앱 자체는 Standalone하게 동작. Kubernetes Cronjob으로 주기적으로 실행.
  - 실행시 인프런 API 호출하여 데이터 파싱. (파싱 오류시 Sentry 통해서 알림 수신)
  - 파싱된 데이터와 DB에 등록된 키워드를 비교해 알림을 보낼 유저 추출 (추후 부하가 커지면 비교하는 부분을 분리할 수 있도록 설계 필요)
  - 발송할 메시지 건별로 Kafka에 등록
- Sender
  - Kafka Consumer 역할을 하는 앱
  - 발송할 메시지 프로바이더별로 로직 구현
  - 수신된 이벤트에 따라 순차적으로 메시지 발송

### Deployment

- Frontend : Vercel을 통한 자동 배포
- Backend, Parser, Sender
  - GitHub Actions에서 컨테이너 이미지 빌드
  - 빌드된 이미지 Docker Hub에 푸시
  - GitOps Repository에서 쿠버네티스 매니페스트 내 이미지 태그 변경
  - ArgoCD가 GitOps 레포에서 변경된 이미지 태그 감지하여 배포
