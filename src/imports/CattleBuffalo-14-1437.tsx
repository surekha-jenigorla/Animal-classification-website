import svgPaths from "./svg-lt8fhfuuk9";

function Icon() {
  return (
    <div className="h-[24.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4167 20.4167">
            <path d={svgPaths.pbdb0380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.14583 7.14583">
            <path d="M1.02083 1.02083V6.125H6.125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-25.01%_-14.29%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.12522 9.18772">
            <path d={svgPaths.pcd9c580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[45.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-0 top-0 w-[145.688px]" data-name="Heading 1">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">Scan History</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-[27.99px] w-[145.688px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)] text-nowrap">View all your classifications</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-[145.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[45.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-gradient-to-r from-[#f54900] h-[87.5px] relative shrink-0 to-[#e60076] via-50% via-[#e7000b] w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[21px] px-[21px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function AnimalHistory() {
  return (
    <div className="content-stretch flex h-[27.988px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[21px] text-center">47</p>
    </div>
  );
}

function AnimalHistory1() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#1447e6] text-[10.5px] text-center">Total Scans</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[76.975px] relative shrink-0 w-[111.125px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[14px] px-[14px] relative size-full">
        <AnimalHistory />
        <AnimalHistory1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80.175px] items-start left-0 p-[1.6px] rounded-[12.75px] top-0 w-[114.325px]" data-name="Card" style={{ backgroundImage: "linear-gradient(144.958deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent />
    </div>
  );
}

function AnimalHistory2() {
  return (
    <div className="content-stretch flex h-[27.988px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[21px] text-center">24</p>
    </div>
  );
}

function AnimalHistory3() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#ca3500] text-[10.5px] text-center">Cattle</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[76.975px] relative shrink-0 w-[111.138px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[14px] px-[14px] relative size-full">
        <AnimalHistory2 />
        <AnimalHistory3 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80.175px] items-start left-[124.83px] p-[1.6px] rounded-[12.75px] top-0 w-[114.338px]" data-name="Card" style={{ backgroundImage: "linear-gradient(144.961deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent1 />
    </div>
  );
}

function AnimalHistory4() {
  return (
    <div className="content-stretch flex h-[27.988px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#104e64] text-[21px] text-center">23</p>
    </div>
  );
}

