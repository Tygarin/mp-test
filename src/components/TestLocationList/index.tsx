import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { storeContext } from "../../mobx/store";
import TestLocationForm from "../TestLocationForm";
import AddButton from "./AddButton";

const TestLocationsList: React.FC = () => {
  const { fetchData, locationsList, isLoading } = useContext(storeContext);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <>
      <div className="max-w-[1100px] mx-auto mt-5 flex flex-col gap-y-5">
        {locationsList.map((location) => (
          <TestLocationForm
            index={location.id}
            key={`location-${location.id}`}
          />
        ))}
        <AddButton />
        <button
          className="border border-red-500 text-red-500 self-center rounded px-3 py-1 mb-5"
          onClick={() => console.log(toJS(locationsList))}
        >
          Вывести результат в консоль
        </button>
      </div>
    </>
  );
};

export default observer(TestLocationsList);
