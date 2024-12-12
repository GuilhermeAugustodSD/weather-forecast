import { regions } from "@/constants/regions";

const changeToAcronym = (region) => {
  if (regions[region]) return regions[region];
  return region;
};

export { changeToAcronym }
