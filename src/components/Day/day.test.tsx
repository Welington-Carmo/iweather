import { render, screen } from "@testing-library/react-native";

import { Day } from "@components/Day";

import clearDay from '@assets/clear_day.svg'

describe('Component: Day', () => {
  it("should be render day.", () => {
    render(
      <Day
        data={{
          icon: clearDay,
          day: "18/07",
          weather: "Céu Limpo",
          max: "34°C",
          min: "30°C"
        }}
      />
    );

    expect(screen.getByText('20/07')).toBeTruthy();
  });
});