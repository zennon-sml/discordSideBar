import { AlertTriangle } from "lucide-react";

interface IconProps {
  icon: React.ReactNode;
  tooltipText: string;
}
const SideIcon: React.FC<IconProps> = ({ icon, tooltipText }) => {
  return (
    <i className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100 flex">
        {tooltipText}
        <AlertTriangle className="size-4 text-violet-600" />
      </span>
    </i>
  );
};

export default SideIcon;
