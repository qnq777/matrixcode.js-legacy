

///
__g_qrm2matsize__ = [
  undefined,
   21, 25, 29, 33, 37, 41, 45, 49, 53, 57,
   61, 65, 69, 73, 77, 81, 85, 89, 93, 97,
  101,105,109,113,117,121,125,129,133,137,
  141,145,149,153,157,161,165,169,173,177
];


///
__g_qrm2datacodewords__ = {
  L:[
    undefined,
      19,  34,  55,  80, 108, 136, 156, 194, 232, 274,
     324, 370, 428, 461, 523, 589, 647, 721, 795, 861,
     932,1006,1094,1174,1276,1370,1468,1531,1631,1735,
    1843,1955,2071,2191,2306,2434,2566,2702,2812,2956
  ],
  M:[
    undefined,
      16,  28,  44,  64,  86, 108, 124, 154, 182, 216,
     254, 290, 334, 365, 415, 453, 507, 563, 627, 669,
     714, 782, 860, 914,1000,1062,1128,1193,1267,1373,
    1455,1541,1631,1725,1812,1914,1992,2102,2216,2334
  ],
  Q:[
    undefined,
      13,  22,  34,  48,  62,  76,  88, 110, 132, 154,
     180, 206, 244, 261, 295, 325, 367, 397, 445, 485,
     512, 568, 614, 664, 718, 754, 808, 871, 911, 985,
    1033,1115,1171,1231,1286,1354,1426,1502,1582,1666
  ],
  H:[
    undefined,
       9,  16,  26,  36,  46,  60,  66,  86, 100, 122,
     140, 158, 180, 197, 223, 253, 283, 313, 341, 385,
     406, 442, 464, 514, 538, 596, 628, 661, 701, 745,
     793, 845, 901, 961, 986,1054,1096,1142,1222,1276
  ]
};


///
__g_qrm2totalcodewords__ = {
  L:[
    undefined,
  ],
  M:[
    undefined,
  ],
  Q:[
    undefined,
  ],
  H:[
    undefined,
  ]
};


///
__g_qrm2eccodewords__ = {
  L:[
    undefined,
  ],
  M:[
    undefined,
  ],
  Q:[
    undefined,
  ],
  H:[
    undefined,
  ]
};


