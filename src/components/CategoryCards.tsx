import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Laptop,
  Pencil,
  Apple,
  Shirt,
  Wrench,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  Electronics: <Laptop className="h-4 w-4" />,
  Stationery: <Pencil className="h-4 w-4" />,
  Grocery: <Apple className="h-4 w-4" />,
  Clothing: <Shirt className="h-4 w-4" />,
  Tools: <Wrench className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {
  const inventory = useItemStore((state) => state.inventory);

  return (
    <div className="grid gap-2 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const icon = iconMap[category.label];
        const categoryItems = inventory.filter(
          (item) => item.category === category.value,
        );
        const categoryUnits = categoryItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const categoryValue = categoryItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        );

        return (
          // Use Card component to display values by category
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {icon} {category.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">
                  ฿{categoryValue.toFixed(2)}{" "}
                </div>
                <div className="text-muted-foreground">
                  {categoryUnits} units
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
