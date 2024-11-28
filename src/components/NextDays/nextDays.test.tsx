import { render, screen } from "@testing-library/react-native"

import clearDay from '@assets/clear_day.svg'
import { NextDays } from "@components/NextDays"


describe('Component: NextDays', () => {
  it("should be render day.", () => {
    render(<NextDays
      data={[
        { day: '18/07', min: '30°C', max: '35°C', icon: clearDay, weather: 'Céu limpo' },
        { day: '19/07', min: '29°C', max: '34°C', icon: clearDay, weather: 'Chuva fraca' },
        { day: '20/07', min: '28°C', max: '33°C', icon: clearDay, weather: 'tempo fechado' },
        { day: '21/07', min: '27°C', max: '32°C', icon: clearDay, weather: 'trovoada' },
        { day: '22/07', min: '26°C', max: '31°C', icon: clearDay, weather: 'frio sem chuva' },
      ]}
    />
    );

    expect(screen.getByText('21/07')).toBeTruthy();
  });
});