///
__g_qrm2datalen__ = {
// number of characters [num,alnum,8bit,kanji]
  L:[
    undefined,
    [  41,  25,  17,  10],// 1
    [  77,  47,  32,  20],// 2
    [ 127,  77,  53,  32],// 3
    [ 187, 114,  78,  48],// 4
    [ 255, 154, 106,  65],// 5
    [ 322, 195, 134,  82],// 6
    [ 370, 224, 154,  95],// 7
    [ 461, 279, 192, 118],// 8
    [ 552, 335, 230, 141],// 9
    [ 652, 395, 271, 167],//10
    [ 772, 468, 321, 198],//11
    [ 883, 535, 367, 226],//12
    [1022, 619, 425, 262],//13
    [1101, 667, 458, 282],//14
    [1250, 758, 520, 320],//15
    [1408, 854, 586, 361],//16
    [1548, 938, 644, 397],//17
    [1725,1046, 718, 442],//18
    [1903,1153, 792, 488],//19
    [2061,1249, 858, 528],//20
    [2232,1352, 929, 572],//21
    [2409,1460,1003, 618],//22
    [2620,1588,1091, 672],//23
    [2812,1704,1171, 721],//24
    [3057,1853,1273, 784],//25
    [3283,1990,1367, 842],//26
    [3517,2132,1465, 902],//27
    [3669,2223,1528, 940],//28
    [3909,2369,1628,1002],//29
    [4158,2520,1732,1066],//30
    [4417,2677,1840,1132],//31
    [4686,2840,1952,1201],//32
    [4965,3009,2068,1273],//33
    [5253,3183,2188,1347],//34
    [5529,3351,2303,1417],//35
    [5836,3537,2431,1496],//36
    [6153,3729,2563,1577],//37
    [6479,3927,2699,1661],//38
    [6743,4087,2809,1729],//39
    [7089,4296,2953,1817] //40
  ],
  M:[
    undefined,
    [  34,  20,  14,   8],// 1
    [  63,  38,  26,  16],// 2
    [ 101,  61,  42,  26],// 3
    [ 149,  90,  62,  38],// 4
    [ 202, 122,  84,  52],// 5
    [ 255, 154, 106,  65],// 6
    [ 293, 178, 122,  75],// 7
    [ 365, 221, 152,  93],// 8
    [ 432, 262, 180, 111],// 9
    [ 513, 311, 213, 131],//10
    [ 604, 366, 251, 155],//11
    [ 691, 419, 287, 177],//12
    [ 796, 483, 331, 204],//13
    [ 871, 528, 362, 223],//14
    [ 991, 600, 412, 254],//15
    [1082, 656, 450, 277],//16
    [1212, 734, 504, 310],//17
    [1346, 816, 560, 345],//18
    [1500, 909, 624, 384],//19
    [1600, 970, 666, 410],//20
    [1708,1035, 711, 438],//21
    [1872,1134, 779, 480],//22
    [2059,1248, 857, 528],//23
    [2188,1326, 911, 561],//24
    [2395,1451, 997, 614],//25
    [2544,1542,1059, 652],//26
    [2701,1637,1125, 692],//27
    [2857,1732,1190, 732],//28
    [3035,1839,1264, 778],//29
    [3289,1994,1370, 843],//30
    [3486,2113,1452, 894],//31
    [3693,2238,1538, 947],//32
    [3909,2369,1628,1002],//33
    [4134,2506,1722,1060],//34
    [4343,2632,1809,1113],//35
    [4588,2780,1911,1176],//36
    [4775,2894,1989,1224],//37
    [5039,3054,2099,1292],//38
    [5313,3220,2213,1362],//39
    [5596,3391,2331,1435] //40
  ],
  Q:[
    undefined,
    [  27,  16,  11,   7],// 1
    [  48,  29,  20,  12],// 2
    [  77,  47,  32,  20],// 3
    [ 111,  67,  46,  28],// 4
    [ 144,  87,  60,  37],// 5
    [ 178, 108,  74,  45],// 6
    [ 207, 125,  86,  53],// 7
    [ 259, 157, 108,  66],// 8
    [ 312, 189, 130,  80],// 9
    [ 364, 221, 151,  93],//10
    [ 427, 259, 177, 109],//11
    [ 489, 296, 203, 125],//12
    [ 580, 352, 241, 149],//13
    [ 621, 376, 258, 159],//14
    [ 703, 426, 292, 180],//15
    [ 775, 470, 322, 198],//16
    [ 876, 531, 364, 224],//17
    [ 948, 574, 394, 243],//18
    [1063, 644, 442, 272],//19
    [1159, 702, 482, 297],//20
    [1224, 742, 509, 314],//21
    [1358, 823, 565, 348],//22
    [1468, 890, 611, 376],//23
    [1588, 963, 661, 407],//24
    [1718,1041, 715, 440],//25
    [1804,1094, 751, 462],//26
    [1933,1172, 805, 496],//27
    [2085,1263, 868, 534],//28
    [2181,1322, 908, 559],//29
    [2358,1429, 982, 604],//30
    [2473,1499,1030, 634],//31
    [2670,1618,1112, 684],//32
    [2805,1700,1168, 719],//33
    [2949,1787,1228, 756],//34
    [3081,1867,1283, 790],//35
    [3244,1966,1351, 832],//36
    [3417,2071,1423, 876],//37
    [3599,2181,1499, 923],//38
    [3791,2298,1579, 972],//39
    [3993,2420,1663,1024] //40
  ],
  H:[
    undefined,
    [  17,  10,   7,   4],// 1
    [  34,  20,  14,   8],// 2
    [  58,  35,  24,  15],// 3
    [  82,  50,  34,  21],// 4
    [ 106,  64,  44,  27],// 5
    [ 139,  84,  58,  36],// 6
    [ 154,  93,  64,  39],// 7
    [ 202, 122,  84,  52],// 8
    [ 235, 143,  98,  60],// 9
    [ 288, 174, 119,  74],//10
    [ 331, 200, 137,  85],//11
    [ 374, 227, 155,  96],//12
    [ 427, 259, 177, 109],//13
    [ 468, 283, 194, 120],//14
    [ 530, 321, 220, 136],//15
    [ 602, 365, 250, 154],//16
    [ 674, 408, 280, 173],//17
    [ 746, 452, 310, 191],//18
    [ 813, 493, 338, 208],//19
    [ 919, 557, 382, 235],//20
    [ 969, 587, 403, 248],//21
    [1056, 640, 439, 270],//22
    [1108, 672, 461, 284],//23
    [1228, 744, 511, 315],//24
    [1286, 779, 535, 330],//25
    [1425, 864, 593, 365],//26
    [1501, 910, 625, 385],//27
    [1581, 958, 658, 405],//28
    [1677,1016, 698, 430],//29
    [1782,1080, 742, 457],//30
    [1897,1150, 790, 486],//31
    [2022,1226, 842, 518],//32
    [2157,1307, 898, 553],//33
    [2301,1394, 958, 590],//34
    [2361,1431, 983, 605],//35
    [2524,1530,1051, 647],//36
    [2625,1591,1093, 673],//37
    [2735,1658,1139, 701],//38
    [2927,1774,1219, 750],//39
    [3057,1852,1273, 784] //40
  ]
};


