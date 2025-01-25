export interface currentWeatherResponse {
  coords: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface forecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: currentWeatherResponse[];
}

export interface openMeteoDailyResponse {
  time: string[];
  temperature2mMean: { [key: string]: number | null };
  sunshineDuration: { [key: string]: number | null };
  precipitationSum: { [key: string]: number | null };
}

export interface openMeteoResponse {
  daily: openMeteoDailyResponse | null;
}

export interface openMeteoParams {
  latitude: number;
  longitude: number;
  start_date: string;
  end_date: string;
  daily: string[];
  timezone: string;
}
