const searchResults = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    PrimaryPostalCode: "",
    Region: {
      ID: "MEA",
      LocalizedName: "Middle East",
      EnglishName: "Middle East",
    },
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
      EnglishName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
      EnglishName: "Tel Aviv",
      Level: 1,
      LocalizedType: "District",
      EnglishType: "District",
      CountryID: "IL",
    },
    TimeZone: {
      Code: "IST",
      Name: "Asia/Jerusalem",
      GmtOffset: 2,
      IsDaylightSaving: false,
      NextOffsetChange: "2023-03-24T00:00:00Z",
    },
    GeoPosition: {
      Latitude: 32.045,
      Longitude: 34.77,
      Elevation: {
        Metric: {
          Value: 34,
          Unit: "m",
          UnitType: 5,
        },
        Imperial: {
          Value: 111,
          Unit: "ft",
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
    ],
    Details: {
      Key: "215854",
      StationCode: "TVAV",
      StationGmtOffset: 2,
      BandMap: "IS",
      Climo: "LLSD",
      LocalRadar: "",
      MediaRegion: null,
      Metar: "LLSD",
      NXMetro: "",
      NXState: "",
      Population: 371400,
      PrimaryWarningCountyCode: "",
      PrimaryWarningZoneCode: "",
      Satellite: "MIDE",
      Synoptic: "40179",
      MarineStation: "",
      MarineStationGMTOffset: null,
      VideoCode: "",
      LocationStem: "il/tel-aviv/215854",
      PartnerID: null,
      Sources: [
        {
          DataType: "AirQualityCurrentConditions",
          Source: "Plume Labs",
          SourceId: 63,
          PartnerSourceUrl:
            "https://air.plumelabs.com/air-quality-in-tel-aviv-1ekd",
        },
        {
          DataType: "AirQualityForecasts",
          Source: "Plume Labs",
          SourceId: 63,
          PartnerSourceUrl:
            "https://air.plumelabs.com/air-quality-in-tel-aviv-1ekd",
        },
        {
          DataType: "Alerts",
          Source: "Israel Meteorological Service",
          SourceId: 53,
        },
        {
          DataType: "CurrentConditions",
          Source: "AccuWeather",
          SourceId: 1,
        },
        {
          DataType: "DailyForecast",
          Source: "AccuWeather",
          SourceId: 1,
        },
        {
          DataType: "DailyPollenForecast",
          Source: "Copernicus Atmosphere Monitoring Service",
          SourceId: 78,
        },
        {
          DataType: "ForecastConfidence",
          Source: "AccuWeather",
          SourceId: 1,
        },
        {
          DataType: "FutureRadar",
          Source: "AccuWeather",
          SourceId: 1,
        },
        {
          DataType: "Historical",
          Source: "AccuWeather",
          SourceId: 1,
        },
        {
          DataType: "HourlyForecast",
          Source: "AccuWeather",
          SourceId: 1,
        },
        {
          DataType: "MinuteCast",
          Source: "AccuWeather",
          SourceId: 1,
        },
      ],
      CanonicalPostalCode: "",
      CanonicalLocationKey: "215854",
    },
  },
];

