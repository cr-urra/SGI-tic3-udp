--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6 (Ubuntu 13.6-0ubuntu0.21.10.1)
-- Dumped by pg_dump version 13.6 (Ubuntu 13.6-0ubuntu0.21.10.1)

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
\.


--
-- Data for Name: detalles_pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_pedidos (id, diferencia_de_costos, pedidos_id, vigencia) FROM stdin;
22	0	37	t
23	0	38	t
24	0	39	t
25	0	42	t
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
\.


--
-- Data for Name: efectua; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.efectua (observaciones_id, observadores_id) FROM stdin;
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
\.


--
-- Data for Name: historial_precios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historial_precios (id, precio, fecha, productos_id, vigencia) FROM stdin;
10	0	2021-09-06 09:34:35.367204	10	t
11	0	2021-09-06 09:35:07.1048	11	t
12	0	2021-09-06 09:48:41.329119	12	t
13	0	2021-09-06 09:53:30.672868	13	t
14	0	2021-09-06 09:54:10.777533	14	t
15	0	2021-09-06 09:54:55.389805	15	t
16	0	2021-09-06 09:55:45.257597	16	t
17	0	2021-09-06 09:56:37.428682	17	t
19	0	2021-09-06 09:59:32.640117	19	t
20	0	2021-09-06 10:00:50.542674	20	t
21	0	2021-09-06 10:04:04.31111	21	t
22	0	2021-09-06 10:09:18.174136	22	t
23	0	2021-09-06 10:09:40.033998	23	t
24	0	2021-09-06 10:09:59.326073	24	t
25	0	2021-09-06 10:10:08.497726	25	t
26	0	2021-09-06 10:10:28.922284	26	t
27	0	2021-09-06 10:10:46.272989	27	t
28	0	2021-09-06 10:10:57.051157	28	t
30	0	2021-09-06 10:13:30.400685	30	t
31	0	2021-09-06 10:35:18.033967	31	t
32	0	2021-09-06 10:35:36.878034	32	t
33	0	2021-09-06 10:35:56.81105	33	t
34	0	2021-09-06 10:36:16.319384	34	t
35	0	2021-09-06 10:36:58.223131	35	t
36	0	2021-09-06 10:37:31.714354	36	t
37	0	2021-09-06 10:38:02.630773	37	t
38	0	2021-09-06 10:38:16.279484	38	t
39	0	2021-09-06 10:40:13.610024	39	t
40	0	2021-09-06 10:40:27.930985	40	t
41	0	2021-09-06 10:40:48.412559	41	t
42	0	2021-09-06 10:41:03.765624	42	t
46	0	2021-09-06 10:42:46.193008	46	t
47	0	2021-09-06 10:43:09.670199	47	t
18	0	2021-09-06 09:58:31.622702	18	t
43	0	2021-09-06 10:42:04.594904	43	t
29	0	2021-09-06 10:11:24.233417	29	t
44	0	2021-09-06 10:42:16.456221	44	t
45	0	2021-09-06 10:42:30.47115	45	t
48	0	2021-09-06 10:43:34.616586	48	t
49	0	2021-09-06 10:43:57.277026	49	t
50	0	2021-09-06 10:44:13.239072	50	t
59	1.7	2021-05-26 00:00:00	\N	t
60	3.85	2021-05-26 00:00:00	32	t
61	2.75	2021-05-26 00:00:00	12	t
62	2.61	2021-05-26 00:00:00	34	t
63	2.07	2021-05-26 00:00:00	35	t
64	2.06	2021-05-26 00:00:00	38	t
65	2.24	2021-05-26 00:00:00	39	t
66	1.6	2021-05-26 00:00:00	41	t
67	2.36	2021-05-26 00:00:00	25	t
69	1.79	2021-05-15 00:00:00	30	t
70	3.85	2021-05-15 00:00:00	32	t
71	2	2021-05-15 00:00:00	37	t
72	1.25	2021-05-15 00:00:00	15	t
73	1.6	2021-05-15 00:00:00	41	t
74	2.36	2021-05-15 00:00:00	25	t
75	2.44	2021-05-15 00:00:00	27	t
76	1.92	2021-04-16 00:00:00	30	t
77	2.52	2021-04-16 00:00:00	12	t
78	2	2021-04-16 00:00:00	37	t
79	1.92	2021-04-16 00:00:00	38	t
80	3.62	2021-02-03 00:00:00	32	t
81	2.26	2021-02-03 00:00:00	12	t
82	1	2021-02-03 00:00:00	33	t
83	1.85	2021-02-03 00:00:00	37	t
84	1.92	2021-02-03 00:00:00	38	t
85	2.2	2021-02-03 00:00:00	39	t
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
\.


--
-- Data for Name: observadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.observadores (id, rut, nombre, vigencia) FROM stdin;
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

SELECT pg_catalog.setval('public.detalles_dolar_id_seq', 28, true);


--
-- Name: detalles_pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_pedidos_id_seq', 25, true);


--
-- Name: documentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documentos_id_seq', 19, true);


--
-- Name: dolar_mensual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dolar_mensual_id_seq', 8, true);


--
-- Name: gastos_extras_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_extras_id_seq', 10, true);


--
-- Name: historial_dolar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historial_dolar_id_seq', 31, true);


--
-- Name: historial_precios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historial_precios_id_seq', 85, true);


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

SELECT pg_catalog.setval('public.observaciones_id_seq', 21, true);


--
-- Name: observadores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.observadores_id_seq', 2, true);


--
-- Name: paises_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paises_id_seq', 19, true);


--
-- Name: pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_id_seq', 42, true);


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

