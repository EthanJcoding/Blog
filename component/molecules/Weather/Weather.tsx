interface WeatherProps {
  weatherDescription?: string;
}

const Weather = ({ weatherDescription }: WeatherProps) => {
  console.log(weatherDescription);
  return <div>hi</div>;
};

export { Weather };