///
__g_qrm2segments__ = [
  //[[repeat,totalCodewords,dataCodewords,correctableCodewords],...]
  undefined,
  { L:[[  1, 26, 19,  2]],
    M:[[  1, 26, 16,  4]],
    Q:[[  1, 26, 13,  6]],
    H:[[  1, 26,  9,  8]] },//1

  { L:[[  1, 44, 34,  4]],
    M:[[  1, 44, 28,  8]],
    Q:[[  1, 44, 22, 11]],
    H:[[  1, 44, 16, 14]] },//2

  { L:[[  1, 70, 55,  7]],
    M:[[  1, 70, 44, 13]],
    Q:[[  2, 35, 17,  9]],
    H:[[  2, 35, 13, 11]] },//3

  { L:[[  1,100, 80, 10]],
    M:[[  2, 50, 32,  9]],
    Q:[[  2, 50, 24, 13]],
    H:[[  4, 25,  9,  8]] },//4

  { L:[[  1,134,108, 13]],
    M:[[  2, 67, 43, 12]],
    Q:[[  2, 33, 15,  9],
       [  2, 34, 16,  9]],
    H:[[  2, 33, 11, 11],
       [  2, 34, 12, 11]] },//5

  { L:[[  2, 86, 68,  9]],
    M:[[  4, 43, 27,  8]],
    Q:[[  4, 43, 19, 12]],
    H:[[  4, 43, 15, 14]] },//6

  { L:[[  2, 98, 78, 10]],
    M:[[  4, 49, 31,  9]],
    Q:[[  2, 32, 14,  9],
       [  4, 33, 15,  9]],
    H:[[  4, 39, 13, 13],
       [  1, 40, 14, 13]] },//7

  { L:[[  2,121, 97, 12]],
    M:[[  2, 60, 38, 11],
       [  2, 61, 39, 11]],
    Q:[[  4, 40, 18, 11],
       [  2, 41, 19, 11]],
    H:[[  4, 40, 14, 13],
       [  2, 41, 15, 13]] },//8

  { L:[[  2,146,116, 15]],
    M:[[  3, 58, 36, 11],
       [  2, 59, 37, 11]],
    Q:[[  4, 36, 16, 10],
       [  4, 37, 17, 10]],
    H:[[  4, 36, 12, 12],
       [  4, 37, 13, 12]] },//9

  { L:[[  2, 86, 68,  9],
       [  2, 87, 69,  9]],
    M:[[  4, 69, 43, 13],
       [  1, 70, 44, 13]],
    Q:[[  6, 43, 19, 12],
       [  2, 44, 20, 12]],
    H:[[  6, 43, 15, 14],
       [  2, 44, 16, 14]] },//10

  { L:[[  4,101, 81, 10]],
    M:[[  1, 80, 50, 15],
       [  4, 81, 51, 15]],
    Q:[[  4, 50, 22, 14],
       [  4, 51, 23, 14]],
    H:[[  3, 36, 12, 12],
       [  8, 37, 13, 12]] },//11

  { L:[[  2,116, 92, 12],
       [  2,117, 93, 12]],
    M:[[  6, 58, 36, 11],
       [  2, 59, 37, 11]],
    Q:[[  4, 46, 20, 13],
       [  6, 47, 21, 13]],
    H:[[  7, 42, 14, 14],
       [  4, 43, 15, 14]] },//12

  { L:[[  4,133,107, 13]],
    M:[[  8, 59, 37, 11],
       [  1, 60, 38, 11]],
    Q:[[  8, 44, 20, 13],
       [  4, 45, 21, 13]],
    H:[[ 12, 33, 11, 14],
       [  4, 34, 12, 14]] },//13

  { L:[[  3,145,115, 15],
       [  1,146,116, 15]],
    M:[[  4, 64, 40, 12],
       [  5, 65, 41, 12]],
    Q:[[ 11, 36, 16, 10],
       [  5, 37, 17, 10]],
    H:[[ 11, 36, 12, 12],
       [  5, 37, 13, 12]] },//14

  { L:[[  5,109, 87, 11],
       [  1,110, 88, 11]],
    M:[[  5, 65, 41, 12],
       [  5, 66, 42, 12]],
    Q:[[  5, 54, 24, 15],
       [  7, 55, 25, 15]],
    H:[[ 11, 36, 12, 12],
       [  7, 37, 13, 12]] },//15

  { L:[[  5,122, 98, 12],
       [  1,123, 99, 12]],
    M:[[  7, 73, 45, 14],
       [  3, 74, 46, 14]],
    Q:[[ 15, 43, 19, 12],
       [  2, 44, 20, 12]],
    H:[[  3, 45, 15, 15],
       [ 13, 46, 16, 15]] },//16

  { L:[[  1,135,107, 14],
       [  5,136,108, 14]],
    M:[[ 10, 74, 46, 14],
       [  1, 75, 47, 14]],
    Q:[[  1, 50, 22, 14],
       [ 15, 51, 23, 14]],
    H:[[  2, 42, 14, 14],
       [ 17, 43, 15, 14]] },//17

  { L:[[  5,150,120, 15],
       [  1,151,121, 15]],
    M:[[  9, 69, 43, 13],
       [  4, 70, 44, 13]],
    Q:[[ 17, 50, 22, 14],
       [  1, 51, 23, 14]],
    H:[[  2, 42, 14, 14],
       [ 19, 43, 15, 14]] },//18

  { L:[[  3,141,113, 14],
       [  4,142,114, 14]],
    M:[[  3, 70, 44, 13],
       [ 11, 71, 45, 13]],
    Q:[[ 17, 47, 21, 13],
       [  4, 48, 22, 13]],
    H:[[  9, 39, 13, 13],
       [ 16, 40, 14, 13]] },//19

  { L:[[  3,135,107, 14],
       [  5,136,108, 14]],
    M:[[  3, 67, 41, 13],
       [ 13, 68, 42, 13]],
    Q:[[ 15, 54, 24, 15],
       [  5, 55, 25, 15]],
    H:[[ 15, 43, 15, 14],
       [ 10, 44, 16, 14]] },//20

  { L:[[  4,144,116, 14],
       [  4,145,117, 14]],
    M:[[ 17, 68, 42, 13]],
    Q:[[ 17, 50, 22, 14],
       [  6, 51, 23, 14]],
    H:[[ 19, 46, 16, 15],
       [  6, 47, 17, 15]] },//21

  { L:[[  2,139,111, 14],
       [  7,140,112, 14]],
    M:[[ 17, 74, 46, 14]],
    Q:[[  7, 54, 24, 15],
       [ 16, 55, 25, 15]],
    H:[[ 34, 37, 13, 12]] },//22

  { L:[[  4,151,121, 15],
       [  5,152,122, 15]],
    M:[[  4, 75, 47, 14],
       [ 14, 76, 48, 14]],
    Q:[[ 11, 54, 24, 15],
       [ 14, 55, 25, 15]],
    H:[[ 16, 45, 15, 15],
       [ 14, 46, 16, 15]] },//23

  { L:[[  6,147,117, 15],
       [  4,148,118, 15]],
    M:[[  6, 73, 45, 14],
       [ 14, 74, 46, 14]],
    Q:[[ 11, 54, 24, 15],
       [ 16, 55, 25, 15]],
    H:[[ 30, 46, 16, 15],
       [  2, 47, 17, 15]] },//24

  { L:[[  8,132,106, 13],
       [  4,133,107, 13]],
    M:[[  8, 75, 47, 14],
       [ 13, 76, 48, 14]],
    Q:[[  7, 54, 24, 15],
       [ 22, 55, 25, 15]],
    H:[[ 22, 45, 15, 15],
       [ 13, 46, 16, 15]] },//25

  { L:[[ 10,142,114, 14],
       [  2,143,115, 14]],
    M:[[ 19, 74, 46, 14],
       [  4, 75, 47, 14]],
    Q:[[ 28, 50, 22, 14],
       [  6, 51, 23, 14]],
    H:[[ 33, 46, 16, 15],
       [  4, 47, 17, 15]] },//26

  { L:[[  8,152,122, 15],
       [  4,153,123, 15]],
    M:[[ 22, 73, 45, 14],
       [  3, 74, 46, 14]],
    Q:[[  8, 53, 23, 15],
       [ 26, 54, 24, 15]],
    H:[[ 12, 45, 15, 15],
       [ 28, 46, 16, 15]] },//27

  { L:[[  3,147,117, 15],
       [ 10,148,118, 15]],
    M:[[  3, 73, 45, 14],
       [ 23, 74, 46, 14]],
    Q:[[  4, 54, 24, 15],
       [ 31, 55, 25, 15]],
    H:[[ 11, 45, 15, 15],
       [ 31, 46, 16, 15]] },//28

  { L:[[  7,146,116, 15],
       [  7,147,117, 15]],
    M:[[ 21, 73, 45, 14],
       [  7, 74, 46, 14]],
    Q:[[  1, 53, 23, 15],
       [ 37, 54, 24, 15]],
    H:[[ 19, 45, 15, 15],
       [ 26, 46, 16, 15]] },//29

  { L:[[  5,145,115, 15],
       [ 10,146,116, 15]],
    M:[[ 19, 75, 47, 14],
       [ 10, 76, 48, 14]],
    Q:[[ 15, 54, 24, 15],
       [ 25, 55, 25, 15]],
    H:[[ 23, 45, 15, 15],
       [ 25, 46, 16, 15]] },//30

  { L:[[ 13,145,115, 15],
       [  3,146,116, 15]],
    M:[[  2, 74, 46, 14],
       [ 29, 75, 47, 14]],
    Q:[[ 42, 54, 24, 15],
       [  1, 55, 25, 15]],
    H:[[ 23, 45, 15, 15],
       [ 28, 46, 16, 15]] },//31

  { L:[[ 17,145,115, 15]],
    M:[[ 10, 74, 46, 14],
       [ 23, 75, 47, 14]],
    Q:[[ 10, 54, 24, 15],
       [ 35, 55, 25, 15]],
    H:[[ 19, 45, 15, 15],
       [ 35, 46, 16, 15]] },//32

  { L:[[ 17,145,115, 15],
       [  1,146,116, 15]],
    M:[[ 14, 74, 46, 14],
       [ 21, 75, 47, 14]],
    Q:[[ 29, 54, 24, 15],
       [ 19, 55, 25, 15]],
    H:[[ 11, 44, 15, 15],
       [ 46, 45, 16, 15]] },//33

  { L:[[ 13,145,115, 15],
       [  6,146,116, 15]],
    M:[[ 14, 74, 46, 14],
       [ 23, 75, 47, 14]],
    Q:[[ 44, 54, 24, 15],
       [  7, 55, 25, 15]],
    H:[[ 59, 46, 16, 15],
       [  1, 47, 17, 15]] },//34

  { L:[[ 12,151,121, 15],
       [  7,152,122, 15]],
    M:[[ 12, 75, 47, 14],
       [ 26, 76, 48, 14]],
    Q:[[ 39, 54, 24, 15],
       [ 14, 55, 25, 15]],
    H:[[ 22, 45, 15, 15],
       [ 41, 46, 16, 15]] },//35

  { L:[[  6,151,121, 15],
       [ 14,152,122, 15]],
    M:[[  6, 75, 47, 14],
       [ 34, 76, 48, 14]],
    Q:[[ 46, 54, 24, 15],
       [ 10, 55, 25, 15]],
    H:[[  2, 45, 15, 15],
       [ 64, 46, 16, 15]] },//36

  { L:[[ 17,152,122, 15],
       [  4,153,123, 15]],
    M:[[ 29, 74, 46, 14],
       [ 14, 75, 47, 14]],
    Q:[[ 49, 54, 24, 15],
       [ 10, 55, 25, 15]],
    H:[[ 24, 45, 15, 15],
       [ 46, 46, 16, 15]] },//37

  { L:[[  4,152,122, 15],
       [ 18,153,123, 15]],
    M:[[ 13, 74, 46, 14],
       [ 32, 75, 47, 14]],
    Q:[[ 48, 54, 24, 15],
       [ 14, 55, 25, 15]],
    H:[[ 42, 45, 15, 15],
       [ 32, 46, 16, 15]] },//38

  { L:[[ 20,147,117, 15],
       [  4,148,118, 15]],
    M:[[ 40, 75, 47, 14],
       [  7, 76, 48, 14]],
    Q:[[ 43, 54, 24, 15],
       [ 22, 55, 25, 15]],
    H:[[ 10, 45, 15, 15],
       [ 67, 46, 16, 15]] },//39

  { L:[[ 19,148,118, 15],
       [  6,149,119, 15]],
    M:[[ 18, 75, 47, 14],
       [ 31, 76, 48, 14]],
    Q:[[ 34, 54, 24, 15],
       [ 34, 55, 25, 15]],
    H:[[ 20, 45, 15, 15],
       [ 61, 46, 16, 15]] }//40
];


