import React from "react";
import { observer } from "mobx-react-lite";
import FormTitle from "./FormTitle";
import FormLocation from "./FormLocation";
import FormEnv from "./FormEnv";
import FormServers from "./FormServers";
import FormHint from "./FormHint";

type Props = { index: number };

const TestLocationForm: React.FC<Props> = ({ index }) => {
  return (
    <div className="w-full shadow-md p-5">
      <FormTitle index={index} />
      <div className="flex mb-4 gap-x-4 items-center">
        <FormLocation index={index} />
        <FormEnv index={index} />
        <FormServers index={index} />
      </div>
      <FormHint index={index} />
    </div>
  );
};

export default observer(TestLocationForm);
