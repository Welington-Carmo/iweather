import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Compponent: SelectList", () => {
  it("should be ruturn city details selected", () => {
    const data = [
      { name: "clo 1", id: '1', latitude: 123, longitude: 123 },
      { name: "Flo 2", id: '2', latitude: 456, longitude: 321 },
      { name: "City 3", id: '3', latitude: 321, longitude: 456 }
    ];

    const onPrres = jest.fn();

    render(
      <SelectList
        data={data}
        onChange={() => { }}
        onPress={onPrres}
      />
    );

    const selectedCity = screen.queryByText(/city/i);
    fireEvent.press(selectedCity);

    expect(onPrres).toHaveBeenCalledWith(data[2]);
  });
  it("not should be show options when data props is empty.", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => { }}
        onPress={() => { }}
      />
    );
    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  })
});