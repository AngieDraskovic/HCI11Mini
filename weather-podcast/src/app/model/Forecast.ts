export interface WeatherInfo {
  forecast: Forecast
}

export interface Forecast {
  forecastday: ForecastDay[]
}

export interface ForecastDay {
  date: string,
  day: DayInfo
}

export interface DayInfo {
  avgtemp_c: number,
  condition: Condition
}

export interface Condition {
  icon: string;
}
