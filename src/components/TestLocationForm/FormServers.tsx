import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useMemo } from "react";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { storeContext } from "../../mobx/store";
import { observer } from "mobx-react-lite";

type Props = { index: number };

const FormServers: React.FC<Props> = ({ index }) => {
  const { servers, locationsList } = useContext(storeContext);
  const currentLocation = useMemo(() => {
    return locationsList.find((elem) => elem.id === index);
  }, [locationsList, index]);
  const currentServers = useMemo(() => {
    return servers.filter(
      (elem) =>
        elem.locationID === currentLocation?.locationID &&
        elem.envID === currentLocation?.envID
    );
  }, [servers, currentLocation]);

  return (
    <>
      <p className="pr-2">Серверы</p>
      <FontAwesomeIcon icon={faServer} />
      <div className="flex flex-1 items-center">
        {currentServers.length === 0 && <h1>-</h1>}
        {currentServers.length > 0 &&
          currentServers.map(({ name, serverID }, i) => [
            i > 0 && ",",
            <p className="font-semibold pl-3" key={serverID}>
              {name}
            </p>,
          ])}
      </div>
    </>
  );
};

export default observer(FormServers);
