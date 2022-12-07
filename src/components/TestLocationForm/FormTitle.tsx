import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVial, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { storeContext } from "../../mobx/store";

type Props = { index: number };

const FormTitle: React.FC<Props> = ({ index }) => {
  const { deleteLocationItem } = useContext(storeContext);
  const deleteLocation = () => deleteLocationItem(index);

  return (
    <div className="flex items-end mb-4">
      <FontAwesomeIcon className="pr-2 w-10 h-10" icon={faVial} />
      <h1 className="text-xl font-semibold">
        Тестовая локация <span>{JSON.stringify(index)}</span>
      </h1>
      <button className="ml-auto" onClick={deleteLocation}>
        <FontAwesomeIcon
          className="pr-2 w-5 h-5 text-red-600"
          icon={faTrashCan}
        />
      </button>
    </div>
  );
};

export default FormTitle;
