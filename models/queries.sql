CREATE TABLE myData (
    id SERIAL PRIMARY KEY,
    fecha DATE,
    tramo_horario TEXT,
    rio TEXT,
    tramo TEXT,
    viento TEXT,
    soleado TEXT,
    temp_amb TEXT,
    caudal TEXT,
    condiciones_agua TEXT,
    especie TEXT,
    capturas_rs INTEGER,
    perdidas_rs INTEGER,
    numero_pescadores TEXT,
    capturas_pescadores TEXT,
    talla_media NUMERIC,
    talla_max NUMERIC,
    ninfa INTEGER,
    seca INTEGER,
    streamer INTEGER,
    bajo_ninfa NUMERIC,
    bajo_seca NUMERIC,
    ninfa1 TEXT,
    c TEXT,
    ninfa2 TEXT,
    ninfa3 TEXT,
    seca1 TEXT,
    perdidas_ninfas INTEGER,
    hora_act_01 TEXT,
    hora_hasta_01 TEXT,
    guiada TEXT,
    acompanantes TEXT,
    competicion TEXT,
    masa_de_agua TEXT
);


INSERT INTO myData (
    fecha,
    tramo_horario,
    rio,
    tramo,
    viento,
    soleado,
    temp_amb,
    caudal,
    condiciones_agua,
    especie,
    capturas_rs,
    perdidas_rs,
    numero_pescadores,
    capturas_pescadores,
    talla_media,
    talla_max,
    ninfa,
    seca,
    streamer,
    bajo_ninfa,
    bajo_seca,
    ninfa1,
    ninfa2,
    ninfa3,
    seca1,
    perdidas_ninfas,
    hora_act_01,
    hora_hasta_01,
    guiada,
    acompanantes,
    competicion,
    masa_de_agua
)

-- falta delete