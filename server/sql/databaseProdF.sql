--
-- PostgreSQL database dump
--

-- Dumped from database version 13.7 (Ubuntu 13.7-0ubuntu0.21.10.1)
-- Dumped by pg_dump version 13.7 (Ubuntu 13.7-0ubuntu0.21.10.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: agentes_aduana; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agentes_aduana (
    id integer NOT NULL,
    nombre character varying,
    apellido character varying,
    correo character varying,
    numero_cuenta character varying,
    rut character varying,
    vigencia boolean
);


ALTER TABLE public.agentes_aduana OWNER TO postgres;

--
-- Name: agentes_aduana_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.agentes_aduana_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agentes_aduana_id_seq OWNER TO postgres;

--
-- Name: agentes_aduana_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.agentes_aduana_id_seq OWNED BY public.agentes_aduana.id;


--
-- Name: asume; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asume (
    observadores_id integer NOT NULL,
    agentes_aduana_id integer NOT NULL
);


ALTER TABLE public.asume OWNER TO postgres;

--
-- Name: bancos_agentes_aduana; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bancos_agentes_aduana (
    id integer NOT NULL,
    numero_cuenta character varying,
    tipo_cuenta character varying,
    nombre_banco character varying,
    vigencia boolean,
    agentes_aduana_id integer
);


ALTER TABLE public.bancos_agentes_aduana OWNER TO postgres;

--
-- Name: bancos_agentes_aduana_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bancos_agentes_aduana_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bancos_agentes_aduana_id_seq OWNER TO postgres;

--
-- Name: bancos_agentes_aduana_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bancos_agentes_aduana_id_seq OWNED BY public.bancos_agentes_aduana.id;


--
-- Name: cuentas_bancos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuentas_bancos (
    id integer NOT NULL,
    numero_cuenta character varying,
    nombre_banco character varying,
    swift_code character varying,
    codigo_iban character varying,
    referencia text,
    paises_id integer,
    numeros_aba_id integer,
    vigencia boolean
);


ALTER TABLE public.cuentas_bancos OWNER TO postgres;

--
-- Name: cuentas_bancos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cuentas_bancos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuentas_bancos_id_seq OWNER TO postgres;

--
-- Name: cuentas_bancos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cuentas_bancos_id_seq OWNED BY public.cuentas_bancos.id;


--
-- Name: cuentas_corrientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuentas_corrientes (
    id integer NOT NULL,
    debe double precision,
    haber double precision,
    agentes_aduana_id integer,
    vigencia boolean
);


ALTER TABLE public.cuentas_corrientes OWNER TO postgres;

--
-- Name: cuentas_corrientes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cuentas_corrientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuentas_corrientes_id_seq OWNER TO postgres;

--
-- Name: cuentas_corrientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cuentas_corrientes_id_seq OWNED BY public.cuentas_corrientes.id;


--
-- Name: detalles_dolar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_dolar (
    id integer NOT NULL,
    precio_compra double precision,
    historial_dolar_id integer,
    vigencia boolean
);


ALTER TABLE public.detalles_dolar OWNER TO postgres;

--
-- Name: detalles_dolar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalles_dolar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalles_dolar_id_seq OWNER TO postgres;

--
-- Name: detalles_dolar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalles_dolar_id_seq OWNED BY public.detalles_dolar.id;


--
-- Name: detalles_pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_pedidos (
    id integer NOT NULL,
    diferencia_de_costos double precision,
    pedidos_id integer,
    vigencia boolean
);


ALTER TABLE public.detalles_pedidos OWNER TO postgres;

--
-- Name: detalles_pedidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalles_pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalles_pedidos_id_seq OWNER TO postgres;

--
-- Name: detalles_pedidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalles_pedidos_id_seq OWNED BY public.detalles_pedidos.id;


--
-- Name: documentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documentos (
    id integer NOT NULL,
    nombre_documento text,
    pedidos_id integer,
    vigencia boolean
);


ALTER TABLE public.documentos OWNER TO postgres;

--
-- Name: documentos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.documentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documentos_id_seq OWNER TO postgres;

--
-- Name: documentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.documentos_id_seq OWNED BY public.documentos.id;


--
-- Name: dolar_mensual; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dolar_mensual (
    id integer NOT NULL,
    valor_mensual double precision,
    fecha_registro timestamp without time zone,
    vigencia boolean
);


ALTER TABLE public.dolar_mensual OWNER TO postgres;

--
-- Name: dolar_mensual_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dolar_mensual_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dolar_mensual_id_seq OWNER TO postgres;

--
-- Name: dolar_mensual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dolar_mensual_id_seq OWNED BY public.dolar_mensual.id;


--
-- Name: efectua; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.efectua (
    observaciones_id integer NOT NULL,
    observadores_id integer NOT NULL
);


ALTER TABLE public.efectua OWNER TO postgres;

--
-- Name: extrae; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.extrae (
    pedidos_id integer NOT NULL,
    historial_precios_id integer NOT NULL
);


ALTER TABLE public.extrae OWNER TO postgres;

--
-- Name: gastos_extras; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gastos_extras (
    id integer NOT NULL,
    monto double precision,
    pedidos_id integer,
    observaciones_id integer,
    vigencia boolean
);


ALTER TABLE public.gastos_extras OWNER TO postgres;

--
-- Name: gastos_extras_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gastos_extras_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gastos_extras_id_seq OWNER TO postgres;

--
-- Name: gastos_extras_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gastos_extras_id_seq OWNED BY public.gastos_extras.id;


--
-- Name: historial_dolar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historial_dolar (
    id integer NOT NULL,
    fecha timestamp without time zone,
    tipo character varying,
    vigencia boolean,
    pedidos_id integer,
    dolar_mensual_id integer
);


ALTER TABLE public.historial_dolar OWNER TO postgres;

--
-- Name: historial_dolar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historial_dolar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.historial_dolar_id_seq OWNER TO postgres;

--
-- Name: historial_dolar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historial_dolar_id_seq OWNED BY public.historial_dolar.id;


--
-- Name: historial_precios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historial_precios (
    id integer NOT NULL,
    precio double precision,
    fecha timestamp without time zone,
    productos_id integer,
    vigencia boolean
);


ALTER TABLE public.historial_precios OWNER TO postgres;

--
-- Name: historial_precios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historial_precios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.historial_precios_id_seq OWNER TO postgres;

--
-- Name: historial_precios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historial_precios_id_seq OWNED BY public.historial_precios.id;


--
-- Name: monedas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.monedas (
    id integer NOT NULL,
    pais character varying(30),
    moneda character varying(15),
    vigencia boolean
);


ALTER TABLE public.monedas OWNER TO postgres;

--
-- Name: monedas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.monedas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monedas_id_seq OWNER TO postgres;

--
-- Name: monedas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.monedas_id_seq OWNED BY public.monedas.id;


--
-- Name: movimientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimientos (
    id integer NOT NULL,
    monto double precision,
    fecha date,
    descripcion text,
    cuentas_corrientes_id integer,
    vigencia boolean
);


ALTER TABLE public.movimientos OWNER TO postgres;

--
-- Name: movimientos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movimientos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movimientos_id_seq OWNER TO postgres;

--
-- Name: movimientos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movimientos_id_seq OWNED BY public.movimientos.id;


--
-- Name: numeros_aba; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.numeros_aba (
    id integer NOT NULL,
    nombre_banco character varying,
    numero_aba numeric(9,0),
    vigencia boolean
);


ALTER TABLE public.numeros_aba OWNER TO postgres;

--
-- Name: numeros_aba_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.numeros_aba_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.numeros_aba_id_seq OWNER TO postgres;

--
-- Name: numeros_aba_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.numeros_aba_id_seq OWNED BY public.numeros_aba.id;


--
-- Name: observaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.observaciones (
    id integer NOT NULL,
    observacion text,
    fecha date,
    pedidos_id integer,
    vigencia boolean,
    gasto integer
);


ALTER TABLE public.observaciones OWNER TO postgres;

--
-- Name: observaciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.observaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.observaciones_id_seq OWNER TO postgres;

--
-- Name: observaciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.observaciones_id_seq OWNED BY public.observaciones.id;


--
-- Name: observadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.observadores (
    id integer NOT NULL,
    rut character varying,
    nombre character varying,
    vigencia boolean
);


ALTER TABLE public.observadores OWNER TO postgres;

--
-- Name: observadores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.observadores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.observadores_id_seq OWNER TO postgres;

--
-- Name: observadores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.observadores_id_seq OWNED BY public.observadores.id;


--
-- Name: paises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paises (
    id integer NOT NULL,
    pais character varying,
    codigo_iban character varying,
    vigencia boolean
);


ALTER TABLE public.paises OWNER TO postgres;

--
-- Name: paises_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.paises_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.paises_id_seq OWNER TO postgres;

--
-- Name: paises_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.paises_id_seq OWNED BY public.paises.id;


--
-- Name: pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedidos (
    id integer NOT NULL,
    codigo text,
    pago_inicial double precision,
    pago_final double precision,
    fecha_inicial date,
    fecha_pago date,
    fecha_salida date,
    fecha_llegada_real date,
    fecha_llegada_estimada date,
    fecha_aduana date,
    estado character varying(20),
    tipo_de_envio character varying(10),
    flete double precision,
    seguro double precision,
    valor_cif double precision,
    honorarios double precision,
    arancel double precision,
    gastos_agencia double precision,
    numero_din character varying(30),
    cuentas_bancos_id integer,
    agentes_aduana_id integer,
    proveedores_id integer,
    dolar_mensual_id integer,
    tipo_pago character varying,
    fecha_vencimiento date,
    vigencia boolean
);


ALTER TABLE public.pedidos OWNER TO postgres;

--
-- Name: pedidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pedidos_id_seq OWNER TO postgres;

--
-- Name: pedidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;


--
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    codigo character varying,
    tipo character varying,
    nombre character varying,
    proveedores_id integer,
    unidad_productos_id integer,
    vigencia boolean
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- Name: productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.productos_id_seq OWNER TO postgres;

--
-- Name: productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;


--
-- Name: proveedores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proveedores (
    id integer NOT NULL,
    nombre character varying,
    direccion character varying,
    correo character varying,
    pais character varying,
    monedas_id integer,
    rut character varying,
    vigencia boolean,
    cuentas_bancos_id integer
);


ALTER TABLE public.proveedores OWNER TO postgres;

--
-- Name: proveedores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proveedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proveedores_id_seq OWNER TO postgres;

--
-- Name: proveedores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proveedores_id_seq OWNED BY public.proveedores.id;


--
-- Name: realiza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.realiza (
    usuarios_id integer NOT NULL,
    pedidos_id integer NOT NULL,
    createdat timestamp without time zone,
    updatedat timestamp without time zone
);


ALTER TABLE public.realiza OWNER TO postgres;

--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    nombre character varying(30),
    cod_rol character varying(10)
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: telefonos_agentes_aduana; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.telefonos_agentes_aduana (
    id integer NOT NULL,
    telefono character varying,
    agentes_aduana_id integer,
    vigencia boolean
);


ALTER TABLE public.telefonos_agentes_aduana OWNER TO postgres;

--
-- Name: telefonos_agentes_aduana_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.telefonos_agentes_aduana_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.telefonos_agentes_aduana_id_seq OWNER TO postgres;

--
-- Name: telefonos_agentes_aduana_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.telefonos_agentes_aduana_id_seq OWNED BY public.telefonos_agentes_aduana.id;


--
-- Name: telefonos_proveedores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.telefonos_proveedores (
    id integer NOT NULL,
    telefono character varying,
    proveedores_id integer,
    vigencia boolean
);


ALTER TABLE public.telefonos_proveedores OWNER TO postgres;

--
-- Name: telefonos_proveedores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.telefonos_proveedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.telefonos_proveedores_id_seq OWNER TO postgres;

--
-- Name: telefonos_proveedores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.telefonos_proveedores_id_seq OWNED BY public.telefonos_proveedores.id;


--
-- Name: telefonos_usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.telefonos_usuarios (
    id integer NOT NULL,
    telefono character varying,
    usuarios_id integer
);


ALTER TABLE public.telefonos_usuarios OWNER TO postgres;

--
-- Name: telefonos_usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.telefonos_usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.telefonos_usuarios_id_seq OWNER TO postgres;

--
-- Name: telefonos_usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.telefonos_usuarios_id_seq OWNED BY public.telefonos_usuarios.id;


--
-- Name: tiene; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tiene (
    pedidos_id integer NOT NULL,
    productos_id integer NOT NULL,
    cantidad integer
);


ALTER TABLE public.tiene OWNER TO postgres;

--
-- Name: unidad_productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidad_productos (
    id integer NOT NULL,
    valor_unidad double precision,
    vigencia boolean,
    nombre_medida character varying
);


ALTER TABLE public.unidad_productos OWNER TO postgres;

--
-- Name: unidad_productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.unidad_productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.unidad_productos_id_seq OWNER TO postgres;

--
-- Name: unidad_productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidad_productos_id_seq OWNED BY public.unidad_productos.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    rut character(9),
    nombre character varying(30),
    apellido character varying(30),
    correo character varying(30),
    "contraseña" text,
    roles_id integer,
    verificacion boolean
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: agentes_aduana id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agentes_aduana ALTER COLUMN id SET DEFAULT nextval('public.agentes_aduana_id_seq'::regclass);


--
-- Name: bancos_agentes_aduana id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bancos_agentes_aduana ALTER COLUMN id SET DEFAULT nextval('public.bancos_agentes_aduana_id_seq'::regclass);


--
-- Name: cuentas_bancos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_bancos ALTER COLUMN id SET DEFAULT nextval('public.cuentas_bancos_id_seq'::regclass);


--
-- Name: cuentas_corrientes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_corrientes ALTER COLUMN id SET DEFAULT nextval('public.cuentas_corrientes_id_seq'::regclass);


--
-- Name: detalles_dolar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_dolar ALTER COLUMN id SET DEFAULT nextval('public.detalles_dolar_id_seq'::regclass);


--
-- Name: detalles_pedidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos ALTER COLUMN id SET DEFAULT nextval('public.detalles_pedidos_id_seq'::regclass);


--
-- Name: documentos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos ALTER COLUMN id SET DEFAULT nextval('public.documentos_id_seq'::regclass);


--
-- Name: dolar_mensual id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dolar_mensual ALTER COLUMN id SET DEFAULT nextval('public.dolar_mensual_id_seq'::regclass);


--
-- Name: gastos_extras id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_extras ALTER COLUMN id SET DEFAULT nextval('public.gastos_extras_id_seq'::regclass);


--
-- Name: historial_dolar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_dolar ALTER COLUMN id SET DEFAULT nextval('public.historial_dolar_id_seq'::regclass);


--
-- Name: historial_precios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_precios ALTER COLUMN id SET DEFAULT nextval('public.historial_precios_id_seq'::regclass);


--
-- Name: monedas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.monedas ALTER COLUMN id SET DEFAULT nextval('public.monedas_id_seq'::regclass);


--
-- Name: movimientos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimientos ALTER COLUMN id SET DEFAULT nextval('public.movimientos_id_seq'::regclass);


--
-- Name: numeros_aba id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.numeros_aba ALTER COLUMN id SET DEFAULT nextval('public.numeros_aba_id_seq'::regclass);


--
-- Name: observaciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observaciones ALTER COLUMN id SET DEFAULT nextval('public.observaciones_id_seq'::regclass);


--
-- Name: observadores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observadores ALTER COLUMN id SET DEFAULT nextval('public.observadores_id_seq'::regclass);


--
-- Name: paises id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paises ALTER COLUMN id SET DEFAULT nextval('public.paises_id_seq'::regclass);


--
-- Name: pedidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);


