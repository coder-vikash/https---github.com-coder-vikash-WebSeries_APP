const S_Data = [
  {
    id: 1,
    image:
      "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYVxx70Tsy2LY_X9PIODgATpFf9ml4HptRoFGbaxQMiVCDz5SRWKl7HgkrIvJ79ONFoIYGOlDEIGnauiRbTq5co86K7Cm6_yqivZ.webp?r=513",
    title: "The Squid Games",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81040344",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/d5bfa39778c26ef991811b23d2402f18ce0a1b91a61702578cea3bcdc4314681._BR-6_AC_SX720_FMwebp_.jpg",
    title: "Panchayat",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Panchayat/0KAFPP1MAADAFUOA6I2WR5D4TM",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhqFk8nITteea0sobPZkX2gKuZOxYd0m4wwnJk-AdPQX39fiO90-UesKhYtriNWihHtfg1",
    title: "Mirzapur",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Mirzapur/0PDOKMV9CRLOMO5EUKNCUJLG4Q",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZuoUSwTMdgYjIZglurAETKajn9xf-y4GJAv-mwktLXysJtMDxRxCG7_xwi6xAmhAnEUie",
    title: "Kota Factory",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81249783",
  },
  {
    id: 5,
    title: "Stranger Things",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80057281",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml",
  },
  {
    id: 6,
    title: "The Family Man",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/The-Family-Man/0KRGHG8WZ8RZ2STP1MIE8ZW2KP",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRozXRE4oMmMybGPC4WQkMHMmU8j0Qsg9HYJQCozi1Cg3Mha7j5oI-TliQhDeQR460I3ih87Q",
  },
  {
    id: 7,
    title: "Breaking Bad",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/70143836",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcWkpWG_NRrU2M8-WB8EbEcJk7smhdrY1eO0ttKXm0bo2ooOEWxk3zBSbsFrSgSJh2OEKOQ",
  },
  {
    id: 8,
    title: "Money Heist",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80192098",
    image:
      "https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  },
  {
    id: 9,
    title: "The Boys",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/0LTVQJYJ2GD3W64X6BIORWEMUR/",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYxan0RVMaKr1JxY2uZlvhPqhqU-KIGXbYpU_LW1HG3-f9-RpYQlOPok90hExi-L3cvRuE",
  },
  {
    id: 10,
    title: "Dark",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80100172",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6ApenbR-AZkjJySI-VBzjMJYPWFoqUgCxfkGyvXpCru89imX7jzAdmaDSgEVOY4MIDnR_",
  },
  {
    id: 11,
    title: "Scam 1992",
    subtitle: "Sony LIV",
    link: "https://www.sonyliv.com/shows/scam-1992-the-harshad-mehta-story-1700000292",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRilNevCGaWbPkdjq8QI9KekRt8T07JSQvnBHNZbJkv5ApgMsFqQjUDkwIMRPctJ0eoTzKaNg",
  },
  {
    id: 12,
    title: "Sacred Games",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80115328",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQn5iQVUMmCBKWoRRAjY4qORrvL2SgxW8dSESz9BuRTIuB0L8AGgw1SkXNEGRxc6upBTSRpPA",
  },
  {
    id: 13,
    title: "Lucifer",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80057918",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt6dI75dEjB3FJUF5LEsmlzedxBBNqmtxDxcPpDsfbv1-9V6oDcrkgV6FDKCDexU6aFCGqBQ",
  },
  {
    id: 14,
    title: "Asur",
    subtitle: "JioCinema",
    link: "https://www.jiocinema.com/tv-shows/asur/3498202",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqylItWPyRNkMnaQlmMgfWQR2v453Uz0gOENzvVa-y0DRStVROulTSUBl63fZdSBnwKlPhpg",
  },
  {
    id: 15,
    title: "Wednesday",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81231974",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKDOhOKsrp9aPcrtjdZbFkFtltZZfB_Nsq3oSmJVlSz7DFD7dNxsUl15UkYZv0maX96pv",
  },
  {
    id: 16,
    title: "The Night Manager",
    subtitle: "Disney+ Hotstar",
    link: "https://www.hotstar.com/in/shows/the-night-manager/1260128548",
    image: "https://miro.medium.com/v2/resize:fit:866/0*NtCV7wpGNaZv8c6q.jpg",
  },
  {
    id: 17,
    title: "Criminal Justice",
    subtitle: "Disney+ Hotstar",
    link: "https://www.hotstar.com/in/shows/criminal-justice/1260006033",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVkjyVeW2pjWEZZwVWOeXZzzNoyDlEXMuMBR9cs2ufk-oGZu_oiuCjt-KWCCgOAqk-XCXiZg",
  },
  {
    id: 18,
    title: "Delhi Crime",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81076756",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOZOFr5xvg2u44zNQRJZLEUI8tt8FwkHZSt5DVWrOjwYJQNEu1Uvw4p2c9P_i1u8_NH8FeQ",
  },
  {
    id: 19,
    title: "Hostel Daze",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/0H3XKXCBGZ4A10DUJX9M0VNF7G/",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSr8DhNkGc-PEJgAsXTdoPtY-7uWNUNtojbiMQUDfDLfVD9gn7d0P-cO92CtKfG9sNoEKtz",
  },
  {
    id: 20,
    title: "Special OPS",
    subtitle: "Disney+ Hotstar",
    link: "https://www.hotstar.com/in/shows/special-ops/1260022893",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9gnhSWEJaGrcEYLQtnpFhPDcjktGKIcrPl0qvVaRr0FuOSrYWJyabkWRr5SuaxNXxbpcwkw",
  },
  {
    id: 21,
    title: "Made in Heaven",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Made-In-Heaven/0O2D6DG1L2OEY1GOQCMZGZVJAK",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGODG0UGkfoy1ySo4xgrO5qCsC9x9-iRBa75XCmo6Aa7m5rBc4-HcFS95KtQJTKmmt_GmW",
  },
  {
    id: 22,
    title: "Jamtara",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81183494",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_cB5WWJi2N7eQRXDY6U6LLwZJMjwcuHC1_4B2SzvZY4nICrJ4Y3LIwhpBvdsXnVhBySLeuA",
  },
  {
    id: 23,
    title: "Farzi",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Farzi/0GZ3WZZ9R0U5YO6RK8VW2RR8M1",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJqmxXW7x7Ixhrmr035vUATaYJUu4PglD5rzrUyY_jbTp4GEugtCwzCyWhsRvotyh9XvmA",
  },
  {
    id: 24,
    title: "Rocket Boys",
    subtitle: "Sony LIV",
    link: "https://www.sonyliv.com/shows/rocket-boys-1700000849",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdxKfpw5aLtxq8yHwJfpqSS-qMFSQFGAakwwnj3BFM_ba--yvis6tAaCA8R_2G7xmF3ILV5Q",
  },
  {
    id: 25,
    title: "TVF Pitchers",
    subtitle: "ZEE5",
    link: "https://www.zee5.com/web-series/details/pitchers/0-6-3516",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlggK5ykDz3q6YzJyNiEcoar70Sfm1igG45KxHgoyhgQGOaJTQh1nF8NOHhm7a4yuWSTwj",
  },
  {
    id: 26,
    title: "The Mandalorian",
    subtitle: "Disney+ Hotstar",
    link: "https://www.hotstar.com/in/shows/the-mandalorian/1260021465",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPz4zyHFlnCZr0RuXDKfJOhPB83w0jh_RJ1utNuTGMd1-apSkHVSGEsfZ17_D31rtkhQpZ",
  },
  {
    id: 27,
    title: "The Office",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/70136120",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ00mxCZs-9YF6bPtPBe-dlgo6cnxI6klO2hHMtiQJpC_vHKQuNQKEB627kLUXoHXhFnwdBVw ",
  },
  {
    id: 28,
    title: "Sherlock",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Sherlock/0OB83XFGF0JVDHFRDYJGMZLL4T",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKAffHEy-QCEkW_rqDKlHTcHELw7CBuxM3hi-vE7LFJM7yFZ4Msgeg75Kh1988BBF4Lrf21A",
  },
  {
    id: 29,
    title: "House of the Dragon",
    subtitle: "JioCinema",
    link: "https://www.jiocinema.com/movies/house-of-the-dragon/3764741",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxEnvu7yTvlh72biImd4EDFRveNADOMJ4XMqcI50WZ_2NQuvJBprT1a8YqLPcamNAgXkN2uA",
  },
  {
    id: 30,
    title: "Peaky Blinders",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80002479",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S",
  },
  {
    id: 31,
    title: "The Witcher",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80189685",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrpQa4kPsu6vyXAGfOOHSuscIGwdQuxyOs0Lp-EndlqkhFdcxNPg0kt-lws9e49GAqx2wxRg",
  },
  {
    id: 32,
    title: "The Last of Us",
    subtitle: "JioCinema (HBO)",
    link: "https://www.jiocinema.com/tv-shows/the-last-of-us/3764741",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSQX_39GAE9caPnge5G42RUfLm5l5nmHdH195y4aeg0i2eFOrS8j2iA71NBpKu2Vt50lNI",
  },
  {
    id: 33,
    title: "Loki",
    subtitle: "Disney+ Hotstar",
    link: "https://www.hotstar.com/in/shows/loki/1260063451",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJU0NvE9WrV6h08DZ3EOedYcKePiTf2cJbX01ZdZEst2A89x0UxlZ7H6lu8UDBGxetoQpyg",
  },
  {
    id: 34,
    title: "Aarya",
    subtitle: "Disney+ Hotstar",
    link: "https://www.hotstar.com/in/shows/aarya/1260028094",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpIT3BWakz8FT4bcn_TWKoyIlzMKEC2tal0zkqL9aEEB-Kft2B0Cs9Wt8-UKTOsm0U2Jd_",
  },
  {
    id: 35,
    title: "Paatal Lok",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Paatal-Lok/0LTV0X0MSVUEHAYTVEKZ3OSYKT",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRF2shMJSElfV8kHsL9Bpp6T1QHzh5fM8fX0AQWFkfLthhi5MbRkkhQdapm_e18QaVg29wh",
  },
  {
    id: 36,
    title: "Breathe: Into the Shadows",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Breathe-Into-The-Shadows/0PQX92GNRHLV9BKH83VB2VGC34",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_-33JGVHetjZgxIADduGQCWksfxFU9lOTCruZOQXE4bJCgpomVybnn5p9xQmlELW5K_Sc",
  },
  {
    id: 37,
    title: "Inside Edge",
    subtitle: "Amazon Prime",
    link: "https://www.primevideo.com/detail/Inside-Edge/0QFJM3XY4WZPUN2EKY9R6GKSYZ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvUPB2RMdSlTopWboWrLsb-5zE7ixhWlWFmZ23wcugbT0QHEpteNp--pPI-vIsB6_bl3Th",
  },
  {
    id: 38,
    title: "Euphoria",
    subtitle: "JioCinema (HBO)",
    link: "https://www.jiocinema.com/tv-shows/euphoria/3764741",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfrjrT4Cp9s34CjihlGdknr99RctZeRfARPSTiSh4u91GlBpurQ5enciKKHQlzVw2RiZmJJQ",
  },
  {
    id: 39,
    title: "The Good Doctor",
    subtitle: "Sony LIV",
    link: "https://www.sonyliv.com/shows/the-good-doctor-1700000214",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXwSWBbzojF-vahgi3BDVU9nta7_fnYfL2lyvQDgvx-ESG8Xq8uynsG1B84FUIPIT05MMRsQ",
  },
  {
    id: 40,
    title: "The Big Bang Theory",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/70143830",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1R4rsQTxBLT2GGlB-R4jlJwFxVJU5yE4g4eyDG0xd8RB1PQaG2fBC9AlHBz3XGEyCEDd3g",
  },
  {
    id: 41,
    title: "Brooklyn Nine-Nine",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/70281562",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-Duaf4MYNBG9dmGJCK-RQFY0LE2D_-JdUYn-bmEo8ivqpl1WHsrzfnElrmwSTopoev6RQ",
  },
  {
    id: 42,
    title: "Narcos",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80025172",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGIXHa1dW0obEO9ydIraB9K9LNvlP5uQjAIWApEnoz91i3AZv8xtJmGBuaO7BV8-4MCTUjmw",
  },
  {
    id: 43,
    title: "13 Reasons Why",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80117470",
    image:
      "https://images.theconversation.com/files/168754/original/file-20170510-28069-qwy9ri.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
  },
  {
    id: 44,
    title: "YOU",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/80211991",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhaRxPRsqfLRRNXqYlJOfL9P6hjb4Dx9dhK2_yAhq4Ph0Rr98Fenbi9IC2ne5qZyCBFmD",
  },
  {
    id: 45,
    title: "The 100",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/70283264",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyOFJHh8TcoIZAX04hbEii6mMAo8AqbWrfON4tNVuvVpvsjTV3Z19KfOQ0qZ5KvQxVDcsrWA",
  },
  {
    id: 46,
    title: "Squid Game: The Challenge",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81615589",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPapL2IyiXaZ5kVcXDDGwH8IQweDwc52E_p43yTuNruG0_5OUuy036aw_LY3J5etqlM5Fm1mtsspGZgpPqhvcSARSzD96SG6wNOLv3",
  },
  {
    id: 47,
    title: "Betaal",
    subtitle: "Netflix",
    link: "https://www.netflix.com/in/title/81061789",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRowScRcUnBtFO_RTXaYM6rcJcw7Qf_KPQqPO8Q8QAiOLmTs8keUobsJuFy-nQZMyLUe0BH",
  },
  {
    id: 48,
    title: "The Kapil Sharma Show",
    subtitle: "Sony LIV",
    link: "https://www.sonyliv.com/shows/the-kapil-sharma-show-1700000183",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdn07pyDDnGBlJyUUTGqaUr1gQOi75vgTgRcO4EiLmvWAFwiyhJpdF-_KPlemfSKikCfhd",
  },
  {
    id: 49,
    title: "Kaisi Yeh Yaariaan",
    subtitle: "JioCinema",
    link: "https://www.jiocinema.com/tv-shows/kaisi-yeh-yaariaan/3500020",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgRcVsux82n_h8r6JPyqc_QESYXX3ZHKXsahZiNZwLxvd5fviNCvh3slEra013gk7r64yC",
  },
  {
    id: 50,
    title: "Gullak",
    subtitle: "Sony LIV",
    link: "https://www.sonyliv.com/shows/gullak-1700000273",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvy56B1dByhczxQyWW77SY-Cey6yl-EukiXhpvtiI223odKzDNQEX-oSXhgiolQjMf_S-fw",
  },
];
export default S_Data;
