import svgPaths from "./svg-31ww4gznqd";
//import imgImageWithFallback from "figma:asset/d1d9890a6234e0092ace72791be964091ef4c5bc.png";

function Text() {
  return (
    <div className="content-stretch flex h-[56px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[42px] min-h-px min-w-px relative shrink-0 text-[42px] text-white">🐄</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[71.4px] items-start left-[153.16px] pb-0 pt-[6.8px] px-[14px] rounded-[14px] top-[21px] w-[85.675px]" data-name="Container">
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-[21px] top-[106.4px] w-[350px]" data-name="Heading 1">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-center text-white">Livestock Classifier</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[21px] top-[141.39px] w-[350px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-[rgba(255,255,255,0.9)] text-center">{`AI-Powered Cattle & Buffalo Identification`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-r from-[#00a63e] h-[179.887px] relative rounded-bl-[21px] rounded-br-[21px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#009689] via-50% via-[#009966] w-[392px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"  />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[176px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
          <ImageWithFallback />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[14px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-[21px] top-[21px] w-[304.8px]" data-name="CardTitle">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0d542b] text-[21px] text-center">👋 Welcome Back!</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[57.74px] w-[304.8px]" data-name="CardDescription">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[152.02px] text-[#717182] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%]">Sign in to classify your livestock</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[92.738px] relative shrink-0 w-[346.8px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa3ff970} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p5c184f0} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <Icon />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[12.25px] left-[21px] text-[#0a0a0a] text-[12.25px] text-nowrap top-[-0.53px]">Email or Phone</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[31.5px] relative rounded-[6.75px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[10.5px] py-[3.5px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[12.25px] text-nowrap">email@example.com or phone number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1aca3780} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p25f81600} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <Icon1 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[12.25px] left-[21px] text-[#0a0a0a] text-[12.25px] text-nowrap top-[-0.53px]">Password</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[31.5px] left-0 rounded-[6.75px] top-0 w-[304.8px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[10.5px] pr-[35px] py-[3.5px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[12.25px] text-nowrap">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8339 9.33261">
            <path d={svgPaths.p3fcba280} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667">
            <path d={svgPaths.p22c75d80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[280.3px] size-[14px] top-[8.75px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Button />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Container4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r from-[#00a63e] h-[42px] relative rounded-[6.75px] shrink-0 to-[#009689] via-50% via-[#009966] w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] left-[152.06px] text-[12.25px] text-center text-nowrap text-white top-[10.25px] translate-x-[-50%]">🔓 Sign In</p>
    </div>
  );
}

function AuthPage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[175px] items-start left-[21px] top-0 w-[304.8px]" data-name="AuthPage">
      <Container3 />
      <Container5 />
      <Button1 />
    </div>
  );
}

function AuthPage1() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[86.1px] top-[198.4px] w-[174.6px]" data-name="AuthPage">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#00a63e] text-[12.25px] text-center text-nowrap">{`Don't have an account? Sign up`}</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[238px] relative shrink-0 w-[346.8px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <AuthPage />
        <AuthPage1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[354.938px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#dcfce7] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.75px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-start p-[1.6px] relative size-full">
          <CardHeader />
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-[28.837px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px] text-center">🤖</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[28px] pl-0 pr-[0.012px] py-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[49px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 153, 102) 100%)" }}>
      <Text1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-0 top-[56px] w-[105px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[10.5px] text-center">AI Powered</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_1] h-[69.988px] justify-self-stretch relative shrink-0" data-name="Container">
      <Container6 />
      <Paragraph1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-[28.837px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px] text-center">⚡</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[28px] pl-0 pr-[0.012px] py-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[49px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 146, 184) 100%)" }}>
      <Text2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-0 top-[56px] w-[105px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[10.5px] text-center">Instant Results</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] h-[69.988px] justify-self-stretch relative shrink-0" data-name="Container">
      <Container8 />
      <Paragraph2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-[28.837px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-[21px] text-center">📊</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[28px] pl-0 pr-[0.012px] py-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[49px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(230, 0, 118) 100%)" }}>
      <Text3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[13.988px] items-start left-0 top-[56px] w-[105px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[14px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[10.5px] text-center">Track History</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_3] h-[69.988px] justify-self-stretch relative shrink-0" data-name="Container">
      <Container10 />
      <Paragraph3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[69.988px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="gap-[10.5px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-[7px] py-0 relative size-full">
          <Container7 />
          <Container9 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[392px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[21px] items-start pb-0 pt-[21px] px-[21px] relative size-full">
        <Container2 />
        <Card />
        <Container12 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[864.813px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container13 />
    </div>
  );
}

export default function CattleBuffalo() {
  return (
    <div className="relative size-full" data-name="Cattle & buffalo" style={{ backgroundImage: "linear-gradient(143.098deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 50%, rgb(240, 253, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[380px] py-0 relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}