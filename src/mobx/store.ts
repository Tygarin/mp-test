import { makeAutoObservable, runInAction } from "mobx";

import { createContext } from "react";
import sample from "../data/data.json";
import { Env, ILocationMain, Location, Server } from "../types/types";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Store {
  locations: Location[] = [];
  envs: Env[] = [];
  servers: Server[] = [];
  isLoading = false;
  locationsList: ILocationMain[] = [];

  fetchData = async () => {
    this.isLoading = true;

    await sleep(3000);
    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoading = false;
      this.locationsList = [
        ...this.locationsList,
        {
          id: 1,
          locationID: this.locations[0].locationID,
          envID: this.envs[0].envID,
          hint: "",
        },
      ];
    });
  };

  setNewLocationItem = (item: {
    locationID: number;
    envID: number;
    hint: string;
  }) => {
    const lastItem = this.locationsList[this.locationsList.length - 1];
    this.locationsList = [
      ...this.locationsList,
      { id: lastItem?.id + 1 || 1, ...item },
    ];
  };

  deleteLocationItem = (id: number) => {
    this.locationsList = this.locationsList.filter((elem) => elem.id !== id);
  };

  changeValue = (
    id: number,
    value: string | number,
    field: keyof ILocationMain
  ) => {
    this.locationsList = this.locationsList.map((elem) => ({
      ...elem,
      [field]: id === elem.id ? value : elem[field],
    }));
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
export const storeContext = createContext(store);
