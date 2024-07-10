'use client'
import { usePathname } from "next/navigation";
import Profile from "./Profile";

interface ProfileItemsAreaProps {
    initialActiveTab: string;
  }


const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "/account/profile":
        return (
            <Profile />
        );
      case "/account/settings":
        return <div>Settings Content</div>;
      case "/account/ratings":
        return <div>Your Ratings Content</div>;
      case "/account/saved-professors":
        return <div>Saved Professors Content</div>;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

export default function ProfileItems(){
    const actitveTab = usePathname()
    return (
        <div className="inline-flex flex-wrap w-full">
            {
                renderContent(actitveTab)
            }
        </div>
    )
}