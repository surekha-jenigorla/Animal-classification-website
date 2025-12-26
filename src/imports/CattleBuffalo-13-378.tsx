import svgPaths from "./svg-imzw0g1d0o";

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[308px] rounded-[2.68435e+07px] size-[112px] top-[-56px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[-42px] rounded-[2.68435e+07px] size-[84px] top-[87.5px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c0cbc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.0833 7H2.91667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[31.5px] left-[-7px] rounded-[6.75px] top-0 w-[127.063px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[78px] text-[12.25px] text-center text-nowrap text-white top-[5px] translate-x-[-50%]">Back to Home</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_70.83%_70.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.125 6.125">
            <path d={svgPaths.p2ba97640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_70.83%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.125 6.125">
            <path d={svgPaths.p1c507800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_12.5%_12.5%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.125 6.125">
            <path d={svgPaths.p3b2eba20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_70.83%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.125 6.125">
            <path d={svgPaths.p26341480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[45.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[27.988px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">AI Classifier</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)] text-nowrap">{`Upload & identify livestock`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-[145.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[10.5px] h-[45.5px] items-center left-0 top-[42px] w-[322px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[87.5px] left-[21px] top-[21px] w-[322px]" data-name="Container">
      <Button />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gradient-to-r from-[#155dfc] h-[129.5px] overflow-clip relative rounded-[21px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 to-[#9810fa] via-50% via-[#4f39f6] w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[17.5px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p1e919300} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p5dda280} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[17.5px] left-[21px] top-[21px] w-[318.8px]" data-name="CardTitle">
      <Icon2 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[24.5px] text-[#0a0a0a] text-[14px] text-nowrap top-[0.35px]">Upload Animal Photo</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="absolute h-[42px] left-[21px] top-[43.75px] w-[318.8px]" data-name="CardDescription">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#717182] text-[14px] top-[-1.2px] w-[296px]">Take a clear photo showing the full body or side profile</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute h-[85.75px] left-[1.6px] top-[1.6px] w-[360.8px]" data-name="CardHeader">
      <CardTitle />
      <CardDescription />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1667 29.1667">
            <path d={svgPaths.p2e3ef600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_54.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 8.75">
            <path d={svgPaths.p2b260e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[47.2%]" data-name="Vector">
        <div className="absolute inset-[-10.34%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7917 17.021">
            <path d={svgPaths.p86f7b40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[70px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[17.5px] px-[17.5px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] left-[108.61px] text-[#59168b] text-[15.75px] text-center text-nowrap top-[-2.4px] translate-x-[-50%]">📸 Tap to Upload</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#8200db] text-[12.25px] text-center text-nowrap">JPG, PNG • Clear lighting recommended</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-[216.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[129.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function AnimalClassifier() {
  return (
    <div className="absolute content-stretch flex flex-col h-[221.5px] items-start left-[22.6px] pb-[4px] pt-[46px] px-[46px] rounded-[21px] top-[108.35px] w-[318.8px]" data-name="AnimalClassifier">
      <div aria-hidden="true" className="absolute border-4 border-[#dab2ff] border-solid inset-0 pointer-events-none rounded-[21px]" />
      <Container9 />
    </div>
  );
}

function Card() {
  return (
    <div className="h-[366.45px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(134.808deg, rgb(255, 255, 255) 0%, rgb(250, 245, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e9d4ff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <CardHeader />
      <AnimalClassifier />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[17.5px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p3924400} id="Vector" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M8.75 11.6667V8.75" id="Vector_2" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M8.75 5.83333H8.75729" id="Vector_3" stroke="var(--stroke-0, #016630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[17.5px] left-[22.6px] top-[22.6px] w-[318.8px]" data-name="CardTitle">
      <Icon4 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[24.5px] text-[#016630] text-[14px] text-nowrap top-[0.35px]">Photography Tips</p>
    </div>
  );
}

function AnimalClassifier1() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="AnimalClassifier">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#016630] text-[12.25px]">📷 Use natural daylight for best results</p>
    </div>
  );
}

function AnimalClassifier2() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="AnimalClassifier">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#016630] text-[12.25px]">🎯 Show full body or clear side profile</p>
    </div>
  );
}

function AnimalClassifier3() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="AnimalClassifier">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#016630] text-[12.25px]">🔍 Focus on distinctive features (horns, face, body)</p>
    </div>
  );
}

function AnimalClassifier4() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="AnimalClassifier">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#016630] text-[12.25px]">📏 Keep a safe distance from the animal</p>
    </div>
  );
}

function AnimalClassifier5() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="AnimalClassifier">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#016630] text-[12.25px]">✨ Ensure the background is clear</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[136.5px] items-start left-[1.6px] px-[21px] py-0 top-[66.35px] w-[360.8px]" data-name="CardContent">
      <AnimalClassifier1 />
      <AnimalClassifier2 />
      <AnimalClassifier3 />
      <AnimalClassifier4 />
      <AnimalClassifier5 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-gradient-to-r from-[#f0fdf4] h-[204.45px] relative rounded-[12.75px] shrink-0 to-[#ecfdf5] w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardTitle1 />
      <CardContent />
    </div>
  );
}

function AnimalClassifier6() {
  return (
    <div className="h-[826.4px] relative shrink-0 w-full" data-name="AnimalClassifier">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-start pb-0 pt-[14px] px-[14px] relative size-full">
          <Container6 />
          <Card />
          <Card1 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[896.4px] items-start relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <AnimalClassifier6 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[896.4px] items-start left-0 px-[380px] py-0 top-0 w-[1152px]" data-name="App" style={{ backgroundImage: "linear-gradient(142.113deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 50%, rgb(240, 253, 250) 100%)" }}>
      <Container10 />
    </div>
  );
}

function Icon5() {
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

function Text() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[28.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-0 pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon5 />
      <Text />
    </div>
  );
}

function Icon6() {
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

function Text1() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[33.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Gallery</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[156.8px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon6 />
      <Text1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p38a086f0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p11dbc880} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p1f54f00} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[34.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">History</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[235.2px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon7 />
      <Text2 />
    </div>
  );
}

function Icon8() {
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

function Text3() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[30.7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[313.6px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon8 />
      <Text3 />
    </div>
  );
}

function Icon9() {
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

function Container11() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[31.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7px] px-[7px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[51.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[78.4px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Container11 />
      <Text4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57.6px] items-start left-[380px] pb-0 pt-[1.6px] px-0 top-[588.8px] w-[392px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.6px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container12 />
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