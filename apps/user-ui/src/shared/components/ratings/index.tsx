import HalfStar from "apps/user-ui/src/assets/svgs/half-star";
import StarFilled from "apps/user-ui/src/assets/svgs/star-filled";
import StarOutline from "apps/user-ui/src/assets/svgs/star-outline";

type Props = {
  rating: number;
};

const Ratings = ({ rating }: Props) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarFilled className="w-4 h-4" key={`stat-${i}`} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger) {
      stars.push(<HalfStar className="w-4 h-4" key={`stat-${i}`} />);
    } else {
      stars.push(<StarOutline className="w-4 h-4" key={`stat-${i}`} />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};

export default Ratings;
