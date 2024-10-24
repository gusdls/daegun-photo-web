import { FaGithubAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="py-12 px-8 sm:px-10">
      <p>
        2024 대건네컷에 오신 것을 환영합니다. 이 프로그램은 인공지능 필터와
        고화질 사진기를 지원합니다.
      </p>
      <a
        href="https://github.com/gusdls/daegun-four-cut"
        className="inline-flex flex-row items-center gap-2 mt-6 rounded-md px-5 py-2.5 bg-[#24292e] text-white"
      >
        <FaGithubAlt />
        <span className="font-semibold text-sm">Source</span>
      </a>
    </div>
  );
}