--
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- Name: proveedores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores ALTER COLUMN id SET DEFAULT nextval('public.proveedores_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: telefonos_agentes_aduana id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_agentes_aduana ALTER COLUMN id SET DEFAULT nextval('public.telefonos_agentes_aduana_id_seq'::regclass);


--
-- Name: telefonos_proveedores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_proveedores ALTER COLUMN id SET DEFAULT nextval('public.telefonos_proveedores_id_seq'::regclass);


--
-- Name: telefonos_usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_usuarios ALTER COLUMN id SET DEFAULT nextval('public.telefonos_usuarios_id_seq'::regclass);


--
-- Name: unidad_productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidad_productos ALTER COLUMN id SET DEFAULT nextval('public.unidad_productos_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: agentes_aduana; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.agentes_aduana (id, nombre, apellido, correo, numero_cuenta, rut, vigencia) FROM stdin;
9	Carlos	Arredondo  Sorlorza	GONZALOGONZALEZ880@HOTMAIL.COM	1832360	108532246	t
\.


--
-- Data for Name: asume; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asume (observadores_id, agentes_aduana_id) FROM stdin;
3	9
\.


--
-- Data for Name: bancos_agentes_aduana; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bancos_agentes_aduana (id, numero_cuenta, tipo_cuenta, nombre_banco, vigencia, agentes_aduana_id) FROM stdin;
7	1832360	Cuenta Corriente	SANTANDER	t	9
\.


--
-- Data for Name: cuentas_bancos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentas_bancos (id, numero_cuenta, nombre_banco, swift_code, codigo_iban, referencia, paises_id, numeros_aba_id, vigencia) FROM stdin;
11	6550921296	BRADESCO	bofasu3n	BR 4360746948033970000065552C1	65552	11	11	t
12	0	BANCO ITAU UNIBANCO SA 	ITAUBRSP	BR 6070 1190 0129 5000 0165 003Cl	544705690	13	14	t
13	7659022317	YES BANKLTD NEHRU CENTRE DISCOVERY OF INDIA 	YESBINBB,	0	45063700000332	14	15	t
\.


--
-- Data for Name: cuentas_corrientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentas_corrientes (id, debe, haber, agentes_aduana_id, vigencia) FROM stdin;
7	0	0	9	t
\.


--
-- Data for Name: detalles_dolar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_dolar (id, precio_compra, historial_dolar_id, vigencia) FROM stdin;
17	730	20	t
18	720	21	t
19	730	23	t
20	720	22	t
21	710	24	t
22	710	25	t
23	730	26	t
24	730	27	t
27	740	30	t
28	740	31	t
29	730	32	t
30	730	33	t
31	736	34	t
32	736	35	t
35	741	38	t
36	741	39	t
37	766	40	t
38	766	41	t
41	784.19	44	t
42	784.19	45	t
40	736.88	43	t
39	736.88	42	t
34	710.64	37	t
33	710.64	36	t
43	784.19	46	t
44	784.19	47	t
45	740	48	t
46	740	49	t
47	784.27	50	t
48	784.27	51	t
49	784.27	52	t
50	784.27	53	t
51	784.19	54	t
52	784.19	55	t
53	814	56	t
54	814	57	t
55	816.47	58	t
56	816.47	59	t
57	810	60	t
58	810	61	t
59	822	62	t
60	822	63	t
61	822	62	t
62	822	63	t
63	803	64	t
64	803	65	t
65	788.18	66	t
66	788.18	67	t
67	803	68	t
68	803	69	t
69	806.3	70	t
70	806.3	71	t
71	722	72	t
72	722	73	t
73	724.2	74	t
74	724.2	75	t
75	724.2	76	t
76	724.2	77	t
77	722	78	t
78	722	79	t
79	683.73	80	t
80	683.73	81	t
81	683.73	82	t
82	683.73	83	t
83	730	84	t
84	730	85	t
85	736	86	t
86	736	87	t
87	736.88	88	t
88	736.88	89	t
89	784.19	90	t
90	784.19	91	t
91	816.47	92	t
92	816.47	93	t
93	722	94	t
94	722	95	t
95	680.06	96	t
96	680.06	97	t
97	730	98	t
98	730	99	t
100	804.32	101	t
101	804.32	102	t
102	804.32	103	t
103	804.32	104	t
104	804.32	105	t
105	804.32	106	t
\.


--
-- Data for Name: detalles_pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_pedidos (id, diferencia_de_costos, pedidos_id, vigencia) FROM stdin;
22	0	37	t
23	0	38	t
24	0	39	t
25	0	42	t
26	0	44	t
27	0	45	t
28	0	46	t
29	0	47	t
30	0	48	t
31	0	49	t
32	0	50	t
33	0	51	t
34	0	52	t
35	0	53	t
36	0	54	t
37	0	55	t
38	0	56	t
39	0	57	t
40	0	58	t
41	0	59	t
42	0	60	t
43	0	61	t
44	0	62	t
45	0	63	t
46	0	64	t
47	0	65	t
48	0	66	t
49	0	67	t
52	0	68	t
53	0	69	t
54	0	70	t
55	0	71	t
56	0	72	t
57	0	73	t
58	0	75	t
59	0	76	t
60	0	77	t
61	0	79	t
62	0	80	t
63	0	81	t
\.


--
-- Data for Name: documentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documentos (id, nombre_documento, pedidos_id, vigencia) FROM stdin;
\.


--
-- Data for Name: dolar_mensual; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dolar_mensual (id, valor_mensual, fecha_registro, vigencia) FROM stdin;
4	700.15	2021-05-26 00:00:00	t
5	700.15	2021-05-15 00:00:00	t
6	736.17	2021-04-16 00:00:00	t
7	703.65	2021-03-10 00:00:00	t
8	736.88	2021-02-03 00:00:00	t
9	730	2021-01-22 00:00:00	t
10	736	2021-01-13 00:00:00	t
11	710.64	2020-12-16 00:00:00	t
12	741	2020-11-18 00:00:00	t
13	766	2020-11-17 00:00:00	t
14	736.88	2020-10-19 00:00:00	t
15	784.19	2020-10-15 00:00:00	t
16	784.19	2020-09-28 00:00:00	t
17	740	2021-06-23 00:00:00	t
18	784.27	2020-09-17 00:00:00	t
19	784.27	2020-09-09 00:00:00	t
20	784.19	2020-08-14 00:00:00	t
21	814	2020-06-24 00:00:00	t
22	816.47	2020-06-17 00:00:00	t
23	810	2020-05-26 00:00:00	t
24	822	2020-05-06 00:00:00	t
25	803	2020-03-10 00:00:00	t
26	788.18	2020-02-26 00:00:00	t
27	803	2020-02-05 00:00:00	t
28	806.3	2019-12-27 00:00:00	t
29	722	2019-12-05 00:00:00	t
30	724.2	2019-10-17 00:00:00	t
31	724.2	2019-10-10 00:00:00	t
32	722	2019-07-15 00:00:00	t
33	683.73	2019-04-18 00:00:00	t
34	672.36	2018-11-16 00:00:00	t
35	730	2021-03-16 00:00:00	t
36	736	2021-01-13 00:00:00	t
37	736.88	2020-10-19 00:00:00	t
38	784.19	2020-08-14 00:00:00	t
39	816.47	2020-06-17 00:00:00	t
40	722	2019-12-05 00:00:00	t
41	680.06	2019-07-15 00:00:00	t
42	730	2021-03-16 00:00:00	t
43	804.32	2021-07-03 00:00:00	t
44	804.32	2021-07-03 00:00:00	t
45	804.32	2021-07-03 00:00:00	t
\.


--
-- Data for Name: efectua; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.efectua (observaciones_id, observadores_id) FROM stdin;
16	3
17	3
18	3
19	3
22	3
23	3
24	3
25	3
26	3
27	3
28	3
31	3
32	3
33	3
34	3
36	3
37	3
38	3
39	3
40	3
41	3
42	3
43	3
44	3
46	3
47	3
48	3
49	3
50	3
51	3
52	3
53	3
54	3
55	3
\.


--
-- Data for Name: extrae; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.extrae (pedidos_id, historial_precios_id) FROM stdin;
\.


--
-- Data for Name: gastos_extras; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos_extras (id, monto, pedidos_id, observaciones_id, vigencia) FROM stdin;
6	213868	37	16	t
7	190326	38	17	t
8	202598	39	18	t
9	400000	40	19	t
11	819759	44	22	t
12	773151	47	23	t
13	707523	48	24	t
14	55661	49	25	t
15	183316	50	26	t
16	250000	51	27	t
17	136341	52	28	t
20	819759	54	31	t
21	819759	56	32	t
22	789700	57	33	t
23	201834	58	34	t
25	181549	60	36	t
26	501890	61	37	t
27	685082	63	38	t
29	201834	64	39	t
30	717861	65	40	t
31	685082	66	41	t
32	368124	67	42	t
33	893000	68	43	t
34	789698	69	44	t
35	819759	70	46	t
36	707523	71	47	t
37	819759	72	48	t
38	819759	73	49	t
39	685082	75	50	t
40	789698	76	51	t
41	789698	77	52	t
42	3200000	79	53	t
43	3200000	80	54	t
44	3200000	81	55	t
\.


--
-- Data for Name: historial_dolar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historial_dolar (id, fecha, tipo, vigencia, pedidos_id, dolar_mensual_id) FROM stdin;
20	2021-05-26 00:00:00	inicio	t	37	4
21	2021-05-15 00:00:00	inicio	t	38	5
22	2021-05-15 00:00:00	final	t	38	5
23	2021-05-26 00:00:00	final	t	37	4
24	2021-04-16 00:00:00	inicio	t	39	6
25	2021-04-16 00:00:00	final	t	39	6
26	2021-03-10 00:00:00	inicio	t	40	7
27	2021-03-10 00:00:00	final	t	40	7
30	2021-02-03 00:00:00	inicio	t	42	8
31	2021-02-03 00:00:00	final	t	42	8
32	2021-01-22 00:00:00	inicio	t	43	9
33	2021-01-22 00:00:00	final	t	43	9
34	2021-01-13 00:00:00	inicio	t	44	10
35	2021-01-13 00:00:00	final	t	44	10
36	2020-12-16 00:00:00	inicio	t	45	11
37	2020-12-16 00:00:00	final	t	45	11
38	2020-11-18 00:00:00	inicio	t	46	12
39	2020-11-18 00:00:00	final	t	46	12
40	2020-11-17 00:00:00	inicio	t	47	13
41	2020-11-17 00:00:00	final	t	47	13
42	2020-10-19 00:00:00	inicio	t	48	14
43	2020-10-19 00:00:00	final	t	48	14
44	2020-10-15 00:00:00	inicio	t	49	15
45	2020-10-15 00:00:00	final	t	49	15
46	2020-09-28 00:00:00	inicio	t	50	16
47	2020-09-28 00:00:00	final	t	50	16
48	2021-06-23 00:00:00	inicio	t	51	17
49	2021-06-23 00:00:00	final	t	51	17
50	2020-09-17 00:00:00	inicio	t	52	18
51	2020-09-17 00:00:00	final	t	52	18
52	2020-09-09 00:00:00	inicio	t	53	19
53	2020-09-09 00:00:00	final	t	53	19
54	2020-08-14 00:00:00	inicio	t	54	20
55	2020-08-14 00:00:00	final	t	54	20
56	2020-06-24 00:00:00	inicio	t	55	21
57	2020-06-24 00:00:00	final	t	55	21
58	2020-06-17 00:00:00	inicio	t	56	22
59	2020-06-17 00:00:00	final	t	56	22
60	2020-05-26 00:00:00	inicio	t	57	23
61	2020-05-26 00:00:00	final	t	57	23
63	2020-05-06 00:00:00	final	t	58	24
62	2020-05-06 00:00:00	inicio	t	58	24
64	2020-03-10 00:00:00	inicio	t	59	25
65	2020-03-10 00:00:00	final	t	59	25
66	2020-02-26 00:00:00	inicio	t	60	26
67	2020-02-26 00:00:00	final	t	60	26
68	2020-02-05 00:00:00	inicio	t	61	27
69	2020-02-05 00:00:00	final	t	61	27
70	2019-12-27 00:00:00	inicio	t	62	28
71	2019-12-27 00:00:00	final	t	62	28
72	2019-12-05 00:00:00	inicio	t	63	29
73	2019-12-05 00:00:00	final	t	63	29
74	2019-10-17 00:00:00	inicio	t	64	30
75	2019-10-17 00:00:00	final	t	64	30
76	2019-10-10 00:00:00	inicio	t	65	31
77	2019-10-10 00:00:00	final	t	65	31
78	2019-07-15 00:00:00	inicio	t	66	32
79	2019-07-15 00:00:00	final	t	66	32
80	2019-04-18 00:00:00	inicio	t	67	33
81	2019-04-18 00:00:00	final	t	67	33
82	2018-11-16 00:00:00	inicio	t	68	34
83	2018-11-16 00:00:00	final	t	68	34
84	2021-03-16 00:00:00	inicio	t	69	35
85	2021-03-16 00:00:00	final	t	69	35
86	2021-01-13 00:00:00	inicio	t	70	36
87	2021-01-13 00:00:00	final	t	70	36
88	2020-10-19 00:00:00	inicio	t	71	37
89	2020-10-19 00:00:00	final	t	71	37
90	2020-08-14 00:00:00	inicio	t	72	38
91	2020-08-14 00:00:00	final	t	72	38
92	2020-06-17 00:00:00	inicio	t	73	39
93	2020-06-17 00:00:00	final	t	73	39
94	2019-12-05 00:00:00	inicio	t	75	40
95	2019-12-05 00:00:00	final	t	75	40
96	2019-07-15 00:00:00	inicio	t	76	41
97	2019-07-15 00:00:00	final	t	76	41
98	2021-03-16 00:00:00	inicio	t	77	42
99	2021-03-16 00:00:00	final	t	77	42
101	2021-07-03 00:00:00	inicio	t	79	43
102	2021-07-03 00:00:00	final	t	79	43
103	2021-07-03 00:00:00	inicio	t	80	44
104	2021-07-03 00:00:00	final	t	80	44
105	2021-07-03 00:00:00	inicio	t	81	45
106	2021-07-03 00:00:00	final	t	81	45
\.


--
-- Data for Name: historial_precios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historial_precios (id, precio, fecha, productos_id, vigencia) FROM stdin;
91	3.85	2021-05-26 00:00:00	32	t
92	2.75	2021-05-26 00:00:00	12	t
93	2.61	2021-05-26 00:00:00	34	t
94	2.07	2021-05-26 00:00:00	35	t
95	2.06	2021-05-26 00:00:00	38	t
96	2.24	2021-05-26 00:00:00	39	t
97	1.6	2021-05-26 00:00:00	41	t
98	2.36	2021-05-26 00:00:00	25	t
99	1.79	2021-05-15 00:00:00	30	t
100	3.85	2021-05-15 00:00:00	32	t
102	2	2021-05-15 00:00:00	37	t
103	1.25	2021-05-15 00:00:00	15	t
104	1.6	2021-05-15 00:00:00	41	t
105	2.36	2021-05-15 00:00:00	25	t
106	2.44	2021-05-15 00:00:00	27	t
108	1.92	2021-04-16 00:00:00	30	t
109	2.52	2021-04-16 00:00:00	12	t
110	2	2021-04-16 00:00:00	37	t
111	1.92	2021-04-16 00:00:00	38	t
114	3.62	2021-02-03 00:00:00	32	t
115	2.26	2021-02-03 00:00:00	12	t
116	1	2021-02-03 00:00:00	33	t
117	1.85	2021-02-03 00:00:00	37	t
118	1.92	2021-02-03 00:00:00	38	t
119	2.2	2021-02-03 00:00:00	39	t
120	1.7	2021-01-22 00:00:00	37	t
121	1.04	2021-01-13 00:00:00	29	t
123	2.26	2020-12-16 00:00:00	12	t
124	1	2020-12-16 00:00:00	33	t
125	2.46	2020-12-16 00:00:00	34	t
126	2.07	2020-12-16 00:00:00	35	t
127	2.2	2020-12-16 00:00:00	39	t
128	2.94	2020-12-16 00:00:00	40	t
129	1.92	2020-11-18 00:00:00	30	t
130	2.26	2020-11-18 00:00:00	12	t
131	1	2020-11-18 00:00:00	33	t
132	2.07	2020-11-18 00:00:00	35	t
133	1	2020-11-18 00:00:00	37	t
134	1.26	2020-11-18 00:00:00	41	t
135	1.95	2020-11-18 00:00:00	25	t
136	0.8	2020-11-17 00:00:00	46	t
138	1.7	2020-10-15 00:00:00	37	t
137	0.94	2020-10-19 00:00:00	44	t
139	1.92	2020-09-28 00:00:00	30	t
140	2.26	2020-09-28 00:00:00	12	t
141	1	2020-09-28 00:00:00	33	t
142	1.25	2020-09-28 00:00:00	15	t
143	1.92	2020-09-28 00:00:00	38	t
144	1.26	2020-09-28 00:00:00	41	t
145	1.8	2020-09-28 00:00:00	25	t
146	1.75	2020-09-28 00:00:00	27	t
147	0.95	2021-06-23 00:00:00	46	t
148	1.36	2020-09-28 00:00:00	47	t
149	0.8	2021-06-23 00:00:00	46	t
150	1.12	2020-09-28 00:00:00	47	t
151	1.92	2020-09-09 00:00:00	30	t
152	2.26	2020-09-09 00:00:00	12	t
153	1	2020-09-09 00:00:00	33	t
154	3.45	2020-09-09 00:00:00	13	t
155	1.25	2020-09-09 00:00:00	15	t
156	1.26	2020-09-09 00:00:00	41	t
157	1.95	2020-09-09 00:00:00	25	t
158	1.75	2020-09-09 00:00:00	27	t
159	1.92	2020-08-25 00:00:00	30	t
160	1	2020-08-25 00:00:00	33	t
161	3.45	2020-08-25 00:00:00	13	t
162	1.25	2020-08-25 00:00:00	15	t
163	1.26	2020-08-25 00:00:00	41	t
164	1.95	2020-08-25 00:00:00	25	t
165	1.75	2020-08-25 00:00:00	27	t
166	0.94	2020-08-14 00:00:00	44	t
167	1.85	2020-08-14 00:00:00	49	t
168	1.92	2020-06-24 00:00:00	30	t
169	2.46	2020-06-24 00:00:00	34	t
170	2.07	2020-06-24 00:00:00	35	t
171	1.7	2020-06-24 00:00:00	37	t
172	1.92	2020-06-24 00:00:00	38	t
173	3.09	2020-06-24 00:00:00	19	t
174	1.26	2020-06-24 00:00:00	41	t
175	1.84	2020-06-24 00:00:00	27	t
176	0.94	2020-06-17 00:00:00	44	t
177	1.92	2020-05-26 00:00:00	30	t
178	0.97	2020-05-26 00:00:00	33	t
179	1.33	2020-05-26 00:00:00	41	t
180	1.92	2020-05-06 00:00:00	30	t
181	0.97	2020-05-06 00:00:00	33	t
182	2.46	2020-05-06 00:00:00	33	t
183	1.7	2020-05-06 00:00:00	37	t
184	2.05	2020-05-06 00:00:00	38	t
185	2.46	2020-05-06 00:00:00	39	t
186	1.3	2020-05-06 00:00:00	41	t
187	1.92	2020-03-10 00:00:00	30	t
188	1.75	2020-03-10 00:00:00	33	t
189	1.92	2020-02-26 00:00:00	30	t
190	1.75	2020-02-26 00:00:00	37	t
191	1.3	2020-02-26 00:00:00	41	t
192	1.92	2020-02-05 00:00:00	30	t
193	0.97	2020-02-05 00:00:00	33	t
194	3.62	2020-01-20 00:00:00	32	t
195	1.75	2020-01-20 00:00:00	37	t
196	1.15	2020-01-20 00:00:00	15	t
197	2.2	2020-01-20 00:00:00	39	t
198	2.93	2020-01-20 00:00:00	40	t
199	1.95	2020-01-20 00:00:00	25	t
200	1.8	2020-01-20 00:00:00	26	t
201	1.02	2020-02-05 00:00:00	33	t
210	1.7	2019-10-10 00:00:00	37	t
202	2.15	2019-12-05 00:00:00	18	t
203	1	2019-12-05 00:00:00	44	t
204	2.1	2019-12-05 00:00:00	29	t
205	1.35	2019-12-05 00:00:00	49	t
206	0.97	2019-10-17 00:00:00	33	t
207	1.7	2019-10-17 00:00:00	37	t
208	1.3	2019-10-17 00:00:00	41	t
209	1.75	2019-10-17 00:00:00	27	t
211	1.75	2019-10-10 00:00:00	27	t
212	1.8	2019-05-06 00:00:00	37	t
213	1.35	2019-07-15 00:00:00	44	t
214	1.1	2019-04-18 00:00:00	33	t
215	1.82	2019-04-18 00:00:00	37	t
216	2.55	2019-04-18 00:00:00	17	t
217	1.77	2019-04-18 00:00:00	26	t
218	1.75	2019-04-18 00:00:00	27	t
219	1.1	2019-04-18 00:00:00	33	t
220	1.94	2019-04-18 00:00:00	37	t
221	1.04	2021-03-16 00:00:00	44	t
222	1.04	2021-01-13 00:00:00	44	t
223	0.94	2020-10-19 00:00:00	44	t
224	0.94	2020-08-14 00:00:00	44	t
225	0.94	2020-08-14 00:00:00	49	t
226	0.94	2020-06-17 00:00:00	44	t
227	2.15	2019-12-05 00:00:00	18	t
228	1	2019-12-05 00:00:00	44	t
229	2.1	2019-12-05 00:00:00	29	t
230	3.45	2019-12-05 00:00:00	49	t
231	1.35	2019-07-15 00:00:00	44	t
232	1.04	2021-03-16 00:00:00	49	t
233	1.04	2021-07-03 00:00:00	44	t
235	2.2	2021-07-03 00:00:00	48	t
236	2.06	2021-07-03 00:00:00	50	t
237	1.7	2021-07-03 00:00:00	43	t
238	2.2	2021-07-03 00:00:00	49	t
\.


--
-- Data for Name: monedas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.monedas (id, pais, moneda, vigencia) FROM stdin;
1	Chile	CLP	t
2	Estados Unidos	USD	t
3	Argentina	ARS	t
\.


--
-- Data for Name: movimientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimientos (id, monto, fecha, descripcion, cuentas_corrientes_id, vigencia) FROM stdin;
\.


--
-- Data for Name: numeros_aba; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.numeros_aba (id, nombre_banco, numero_aba, vigencia) FROM stdin;
11	BRADESCO	0	t
14	BANCO ITAU UNIBANCO SA 	0	t
15	YES BANKLTD NEHRU CENTRE DISCOVERY OF INDIA 	21000021	t
17	BRADESCO	0	t
18	BRADESCO	0	t
19	BRADESCO	0	t
20	BRADESCO	0	t
\.


--
-- Data for Name: observaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.observaciones (id, observacion, fecha, pedidos_id, vigencia, gasto) FROM stdin;
16	Sin datos	2021-05-26	37	t	1
17	Sin datos	2021-05-15	38	t	1
18	Sin datos	2021-04-16	39	t	1
19	Sin datos	2021-03-10	40	t	1
22	Sin datos	2021-01-13	44	t	1
23	Sin datos	2020-11-17	47	t	1
24	Sin datos	2020-10-19	48	t	1
25	Sin datos	2020-10-15	49	t	1
26	Sin datos	2020-09-28	50	t	1
27	Sin datos	2021-06-23	51	t	1
28	Sin datos	2020-09-17	52	t	1
31	Sin datos	2020-08-14	54	t	1
32	Sin datos	2020-06-17	56	t	1
33	Sin datos	2020-05-26	57	t	1
34	Sin datos	2020-05-06	58	t	1
36	Sin datos	2020-02-26	60	t	1
37	Sin datos	2020-02-05	61	t	1
38	Sin datos	2019-12-05	63	t	1
39	Sin datos	2019-10-17	64	t	1
40	Sin datos	2019-10-10	65	t	1
41	Sin datos	2019-07-15	66	t	1
42	Sin datos	2019-04-18	67	t	1
43	Sin datos	2019-04-18	68	t	1
44	Sin datos	2021-03-16	69	t	1
46	Sin datos	2021-01-13	70	t	1
47	Sin datos	2020-10-19	71	t	1
48	Sin datos	2020-08-14	72	t	1
49	Sin datos	2020-06-17	73	t	1
50	Sin datos	2019-12-05	75	t	1
51	Sin datos	2019-07-15	76	t	1
52	Sin datos	2021-03-16	77	t	1
53	Sin datos	2021-07-03	79	t	1
54	Sin datos	2021-07-03	80	t	1
55	Sin datos	2021-07-03	81	t	1
\.


--
-- Data for Name: observadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.observadores (id, rut, nombre, vigencia) FROM stdin;
3	073898188	Moises Paredes	t
\.


--
-- Data for Name: paises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paises (id, pais, codigo_iban, vigencia) FROM stdin;
11	Brasil	BR 4360746948033970000065552C1	t
13	Brasil	BR 6070 1190 0129 5000 0165 003Cl	t
14	India	0	t
16	Chile	BR 4360746948033970000065552C1	t
17	Chile	BR 4360746948033970000065552C1	t
18	Chile	BR 4360746948033970000065552C1	t
19	Chile	BR 4360746948033970000065552C1	t
\.


--
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedidos (id, codigo, pago_inicial, pago_final, fecha_inicial, fecha_pago, fecha_salida, fecha_llegada_real, fecha_llegada_estimada, fecha_aduana, estado, tipo_de_envio, flete, seguro, valor_cif, honorarios, arancel, gastos_agencia, numero_din, cuentas_bancos_id, agentes_aduana_id, proveedores_id, dolar_mensual_id, tipo_pago, fecha_vencimiento, vigencia) FROM stdin;
37	PF 27/21	0	0	2021-05-26	2021-05-26	2021-05-26	2021-05-26	2021-05-26	2021-05-26	finalizado	1	4157	0	16555.64192307693	0	0	0	Sin datos	12	9	13	4	1	2021-05-26	t
38	PF 26/21	0	0	2021-05-15	2021-05-15	2021-05-15	2021-05-15	2021-05-15	2021-05-15	finalizado	1	3745	0	16614.99	0	0	0	Sin datos	12	9	13	5	1	2021-05-15	t
39	PF 25/21	0	0	2021-04-16	2021-04-16	2021-04-16	2021-04-16	2021-04-16	2021-04-16	finalizado	1	3405	0	6293.76	0	0	0	Sin datos	12	9	13	6	1	2021-04-16	t
40	pf 512314	0	0	2021-03-10	2021-03-10	2021-03-10	2021-03-10	2021-03-10	2021-03-10	finalizado	1	3463	0	1357.71576923077	0	0	0	Sin datos	11	9	12	7	1	2021-03-10	t
42	PF 24/21	0	0	2021-02-03	2021-02-03	2021-02-03	2021-02-03	2021-02-03	2021-02-03	finalizado	1	3175	0	12843.9	0	0	0	Sin datos	12	9	13	8	1	2021-02-03	t
43	PF 23/21	0	0	2021-01-22	2021-01-22	2021-01-22	2021-01-22	2021-01-22	2021-01-22	finalizado	1	3152	0	1326.72876304024	0	0	0	Sin datos	12	9	13	9	1	2021-01-22	t
44	PF V183	0	0	2021-01-13	2021-01-13	2021-01-13	2021-01-13	2021-01-13	2021-01-13	finalizado	1	0	0	765.44	0	0	0	Sin datos	13	9	14	10	1	2021-01-13	t
55	PF 15/20	0	0	2020-06-24	2020-06-24	2020-06-24	2020-06-24	2020-06-24	2020-06-24	finalizado	1	2448	0	15765.04	0	0	0	Sin datos	12	9	13	21	1	2020-06-24	t
56	PF V273	0	0	2020-06-17	2020-06-17	2020-06-17	2020-06-17	2020-06-17	2020-06-17	finalizado	1	0	0	0	0	0	0	Sin datos	13	9	14	22	1	2020-06-17	t
47	PF 511994	0	0	2020-11-17	2020-11-17	2020-11-17	2020-11-17	2020-11-17	2020-11-17	finalizado	1	3750	0	727.7	0	0	0	Sin datos	11	9	12	13	1	2020-11-17	t
48	PF V125	0	0	2020-10-19	2020-10-19	2020-10-19	2020-10-19	2020-10-19	2020-10-19	finalizado	1	0	0	692.6672	0	0	0	Sin datos	13	9	14	14	1	2020-10-19	t
63	PFI v131	0	0	2019-12-05	2019-12-05	2019-12-05	2019-12-05	2019-12-05	2019-12-05	finalizado	1	0	0	7378.84	0	0	0	Sin datos	13	9	14	29	1	2019-12-05	t
49	PF 19/20	0	0	2020-10-15	2020-10-15	2020-10-15	2020-10-15	2020-10-15	2020-10-15	finalizado	1	1961.2	0	1461.28578566667	0	0	0	Sin datos	12	9	13	15	1	2020-10-19	t
46	PF 21/20	0	0	2020-11-18	2020-11-18	2020-11-18	2020-11-18	2020-11-18	2020-11-18	finalizado	1	2735	0	9033.31	0	0	0	Sin datos	12	9	13	12	1	2020-11-18	t
45	PF 22/20	0	0	2020-12-16	2020-12-16	2020-12-16	2020-12-16	2020-12-16	2020-12-16	finalizado	1	3315	0	13567.68	0	0	0	Sin datos	12	9	13	11	1	2020-12-16	t
50	PF 18/20	0	0	2020-09-28	2020-09-28	2020-09-28	2020-09-28	2020-09-28	2020-09-28	finalizado	1	2727	0	10977.93	0	0	0	Sin datos	12	9	13	16	1	2020-09-28	t
64	PF 08/19	0	0	2019-10-17	2019-10-17	2019-10-17	2019-10-17	2019-10-17	2019-10-17	finalizado	1	3750	0	4560.23	0	0	0	Sin datos	12	9	13	30	1	2019-10-17	t
65	PF 05/19	0	0	2019-10-10	2019-10-10	2019-10-10	2019-10-10	2019-10-10	2019-10-10	finalizado	1	3950	0	2718.53	0	0	0	Sin datos	12	9	13	31	1	2019-10-10	t
54	PF V81	0	0	2020-08-14	2020-08-14	2020-08-14	2020-08-14	2020-08-14	2020-08-14	finalizado	1	0	0	2187.89	0	0	0	Sin datos	13	9	14	20	1	2020-08-14	t
58	PF 13/20	0	0	2020-05-06	2020-05-06	2020-05-06	2020-05-06	2020-05-06	2020-05-06	finalizado	1	3117	0	11247.75	0	0	0	Sin datos	12	9	13	24	1	2020-05-06	t
53	PF 17/20	0	0	2020-09-09	2020-09-09	2020-09-09	2020-09-09	2020-09-09	2020-09-09	finalizado	1	2659	0	24415.31	0	0	0	Sin datos	12	9	13	19	1	2020-09-09	t
52	PF 11708	0	0	2020-09-17	2020-09-17	2020-09-17	2020-09-17	2020-09-17	2020-09-17	finalizado	1	3750	0	1741.08	0	0	0	Sin datos	11	9	12	18	1	2020-09-17	t
51	PF 512681	0	0	2021-06-23	2021-06-23	2021-06-23	2021-06-23	2021-06-23	2021-06-23	finalizado	1	4685	0	942.32	0	0	0	Sin datos	11	9	12	17	1	2021-06-23	t
57	PF 14/20	0	0	2020-05-26	2020-05-26	2020-05-26	2020-05-26	2020-05-26	2020-05-26	finalizado	1	2448	0	3661.87	0	0	0	Sin datos	12	9	13	23	1	2020-05-26	t
59	PF 12/20	0	0	2020-03-10	2020-03-10	2020-03-10	2020-03-10	2020-03-10	2020-03-10	finalizado	1	0	0	7668.65	0	0	0	Sin datos	12	9	13	25	1	2020-03-10	t
60	PF 11/20	0	0	2020-02-26	2020-02-26	2020-02-26	2020-02-26	2020-02-26	2020-02-26	finalizado	1	3190	0	4231.55	0	0	0	Sin datos	12	9	13	26	1	2020-02-26	t
61	PF 10/20	0	0	2020-02-05	2020-02-05	2020-02-05	2020-02-05	2020-02-05	2020-02-05	finalizado	1	0	0	23086.25	0	0	0	Sin datos	12	9	13	27	1	2020-02-05	t
62	PF 09/19	0	0	2019-12-27	2019-12-27	2019-12-27	2019-12-27	2019-12-27	2019-12-27	finalizado	1	0	0	1894.81	0	0	0	Sin datos	12	9	13	28	1	2019-12-27	t
66	pf 13/2019	0	0	2019-07-15	2019-07-15	2019-07-15	2019-07-15	2019-07-15	2019-07-15	finalizado	1	0	0	1511.71	0	0	0	Sin datos	13	9	14	32	1	2019-07-15	t
72	PF V81	0	0	2020-08-14	2020-08-14	2020-08-14	2020-08-14	2020-08-14	2020-08-14	finalizado	1	0	0	2187.89	0	0	0	Sin datos	13	9	14	38	1	2020-08-14	t
67	PF 07/19	0	0	2019-04-18	2019-04-18	2019-04-18	2019-04-18	2019-04-18	2019-04-18	finalizado	1	3900	0	10028.6	0	0	0	Sin datos	12	9	13	33	1	2019-04-18	t
68	PF 29/18	0	0	2018-11-16	2018-11-16	2018-11-16	2018-11-16	2018-11-16	2018-11-16	finalizado	1	3500	0	2218.29	0	0	0	Sin datos	12	9	13	34	1	2018-11-16	t
69	PF V233	0	0	2021-03-16	2021-03-16	2021-03-16	2021-03-16	2021-03-16	2021-03-16	finalizado	1	0	0	759.2	0	0	0	Sin datos	13	9	14	35	1	2021-03-16	t
70	PF V183	0	0	2021-01-13	2021-01-13	2021-01-13	2021-01-13	2021-01-13	2021-01-13	finalizado	1	0	0	765.44	0	0	0	Sin datos	13	9	14	36	1	2021-01-13	t
71	PF V125	0	0	2020-10-19	2020-10-19	2020-10-19	2020-10-19	2020-10-19	2020-10-19	finalizado	1	0	0	692.6672	0	0	0	Sin datos	13	9	14	37	1	2020-10-19	t
73	PF V273	0	0	2020-06-17	2020-06-17	2020-06-17	2020-06-17	2020-06-17	2020-06-17	finalizado	1	0	0	767.4818	0	0	0	Sin datos	13	9	14	39	1	2020-06-17	t
75	PFI v131	0	0	2019-12-05	2019-12-05	2019-12-05	2019-12-05	2019-12-05	2019-12-05	finalizado	1	0	0	8353.54	0	0	0	Sin datos	13	9	14	40	1	2019-12-05	t
76	pf 13/2019	0	0	2019-07-15	2019-07-15	2019-07-15	2019-07-15	2019-07-15	2019-07-15	finalizado	1	0	0	2035.59	0	0	0	Sin datos	13	9	14	41	1	2019-07-15	t
77	PF V233	0	0	2021-03-16	2021-03-16	2021-03-16	2021-03-16	2021-03-16	2021-03-16	finalizado	1	0	0	1521.52	0	0	0	Sin datos	13	9	14	42	1	2021-03-16	t
79	pf 21001078	0	0	2021-07-03	2021-07-03	2021-07-03	2021-07-03	2021-07-03	2021-07-03	finalizado	1	0	0	836.4928	0	0	0	Sin datos	13	9	14	43	1	2021-07-03	t
81	pf I 21001084	0	0	2021-07-03	2021-07-03	2021-07-03	2021-07-03	2021-07-03	2021-07-03	finalizado	1	0	0	1769.504	0	0	0	Sin datos	13	9	14	45	1	2021-07-03	t
80	pf I 21001082	0	0	2021-07-03	2021-07-03	2021-07-03	2021-07-03	2021-07-03	2021-07-03	finalizado	1	0	0	4793.74	0	0	0	Sin datos	13	9	14	44	1	2021-07-03	t
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, codigo, tipo, nombre, proveedores_id, unidad_productos_id, vigencia) FROM stdin;
10	11530-AN	Aditivos	MB ABSORBEDOR DE HUMEDAD	13	2	t
11	1668-BN	Aditivos	MB BLANQUEADOR ÓPTICO P/ PP	13	2	t
12	19415-AN	Aditivos	MB AYUDA PROCESO SIN MIGRACIÓN CRISTAL MASTER	13	2	t
13	20186-QNI	Aditivos	MB MODIFICADOR DE IMPACTO, AYUDA SELLO CRISTAL MASTER	13	2	t
14	23287-BN	Aditivos	NT COMPUESTO DE CARBONATO – FILLER PP – 75%	13	2	t
15	23498-AN	Aditivos	MB DISECANTE DRY LINK CRISTAL MASTER	13	2	t
16	24355-AN	Aditivos	MB COMPUESTO DE CARBONATO – FILLER PE – 75%	13	2	t
17	25726-AN	Aditivos	MB ESENCIA CITRONELA CRISTAL MASTER	13	2	t
19	35617-AN	Aditivos	ANTIESTATICO 10% MIGRACION MEDIA /MIXTA CRISTAL MASTER	13	2	t
20	4218-AN	Aditivos	MB ANTIOXIDANTE	13	2	t
21	498-AN	Aditivos	MB AGENTE INTERFACIAL	13	2	t
22	5706-AN	Aditivos	MB ESENCIA TUTTI FRUTI - CRISTAL MASTER	13	2	t
23	6047-AN	Aditivos	MB DESLIZANTE BAJA MIG./ AYUD. PROCESO	13	2	t
24	7821-AN	Aditivos	MB BLANQUEADOR ÓPTICO P/ PE	13	2	t
25	812-AN	Aditivos	ANTIBLOCK CRISTAL MASTER	13	2	t
26	818-AN	Aditivos	MB DESLIZANTE ALTA MIG. - CRISTAL MASTER	13	2	t
27	819-AN	Aditivos	MB ANTIESTATICO 5 % - CRISTAL MASTER	13	2	t
28	8768-CN	Aditivos	MB BLANQUEADOR ÓPTICO P/ PS	13	2	t
31	1724-AW	Concentrados Blancos	MB BLANCO 40% TIO2	13	2	t
30	16258-AB	Concentrados Colores	MB COLOR AZUL MEDIO (286) CRISTAL MASTER	13	2	t
32	1902-AG	Concentrados Colores	MB VERDE HOJA CRISTAL MASTER	13	2	t
33	20000-AP	Concentrados Negros	MB NEGRO 30 % NH + CACO2 - CRISTAL MASTER	13	2	t
34	21887-AO	Concentrados Colores	MB NARANJA MEDIO CRISTAL MASTER	13	2	t
35	22236-AG	Concentrados Colores	MB VERDE MEDIO ( 381) CRISTAL MASTER	13	2	t
36	23130-CW	Concentrados Blancos	MB BLANCO CON BLANQUEADOR OPTICO	13	2	t
37	23335-AP	Concentrados Negros	MB NEGRO 40% NH + ANTIOXIDANTE CRISTAL MASTER	13	2	t
38	24263-AY	Concentrados Colores	MB AMARILLO ORO - CRISTAL MASTER	13	2	t
39	2470-AR	Concentrados Colores	MB COLOR ROJO MEDIO (186) CRISTAL MASTER	13	2	t
40	2902-AY	Concentrados Colores	MB COLOR AMARILLO CANARIO (7406) CRISTAL MASTER	13	2	t
41	3872-AW	Concentrados Blancos	MB BLANCO 30% TIO2+CACO2 - CRISTAL MASTER	13	2	t
42	8808-AK	Concentrados Colores	MB LILA - CRISTAL MASTER	13	2	t
46	PM 100	Concentrados Negros	MB NEGRO PROMA (25% ORIG. KA)	12	2	t
47	PM 200	Concentrados Blancos	MB BLANCO PROMA ( 30% TIO2+ CACO, ORIG.KA)	12	2	t
18	2802 AB MB	Aditivos	ANTI BLOCK - PLTAOY	14	2	t
29	PPA-03-MB	Aditivos	MB ANTIBLOCK PLASTALOY	14	2	t
43	BE 6355	Concentrados Colores	MB AZUL MEDIO JJ PLASTALLOY	14	2	t
44	BKE 121	Concentrados Negros	MB NEGRO 25% CTE PTAOY	14	2	t
45	GE 5255	Concentrados Colores	MB VERDE MEDIO JJ PLASTALLOY	14	2	t
48	RE 2238	Concentrados Colores	MB ROJO MEDIO JJ PLASTALLOY	14	2	t
49	WE-9135	Concentrados Blancos	MB BLANCO 50% TIO2 + CACO3 - PLTAOY	14	2	t
50	YE 4320	Concentrados Colores	MB AMARILLO MEDIO JJ PLASTALLOY	14	2	t
\.


--
-- Data for Name: proveedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proveedores (id, nombre, direccion, correo, pais, monedas_id, rut, vigencia, cuentas_bancos_id) FROM stdin;
12	Karina Ind. E Com. De plasticos ltda.	Av. Paquistao 788 - Jd. Cumbica, Sao Paulo	Sin datos	Brasil	2	11111111	t	11
13	CRISTAL MASTER INDUSTRIA E COMERCIO LTDA. 	 AVENIDA SANTOS DUMONT 3785 PAVILHAO B DISTRITO INDUSTRIAL   JOINVILLLE    	Sin datos	Brasil	2	11111111	t	12
14	JJ PLASTALLOY PVT LTD.	A-2 BADSHAH BAGH  COLONY, MAIDAHIYA , VARANASI	Sin datos	India	2	11111111	t	13
\.


--
-- Data for Name: realiza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.realiza (usuarios_id, pedidos_id, createdat, updatedat) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, nombre, cod_rol) FROM stdin;
1	Administrador	adm
2	Finanzas	sup
3	Operaciones	usr
\.


