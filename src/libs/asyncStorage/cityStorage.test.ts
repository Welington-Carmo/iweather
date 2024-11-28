import { getStorageCity, saveStorageCity, removeStorageCity } from "./cityStorage";
import { CityProps } from "@services/getCityByNameService";

const NewCity: CityProps = {
  id: "1",
  name: "São Paulo",
  longitude: 10,
  latitude: 20
}
describe("Storage: CityStorage", () => {
  it("should be return null whenn don't have a city storaged", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("shoud be return city storaged.", async () => {
    await saveStorageCity(NewCity);

    const response = await getStorageCity();
    expect(response).toEqual(NewCity);
  });

  it("should be remove city storaged.", async () => {
    await saveStorageCity(NewCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});