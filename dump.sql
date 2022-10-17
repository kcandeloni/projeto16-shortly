--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 4, '91caff40-bb9f-46e2-a71b-ade67ea152ee', '2022-10-16 14:16:07.263347');
INSERT INTO public.sessions VALUES (2, 3, '9f8ae75e-d02c-4243-a039-afd899e53cf1', '2022-10-16 14:56:00.149874');
INSERT INTO public.sessions VALUES (3, 5, '5cc2781a-e506-4346-8593-5a4d95af612d', '2022-10-16 21:07:10.828408');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'https://jovemnerd.com.br/nerdcast/nerdcast-291-especial-rpg-o-duque-a-rosa-e-o-beholder/', '-kc9BbrV', 4, 2, '2022-10-16 14:43:43.43289');
INSERT INTO public.urls VALUES (2, 'https://jovemnerd.com.br/nerdcast/nerdcast-291-especial-rpg-o-duque-a-rosa-e-o-beholder/', 'uoDutX2r', 4, 1, '2022-10-16 14:45:36.144631');
INSERT INTO public.urls VALUES (54, 'https://1.co', 'EKeakHRu', 3, 0, '2022-10-16 22:48:13.801328');
INSERT INTO public.urls VALUES (55, 'https://jovemnerd.com.br/nerdcast/nerdcast-251-especial-rpg-o-bruxo-a-princesa-e-o-dragao/', 'A0xC8cNS', 3, 0, '2022-10-16 22:48:21.151613');
INSERT INTO public.urls VALUES (56, 'https://jovemnerd.com.br/nerdcast/nerdcast-341-especial-rpg-o-corvo-a-periguete-e-o-bucentauro/', 'bfPAksK_', 3, 0, '2022-10-16 22:49:23.541203');
INSERT INTO public.urls VALUES (57, 'https://www.youtube.com/watch?v=LjhPWs8yKvk', 'Iij_R7hW', 3, 0, '2022-10-16 22:50:07.617658');
INSERT INTO public.urls VALUES (58, 'https://hub.driven.com.br/computacao/modulo/42/topico/318/exercicio/229', 'PgTTWbW3', 3, 0, '2022-10-16 22:51:10.931131');
INSERT INTO public.urls VALUES (59, 'https://www.hipsters.tech/', 'LEkc7KGH', 3, 0, '2022-10-16 22:53:00.372473');
INSERT INTO public.urls VALUES (60, 'http://geacron.com/home-pt/?lang=pt-pt&sid=GeaCron753679', 'LyqKI4Jn', 3, 0, '2022-10-16 22:53:59.847381');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'olhoquetudove', 'olharquetudove@driven.com.br', '$2b$10$521vyjv5E.fXDBC.OA6dqO1ssjC6c5lZCzpC6XSHsuMxQ2iYxDkoO', '2022-10-16 09:35:17.84604');
INSERT INTO public.users VALUES (2, 'kevin', 'kevin@driven.com.br', '$2b$10$7iZuLvuFwUoiWuwPgHj11eDKCsIpAtkVNJLNoVs3a6CLgaIq/ycZy', '2022-10-16 09:35:31.267279');
INSERT INTO public.users VALUES (3, 'kvothe', 'kvothe@driven.com.br', '$2b$10$pRgpUOU0J4GPXu85/JteNeX/JMpESqh7LRX99S9X5Mtw7A3ESLBqC', '2022-10-16 09:47:37.662454');
INSERT INTO public.users VALUES (4, 'Jojo', 'Jojo@driven.com.br', '$2b$10$Gl1pB7VXqKE0ptrhPHbNHOSyRZTcghWZuEcWiAUxbkWgIWQOtZ86m', '2022-10-16 10:29:41.232138');
INSERT INTO public.users VALUES (5, 'Gandalf', 'gandalf@driven.com.br', '$2b$10$1j34.XdlP8pFoTDLI1sjQeBSHbbLzPlpSB81UQh/JJUg25c/NNvh.', '2022-10-16 21:07:01.87614');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 60, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: sessions sessions_userId_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_key" UNIQUE ("userId");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

