import svgPaths from "./svg-w73uiwek07";
import imgImageWithFallback from "figma:asset/223f7e33ee86bb5c526c827cfada27c04c111812.png";
import imgImageWithFallback1 from "figma:asset/088a9d2e1d787bb77cdfaf178208a77fe26717c4.png";
import imgImageWithFallback2 from "figma:asset/d1d9890a6234e0092ace72791be964091ef4c5bc.png";

function Icon() {
  return (
    <div className="h-[24.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-1.02px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.04167 16.3333">
            <path d="M1.02083 1.02083V15.3125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4583 20.4167">
            <path d={svgPaths.p39f2aa00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
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
    <div className="absolute content-stretch flex h-[27.988px] items-start left-0 top-0 w-[154.025px]" data-name="Heading 1">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[21px] text-nowrap text-white">Animal Gallery</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-[27.99px] w-[154.025px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)] text-nowrap">Learn about different breeds</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[45.487px] relative shrink-0 w-[154.025px]" data-name="Container">
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
    <div className="bg-gradient-to-r from-[#9810fa] h-[87.5px] relative shrink-0 to-[#ec003f] via-50% via-[#e60076] w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[21px] px-[21px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[35px] justify-self-stretch relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7.8px] py-[4.3px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center text-nowrap">🐄 Cattle Breeds</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="[grid-area:1_/_2] h-[35px] justify-self-stretch relative rounded-[12.75px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7.8px] py-[4.3px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center text-nowrap">🐃 Buffalo Breeds</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#ececf0] h-[42px] relative rounded-[12.75px] shrink-0 w-[364px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa837400} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[41.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap">Milk/Day</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[7px] h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#7e2a0c] text-[14px] text-nowrap top-[-1.2px]">18-22 liters/day</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[3.5px] h-[59.5px] items-start left-0 pb-0 pt-[10.5px] px-[10.5px] rounded-[12.75px] top-0 w-[161.15px]" data-name="Container">
      <Container4 />
      <Paragraph2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[25.138px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap">Fat %</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[7px] h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#7e2a0c] text-[14px] text-nowrap top-[-1.2px]">4.5-5.5%</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[3.5px] h-[59.5px] items-start left-[171.65px] pb-0 pt-[10.5px] px-[10.5px] rounded-[12.75px] top-0 w-[161.15px]" data-name="Container">
      <Container6 />
      <Paragraph4 />
    </div>
  );
}

function AnimalGallery() {
  return (
    <div className="h-[59.5px] relative shrink-0 w-full" data-name="AnimalGallery">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_1046)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_1046">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[21px] left-[66.2px] top-0 w-[124.238px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Light brown to fawn</p>
    </div>
  );
}

function AnimalGallery1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="AnimalGallery">
      <Icon3 />
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-[21px] text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Color:</p>
      <Text />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Key Traits:</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[121.238px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">High butterfat content</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[115.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Small to medium size</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[71.113px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Heat tolerant</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[111.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Gentle temperament</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[5.25px] h-[106.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function AnimalGallery2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[134.75px] items-start relative shrink-0 w-full" data-name="AnimalGallery">
      <Paragraph5 />
      <Container12 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[271.25px] items-start left-[1.6px] pb-0 pt-[14px] px-[14px] top-[190.6px] w-[360.8px]" data-name="CardContent">
      <AnimalGallery />
      <AnimalGallery1 />
      <AnimalGallery2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[360.8px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[168px] left-0 to-[rgba(0,0,0,0)] top-0 w-[360.8px]" data-name="Container" />;
}

function Badge() {
  return (
    <div className="absolute bg-[#f54900] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[19.087px] left-0 overflow-clip rounded-[6.75px] top-[2.25px] w-[43.513px]" data-name="Badge">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[7px] text-[10.5px] text-nowrap text-white top-[0.75px]">Cattle</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-0 top-[28.34px] w-[332.8px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">Jersey</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-[56.32px] w-[332.8px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)]">Jersey Island, UK</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[73.825px] left-[14px] top-[80.18px] w-[332.8px]" data-name="Container">
      <Badge />
      <Heading1 />
      <Paragraph6 />
    </div>
  );
}

function AnimalGallery3() {
  return (
    <div className="absolute h-[168px] left-[1.6px] top-[1.6px] w-[360.8px]" data-name="AnimalGallery">
      <ImageWithFallback />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[463.45px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent />
        <AnimalGallery3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa837400} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[41.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap">Milk/Day</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[7px] h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#7e2a0c] text-[14px] text-nowrap top-[-1.2px]">25-30 liters/day</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[3.5px] h-[59.5px] items-start left-0 pb-0 pt-[10.5px] px-[10.5px] rounded-[12.75px] top-0 w-[161.15px]" data-name="Container">
      <Container15 />
      <Paragraph8 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[25.138px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap">Fat %</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[7px] h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#7e2a0c] text-[14px] text-nowrap top-[-1.2px]">3.5-4%</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[3.5px] h-[59.5px] items-start left-[171.65px] pb-0 pt-[10.5px] px-[10.5px] rounded-[12.75px] top-0 w-[161.15px]" data-name="Container">
      <Container17 />
      <Paragraph10 />
    </div>
  );
}

function AnimalGallery4() {
  return (
    <div className="h-[59.5px] relative shrink-0 w-full" data-name="AnimalGallery">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_1046)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_1046">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[21px] left-[66.2px] top-0 w-[96.425px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Black and white</p>
    </div>
  );
}

function AnimalGallery5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="AnimalGallery">
      <Icon6 />
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-[21px] text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Color:</p>
      <Text9 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Key Traits:</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[119.95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Highest milk producer</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[64.513px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Large frame</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[105.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Requires good feed</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[103.45px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Cold climate suited</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[5.25px] h-[106.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function AnimalGallery6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[134.75px] items-start relative shrink-0 w-full" data-name="AnimalGallery">
      <Paragraph11 />
      <Container23 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[271.25px] items-start left-[1.6px] pb-0 pt-[14px] px-[14px] top-[190.6px] w-[360.8px]" data-name="CardContent">
      <AnimalGallery4 />
      <AnimalGallery5 />
      <AnimalGallery6 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[360.8px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[168px] left-0 to-[rgba(0,0,0,0)] top-0 w-[360.8px]" data-name="Container" />;
}

function Badge1() {
  return (
    <div className="absolute bg-[#f54900] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[19.087px] left-0 overflow-clip rounded-[6.75px] top-[2.25px] w-[43.513px]" data-name="Badge">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[7px] text-[10.5px] text-nowrap text-white top-[0.75px]">Cattle</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-0 top-[28.34px] w-[332.8px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">Holstein</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-[56.32px] w-[332.8px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)]">{`Netherlands & Germany`}</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[73.825px] left-[14px] top-[80.18px] w-[332.8px]" data-name="Container">
      <Badge1 />
      <Heading2 />
      <Paragraph12 />
    </div>
  );
}

function AnimalGallery7() {
  return (
    <div className="absolute h-[168px] left-[1.6px] top-[1.6px] w-[360.8px]" data-name="AnimalGallery">
      <ImageWithFallback1 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[463.45px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent1 />
        <AnimalGallery7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa837400} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[41.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap">Milk/Day</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[7px] h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#7e2a0c] text-[14px] text-nowrap top-[-1.2px]">8-12 liters/day</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[3.5px] h-[59.5px] items-start left-0 pb-0 pt-[10.5px] px-[10.5px] rounded-[12.75px] top-0 w-[161.15px]" data-name="Container">
      <Container26 />
      <Paragraph14 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[25.138px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-nowrap">Fat %</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[7px] h-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#7e2a0c] text-[14px] text-nowrap top-[-1.2px]">4.5%</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[3.5px] h-[59.5px] items-start left-[171.65px] pb-0 pt-[10.5px] px-[10.5px] rounded-[12.75px] top-0 w-[161.15px]" data-name="Container">
      <Container28 />
      <Paragraph16 />
    </div>
  );
}

function AnimalGallery8() {
  return (
    <div className="h-[59.5px] relative shrink-0 w-full" data-name="AnimalGallery">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_1046)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4_1046">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[21px] left-[66.2px] top-0 w-[144.55px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Red to white with spots</p>
    </div>
  );
}

function AnimalGallery9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="AnimalGallery">
      <Icon9 />
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-[21px] text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Color:</p>
      <Text18 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.2px]">Key Traits:</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[95.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Indigenous breed</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[89.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Disease resistant</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[71.113px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Heat tolerant</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[21px] relative shrink-0 w-[10.488px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#f54900] text-[14px] text-nowrap top-[-1.2px]">✓</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[94.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#364153] text-[12.25px] text-nowrap">Low maintenance</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[7px] h-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[5.25px] h-[106.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function AnimalGallery10() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[134.75px] items-start relative shrink-0 w-full" data-name="AnimalGallery">
      <Paragraph17 />
      <Container34 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[271.25px] items-start left-[1.6px] pb-0 pt-[14px] px-[14px] top-[190.6px] w-[360.8px]" data-name="CardContent">
      <AnimalGallery8 />
      <AnimalGallery9 />
      <AnimalGallery10 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[360.8px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[168px] left-0 to-[rgba(0,0,0,0)] top-0 w-[360.8px]" data-name="Container" />;
}

function Badge2() {
  return (
    <div className="absolute bg-[#f54900] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[19.087px] left-0 overflow-clip rounded-[6.75px] top-[2.25px] w-[43.513px]" data-name="Badge">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-[7px] text-[10.5px] text-nowrap text-white top-[0.75px]">Cattle</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-0 top-[28.34px] w-[332.8px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">Gir</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-[56.32px] w-[332.8px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)]">Gujarat, India</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[73.825px] left-[14px] top-[80.18px] w-[332.8px]" data-name="Container">
      <Badge2 />
      <Heading3 />
      <Paragraph18 />
    </div>
  );
}

function AnimalGallery11() {
  return (
    <div className="absolute h-[168px] left-[1.6px] top-[1.6px] w-[360.8px]" data-name="AnimalGallery">
      <ImageWithFallback2 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[463.45px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardContent2 />
        <AnimalGallery11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[364px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-start relative size-full">
        <Card />
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[1481.35px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <TabPanel />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[14px] left-[22.6px] top-[22.6px] w-[318.8px]" data-name="CardTitle">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14px] left-0 text-[#0d542b] text-[14px] text-nowrap top-[-1.4px]">Quick Comparison</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p4cc3b00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#101828] text-[12.25px]">Cattle</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#364153] text-[12.25px] top-[-2px] w-[269px]">Moderate milk yield, higher fat content, suited for dairy farming</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 grow h-[52.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function AnimalGallery12() {
  return (
    <div className="content-stretch flex gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="AnimalGallery">
      <Icon10 />
      <Container37 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">
          <path d={svgPaths.p4cc3b00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#101828] text-[12.25px]">Buffalo</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-0 text-[#364153] text-[12.25px] top-[-2px] w-[263px]">Higher milk yield, very high fat content, heat and disease resistant</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[52.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function AnimalGallery13() {
  return (
    <div className="content-stretch flex gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="AnimalGallery">
      <Icon11 />
      <Container38 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[136.5px] items-start left-[1.6px] px-[21px] py-0 top-[62.85px] w-[360.8px]" data-name="CardContent">
      <AnimalGallery12 />
      <AnimalGallery13 />
    </div>
  );
}

function Card3() {
  return (
    <div className="h-[200.95px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card" style={{ backgroundImage: "linear-gradient(151.099deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardTitle />
      <CardContent3 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[1724.3px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start pb-0 pt-[14px] px-[14px] relative size-full">
          <PrimitiveDiv />
          <Card3 />
        </div>
      </div>
    </div>
  );
}

function AnimalGallery14() {
  return (
    <div className="content-stretch flex flex-col h-[1881.8px] items-start relative shrink-0 w-full" data-name="AnimalGallery">
      <Container3 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1951.8px] items-start relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <AnimalGallery14 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1951.8px] items-start left-0 px-[380px] py-0 top-0 w-[1152px]" data-name="App" style={{ backgroundImage: "linear-gradient(120.55deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 50%, rgb(240, 253, 250) 100%)" }}>
      <Container40 />
    </div>
  );
}

function Icon12() {
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

function Text27() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[28.863px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-0 pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon12 />
      <Text27 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[19.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.25 19.25">
        <g id="Icon">
          <path d={svgPaths.pae8ad78} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.pa576f00} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
          <path d={svgPaths.p26aa20e0} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60417" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[33.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#9810fa] text-[10.5px] text-center text-nowrap">Gallery</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#faf5ff] gap-[2.625px] h-[56px] items-center justify-center left-[156.8px] pb-[0.887px] pt-0 px-0 to-[rgba(0,0,0,0)] top-0 w-[78.4px]" data-name="Button">
      <Icon13 />
      <Text28 />
    </div>
  );
}

function Icon14() {
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

function Text29() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[34.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">History</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[235.2px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon14 />
      <Text29 />
    </div>
  );
}

function Icon15() {
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

function Text30() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[30.7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[313.6px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Icon15 />
      <Text30 />
    </div>
  );
}

function Icon16() {
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

function Container41() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[31.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7px] px-[7px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[51.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#4a5565] text-[10.5px] text-center text-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[56px] items-center justify-center left-[78.4px] pb-[0.012px] pt-0 px-0 top-0 w-[78.4px]" data-name="Button">
      <Container41 />
      <Text31 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57.6px] items-start left-[380px] pb-0 pt-[1.6px] px-0 top-[588.8px] w-[392px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.6px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container42 />
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