--
-- Data for Name: telefonos_agentes_aduana; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefonos_agentes_aduana (id, telefono, agentes_aduana_id, vigencia) FROM stdin;
13	+56993618970	9	t
\.


--
-- Data for Name: telefonos_proveedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefonos_proveedores (id, telefono, proveedores_id, vigencia) FROM stdin;
10	0	12	t
11	0	13	t
12	0	14	t
\.


--
-- Data for Name: telefonos_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefonos_usuarios (id, telefono, usuarios_id) FROM stdin;
2	345784935	2
7	+56998847879	21
\.


--
-- Data for Name: tiene; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tiene (pedidos_id, productos_id, cantidad) FROM stdin;
37	32	2000
37	12	9000
37	34	2000
37	35	2000
37	38	2000
37	39	2000
37	41	4000
37	25	2000
38	30	6000
38	32	1500
38	37	2000
38	15	3000
38	41	3000
38	25	4000
38	27	4000
39	30	3000
39	12	10000
39	37	10000
39	38	4000
40	38	27450
42	32	2000
42	12	8000
42	33	8000
42	37	5000
42	38	2000
42	39	2000
43	37	26600
44	29	28000
45	12	5000
45	33	11000
45	34	1990
45	35	1000
45	39	3975
45	40	1000
46	30	3975
46	12	6000
46	33	5000
46	35	2000
46	37	200
46	41	4000
46	25	5000
47	46	25000
48	44	28000
49	37	12000
50	30	1000
50	12	4000
50	33	6000
50	15	1000
50	38	3000
50	41	3000
50	25	6000
50	27	2000
51	46	22500
51	47	5000
52	46	15000
52	47	10000
53	12	1000
53	30	6000
53	33	24000
53	13	2000
53	15	2000
53	41	6000
53	25	6000
53	27	4000
54	44	20000
54	49	8000
55	30	7000
55	34	1000
55	35	1000
55	37	4000
55	38	2000
55	19	3000
55	41	5000
55	27	1000
56	44	28000
57	30	7000
57	33	13000
57	41	5000
58	30	1500
58	33	5000
58	34	250
58	37	15000
58	38	500
58	39	2550
58	41	2000
59	30	2000
59	33	21000
60	30	1000
60	37	22000
60	41	2000
61	30	1500
61	33	2000
61	32	1000
61	37	8000
61	15	1000
61	39	1500
61	40	1500
61	25	2000
61	26	2000
62	33	15000
62	41	10000
63	18	1000
63	44	10000
63	29	1000
63	49	4000
64	33	15000
64	37	2000
64	41	8000
64	27	1000
65	37	24000
65	27	2000
66	44	16175
67	33	5000
67	37	10100
67	17	1900
67	26	3000
67	27	3000
68	33	22000
68	37	5000
69	44	28000
70	44	28000
71	44	28000
72	44	20000
72	49	8000
73	44	28000
75	18	1000
75	44	10000
75	29	1000
75	49	9000
76	44	16175
77	49	56000
79	44	16000
80	48	2000
80	50	2000
80	43	2000
81	49	6000
\.


