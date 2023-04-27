import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <section className="space-y-10-4 p-4 w-[330px] h-[260px] self-center border-cyan-200 border shadow-md hover:shadow-secondary rounded-xl  cursor-pointer">
      <img
        src={quotes}
        alt=" quotes"
        className="w-[42px] mb-4 h-6 block opacity-30"
      />
      <p className="text-gradient font-bold w-[290px]">{content}</p>

      <section className="flex mt-10 text-white">
        <img src={img} alt={name} className="w-12 h-12 mr-4" />
        <div>
          <h3>{name}</h3>
          <p className="text-zinc-400">{title}</p>
        </div>
      </section>
    </section>
  );
};

export default FeedbackCard;
