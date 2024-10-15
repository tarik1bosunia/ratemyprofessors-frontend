import DisplaySlider from "./DisplaySlider";

type Config = {
  label: string,
  value1: number | string,
  value2: number | string,
}


export default function CategoryRow({label, value1, value2}: Config) {
  
  return (
    <div className="flex flex-row items-center justify-between mb-6 max-w-[888px] w-full">
      <div className="w-2/5">

       <DisplaySlider rating={value1} />
      </div>
      <div className="font-bold w-1/5 text-center">{label}</div>
      <div className="w-2/5">
      <DisplaySlider rating={value2} isReverse={true}/>
      </div>

    </div>
  );
}