function AnimalHistory5() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#007595] text-[10.5px] text-center">Buffalo</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[76.975px] relative shrink-0 w-[111.138px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[14px] px-[14px] relative size-full">
        <AnimalHistory4 />
        <AnimalHistory5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80.175px] items-start left-[249.66px] p-[1.6px] rounded-[12.75px] top-0 w-[114.338px]" data-name="Card" style={{ backgroundImage: "linear-gradient(144.961deg, rgb(236, 254, 255) 0%, rgb(206, 250, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#a2f4fd] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[80.175px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[95.787px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Recent Scans</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[10.35px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 8.75V1.75" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p34aacb00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p27169580} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[79.938px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[51.1px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Export</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐄</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Jersey</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_4_1826)" id="Icon">
          <path d="M3.5 0.875V2.625" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M7 0.875V2.625" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p2e500800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.3125 4.375H9.1875" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_1826">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon2 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[14px] text-[#4a5565] text-[12.25px] text-nowrap top-[-2px]">Dec 20, 2024 2:30 PM</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[42px] relative shrink-0 w-[130.663px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f54900] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[43.513px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white">Cattle</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Badge />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Confidence</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[36.21px] text-[#7e2a0c] text-[12.25px] text-center top-[-2px] translate-x-[-50%] w-[25px]">96%</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col h-[45.487px] items-start left-0 pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Health</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[12.25px] text-center">Excellent</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col h-[45.487px] items-start left-[93.15px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Age</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[12.25px] text-center">3-4 years</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col h-[45.487px] items-start left-[186.3px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.162px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[85.1px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[126.85px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Details</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41667V9.91667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d36180} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.5H12.25" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[132.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container8 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function AnimalHistory6() {
  return (
    <div className="h-[132.988px] relative shrink-0 w-[332.8px]" data-name="AnimalHistory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container6 />
        <Container14 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[171.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHistory6 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐃</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Murrah</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_4_1826)" id="Icon">
          <path d="M3.5 0.875V2.625" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M7 0.875V2.625" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p2e500800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.3125 4.375H9.1875" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_1826">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon5 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[14px] text-[#4a5565] text-[12.25px] text-nowrap top-[-2px]">Dec 20, 2024 11:15 AM</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[42px] relative shrink-0 w-[138.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#155dfc] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[49.8px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white">Buffalo</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Badge1 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Confidence</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[36.21px] text-[#1c398e] text-[12.25px] text-center top-[-2px] translate-x-[-50%] w-[25px]">92%</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[45.487px] items-start left-0 pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Health</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[12.25px] text-center">Good</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[45.487px] items-start left-[93.15px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Age</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[12.25px] text-center">4-5 years</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[45.487px] items-start left-[186.3px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.162px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[85.1px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[126.85px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Details</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41667V9.91667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d36180} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.5H12.25" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[132.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container17 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function AnimalHistory7() {
  return (
    <div className="h-[132.988px] relative shrink-0 w-[332.8px]" data-name="AnimalHistory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container15 />
        <Container23 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[171.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHistory7 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐄</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Holstein</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_4_1826)" id="Icon">
          <path d="M3.5 0.875V2.625" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M7 0.875V2.625" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p2e500800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.3125 4.375H9.1875" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_1826">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon8 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[14px] text-[#4a5565] text-[12.25px] text-nowrap top-[-2px]">Dec 19, 2024 4:20 PM</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[42px] relative shrink-0 w-[130.663px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f54900] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[43.513px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white">Cattle</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Badge2 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Confidence</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[36.21px] text-[#7e2a0c] text-[12.25px] text-center top-[-2px] translate-x-[-50%] w-[25px]">89%</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col h-[45.487px] items-start left-0 pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Health</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[12.25px] text-center">Excellent</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col h-[45.487px] items-start left-[93.15px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Age</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[12.25px] text-center">2-3 years</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col h-[45.487px] items-start left-[186.3px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.162px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[85.1px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1e14b700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p278f8e00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[126.85px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Details</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41666V9.91666" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41666V9.91666" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2304100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.49999H12.25" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow h-[132.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container26 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function AnimalHistory8() {
  return (
    <div className="h-[132.988px] relative shrink-0 w-[332.8px]" data-name="AnimalHistory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container24 />
        <Container32 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[171.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHistory8 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐃</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Jaffarabadi</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_4_1826)" id="Icon">
          <path d="M3.5 0.875V2.625" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M7 0.875V2.625" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p2e500800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.3125 4.375H9.1875" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_1826">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon11 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[14px] text-[#4a5565] text-[12.25px] text-nowrap top-[-2px]">Dec 19, 2024 10:45 AM</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[42px] relative shrink-0 w-[138.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#155dfc] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[49.8px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white">Buffalo</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Badge3 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Confidence</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[36.21px] text-[#1c398e] text-[12.25px] text-center top-[-2px] translate-x-[-50%] w-[25px]">94%</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[45.487px] items-start left-0 pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Health</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[12.25px] text-center">Good</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[45.487px] items-start left-[93.15px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[13.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Age</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[12.25px] text-center">5-6 years</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[45.487px] items-start left-[186.3px] pb-0 pt-[7px] px-[7px] rounded-[8.75px] top-0 w-[86.162px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[85.1px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[126.85px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Details</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41667V9.91667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d36180} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.5H12.25" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow h-[132.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container35 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function AnimalHistory9() {
  return (
    <div className="h-[132.988px] relative shrink-0 w-[332.8px]" data-name="AnimalHistory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container33 />
        <Container41 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[171.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHistory9 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐄</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Gir</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_4_1826)" id="Icon">
          <path d="M3.5 0.875V2.625" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M7 0.875V2.625" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p2e500800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.3125 4.375H9.1875" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_1826">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon14 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[14px] text-[#4a5565] text-[12.25px] text-nowrap top-[-2px]">Dec 18, 2024 3:10 PM</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[42px] relative shrink-0 w-[130.663px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#f54900] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[43.513px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white">Cattle</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Badge4 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[7px] top-[7px] w-[72.15px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Confidence</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[17.5px] left-[7px] top-[20.99px] w-[72.15px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[36.21px] text-[#7e2a0c] text-[12.25px] text-center top-[-2px] translate-x-[-50%] w-[25px]">91%</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#fff7ed] h-[45.487px] left-0 rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[7px] top-[7px] w-[72.15px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Health</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[7px] top-[20.99px] w-[72.15px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[12.25px] text-center">Good</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#fff7ed] h-[45.487px] left-[93.15px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[7px] top-[7px] w-[72.162px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Age</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[7px] top-[20.99px] w-[72.162px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#7e2a0c] text-[12.25px] text-center">3-4 years</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#fff7ed] h-[45.487px] left-[186.3px] rounded-[8.75px] top-0 w-[86.162px]" data-name="Container">
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[85.1px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[126.85px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Details</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41667V9.91667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d36180} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.5H12.25" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[132.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container44 />
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function AnimalHistory10() {
  return (
    <div className="h-[132.988px] relative shrink-0 w-[332.8px]" data-name="AnimalHistory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container42 />
        <Container50 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[171.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHistory10 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐃</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-0 text-[#101828] text-[15.75px] text-nowrap top-[-2.4px]">Mehsana</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_4_1826)" id="Icon">
          <path d="M3.5 0.875V2.625" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M7 0.875V2.625" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p2e500800} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M1.3125 4.375H9.1875" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_4_1826">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon17 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[14px] text-[#4a5565] text-[12.25px] text-nowrap top-[-2px]">Dec 17, 2024 1:30 PM</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[42px] relative shrink-0 w-[130.663px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading7 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#155dfc] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[49.8px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white">Buffalo</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[42px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Badge5 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[7px] top-[7px] w-[72.15px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Confidence</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[17.5px] left-[7px] top-[20.99px] w-[72.15px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[36.21px] text-[#1c398e] text-[12.25px] text-center top-[-2px] translate-x-[-50%] w-[25px]">88%</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#eff6ff] h-[45.487px] left-0 rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph37 />
      <Paragraph38 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[7px] top-[7px] w-[72.15px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Health</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[7px] top-[20.99px] w-[72.15px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[12.25px] text-center">Fair</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#eff6ff] h-[45.487px] left-[93.15px] rounded-[8.75px] top-0 w-[86.15px]" data-name="Container">
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[7px] top-[7px] w-[72.162px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[10.5px] text-center">Age</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[7px] top-[20.99px] w-[72.162px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[12.25px] text-center">4-5 years</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#eff6ff] h-[45.487px] left-[186.3px] rounded-[8.75px] top-0 w-[86.162px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[85.1px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[6.75px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[126.85px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[3.25px] translate-x-[-50%]">Details</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41667V9.91667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d36180} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.5H12.25" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6.75px] shrink-0 w-[34.7px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[7px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 grow h-[132.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container53 />
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function AnimalHistory11() {
  return (
    <div className="h-[132.988px] relative shrink-0 w-[332.8px]" data-name="AnimalHistory">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-start relative size-full">
        <Container51 />
        <Container59 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white h-[171.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHistory11 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[1118.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white h-[31.5px] relative rounded-[6.75px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[182.31px] text-[#0a0a0a] text-[12.25px] text-center text-nowrap top-[5px] translate-x-[-50%]">Load More Results</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[1285.8px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start pb-0 pt-[14px] px-[14px] relative size-full">
          <Container4 />
          <Container60 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function AnimalHistory12() {
  return (
    <div className="content-stretch flex flex-col h-[1443.3px] items-start relative shrink-0 w-full" data-name="AnimalHistory">
      <Container3 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1513.3px] items-start relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <AnimalHistory12 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1513.3px] items-start left-0 px-[380px] py-0 top-0 w-[1152px]" data-name="App" style={{ backgroundImage: "linear-gradient(127.28deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 50%, rgb(240, 253, 250) 100%)" }}>
      <Container62 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p2c9da500} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p15a6bf00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[28.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-0 pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon20 />
      <Text6 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p375f4400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p21e7ba80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p7f71100} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[33.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Gallery</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[156.8px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon21 />
      <Text7 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[19.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.25 19.25">
        <g id="Icon">
          <path d={svgPaths.p2161b800} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p1afbb4c0} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p2d28fd00} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[34.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#f54900] text-[10.5px] text-center text-nowrap">History</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#fff7ed] gap-[2.625px] h-[56px] items-center justify-center left-[235.2px] pb-[0.887px] pt-0 px-0 to-[rgba(0,0,0,0)] top-0 w-[78.4px]" data-name="Button">
      <Icon22 />
      <Text8 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.pc11e590} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p1bcfabf0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[30.7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[313.6px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon23 />
      <Text9 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 14.5833">
            <path d={svgPaths.p3d6fef40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 7.29167">
            <path d="M0.729167 6.5625V0.729167" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 10.2083">
            <path d="M0.729167 9.47917V0.729167" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 3.64583">
            <path d="M0.729167 2.91667V0.729167" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[31.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7px] px-[7px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[51.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[78.4px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Container63 />
      <Text10 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57.6px] items-start left-[380px] pb-0 pt-[1.6px] px-0 top-[1063.2px] w-[392px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.6px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container64 />
    </div>
  );
}

export default function CattleBuffalo() {
  return (
    <div className="bg-white relative size-full" data-name="Cattle & buffalo">
      <App />
      <App1 />
    </div>
  );
}