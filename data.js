var APP_DATA = {
  "scenes": [
    {
      "id": "0-halaman",
      "name": "Halaman",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6972476378621835,
        "pitch": 0.0016268998038295734,
        "fov": 1.4154207722933445
      },
      "linkHotspots": [
        {
          "yaw": -2.3845093109017608,
          "pitch": 0.18159735036784852,
          "rotation": 0,
          "target": "1-teras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-teras",
      "name": "Teras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.350173005868708,
        "pitch": 0.011570972336064855,
        "fov": 1.4154207722933445
      },
      "linkHotspots": [
        {
          "yaw": 3.0629290888987573,
          "pitch": 0.31832471049262523,
          "rotation": 0,
          "target": "0-halaman"
        },
        {
          "yaw": 0.06519766564283458,
          "pitch": 0.2966521206707178,
          "rotation": 0,
          "target": "2-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ruang-tamu",
      "name": "Ruang Tamu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0403062076821783,
        "pitch": 0.027209059183762818,
        "fov": 1.4154207722933445
      },
      "linkHotspots": [
        {
          "yaw": 0.4568318539801499,
          "pitch": 0.25419454677733455,
          "rotation": 0,
          "target": "1-teras"
        },
        {
          "yaw": -2.308312713079278,
          "pitch": 0.3210159107944097,
          "rotation": 0,
          "target": "3-ruang-keluarga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ruang-keluarga",
      "name": "Ruang Keluarga",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.779827170910881,
        "pitch": 0.14346594842343308,
        "fov": 1.4154207722933445
      },
      "linkHotspots": [
        {
          "yaw": 3.119783460189751,
          "pitch": 0.3754481901343123,
          "rotation": 0,
          "target": "2-ruang-tamu"
        },
        {
          "yaw": -2.0781456628109147,
          "pitch": 0.22126334483885302,
          "rotation": 0,
          "target": "4-kamar-mase"
        },
        {
          "yaw": -0.723558164878181,
          "pitch": 0.37499273684179,
          "rotation": 0,
          "target": "5-ruang-makan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kamar-mase",
      "name": "Kamar Mase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8510183342252677,
          "pitch": -0.09538713436461776,
          "rotation": 0,
          "target": "3-ruang-keluarga"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ruang-makan",
      "name": "Ruang Makan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.065504721753106,
        "pitch": 0.41555654026097244,
        "fov": 1.4154207722933445
      },
      "linkHotspots": [
        {
          "yaw": -0.21284412645428574,
          "pitch": 0.3660323510784629,
          "rotation": 0,
          "target": "3-ruang-keluarga"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
