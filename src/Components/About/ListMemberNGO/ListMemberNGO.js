import Member from "./Member";
import "./Member.css";

const ListMemberNGO = ({ members }) => {
  return (
    <div className="list-member-container">
      {members.map((member) => {
        return <Member member={member} key={member.name} />;
      })}
    </div>
  );
};

export default ListMemberNGO;
