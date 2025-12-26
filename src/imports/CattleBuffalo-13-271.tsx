import svgPaths from "./svg-jeov2cbd5f";
//import imgImageWithFallback from "figma:asset/223f7e33ee86bb5c526c827cfada27c04c111812.png";
//import imgImageWithFallback1 from "figma:asset/ec209376e3a28d89785e1958a2c8332c8d0fc36f.png";

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[294px] rounded-[2.68435e+07px] size-[140px] top-[-70px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[-56px] rounded-[2.68435e+07px] size-[112px] top-[129.5px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.8)]">Welcome back,</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[21px] text-white top-[-2px] w-[111px]">Farmer! 👋</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-[110.475px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Heading />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[34.4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[31.5px] min-h-px min-w-px relative shrink-0 text-[26.25px] text-white">🐄</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[52.5px] relative rounded-[2.68435e+07px] shrink-0 w-[57.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8.9px] px-[10.5px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[52.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[-1.2px]">Start classifying your livestock with AI</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[76.33px] size-[14px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p9472e00} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p23779700} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[231.67px] size-[14px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <Icon />
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[17.5px] left-[161.83px] text-[#008236] text-[12.25px] text-center text-nowrap top-[10.25px] translate-x-[-50%]">Classify Animal Now</p>
      <Icon1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[143.5px] items-start left-[21px] top-[21px] w-[322px]" data-name="Container">
      <Container4 />
      <Paragraph1 />
      <Button />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gradient-to-r from-[#00a63e] h-[185.5px] overflow-clip relative rounded-[21px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 to-[#009689] via-50% via-[#009966] w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[43.31px] size-[24.5px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
        <g id="Icon">
          <path d={svgPaths.p629f200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
        </g>
      </svg>
    </div>
  );
}

function AnimalHome() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-[14px] top-[45.5px] w-[83.125px]" data-name="AnimalHome">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[21px] text-center">47</p>
    </div>
  );
}

function AnimalHome1() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[14px] top-[73.49px] w-[83.125px]" data-name="AnimalHome">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#1447e6] text-[10.5px] text-center">Scanned</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[108.475px] relative shrink-0 w-[111.125px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <AnimalHome />
        <AnimalHome1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.675px] items-start left-0 p-[1.6px] rounded-[12.75px] top-0 w-[114.325px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.672deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[43.31px] size-[24.5px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
        <g id="Icon">
          <path d={svgPaths.p2c56fd00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          <path d={svgPaths.p10491f00} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
        </g>
      </svg>
    </div>
  );
}

function AnimalHome2() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-[14px] top-[45.5px] w-[83.138px]" data-name="AnimalHome">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0d542b] text-[21px] text-center">94%</p>
    </div>
  );
}

function AnimalHome3() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[14px] top-[73.49px] w-[83.138px]" data-name="AnimalHome">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#008236] text-[10.5px] text-center">Accuracy</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[108.475px] relative shrink-0 w-[111.138px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <AnimalHome2 />
        <AnimalHome3 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.675px] items-start left-[124.83px] p-[1.6px] rounded-[12.75px] top-0 w-[114.338px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.675deg, rgb(240, 253, 244) 0%, rgb(220, 252, 231) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[43.31px] size-[24.5px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
        <g id="Icon">
          <path d={svgPaths.p7492558} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          <path d={svgPaths.p30348500} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
        </g>
      </svg>
    </div>
  );
}

function AnimalHome4() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-[14px] top-[45.5px] w-[83.138px]" data-name="AnimalHome">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#59168b] text-[21px] text-center">5</p>
    </div>
  );
}