--
-- Data for Name: unidad_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidad_productos (id, valor_unidad, vigencia, nombre_medida) FROM stdin;
2	1	t	Kilos
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, rut, nombre, apellido, correo, "contraseña", roles_id, verificacion) FROM stdin;
2	123456781	Admin	01	nombre.apellido@mail.cl	1beab93a24d306dacc073934f7b90cdc3585003b6a1a0d0cbe687f872f38ca1eecc87bcba45d1f441977f07735d2d8b04b8b6d226956e0eca80abf3996b95500b3a008c22b47f14632d48a2e	1	t
21	073898188	Moisés	Paredes	moises@promachile.cl	1beab93a24d306abcc62030fd4e402c251d50079683e1272bd6b2da10574e80bf49a54c6996e02681f20da6a72c4e79d75804d546974f4ccbc3d8e219bb3753cd0e5f0bba93388a01f3790de	1	t
\.


--
-- Name: agentes_aduana_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.agentes_aduana_id_seq', 9, true);


--
-- Name: bancos_agentes_aduana_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bancos_agentes_aduana_id_seq', 7, true);


--
-- Name: cuentas_bancos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuentas_bancos_id_seq', 18, true);


--
-- Name: cuentas_corrientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuentas_corrientes_id_seq', 7, true);


--
-- Name: detalles_dolar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_dolar_id_seq', 105, true);


