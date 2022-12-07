import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Props<T> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: T[];
  onChoose: (elem: T) => void;
  icon: IconProp;
}

const CustomDropDown = <T extends { name: string }>({
  options,
  onChoose,
  icon,
  ...other
}: Props<T>) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>(options[0].name);

  const toggleOpen = () => setIsOpened((prev) => !prev);
  const close = () => setIsOpened(false);

  const onPress = (elem: T) => () => {
    setCurrentValue(elem.name);
    onChoose(elem);
  };

  return (
    <button
      {...other}
      onClick={toggleOpen}
      onBlur={close}
      className={`flex z-[10] relative shadow p-2 justify-between items-center rounded-md min-w-[12rem] ${
        other.className || ""
      }`}
    >
      <FontAwesomeIcon icon={icon} />
      <p className="px-4">{currentValue}</p>
      <FontAwesomeIcon
        className={`transition-all ${isOpened ? "rotate-180" : ""}`}
        icon={faChevronDown}
      />
      {isOpened && (
        <ul className="absolute bg-white px-2 flex shadow flex-col rounded-md bottom-0 translate-y-full left-0 w-full">
          {options.map((elem, index) => (
            <li onClick={onPress(elem)} className="text-left" key={index}>
              {elem.name}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default CustomDropDown;
