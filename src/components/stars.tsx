import { FaStar } from "react-icons/fa";

interface StarProps {
  rating: number;
}

export const Star: React.FC<StarProps> = ({ rating }) => {
  const maxRating = 5;

  return (
    <div style={{ display: 'flex', margin: "auto" }}>
      {[...Array(maxRating)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? 'gold' : 'grey'}
          size={20}
        />
      ))}
    </div>
  );
};
