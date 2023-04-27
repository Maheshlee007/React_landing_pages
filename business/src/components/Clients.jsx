import { clients } from "../constants";
import styles from "../constants/style";

const Clients = () => {
  return (
    <section id="clients" className="flex w-full flex-wrap justify-between  items-center ">
      {clients.map((client) => (
        <div key={client.id} className="my-auto ">
          <img
            src={client.logo}
            alt="client_logo"
            className="w-[192px] h-[192px] object-contain"
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