--
-- Name: detalles_pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_pedidos_id_seq', 63, true);


--
-- Name: documentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documentos_id_seq', 19, true);


--
-- Name: dolar_mensual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dolar_mensual_id_seq', 45, true);


--
-- Name: gastos_extras_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_extras_id_seq', 44, true);


--
-- Name: historial_dolar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historial_dolar_id_seq', 106, true);


--
-- Name: historial_precios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historial_precios_id_seq', 238, true);


--
-- Name: monedas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.monedas_id_seq', 3, true);


--
-- Name: movimientos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimientos_id_seq', 7, true);


--
-- Name: numeros_aba_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.numeros_aba_id_seq', 20, true);


--
-- Name: observaciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.observaciones_id_seq', 55, true);


--
-- Name: observadores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.observadores_id_seq', 3, true);


--
-- Name: paises_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paises_id_seq', 19, true);


--
-- Name: pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_id_seq', 81, true);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 51, true);


--
-- Name: proveedores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proveedores_id_seq', 19, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- Name: telefonos_agentes_aduana_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telefonos_agentes_aduana_id_seq', 13, true);


--
-- Name: telefonos_proveedores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telefonos_proveedores_id_seq', 17, true);


--
-- Name: telefonos_usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telefonos_usuarios_id_seq', 19, true);


