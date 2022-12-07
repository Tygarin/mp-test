export interface Location {
  locationID: number;
  name: string;
}

export interface Env {
  envID: number;
  name: string;
}

export interface Server {
  serverID: number;
  name: string;
  locationID: number;
  envID: number;
}

export interface ILocationMain {
  id: number;
  locationID: number;
  envID: number;
  hint: string;
}
