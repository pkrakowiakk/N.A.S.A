import { NasaKeyService } from "interfaces/services/nasa/keyService";
import { nasaKeyTypeInUsage } from "configuration/providers/key";
import { NasaKeyType } from "constants/keys/nasaKeyTypes";
import { NASA_DEMO_KEY, NASA_DEVELOPER_KEY } from "@env";

export class NasaKeyServiceImplementation implements NasaKeyService {
  private readonly key: string;

  constructor() {
    nasaKeyTypeInUsage == NasaKeyType.Demo
      ? (this.key = NASA_DEMO_KEY)
      : (this.key = NASA_DEVELOPER_KEY);
  }

  getKey(): string {
    return this.key;
  }
}