--
-- Name: unidad_productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidad_productos_id_seq', 2, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 42, true);


--
-- Name: agentes_aduana agentes_aduana_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agentes_aduana
    ADD CONSTRAINT agentes_aduana_pkey PRIMARY KEY (id);


--
-- Name: asume asume_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asume
    ADD CONSTRAINT asume_pkey PRIMARY KEY (observadores_id, agentes_aduana_id);


--
-- Name: bancos_agentes_aduana bancos_agentes_aduana_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bancos_agentes_aduana
    ADD CONSTRAINT bancos_agentes_aduana_pkey PRIMARY KEY (id);


--
-- Name: cuentas_bancos cuentas_bancos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_bancos
    ADD CONSTRAINT cuentas_bancos_pkey PRIMARY KEY (id);


--
-- Name: cuentas_corrientes cuentas_corrientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_corrientes
    ADD CONSTRAINT cuentas_corrientes_pkey PRIMARY KEY (id);


--
-- Name: detalles_dolar detalles_dolar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_dolar
    ADD CONSTRAINT detalles_dolar_pkey PRIMARY KEY (id);


--
-- Name: detalles_pedidos detalles_pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_pkey PRIMARY KEY (id);


--
-- Name: documentos documentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_pkey PRIMARY KEY (id);


--
-- Name: dolar_mensual dolar_mensual_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dolar_mensual
    ADD CONSTRAINT dolar_mensual_pkey PRIMARY KEY (id);


