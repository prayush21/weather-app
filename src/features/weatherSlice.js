import axiosInstance from "@/lib/axiosConfig";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  status: "idle",
  cityOptions: [
    {
      name: "New York County",
      local_names: {
        pt: "Nova Iorque",
        cs: "New York",
        es: "Nueva York",
        gl: "Nova York",
        he: "ניו יורק",
        pl: "Nowy Jork",
        de: "New York",
        ar: "نيويورك",
        ru: "Нью-Йорк",
        zh: "纽约/紐約",
        fa: "نیویورک",
        ca: "Nova York",
        hi: "न्यूयॊर्क्",
        en: "New York",
        be: "Нью-Ёрк",
        ja: "ニューヨーク",
        vi: "New York",
        kn: "ನ್ಯೂಯೊರ್ಕ್",
        uk: "Нью-Йорк",
        eo: "Novjorko",
        te: "న్యూయొర్క్",
        fr: "New York",
        is: "Nýja Jórvík",
        it: "New York",
        el: "Νέα Υόρκη",
        ko: "뉴욕",
        cy: "Efrog Newydd",
        oc: "Nòva York",
      },
      lat: 40.7127281,
      lon: -74.0060152,
      country: "US",
      state: "New York",
    },
    {
      name: "New Delhi",
      local_names: {
        qu: "Musuq Dilhi",
        be: "Нью-Дэлі",
        jv: "New Delhi",
        bs: "New Delhi",
        ur: "نئی دہلی",
        so: "New Delhi",
        ms: "New Delhi",
        yo: "New Delhi",
        ka: "ნიუ-დელი",
        fr: "New Delhi",
        hi: "नई दिल्ली",
        sw: "New Delhi",
        gv: "Delhi Noa",
        yi: "ניי דעלי",
        gl: "नई दिल्ली",
        he: "ניו דלהי",
        te: "న్యూఢిల్లీ",
        ko: "뉴델리",
        sk: "Naí Dillí",
        hr: "New Delhi",
        bn: "নতুন দিল্লি",
        kk: "Нью-Дели",
        ca: "Nova Delhi",
        pa: "ਨਵੀਂ ਦਿੱਲੀ",
        gr: "Νεοδελίς",
        ta: "புது தில்லி",
        an: "Nueva Delhi",
        sl: "New Delhi",
        my: "နယူးဒေလီမြို့",
        kn: "ಹೊಸ ದೆಹಲಿ",
        id: "New Delhi",
        lt: "Naujasis Delis",
        la: "Dellium Novum",
        mr: "नवी दिल्ली",
        lb: "Nei-Delhi",
        zh: "新德里",
        mk: "Њу Делхи",
        ml: "ന്യൂ ഡെൽഹി",
        ga: "Nua-Deilí",
        nn: "New Delhi",
        da: "New Delhi",
        br: "New Delhi",
        ku: "Delhiya Nû",
        af: "Nieu-Delhi",
        ks: "نٔو دلھی",
        sq: "New Delhi",
        en: "New Delhi",
        no: "New Delhi",
        eu: "New Delhi",
        os: "Нью-Дели",
        ne: "न्यु दिल्ली",
        de: "Neu-Delhi",
        ar: "دلهي الجديدة",
        gd: "New Delhi",
        et: "New Delhi",
        vi: "Tân Delhi",
        bg: "Ню Делхи",
        is: "Nýja Delí",
        ht: "Niou Deli",
        si: "නව දිල්ලිය",
        dv: "ނިއުދިއްލީ",
        co: "New Delhi",
        hy: "Նյու Դելի",
        ia: "Nove Delhi",
        cy: "Delhi Newydd",
        el: "Νέο Δελχί",
        kl: "New Delhi",
        ug: "يېڭى دېھلى",
        th: "นิวเดลี",
        it: "Nuova Delhi",
        am: "ኒው ዴሊ",
        fa: "دهلی نو",
        fi: "New Delhi",
        nl: "New Delhi",
        hu: "Újdelhi",
        mi: "New Delhi",
        uk: "Нью-Делі",
        sv: "New Delhi",
        es: "Nueva Delhi",
        mn: "Шинэ Дели",
        oc: "Nòva Delhi",
        tg: "Ню-Дели",
        ro: "New Delhi",
        fy: "Nij Delly",
        cs: "Nové Dillí",
        tl: "Bagong Delhi",
        ru: "Нью-Дели",
        eo: "Nov-Delhio",
        tr: "Yeni Delhi",
        lv: "Ņūdeli",
        ja: "ニューデリー",
        sr: "Њу Делхи",
        pt: "Nova Deli",
        io: "Nova-Delhi",
        mg: "New Delhi",
        sa: "नवदेहली",
        bo: "ནེའུ་དིལ་ལི།",
        pl: "Nowe Delhi",
      },
      lat: 28.6138954,
      lon: 77.2090057,
      country: "IN",
      state: "Delhi",
    },
    {
      name: "Mumbai",
      local_names: {
        io: "Mumbai",
        or: "ମୁମ୍ବାଇ",
        cs: "Bombaj",
        ks: "بَمبَے",
        hi: "मुंबई",
        de: "Mumbai",
        eo: "Mumbajo",
        pl: "Mumbaj",
        ka: "მუმბაი",
        he: "מומבאי",
        bn: "মুম্বই",
        zh: "孟买",
        fr: "Bombay",
        sd: "ممبئي",
        oc: "Mumbai",
        en: "Mumbai",
        ta: "மும்பை",
        sr: "Мумбај",
        te: "ముంబై",
        ia: "Mumbai",
        ar: "مومباي",
        yi: "מומביי",
        ur: "ممبئی",
        th: "มุมไบ",
        gu: "મુંબઈ",
        pa: "ਮੁੰਬਈ",
        uk: "Мумбаї",
        ps: "ممبای",
        az: "Mumbay",
        kn: "ಮುಂಬೈ",
        lt: "Mumbajus",
        es: "Bombay",
        ru: "Мумбаи",
        si: "මුම්බායි",
        mr: "मुंबई",
        el: "Μουμπάι",
        ko: "뭄바이",
        ja: "ムンバイ",
        fa: "مومبای",
        sk: "Bombaj",
        ml: "മുംബൈ",
      },
      lat: 19.0785451,
      lon: 72.878176,
      country: "IN",
      state: "Maharashtra",
    },
    {
      name: "Tokyo",
      local_names: {
        tg: "Токио",
        da: "Tokyo",
        io: "Tokyo",
        el: "Τόκιο",
        he: "טוקיו",
        it: "Tokyo",
        eo: "Tokio",
        ja: "東京都",
        ia: "Tokyo",
        oc: "Tòquio",
        ta: "டோக்கியோ",
        lt: "Tokijas",
        is: "Tókýó",
        en: "Tokyo",
        ar: "طوكيو",
        sv: "Tokyo",
        ku: "Tokyo",
        sk: "Tokio",
        pl: "Tokio",
        es: "Tokio",
        nl: "Tokio",
        ca: "Tòquio",
        uk: "Токіо",
        et: "Tōkyō",
        mr: "तोक्यो",
        bg: "Токио",
        fa: "توکیو",
        cy: "Tokyo",
        sr: "Токио",
        lv: "Tokija",
        cs: "Tokio",
        pt: "Tóquio",
        hr: "Tokio",
        ko: "도쿄도",
        zh: "东京都/東京都",
        tr: "Tokyo",
        la: "Tokium",
        vi: "Tokyo",
        hu: "Tokió",
        lb: "Tokio",
        fi: "Tokio",
        sl: "Tokio",
        ru: "Токио",
        be: "Токіа",
        kn: "ಟೋಕ್ಯೊ",
        th: "โตเกียว",
        fr: "Tokyo",
        mi: "Tōkio",
        de: "Tokio",
      },
      lat: 35.6828387,
      lon: 139.7594549,
      country: "JP",
    },
    {
      name: "Bengaluru",
      local_names: {
        gu: "બેંગલોર",
        ml: "ബെംഗളൂരു",
        de: "Bangalore",
        or: "ବେଙ୍ଗାଳୁରୁ",
        mr: "बंगळूर",
        pa: "ਬੈਂਗਲੁਰੂ",
        cs: "Bengalúru",
        en: "Bengaluru",
        be: "বেঙ্গালূরু",
        hi: "बेंगलुरु",
        it: "Bangalore",
        ja: "バンガロール",
        ta: "பெங்களூரு",
        kn: "ಬೆಂಗಳೂರು",
        fr: "Bangalore",
        my: "ဘန်ဂလိုမြို့",
        uk: "Бенгалуру",
        ur: "بنگلور",
        he: "בנגלור",
        te: "బెంగళూరు",
        th: "บังคาลอร์",
        ko: "벵갈루루",
        ar: "بنغالور",
        ru: "Бангалор",
        zh: "班加罗尔",
        bn: "বেঙ্গালুরু",
        oc: "Bengaluri",
        ms: "Bangalore",
        as: "বাংগালোৰ",
        el: "Μπανγκαλόρ",
      },
      lat: 12.9767936,
      lon: 77.590082,
      country: "IN",
      state: "Karnataka",
    },
  ],
  cityWeather: {
    current: {},
    dailyData: [],
    hourlyData: [],
  },
  forecastDuration: "HOURLY",
  temperatureUnit: "C",
};

export const getWeatherData = createAsyncThunk(
  "weather/get-data",
  async (params, thunkAPI) => {
    try {
      const response = await axiosInstance.get("", {
        params,
      });
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      console.log("Weather API Error", error);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleForecastDuration: (state, action) => {
      state.forecastDuration = action.payload;
    },
    toggleTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        const { current, hourly, daily } = action.payload;

        const updatedHourly = hourly.slice(0, 24).map((data) => {
          return {
            dt: data.dt,
            temp: data.temp,
            weather: data.weather,
          };
        });
        const updatedDaily = daily.slice(0, 7).map((data) => {
          return {
            dt: data.dt,
            temp_max: data.temp.max,
            temp_min: data.temp.min,
            weather: data.weather,
          };
        });

        state.cityWeather.current = current;
        state.cityWeather.hourlyData = updatedHourly;
        state.cityWeather.dailyData = updatedDaily;
        state.status = "idle";
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { toggleForecastDuration, toggleTemperatureUnit } =
  weatherSlice.actions;

export default weatherSlice.reducer;
