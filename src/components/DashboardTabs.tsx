import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Summary, LayoutGrid } from "lucide-react";
import { useState } from "react";

export function DashboardTabs() {
  const [mode, setMode] = useState<"overview" | "category">("overview");

  return (
    <Tabs value={mode} onValueChange={(val) => setMode(val)}>
      <TabsList>
        <TabsTrigger value="overview">
          <div className="text-lg font-medium">
            <Summary className="h-4 w-4" />
            Overview
          </div>
        </TabsTrigger>
        <TabsTrigger value="category">
          <div className="text-lg font-medium">
            <LayoutGrid className="h-4 w-4" />
            Category
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>

      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
