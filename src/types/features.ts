import { store } from "../configuration/providers/store";

export type Features = ReturnType<typeof store.getState>;
