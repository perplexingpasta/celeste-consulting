import { useTheme } from "next-themes";

type PricingUnitProps = {
  name: string;
};

export const PricingUnit = ({ name }: PricingUnitProps) => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <div className="w-full border-t border-gray-500 opacity-70" />
      <p className="mt-2 text-sm font-medium opacity-90">✦ {name}</p>
    </div>
  );
};
