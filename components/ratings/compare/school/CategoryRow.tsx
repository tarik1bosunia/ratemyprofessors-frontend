import DisplaySlider from "./DisplaySlider";

export default function CategoryRow() {
  return (
    <div className="flex flex-row items-center justify-between mb-6 max-w-[888px] w-full">
      <div className="w-2/5">
       <DisplaySlider />
      </div>
      <div className="font-bold w-1/5">Internet</div>
      <div className="w-2/5">
      <DisplaySlider />
      </div>

    </div>
  );
}
