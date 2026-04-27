/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이기범",
    nameEn: "Groom",
    father: " ",
    mother: "박계자",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "강은비",
    nameEn: "Bride",
    father: " ",
    mother: "김진영",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-27",
    time: "14:00",
    venue: "라마다 호텔 신도림",
    hall: "2층 그랜드볼룸",
    address: "서울 구로구 신도림동 427-3",
    tel: "02-2162-2000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1212235250",
      naver: "https://naver.me/G9r5RXWh"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "관객이 아닌 수호자로 와주실 분들의 \n귀한 발걸음을 위해 기도하겠습니다. \n새로운 출발을 응원해 주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "하나님의 인도하심으로 같은 곳을 \n바라보며 가정을 이루려 합니다.\n더 사랑하기 위한\n 언약의 증인이 되어주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이기범", bank: "국민은행", number: "852502-04-190643" },
      { role: "어머니", name: "박계자", bank: "국민은행", number: "754-24-0037-129" }
    ],
    bride: [
      { role: "신부", name: "강은비", bank: "국민은행", number: "358802-04-465566" },
      { role: "어머니", name: "김진영", bank: "농협은행", number: "352-1337-2878-33" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이기범 ♥ 강은비 결혼합니다",
    description: "2026년 6월 27일, 소중한 분들을 초대합니다."
  }
};
