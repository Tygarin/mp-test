import React, { useContext } from "react";
import { storeContext } from "../../mobx/store";
import CustomDropDown from "../ui/CustomDropDown";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

type Props = { index: number };

const FormLocation: React.FC<Props> = ({ index }) => {
  const { locations, changeValue } = useContext(storeContext);
  return (
    <>
      <p className="pr-3">Локация</p>
      <CustomDropDown
        onChoose={(e) => changeValue(index, e.locationID, "locationID")}
        icon={faLocationDot}
        options={locations}
      />
    </>
  );
};

export default FormLocation;
