import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "@contexts/CityContext";

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: "São Paulo",
      longitude: 10,
      latitude: 20
    })));

    expect(result.current.city?.name).toBe('São Paulo');

  });
})