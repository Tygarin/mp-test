import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { storeContext } from "../../mobx/store";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

type Props = { index: number };

const FormHint: React.FC<Props> = ({ index }) => {
  const { changeValue } = useContext(storeContext);

  return (
    <div className="flex gap-x-4 items-center">
      <p>Подсказка</p>
      <div className="w-full relative">
        <FontAwesomeIcon
          className="absolute top-1/2 -translate-y-1/2 left-3"
          icon={faQuestion}
        />
        <input
          type="text"
          onChange={(e) => changeValue(index, e.target.value, "hint")}
          placeholder="Комментарий по локации"
          className="shadow w-full pl-10 p-2 rounded"
        />
      </div>
    </div>
  );
};

export default FormHint;
