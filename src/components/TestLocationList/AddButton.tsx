import React, { useContext } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storeContext } from "../../mobx/store";

type Props = {};

const AddButton: React.FC = (props: Props) => {
  const { setNewLocationItem, envs, locations } = useContext(storeContext);

  const addLocation = () => {
    setNewLocationItem({
      locationID: locations[0].locationID,
      envID: envs[0].envID,
      hint: "",
    });
  };

  return (
    <button
      className="border self-end mt-5 border-blue-500 rounded py-1 px-3 text-blue-500"
      onClick={addLocation}
    >
      <span>
        <FontAwesomeIcon icon={faPlus} />
      </span>{" "}
      Добавить тестовую локацию
    </button>
  );
};

export default AddButton;
