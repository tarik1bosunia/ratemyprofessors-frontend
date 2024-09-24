import ProfileItemsArea from "@/components/account/ProfileItemsArea";
import { UserPagesTabs} from "@/components/account"

interface PagesIndexProps {
  initialActiveTab: string;
}

export default function PagesIndex({initialActiveTab}: PagesIndexProps) {
  return (
    <div className="p-[40px] w-full" style={{'minHeight': 'inherit'}}>
      <UserPagesTabs initialActiveTab={initialActiveTab}/>
      <ProfileItemsArea />
    </div>
  )
}
