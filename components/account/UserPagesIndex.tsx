import PagesIndex  from "./PagesIndex"
import WelcomeTextArea from "./WelcomeTextArea"

interface UserPagesIndexProps{
    initialActiveTab: string
}

export default function UserPageIndex({initialActiveTab}: UserPagesIndexProps){
    return (
        <div className="my-0 mx-auto max-w-[1280px] mb-14 min-h-[calc(-240px + 100vh)] overflow-hidden">
        <WelcomeTextArea />
        <PagesIndex initialActiveTab={initialActiveTab}/>
        
        </div>
    )
}