import { CheckCircleIcon } from "@heroicons/react/20/solid";

type Method = {
  name: string;
  available: boolean;
};

const methods: Method[] = [
  {
    name: "카카오톡 알림톡 / SMS",
    available: true,
  },
  {
    name: "이메일",
    available: true,
  },
  {
    name: "웹 푸시 알림",
    available: false,
  },
  {
    name: "텔레그램",
    available: false,
  },
  {
    name: "디스코드",
    available: false,
  },
  {
    name: "전화 연결",
    available: false,
  },
];

export default function SectionFeature() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                지원하는 알림 수단
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                다양한 알림 수단으로 원하는 키워드 알림을 받아보세요!
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {methods.map((method, idx) => (
                  <li
                    key={`method_${method.name}`}
                    className="flex gap-x-3 items-center"
                  >
                    {method.available ? (
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none text-green-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                    {method.name}
                    {!method.available ? (
                      <span className="text-xs text-gray-400">(지원 예정)</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