--
-- Name: efectua efectua_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.efectua
    ADD CONSTRAINT efectua_pkey PRIMARY KEY (observaciones_id, observadores_id);


--
-- Name: extrae extrae_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.extrae
    ADD CONSTRAINT extrae_pkey PRIMARY KEY (pedidos_id, historial_precios_id);


--
-- Name: gastos_extras gastos_extras_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_extras
    ADD CONSTRAINT gastos_extras_pkey PRIMARY KEY (id);


--
-- Name: historial_dolar historial_dolar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_dolar
    ADD CONSTRAINT historial_dolar_pkey PRIMARY KEY (id);


--
-- Name: historial_precios historial_precios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_precios
    ADD CONSTRAINT historial_precios_pkey PRIMARY KEY (id);


--
-- Name: monedas monedas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.monedas
    ADD CONSTRAINT monedas_pkey PRIMARY KEY (id);


--
-- Name: movimientos movimientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimientos
    ADD CONSTRAINT movimientos_pkey PRIMARY KEY (id);


--
-- Name: numeros_aba numeros_aba_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.numeros_aba
    ADD CONSTRAINT numeros_aba_pkey PRIMARY KEY (id);


--
-- Name: observaciones observaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observaciones
    ADD CONSTRAINT observaciones_pkey PRIMARY KEY (id);


