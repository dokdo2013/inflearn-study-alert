export const HeroBg = () => {
  return (
    <div className="relative isolate bg-gray-900">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-[-800px] -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] "
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export const HeroContent = () => {
  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl !leading-tight">
          내가 원하는 스터디/팀프로젝트
          <br />
          이제 알림으로 받아보세요!
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          인프런 커뮤니티에 등록되는 스터디/팀프로젝트를 <br />
          원하는 키워드와 조건에 맞춰서 알림으로 받아보세요!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            로그인
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            더 알아보기 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
