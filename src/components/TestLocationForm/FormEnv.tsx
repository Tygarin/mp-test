import React, { useContext } from "react";
import { storeContext } from "../../mobx/store";
import CustomDropDown from "../ui/CustomDropDown";
import { faCookie } from "@fortawesome/free-solid-svg-icons";

type Props = { index: number };

const FormEnv: React.FC<Props> = ({ index }) => {
  const { envs, changeValue } = useContext(storeContext);
  return (
    <>
      <p className="pr-2">Среда</p>
      <CustomDropDown
        onChoose={(e) => changeValue(index, e.envID, "envID")}
        icon={faCookie}
        options={envs}
      />
    </>
  );
};

export default FormEnv;