function AnimalHome5() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-[14px] top-[73.49px] w-[83.138px]" data-name="AnimalHome">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#8200db] text-[10.5px] text-center">Breeds</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[108.475px] relative shrink-0 w-[111.138px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <AnimalHome4 />
        <AnimalHome5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.675px] items-start left-[249.66px] p-[1.6px] rounded-[12.75px] top-0 w-[114.338px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.675deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e9d4ff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[111.675px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[172.288px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] relative shrink-0 text-[#101828] text-[17.5px] text-nowrap">Learn About Animals</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p1e353900} id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M14.5833 1.45833V4.375" id="Vector_2" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M16.0417 2.91667H13.125" id="Vector_3" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2f15d000} id="Vector_4" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[24.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Icon5 />
    </div>
  );
}

function AnimalHome6() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="AnimalHome">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#364153] text-[12.25px] top-[-2px] w-[322px]">Learn about different cattle breeds, characteristics, and care practices</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[44.737px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[10.5px] text-nowrap">Jersey</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[55.038px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[10.5px] text-nowrap">Holstein</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[29.55px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[10.5px] text-nowrap">Gir</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function AnimalHome7() {
  return (
    <div className="content-stretch flex gap-[7px] h-[19.087px] items-start relative shrink-0 w-full" data-name="AnimalHome">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[99.588px] items-start left-[1.6px] pb-0 pt-[14px] px-[14px] top-[162.6px] w-[360.8px]" data-name="CardContent">
      <AnimalHome6 />
      <AnimalHome7 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[140px] left-0 top-0 w-[360.8px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"  />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[140px] left-0 to-[rgba(0,0,0,0)] top-0 w-[360.8px]" data-name="Container" />;
}

function Badge3() {
  return (
    <div className="absolute bg-[#f54900] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[19.087px] left-0 overflow-clip rounded-[6.75px] top-[2.25px] w-[43.513px]" data-name="Badge">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[7px] text-[10.5px] text-nowrap text-white top-[0.75px]">Cattle</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[24.5px] items-start left-0 top-[28.34px] w-[121.313px]" data-name="Heading 3">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24.5px] relative shrink-0 text-[17.5px] text-nowrap text-white">🐄 Dairy Cows</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[52.838px] left-[14px] top-[73.16px] w-[121.313px]" data-name="Container">
      <Badge3 />
      <Heading2 />
    </div>
  );
}

function AnimalHome8() {
  return (
    <div className="absolute h-[140px] left-[1.6px] top-[1.6px] w-[360.8px]" data-name="AnimalHome">
      <ImageWithFallback />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[263.788px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent3 />
        <AnimalHome8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function AnimalHome9() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="AnimalHome">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#364153] text-[12.25px] top-[-2px] w-[318px]">Discover buffalo breeds, their unique features, and farming benefits</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[50.788px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[10.5px] text-nowrap">Murrah</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[67.95px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[10.5px] text-nowrap">Jaffarabadi</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[58.6px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#0a0a0a] text-[10.5px] text-nowrap">Mehsana</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function AnimalHome10() {
  return (
    <div className="content-stretch flex gap-[7px] h-[19.087px] items-start relative shrink-0 w-full" data-name="AnimalHome">
      <Badge4 />
      <Badge5 />
      <Badge6 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[99.588px] items-start left-[1.6px] pb-0 pt-[14px] px-[14px] top-[162.6px] w-[360.8px]" data-name="CardContent">
      <AnimalHome9 />
      <AnimalHome10 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[140px] left-0 top-0 w-[360.8px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[140px] left-0 to-[rgba(0,0,0,0)] top-0 w-[360.8px]" data-name="Container" />;
}

function Badge7() {
  return (
    <div className="absolute bg-[#155dfc] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[19.087px] left-0 overflow-clip rounded-[6.75px] top-[2.25px] w-[49.8px]" data-name="Badge">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[7px] text-[10.5px] text-nowrap text-white top-[0.75px]">Buffalo</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[24.5px] items-start left-0 top-[28.34px] w-[143.438px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[17.5px] text-white">🐃 Water Buffalo</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[52.838px] left-[14px] top-[73.16px] w-[143.438px]" data-name="Container">
      <Badge7 />
      <Heading3 />
    </div>
  );
}

function AnimalHome11() {
  return (
    <div className="absolute h-[140px] left-[1.6px] top-[1.6px] w-[360.8px]" data-name="AnimalHome">
      <ImageWithFallback1 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[263.788px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent4 />
        <AnimalHome11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[580.075px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[17.5px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d="M8.75 5.10417V15.3125" id="Vector" stroke="var(--stroke-0, #0D542B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3482700} id="Vector_2" stroke="var(--stroke-0, #0D542B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[17.5px] left-[22.6px] top-[22.6px] w-[318.8px]" data-name="CardTitle">
      <Icon6 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[24.5px] text-[#0d542b] text-[14px] text-nowrap top-[0.35px]">How It Works</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#00a63e] relative rounded-[2.68435e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white">1</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[199.188px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#101828] text-[14px] text-nowrap top-[-1.2px]">Take or Upload Photo</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-[21px] w-[199.188px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#4a5565] text-[12.25px] text-nowrap">Capture a clear image of your animal</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[199.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function AnimalHome12() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-start relative shrink-0 w-full" data-name="AnimalHome">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#096] relative rounded-[2.68435e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white">2</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#101828] text-[14px] text-nowrap top-[-1.2px]">AI Analysis</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#4a5565] text-[12.25px] text-nowrap">Our AI identifies cattle or buffalo</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[176.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function AnimalHome13() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-start relative shrink-0 w-full" data-name="AnimalHome">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#009689] relative rounded-[2.68435e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[14px] text-nowrap text-white">3</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#101828] text-[14px] text-nowrap top-[-1.2px]">Get Results</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#4a5565] text-[12.25px] text-nowrap">Receive instant classification and details</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[214.288px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function AnimalHome14() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-start relative shrink-0 w-full" data-name="AnimalHome">
      <Container18 />
      <Container19 />
    </div>
  );
}

function CardContent5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[157.5px] items-start left-[1.6px] px-[21px] py-0 top-[66.35px] w-[360.8px]" data-name="CardContent">
      <AnimalHome12 />
      <AnimalHome13 />
      <AnimalHome14 />
    </div>
  );
}

function Card5() {
  return (
    <div className="h-[225.45px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(148.227deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardTitle />
      <CardContent5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[#101828] text-[17.5px]">Recent Scans</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐄</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#101828] text-[14px] text-nowrap top-[-1.2px]">Cattle Identified</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[12.25px]">2 hours ago • 96% confidence</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#ffedd4] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[43.513px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#9f2d00] text-[10.5px] text-nowrap">Cattle</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function AnimalHome15() {
  return (
    <div className="h-[48.987px] relative shrink-0 w-[332.8px]" data-name="AnimalHome">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-center relative size-full">
        <Container20 />
        <Container21 />
        <Badge8 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[87.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHome15 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px]">🐃</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[48.987px] relative rounded-[12.75px] shrink-0 w-[49.838px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.493deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10.5px] px-[10.5px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#101828] text-[14px] text-nowrap top-[-1.2px]">Buffalo Identified</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[12.25px]">5 hours ago • 92% confidence</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#dbeafe] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[49.8px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#193cb8] text-[10.5px] text-nowrap">Buffalo</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function AnimalHome16() {
  return (
    <div className="h-[48.987px] relative shrink-0 w-[332.8px]" data-name="AnimalHome">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-center relative size-full">
        <Container22 />
        <Container23 />
        <Badge9 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[87.188px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pl-[15.6px] pr-[1.6px] pt-[15.6px] relative size-full">
          <AnimalHome16 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[219.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function AnimalHome17() {
  return (
    <div className="h-[1434.575px] relative shrink-0 w-full" data-name="AnimalHome">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-start pb-0 pt-[14px] px-[14px] relative size-full">
          <Container6 />
          <Container7 />
          <Container13 />
          <Card5 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1504.575px] items-start relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <AnimalHome17 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1504.575px] items-start left-0 px-[380px] py-0 top-0 w-[1152px]" data-name="App" style={{ backgroundImage: "linear-gradient(127.44deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 50%, rgb(240, 253, 250) 100%)" }}>
      <Container25 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.25 19.25">
        <g id="Icon">
          <path d={svgPaths.p23335800} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p2e04c2f0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[28.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#00a63e] text-[10.5px] text-center text-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#f0fdf4] gap-[2.625px] h-[56px] items-center justify-center left-0 pb-[0.887px] pt-0 px-0 to-[rgba(0,0,0,0)] top-0 w-[78.4px]" data-name="Button">
      <Icon7 />
      <Text3 />
    </div>
  );
}

function Icon8() {
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

function Text4() {
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
      <Icon8 />
      <Text4 />
    </div>
  );
}

function Icon9() {
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

function Text5() {
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
      <Icon9 />
      <Text5 />
    </div>
  );
}

function Icon10() {
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

function Text6() {
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
      <Icon10 />
      <Text6 />
    </div>
  );
}

function Icon11() {
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

function Container26() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[31.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7px] px-[7px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text7() {
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
      <Container26 />
      <Text7 />
    </div>
  );
}

function Container27() {
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
      <Container27 />
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