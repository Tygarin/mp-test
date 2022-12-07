import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { storeContext } from "../../mobx/store";

type Props = {};

const FormServers: React.FC = (props: Props) => {
  const { servers } = useContext(storeContext);
  return (
    <>
      <p className="pr-2">Серверы</p>
      <FontAwesomeIcon icon={faServer} />
      <div className="flex flex-1 overflow-x-scroll items-center">
        {servers.map(({ name, serverID }, i) => [
          i > 0 && ",",
          <p className="font-semibold pl-3" key={serverID}>
            {name}
          </p>,
        ])}
      </div>
    </>
  );
};

export default FormServers;
