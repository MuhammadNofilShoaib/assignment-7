import { GoArrowDown } from "react-icons/go";
import PageSection from "./components/PageSection";


export default function Home() {
  return (

    <div className="px-[20px] md:px-[40px] xl:px-[160px] my-[70px] md:my-[233px] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-start items-center gap-[30px] lg:gap-[200px] xl:gap-[300px]">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full customXl:h-[283.22px]">
          <h1 className="text-[60px] font-[500] text-[#181717] leading-[58.32px]">Hello, I’m Mehmet Akif.</h1>
        </div>
        <div className="h-full customXl:h-[111px]">
          <h1 className="font-[400] text-[32px] leading-[37.44px] text-[#606060] mb-[30px] lg:mb-0">A senior-year design student who trying to specialize in 3D modeling & texturing.</h1>
        </div>
      </div>
      <h1 className="text-[60px] font-[500] text-[#181717] leading-[58.32px]"><GoArrowDown />
      </h1>
      <PageSection pageNum={1} firstPara="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development." secondPara="Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold." linkText="More shots from this project →" />
      <PageSection pageNum={2} firstPara="Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques." linkText="See case study →" />
      <PageSection pageNum={3} firstPara="Experimental creature modeling for school project." linkText="Project WIP" />
    </div>
  );
}
