import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService.test", () => {
  it('should be return whather api data formatted', async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

    const response = await getWeatherByCityService({ latitude: 123, longitude: 321 });
    expect(response).toHaveProperty("today");
  });
});