--
-- Name: observadores observadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observadores
    ADD CONSTRAINT observadores_pkey PRIMARY KEY (id);


--
-- Name: paises paises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paises
    ADD CONSTRAINT paises_pkey PRIMARY KEY (id);


--
-- Name: pedidos pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);


--
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- Name: proveedores proveedores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pkey PRIMARY KEY (id);


--
-- Name: realiza realiza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realiza
    ADD CONSTRAINT realiza_pkey PRIMARY KEY (usuarios_id, pedidos_id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: telefonos_agentes_aduana telefonos_agentes_aduana_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_agentes_aduana
    ADD CONSTRAINT telefonos_agentes_aduana_pkey PRIMARY KEY (id);


--
-- Name: telefonos_proveedores telefonos_proveedores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_proveedores
    ADD CONSTRAINT telefonos_proveedores_pkey PRIMARY KEY (id);


--
-- Name: telefonos_usuarios telefonos_usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_usuarios
    ADD CONSTRAINT telefonos_usuarios_pkey PRIMARY KEY (id);


--
-- Name: tiene tiene_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiene
    ADD CONSTRAINT tiene_pkey PRIMARY KEY (pedidos_id, productos_id);


--
-- Name: unidad_productos unidad_productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidad_productos
    ADD CONSTRAINT unidad_productos_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: asume asume_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asume
    ADD CONSTRAINT asume_agentes_aduana_id_fkey FOREIGN KEY (agentes_aduana_id) REFERENCES public.agentes_aduana(id);


--
-- Name: asume asume_observadores_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asume
    ADD CONSTRAINT asume_observadores_id_fkey FOREIGN KEY (observadores_id) REFERENCES public.observadores(id);


--
-- Name: bancos_agentes_aduana bancos_agentes_aduana_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bancos_agentes_aduana
    ADD CONSTRAINT bancos_agentes_aduana_agentes_aduana_id_fkey FOREIGN KEY (agentes_aduana_id) REFERENCES public.agentes_aduana(id);


--
-- Name: cuentas_bancos cuentas_bancos_numeros_aba_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_bancos
    ADD CONSTRAINT cuentas_bancos_numeros_aba_id_fkey FOREIGN KEY (numeros_aba_id) REFERENCES public.numeros_aba(id);


--
-- Name: cuentas_bancos cuentas_bancos_paises_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_bancos
    ADD CONSTRAINT cuentas_bancos_paises_id_fkey FOREIGN KEY (paises_id) REFERENCES public.paises(id);


--
-- Name: cuentas_corrientes cuentas_corrientes_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_corrientes
    ADD CONSTRAINT cuentas_corrientes_agentes_aduana_id_fkey FOREIGN KEY (agentes_aduana_id) REFERENCES public.agentes_aduana(id);


--
-- Name: detalles_dolar detalles_dolar_historial_dolar_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_dolar
    ADD CONSTRAINT detalles_dolar_historial_dolar_id_fkey FOREIGN KEY (historial_dolar_id) REFERENCES public.historial_dolar(id);


--
-- Name: detalles_pedidos detalles_pedidos_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: documentos documentos_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: efectua efectua_observaciones_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.efectua
    ADD CONSTRAINT efectua_observaciones_id_fkey FOREIGN KEY (observaciones_id) REFERENCES public.observaciones(id);


--
-- Name: efectua efectua_observadores_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.efectua
    ADD CONSTRAINT efectua_observadores_id_fkey FOREIGN KEY (observadores_id) REFERENCES public.observadores(id);


--
-- Name: extrae extrae_historial_precios_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.extrae
    ADD CONSTRAINT extrae_historial_precios_id_fkey FOREIGN KEY (historial_precios_id) REFERENCES public.historial_precios(id);


--
-- Name: extrae extrae_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.extrae
    ADD CONSTRAINT extrae_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: gastos_extras gastos_extras_observaciones_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_extras
    ADD CONSTRAINT gastos_extras_observaciones_id_fkey FOREIGN KEY (observaciones_id) REFERENCES public.observaciones(id);


--
-- Name: gastos_extras gastos_extras_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_extras
    ADD CONSTRAINT gastos_extras_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: historial_dolar historial_dolar_dolar_mensual_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_dolar
    ADD CONSTRAINT historial_dolar_dolar_mensual_id_fkey FOREIGN KEY (dolar_mensual_id) REFERENCES public.dolar_mensual(id);


--
-- Name: historial_dolar historial_dolar_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_dolar
    ADD CONSTRAINT historial_dolar_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: historial_precios historial_precios_productos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_precios
    ADD CONSTRAINT historial_precios_productos_id_fkey FOREIGN KEY (productos_id) REFERENCES public.productos(id);


--
-- Name: movimientos movimientos_cuentas_corrientes_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimientos
    ADD CONSTRAINT movimientos_cuentas_corrientes_id_fkey FOREIGN KEY (cuentas_corrientes_id) REFERENCES public.cuentas_corrientes(id);


--
-- Name: observaciones observaciones_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.observaciones
    ADD CONSTRAINT observaciones_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: pedidos pedidos_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_agentes_aduana_id_fkey FOREIGN KEY (agentes_aduana_id) REFERENCES public.agentes_aduana(id);


--
-- Name: pedidos pedidos_cuentas_bancos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_cuentas_bancos_id_fkey FOREIGN KEY (cuentas_bancos_id) REFERENCES public.cuentas_bancos(id);


--
-- Name: pedidos pedidos_dolar_mensual_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_dolar_mensual_id_fkey FOREIGN KEY (dolar_mensual_id) REFERENCES public.dolar_mensual(id);


--
-- Name: pedidos pedidos_proveedores_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_proveedores_id_fkey FOREIGN KEY (proveedores_id) REFERENCES public.proveedores(id);


--
-- Name: productos productos_proveedores_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_proveedores_id_fkey FOREIGN KEY (proveedores_id) REFERENCES public.proveedores(id);


--
-- Name: productos productos_unidad_productos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_unidad_productos_id_fkey FOREIGN KEY (unidad_productos_id) REFERENCES public.unidad_productos(id);


--
-- Name: proveedores proveedores_cuentas_bancos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_cuentas_bancos_id_fkey FOREIGN KEY (cuentas_bancos_id) REFERENCES public.cuentas_bancos(id);


--
-- Name: proveedores proveedores_monedas_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_monedas_id_fkey FOREIGN KEY (monedas_id) REFERENCES public.monedas(id);


--
-- Name: realiza realiza_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realiza
    ADD CONSTRAINT realiza_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: realiza realiza_usuarios_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realiza
    ADD CONSTRAINT realiza_usuarios_id_fkey FOREIGN KEY (usuarios_id) REFERENCES public.usuarios(id);


--
-- Name: telefonos_agentes_aduana telefonos_agentes_aduana_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_agentes_aduana
    ADD CONSTRAINT telefonos_agentes_aduana_agentes_aduana_id_fkey FOREIGN KEY (agentes_aduana_id) REFERENCES public.agentes_aduana(id);


--
-- Name: telefonos_proveedores telefonos_proveedores_proveedores_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_proveedores
    ADD CONSTRAINT telefonos_proveedores_proveedores_id_fkey FOREIGN KEY (proveedores_id) REFERENCES public.proveedores(id);


--
-- Name: telefonos_usuarios telefonos_usuarios_usuarios_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telefonos_usuarios
    ADD CONSTRAINT telefonos_usuarios_usuarios_id_fkey FOREIGN KEY (usuarios_id) REFERENCES public.usuarios(id);


--
-- Name: tiene tiene_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiene
    ADD CONSTRAINT tiene_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


--
-- Name: tiene tiene_productos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiene
    ADD CONSTRAINT tiene_productos_id_fkey FOREIGN KEY (productos_id) REFERENCES public.productos(id);


--
-- Name: usuarios usuarios_roles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_roles_id_fkey FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- PostgreSQL database dump complete
--

