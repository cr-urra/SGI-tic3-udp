--
-- PostgreSQL database dump
--

-- Dumped from database version 11.12 (Debian 11.12-1.pgdg100+1)
-- Dumped by pg_dump version 11.12 (Debian 11.12-1.pgdg100+1)

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

SET default_with_oids = false;

--
-- Name: agentes_aduana; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agentes_aduana (
    id integer NOT NULL,
    nombre character varying(30),
    apellido character varying(30),
    correo character varying(30),
    numero_cuenta character varying(30),
    bancos_agentes_aduana_id integer,
    rut character varying(30),
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
-- Name: bancos_agentes_aduana; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bancos_agentes_aduana (
    id integer NOT NULL,
    numero_cuenta character varying(30),
    tipo_cuenta character varying(30),
    nombre_banco character varying(30),
    vigencia boolean
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
-- Name: cobra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cobra (
    pedidos_id integer NOT NULL,
    historial_dolar_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.cobra OWNER TO postgres;

--
-- Name: cuentas_bancos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuentas_bancos (
    id integer NOT NULL,
    numero_cuenta character varying(30),
    nombre_banco character varying(30),
    swift_code character varying(30),
    codigo_iban character varying(30),
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
    pedidos_id integer
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
    nombre_documento character varying(30),
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
    agentes_aduana_id integer NOT NULL
);


ALTER TABLE public.efectua OWNER TO postgres;

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
    precio double precision,
    dolar_mensual_id integer,
    vigencia boolean
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
-- Name: ips; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ips (
    id integer NOT NULL,
    ip character varying(30),
    usuarios_id integer
);


ALTER TABLE public.ips OWNER TO postgres;

--
-- Name: ips_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ips_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ips_id_seq OWNER TO postgres;

--
-- Name: ips_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ips_id_seq OWNED BY public.ips.id;


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
    nombre_banco character varying(30),
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
    gasto boolean,
    pedidos_id integer,
    vigencia boolean
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
-- Name: paises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paises (
    id integer NOT NULL,
    pais character varying(30),
    codigo_iban character varying(30),
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
    codigo integer,
    cantidad bigint,
    nombre character varying(30),
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
    tipo_pago boolean,
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
    codigo character varying(30),
    nombre character varying(30),
    tipo character varying(30),
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
    nombre character varying(30),
    direccion character varying(30),
    correo character varying(30),
    pais character varying(30),
    monedas_id integer,
    rut character varying(30),
    vigencia boolean
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
    pedidos_id integer NOT NULL,
    detalles_pedidos_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
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
    telefono integer,
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
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.tiene OWNER TO postgres;

--
-- Name: unidad_productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidad_productos (
    id integer NOT NULL,
    tipo character varying(30),
    valor_unidad double precision,
    vigencia boolean
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
-- Name: ips id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ips ALTER COLUMN id SET DEFAULT nextval('public.ips_id_seq'::regclass);


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

COPY public.agentes_aduana (id, nombre, apellido, correo, numero_cuenta, bancos_agentes_aduana_id, rut, vigencia) FROM stdin;
5	Eustaquio	Salvatore	eustaquio@gmail.com	8984445	2	111223334	t
1	Jose	Perez	jose@gmail.com	1C	1	123456789	t
\.


--
-- Data for Name: bancos_agentes_aduana; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bancos_agentes_aduana (id, numero_cuenta, tipo_cuenta, nombre_banco, vigencia) FROM stdin;
1	1C	Cuenta corriente	Banco 1	t
2	8984445	Cuenta RUT	Banco Santander	t
3	8974378374	Cuenta corriente	Banco ITAU	t
\.


--
-- Data for Name: cobra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cobra (pedidos_id, historial_dolar_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: cuentas_bancos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentas_bancos (id, numero_cuenta, nombre_banco, swift_code, codigo_iban, referencia, paises_id, numeros_aba_id, vigencia) FROM stdin;
2	245	Banco de Chile	234	2	Referencia 1	3	3	t
4	345	Banco ITU	3D4	1	Referencia 345	4	4	t
1	1	Banco estado	A	B	C	3	3	t
\.


--
-- Data for Name: cuentas_corrientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentas_corrientes (id, debe, haber, agentes_aduana_id, vigencia) FROM stdin;
3	928374657	532323	5	t
\.


--
-- Data for Name: detalles_dolar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_dolar (id, precio_compra, historial_dolar_id, vigencia) FROM stdin;
1	1	1	t
2	234	2	t
\.


--
-- Data for Name: detalles_pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_pedidos (id, diferencia_de_costos, pedidos_id) FROM stdin;
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
1	1	2021-06-13 22:43:24.006961	t
3	378274	2021-06-14 22:53:06.621046	t
\.


--
-- Data for Name: efectua; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.efectua (observaciones_id, agentes_aduana_id) FROM stdin;
\.


--
-- Data for Name: gastos_extras; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos_extras (id, monto, pedidos_id, observaciones_id, vigencia) FROM stdin;
\.


--
-- Data for Name: historial_dolar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historial_dolar (id, fecha, precio, dolar_mensual_id, vigencia) FROM stdin;
1	2021-06-13 22:44:50.910426	1	1	t
2	2021-06-14 22:58:20.755816	123	3	t
\.


--
-- Data for Name: historial_precios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.historial_precios (id, precio, fecha, productos_id, vigencia) FROM stdin;
3	122	2021-06-14 00:00:00	1	t
\.


--
-- Data for Name: ips; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ips (id, ip, usuarios_id) FROM stdin;
1	127.0.0.2	3
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
1	6873478	2021-06-14	Descripcion 2	3	t
3	2323	2021-06-14	Descripcion 4	3	t
\.


--
-- Data for Name: numeros_aba; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.numeros_aba (id, nombre_banco, numero_aba, vigencia) FROM stdin;
1	Banco estado	1	t
3	Banco de Chile	4	t
4	Banco ITU	9	t
\.


--
-- Data for Name: observaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.observaciones (id, observacion, fecha, gasto, pedidos_id, vigencia) FROM stdin;
\.


--
-- Data for Name: paises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paises (id, pais, codigo_iban, vigencia) FROM stdin;
3	Estados Unidos	2	t
4	Argentina	1	t
\.


--
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedidos (id, codigo, cantidad, nombre, pago_inicial, pago_final, fecha_inicial, fecha_pago, fecha_salida, fecha_llegada_real, fecha_llegada_estimada, fecha_aduana, estado, tipo_de_envio, flete, seguro, valor_cif, honorarios, arancel, gastos_agencia, numero_din, cuentas_bancos_id, agentes_aduana_id, proveedores_id, dolar_mensual_id, tipo_pago, fecha_vencimiento, vigencia) FROM stdin;
7	3	4	pedido3	10000	100	2021-06-13	2021-06-13	2021-06-13	2021-06-13	2021-06-13	2021-06-13	F	Camello	1	\N	1	1	1	1	1	1	1	1	1	t	2021-06-13	t
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, codigo, nombre, tipo, proveedores_id, unidad_productos_id, vigencia) FROM stdin;
1	PL1	Plastico 1	Plastico	7	1	t
\.


--
-- Data for Name: proveedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proveedores (id, nombre, direccion, correo, pais, monedas_id, rut, vigencia) FROM stdin;
1	Colun	Calle 123	colun@gmail.com	Chile	\N	123456888	t
2	USPS	Tortellini #2222	usps@gmail.com	Estados Unidos	2	\N	t
3	USPS	Tortellini #2222	usps@gmail.com	Estados Unidos	2	\N	t
7	Soprole	Av. Alvaro Gamboa 1313	soprole@gmail.com	Argentina	3	123432563	t
\.


--
-- Data for Name: realiza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.realiza (pedidos_id, detalles_pedidos_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, nombre, cod_rol) FROM stdin;
1	Administrador	adm
2	Finanzas	fin
3	Operaciones	opr
\.


--
-- Data for Name: telefonos_agentes_aduana; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefonos_agentes_aduana (id, telefono, agentes_aduana_id, vigencia) FROM stdin;
4	928374657	5	t
1	96184222	1	t
5	12676398	1	t
6	89743783	\N	t
\.


--
-- Data for Name: telefonos_proveedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefonos_proveedores (id, telefono, proveedores_id, vigencia) FROM stdin;
1	962189955	1	t
2	954106748	2	t
3	\N	\N	t
4	954106748	3	t
5	932485947	7	t
6	932485947	7	t
\.


--
-- Data for Name: telefonos_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telefonos_usuarios (id, telefono, usuarios_id) FROM stdin;
1	27234984	3
\.


--
-- Data for Name: tiene; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tiene (pedidos_id, productos_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: unidad_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidad_productos (id, tipo, valor_unidad, vigencia) FROM stdin;
1	Toneladas	1000	t
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, rut, nombre, apellido, correo, "contraseña", roles_id, verificacion) FROM stdin;
2	123456781	admin	01	nombre.apellido@mail.cl	$2a$10$FLCHmK7KDzK8aDWq7HqstuxzQOjaTKLq42rGy/tKSUuhWwLcATN7G	1	f
3	123456786	Roberto	Manfinfla	roberto@gmail.com	$2a$10$7wDJz0nmcmLoVDq3YwnFD.ysBfdrYSx.MIfDK5jc8WgpcU4ajm7zi	3	f
\.


--
-- Name: agentes_aduana_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.agentes_aduana_id_seq', 5, true);


--
-- Name: bancos_agentes_aduana_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bancos_agentes_aduana_id_seq', 3, true);


--
-- Name: cuentas_bancos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuentas_bancos_id_seq', 4, true);


--
-- Name: cuentas_corrientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuentas_corrientes_id_seq', 3, true);


--
-- Name: detalles_dolar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_dolar_id_seq', 2, true);


--
-- Name: detalles_pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_pedidos_id_seq', 10, true);


--
-- Name: documentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documentos_id_seq', 3, true);


--
-- Name: dolar_mensual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dolar_mensual_id_seq', 3, true);


--
-- Name: gastos_extras_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_extras_id_seq', 4, true);


--
-- Name: historial_dolar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historial_dolar_id_seq', 2, true);


--
-- Name: historial_precios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historial_precios_id_seq', 3, true);


--
-- Name: ips_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ips_id_seq', 1, true);


--
-- Name: monedas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.monedas_id_seq', 3, true);


--
-- Name: movimientos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimientos_id_seq', 3, true);


--
-- Name: numeros_aba_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.numeros_aba_id_seq', 4, true);


--
-- Name: observaciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.observaciones_id_seq', 3, true);


--
-- Name: paises_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paises_id_seq', 4, true);


--
-- Name: pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_id_seq', 7, true);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 2, true);


--
-- Name: proveedores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proveedores_id_seq', 8, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- Name: telefonos_agentes_aduana_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telefonos_agentes_aduana_id_seq', 6, true);


--
-- Name: telefonos_proveedores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telefonos_proveedores_id_seq', 6, true);


--
-- Name: telefonos_usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telefonos_usuarios_id_seq', 1, true);


--
-- Name: unidad_productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidad_productos_id_seq', 1, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


--
-- Name: agentes_aduana agentes_aduana_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agentes_aduana
    ADD CONSTRAINT agentes_aduana_pkey PRIMARY KEY (id);


--
-- Name: bancos_agentes_aduana bancos_agentes_aduana_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bancos_agentes_aduana
    ADD CONSTRAINT bancos_agentes_aduana_pkey PRIMARY KEY (id);


--
-- Name: cobra cobra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cobra
    ADD CONSTRAINT cobra_pkey PRIMARY KEY (pedidos_id, historial_dolar_id);


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
    ADD CONSTRAINT efectua_pkey PRIMARY KEY (observaciones_id, agentes_aduana_id);


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
-- Name: ips ips_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ips
    ADD CONSTRAINT ips_pkey PRIMARY KEY (id);


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
    ADD CONSTRAINT realiza_pkey PRIMARY KEY (pedidos_id, detalles_pedidos_id);


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
-- Name: agentes_aduana agentes_aduana_bancos_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agentes_aduana
    ADD CONSTRAINT agentes_aduana_bancos_agentes_aduana_id_fkey FOREIGN KEY (bancos_agentes_aduana_id) REFERENCES public.bancos_agentes_aduana(id);


--
-- Name: cobra cobra_historial_dolar_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cobra
    ADD CONSTRAINT cobra_historial_dolar_id_fkey FOREIGN KEY (historial_dolar_id) REFERENCES public.historial_dolar(id);


--
-- Name: cobra cobra_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cobra
    ADD CONSTRAINT cobra_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


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
-- Name: efectua efectua_agentes_aduana_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.efectua
    ADD CONSTRAINT efectua_agentes_aduana_id_fkey FOREIGN KEY (agentes_aduana_id) REFERENCES public.agentes_aduana(id);


--
-- Name: efectua efectua_observaciones_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.efectua
    ADD CONSTRAINT efectua_observaciones_id_fkey FOREIGN KEY (observaciones_id) REFERENCES public.observaciones(id);


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
-- Name: historial_precios historial_precios_productos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historial_precios
    ADD CONSTRAINT historial_precios_productos_id_fkey FOREIGN KEY (productos_id) REFERENCES public.productos(id);


--
-- Name: ips ips_usuarios_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ips
    ADD CONSTRAINT ips_usuarios_id_fkey FOREIGN KEY (usuarios_id) REFERENCES public.usuarios(id);


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
-- Name: proveedores proveedores_monedas_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_monedas_id_fkey FOREIGN KEY (monedas_id) REFERENCES public.monedas(id);


--
-- Name: realiza realiza_detalles_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realiza
    ADD CONSTRAINT realiza_detalles_pedidos_id_fkey FOREIGN KEY (detalles_pedidos_id) REFERENCES public.detalles_pedidos(id);


--
-- Name: realiza realiza_pedidos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realiza
    ADD CONSTRAINT realiza_pedidos_id_fkey FOREIGN KEY (pedidos_id) REFERENCES public.pedidos(id);


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

