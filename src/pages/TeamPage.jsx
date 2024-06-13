import image1 from "../assets/TeamCard.jpg";

import { TeamCard } from "../components/team/TeamCard";
import { TeamContent } from "../components/team/TeamContent";
import { TeamHeader } from "../components/team/TeamHeader";

const TeamPage = () => {
  const data = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
  ];

  return (
    <>
      <TeamHeader />
      <TeamCard data={data} />
      <TeamContent />
    </>
  );
};

export default TeamPage;
