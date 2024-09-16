import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Grid } from "./sections/feature-section";

interface CampaignCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  description: string;
  percentage: string;
}

export default function CampaignCard({
  title,
  icon,
  value,
  description,
  percentage,
}: CampaignCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <Grid size={10} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {description} {percentage}
        </p>
      </CardContent>
    </Card>
  );
}
