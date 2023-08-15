import { formatDate } from "@/app/utils/formatDate";

export const AsteroidItem = ({ asteroid }: any) => {
  const {
    close_approach_data: [{
      close_approach_date: approachDate,
      miss_distance: { kilometers }
    }],
  } = asteroid;
  const formattedDate = formatDate(approachDate);
  return (
    <span>ВРЕМЯ: {formattedDate}</span>
  )
}
