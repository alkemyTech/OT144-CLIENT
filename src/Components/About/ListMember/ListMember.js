import Card from "../../UI/Card/Card";
import './ListMember.css'

const ListMember = ({ members }) => {
  return (
    <section className="list-member-container">
      {members.map((member) => <Card member={member} key={member.id} />)}
    </section>
  );
};

export default ListMember;