///
__g_qrm2alignmentpats__ = [
  undefined,[],
  [6,18],//2 (12)
  [6,22],//3 (16)
  [6,26],//4 (20)
  [6,30],//5 (24)
  [6,34],//6 (28)
  [6,22,38],// 7 (16)
  [6,24,42],// 8 (18)
  [6,26,46],// 9 (20)
  [6,28,50],//10 (22)
  [6,30,54],//11 (24)
  [6,32,58],//12 (26)
  [6,34,62],//13 (28)
  [6,26,46,66],//14 (20)
  [6,26,48,70],//15 (20,22)
  [6,26,50,74],//16 (20,24)
  [6,30,54,78],//17 (24)
  [6,30,56,82],//18 (24,26)
  [6,30,58,86],//19 (24,28)
  [6,34,62,90],//20 (28)
  [6,28,50,72, 94],//21 (22)
  [6,26,50,74, 98],//22 (20,24)
  [6,30,54,78,102],//23 (24)
  [6,28,54,80,106],//24 (22,26)
  [6,32,58,84,110],//25 (26)
  [6,30,58,86,114],//26 (24,28)
  [6,34,62,90,118],//27 (28)
  [6,26,50,74, 98,122],//28 (20,24)
  [6,30,54,78,102,126],//29 (24)
  [6,26,52,78,104,130],//30 (20,26)
  [6,30,56,82,108,134],//31 (24,26)
  [6,34,60,86,112,138],//32 (28,26)
  [6,30,58,86,114,142],//33 (24,28)
  [6,34,62,90,118,146],//34 (28)
  [6,30,54,78,102,126,150],//35 (24)
  [6,24,50,76,102,128,154],//36 (18,26)
  [6,28,54,80,106,132,158],//37 (22,26)
  [6,32,58,84,110,136,162],//38 (26)
  [6,26,54,82,110,138,166],//39 (20,28)
  [6,30,58,86,114,142,170] //40 (24,28)
];


///
QrM2SymbolInfo = __extends(Object,
// constructor
  function(version, eclevel) {
    __constructSuper(this);
    if (version == undefined) { version =   1; }
    if (eclevel == undefined) { eclevel = "M"; }
    this.version = version;
    this.eclevel = {L:1,M:0,Q:3,H:2}[eclevel]; // L<M<Q<H
    this.matrixSize    = __g_qrm2matsize__               [version];
    this.dataCodewords = __g_qrm2datacodewords__[eclevel][version];
    this.segments      = __g_qrm2segments__     [version][eclevel];
    this.alignmentPats = __g_qrm2alignmentpats__         [version];
  },
// methods
function(__this__) {
  __this__.MAXVER = 40;
});

