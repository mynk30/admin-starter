import { LayoutDashboard, Users, Settings, ShieldCheck, List, UserPlus, Trash2, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  path?: string;
  icon?: LucideIcon;
  section?: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    section: "MENU",
  },
  {
    label: "Users",
    path: "/users",
    icon: Users,
    section: "MENU",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
    section: "MENU",
  },
  {
    label: "Admin",
    icon: ShieldCheck,
    section: "USER MANAGEMENT",
    children: [
      {
        label: "Show",
        path: "/admins",
        icon: List,
      },
      {
        label: "Create",
        path: "/admins/create",
        icon: UserPlus,
      },
      {
        label: "Trash",
        path: "/admins/trash",
        icon: Trash2,
      },
    ],
  },
];