const forcast = {
  Headline: {
    EffectiveDate: "2022-12-10T07:00:00+02:00",
    EffectiveEpochDate: 1670648400,
    Severity: 4,
    Text: "Pleasant Saturday",
    Category: "mild",
    EndDate: null,
    EndEpochDate: null,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2022-12-09T07:00:00+02:00", //
      EpochDate: 1670562000,
      Sun: {
        Rise: "2022-12-09T06:30:00+02:00",
        EpochRise: 1670560200,
        Set: "2022-12-09T16:37:00+02:00",
        EpochSet: 1670596620,
      },
      Moon: {
        Rise: "2022-12-09T17:30:00+02:00",
        EpochRise: 1670599800,
        Set: "2022-12-10T08:30:00+02:00",
        EpochSet: 1670653800,
        Phase: "WaningGibbous",
        Age: 15,
      },
      Temperature: {
        Minimum: {
          Value: 13.6, //
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 22.4, //
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 14.1,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 23.7,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 14.1,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 21,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 8.6,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Mold",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "UVIndex",
          Value: 3,
          Category: "Moderate",
          CategoryValue: 2,
        },
      ],
      Day: {
        Icon: 2, //int that represents icon
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
        ShortPhrase: "Mostly sunny and pleasant", //
        LongPhrase: "Mostly sunny and pleasant",
        PrecipitationProbability: 4,
        ThunderstormProbability: 0,
        RainProbability: 4,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.4,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 261,
            Localized: "W",
            English: "W",
          },
        },
        WindGust: {
          Speed: {
            Value: 22.2,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 308,
            Localized: "NW",
            English: "NW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 12,
        Evapotranspiration: {
          Value: 2.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 4331.5,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
        ShortPhrase: "Clear to partly cloudy",
        LongPhrase: "Clear to partly cloudy",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.6,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 40,
            Localized: "NE",
            English: "NE",
          },
        },
        WindGust: {
          Speed: {
            Value: 16.7,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 36,
            Localized: "NE",
            English: "NE",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 10,
        Evapotranspiration: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2022-12-10T07:00:00+02:00",
      EpochDate: 1670648400,
      Sun: {
        Rise: "2022-12-10T06:30:00+02:00",
        EpochRise: 1670646600,
        Set: "2022-12-10T16:37:00+02:00",
        EpochSet: 1670683020,
      },
      Moon: {
        Rise: "2022-12-10T18:22:00+02:00",
        EpochRise: 1670689320,
        Set: "2022-12-11T09:18:00+02:00",
        EpochSet: 1670743080,
        Phase: "WaningGibbous",
        Age: 16,
      },
      Temperature: {
        Minimum: {
          Value: 13.8,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 22.1,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 14.2,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 23.5,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 14.2,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 20.8,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 9.4,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Mold",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "UVIndex",
          Value: 3,
          Category: "Moderate",
          CategoryValue: 2,
        },
      ],
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
        ShortPhrase: "Sunny and nice",
        LongPhrase: "Sunny and nice",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.4,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 351,
            Localized: "N",
            English: "N",
          },
        },
        WindGust: {
          Speed: {
            Value: 22.2,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 333,
            Localized: "NNW",
            English: "NNW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 5,
        Evapotranspiration: {
          Value: 2.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 4538,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
        ShortPhrase: "Clear to partly cloudy",
        LongPhrase: "Clear to partly cloudy",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.6,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 46,
            Localized: "NE",
            English: "NE",
          },
        },
        WindGust: {
          Speed: {
            Value: 14.8,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 27,
            Localized: "NNE",
            English: "NNE",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 19,
        Evapotranspiration: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2022-12-11T07:00:00+02:00",
      EpochDate: 1670734800,
      Sun: {
        Rise: "2022-12-11T06:31:00+02:00",
        EpochRise: 1670733060,
        Set: "2022-12-11T16:37:00+02:00",
        EpochSet: 1670769420,
      },
      Moon: {
        Rise: "2022-12-11T19:19:00+02:00",
        EpochRise: 1670779140,
        Set: "2022-12-12T09:59:00+02:00",
        EpochSet: 1670831940,
        Phase: "WaningGibbous",
        Age: 17,
      },
      Temperature: {
        Minimum: {
          Value: 15.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 23.5,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 15.1,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 23.7,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 15.1,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 22.2,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 9.6,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 1,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Mold",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "UVIndex",
          Value: 3,
          Category: "Moderate",
          CategoryValue: 2,
        },
      ],
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        ShortPhrase: "Mostly cloudy",
        LongPhrase: "Mostly cloudy",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.6,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 229,
            Localized: "SW",
            English: "SW",
          },
        },
        WindGust: {
          Speed: {
            Value: 20.4,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 283,
            Localized: "WNW",
            English: "WNW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 23,
        Evapotranspiration: {
          Value: 2.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 4453.4,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
        ShortPhrase: "Mainly clear and mild",
        LongPhrase: "Mainly clear and mild",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.4,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 162,
            Localized: "SSE",
            English: "SSE",
          },
        },
        WindGust: {
          Speed: {
            Value: 16.7,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 179,
            Localized: "S",
            English: "S",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 27,
        Evapotranspiration: {
          Value: 0.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2022-12-12T07:00:00+02:00",
      EpochDate: 1670821200,
      Sun: {
        Rise: "2022-12-12T06:32:00+02:00",
        EpochRise: 1670819520,
        Set: "2022-12-12T16:37:00+02:00",
        EpochSet: 1670855820,
      },
      Moon: {
        Rise: "2022-12-12T20:15:00+02:00",
        EpochRise: 1670868900,
        Set: "2022-12-13T10:34:00+02:00",
        EpochSet: 1670920440,
        Phase: "WaningGibbous",
        Age: 18,
      },
      Temperature: {
        Minimum: {
          Value: 16.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 22.1,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 15.6,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 22.3,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 15.6,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 20.4,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 5.3,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 1,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Mold",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "UVIndex",
          Value: 3,
          Category: "Moderate",
          CategoryValue: 2,
        },
      ],
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        ShortPhrase: "Pleasant with clouds and sun",
        LongPhrase: "Pleasant with times of clouds and sun",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.1,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 222,
            Localized: "SW",
            English: "SW",
          },
        },
        WindGust: {
          Speed: {
            Value: 24.1,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 250,
            Localized: "WSW",
            English: "WSW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 60,
        Evapotranspiration: {
          Value: 2.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 2947.2,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        ShortPhrase: "Partly cloudy and mild",
        LongPhrase: "Partly cloudy and mild",
        PrecipitationProbability: 25,
        ThunderstormProbability: 0,
        RainProbability: 25,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 143,
            Localized: "SE",
            English: "SE",
          },
        },
        WindGust: {
          Speed: {
            Value: 22.2,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 160,
            Localized: "SSE",
            English: "SSE",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 53,
        Evapotranspiration: {
          Value: 0.5,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2022-12-13T07:00:00+02:00",
      EpochDate: 1670907600,
      Sun: {
        Rise: "2022-12-13T06:32:00+02:00",
        EpochRise: 1670905920,
        Set: "2022-12-13T16:37:00+02:00",
        EpochSet: 1670942220,
      },
      Moon: {
        Rise: "2022-12-13T21:13:00+02:00",
        EpochRise: 1670958780,
        Set: "2022-12-14T11:06:00+02:00",
        EpochSet: 1671008760,
        Phase: "WaningGibbous",
        Age: 19,
      },
      Temperature: {
        Minimum: {
          Value: 15.3,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 21.2,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 14.3,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 19.4,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 14.3,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 18.7,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 3.3,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Mold",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "UVIndex",
          Value: 2,
          Category: "Low",
          CategoryValue: 1,
        },
      ],
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        ShortPhrase: "A passing morning shower",
        LongPhrase:
          "A passing shower in the morning; otherwise, times of clouds and sun",
        PrecipitationProbability: 57,
        ThunderstormProbability: 11,
        RainProbability: 57,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 14.8,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 209,
            Localized: "SSW",
            English: "SSW",
          },
        },
        WindGust: {
          Speed: {
            Value: 35.2,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 224,
            Localized: "SW",
            English: "SW",
          },
        },
        TotalLiquid: {
          Value: 0.7,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0.7,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.5,
        HoursOfRain: 0.5,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 73,
        Evapotranspiration: {
          Value: 1.5,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 1986,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Night: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
        ShortPhrase: "Cloudy and mild",
        LongPhrase: "Cloudy and mild",
        PrecipitationProbability: 25,
        ThunderstormProbability: 0,
        RainProbability: 25,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 171,
            Localized: "S",
            English: "S",
          },
        },
        WindGust: {
          Speed: {
            Value: 27.8,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 183,
            Localized: "S",
            English: "S",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 94,
        Evapotranspiration: {
          Value: 0.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    },
  ],
};
const returnFromGeoPositionSearch = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  EnglishName: "Tel Aviv",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IST",
    Name: "Asia/Jerusalem",
    GmtOffset: 2,
    IsDaylightSaving: false,
    NextOffsetChange: "2023-03-24T00:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.045,
    Longitude: 34.77,
    Elevation: {
      Metric: {
        Value: 34,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 111,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
  ],
  Details: {
    Key: "215854",
    StationCode: "TVAV",
    StationGmtOffset: 2,
    BandMap: "IS",
    Climo: "LLSD",
    LocalRadar: "",
    MediaRegion: null,
    Metar: "LLSD",
    NXMetro: "",
    NXState: "",
    Population: 371400,
    PrimaryWarningCountyCode: "",
    PrimaryWarningZoneCode: "",
    Satellite: "MIDE",
    Synoptic: "40179",
    MarineStation: "",
    MarineStationGMTOffset: null,
    VideoCode: "",
    LocationStem: "il/tel-aviv/215854",
    PartnerID: null,
    Sources: [
      {
        DataType: "AirQualityCurrentConditions",
        Source: "Plume Labs",
        SourceId: 63,
        PartnerSourceUrl:
          "https://air.plumelabs.com/air-quality-in-tel-aviv-1ekd",
      },
      {
        DataType: "AirQualityForecasts",
        Source: "Plume Labs",
        SourceId: 63,
        PartnerSourceUrl:
          "https://air.plumelabs.com/air-quality-in-tel-aviv-1ekd",
      },
      {
        DataType: "Alerts",
        Source: "Israel Meteorological Service",
        SourceId: 53,
      },
      {
        DataType: "CurrentConditions",
        Source: "AccuWeather",
        SourceId: 1,
      },
      {
        DataType: "DailyForecast",
        Source: "AccuWeather",
        SourceId: 1,
      },
      {
        DataType: "DailyPollenForecast",
        Source: "Copernicus Atmosphere Monitoring Service",
        SourceId: 78,
      },
      {
        DataType: "ForecastConfidence",
        Source: "AccuWeather",
        SourceId: 1,
      },
      {
        DataType: "FutureRadar",
        Source: "AccuWeather",
        SourceId: 1,
      },
      {
        DataType: "Historical",
        Source: "AccuWeather",
        SourceId: 1,
      },
      {
        DataType: "HourlyForecast",
        Source: "AccuWeather",
        SourceId: 1,
      },
      {
        DataType: "MinuteCast",
        Source: "AccuWeather",
        SourceId: 1,
      },
    ],
    CanonicalPostalCode: "",
    CanonicalLocationKey: "215854",
  },
};
const returnFromCurrentConditions = [
  {
    LocalObservationDateTime: "2022-12-10T19:47:00+02:00",
    EpochTime: 1670694420,
    WeatherText: "Clear",
    WeatherIcon: 33,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 19,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 66,
        Unit: "F",
        UnitType: 18,
      },
    },
    RealFeelTemperature: {
      Metric: {
        Value: 17.7,
        Unit: "C",
        UnitType: 17,
        Phrase: "Pleasant",
      },
      Imperial: {
        Value: 64,
        Unit: "F",
        UnitType: 18,
        Phrase: "Pleasant",
      },
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: 17.7,
        Unit: "C",
        UnitType: 17,
        Phrase: "Pleasant",
      },
      Imperial: {
        Value: 64,
        Unit: "F",
        UnitType: 18,
        Phrase: "Pleasant",
      },
    },
    RelativeHumidity: 79,
    IndoorRelativeHumidity: 74,
    DewPoint: {
      Metric: {
        Value: 15.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 60,
        Unit: "F",
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 45,
        Localized: "NE",
        English: "NE",
      },
      Speed: {
        Metric: {
          Value: 9.6,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 6,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 18.6,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 11.5,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: "Low",
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: "km",
        UnitType: 6,
      },
      Imperial: {
        Value: 10,
        Unit: "mi",
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: "",
    CloudCover: 0,
    Ceiling: {
      Metric: {
        Value: 9144,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 30000,
        Unit: "ft",
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1017.6,
        Unit: "mb",
        UnitType: 14,
      },
      Imperial: {
        Value: 30.05,
        Unit: "inHg",
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: "Steady",
      Code: "S",
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: 2.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 4,
        Unit: "F",
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 20,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 68,
        Unit: "F",
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 18.9,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 66,
        Unit: "F",
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 16.8,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 62,
        Unit: "F",
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0,
        Unit: "mm",
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: "in",
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      PastHour: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past3Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past6Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past9Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past12Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past18Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past24Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 19,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 66,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 23.7,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 75,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 14.8,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 59,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 23.7,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 75,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 13.1,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 56,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 23.7,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 75,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];
export const returnFromAutocomplete = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "3431644",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telanaipura",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jambi",
    },
  },
  {
    Version: 1,
    Key: "300558",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telok Blangah New Town",
    Country: {
      ID: "SG",
      LocalizedName: "Singapore",
    },
    AdministrativeArea: {
      ID: "05",
      LocalizedName: "South West",
    },
  },
  {
    Version: 1,
    Key: "325876",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telford",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "TFW",
      LocalizedName: "Telford and Wrekin",
    },
  },
  {
    Version: 1,
    Key: "169072",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telavi",
    Country: {
      ID: "GE",
      LocalizedName: "Georgia",
    },
    AdministrativeArea: {
      ID: "KA",
      LocalizedName: "Kakheti",
    },
  },
  {
    Version: 1,
    Key: "230611",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telsiai",
    Country: {
      ID: "LT",
      LocalizedName: "Lithuania",
    },
    AdministrativeArea: {
      ID: "TE",
      LocalizedName: "Telšiai",
    },
  },
  {
    Version: 1,
    Key: "2723742",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telégrafo",
    Country: {
      ID: "BR",
      LocalizedName: "Brazil",
    },
    AdministrativeArea: {
      ID: "PA",
      LocalizedName: "Pará",
    },
  },
  {
    Version: 1,
    Key: "186933",
    Type: "City",
    Rank: 55,
    LocalizedName: "Tela",
    Country: {
      ID: "HN",
      LocalizedName: "Honduras",
    },
    AdministrativeArea: {
      ID: "AT",
      LocalizedName: "Atlántida",
    },
  },
  {
    Version: 1,
    Key: "3453754",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telaga Asih",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
  {
    Version: 1,
    Key: "3453755",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telagamurni",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
];
