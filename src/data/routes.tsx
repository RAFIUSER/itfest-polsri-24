import { ChartLine, Gauge } from "lucide-react";

export type RouteIconsType = {
  icon: React.ReactNode;
  name: string;
  route: string;
};

export type RouteType = {
  name: string;
  route: string;
};

export const LandingRoutes: RouteType[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Us",
    route: "/about",
  },
  {
    name: "Our Events",
    route: "/event",
  },
];

export const DashboardRoutes: RouteIconsType[] = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <Gauge />,
  },
  {
    name: "Analisis",
    route: "/analytics",
    icon: <ChartLine />,
  },
];
