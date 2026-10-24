# GH Tecnology — accesorios y tecnología

Next.js 15 + Supabase + TailwindCSS. Listo para Vercel.

## 1. Supabase
1. Crea un proyecto en https://supabase.com
2. SQL Editor → pega y ejecuta `supabase/schema.sql`
3. Authentication → Providers → Email (desactiva "Confirm email" si quieres pruebas rápidas)
4. Settings → API: copia URL, anon key y service_role key

## 2. Local
```bash
cp .env.example .env.local   # rellena los valores
npm install
npm run dev
```
Regístrate en /login y hazte admin con:
`update public.users set role = 'admin' where email = 'tu-correo';`

## 3. Logo
Reemplaza `public/logo.svg` por tu logo (si es PNG, cámbialo en `components/Header.js`).

## 4. Dropi
- Pon `DROPI_API_TOKEN` y verifica las rutas `DROPI_PRODUCTS_PATH` / `DROPI_ORDERS_PATH`
  y los campos en `lib/dropi.js` (`mapDropiProduct`, `buildDropiOrder`) según la documentación de tu cuenta.
- Sincronización manual: `curl -H "Authorization: Bearer $CRON_SECRET" https://TU-APP.vercel.app/api/dropi/sync`
- Automática: `vercel.json` ejecuta el cron cada 3 horas.

## 5. Vercel
1. Sube el proyecto a GitHub → Import en https://vercel.com/new
2. Agrega las variables de `.env.example` en Settings → Environment Variables
3. Deploy: obtienes `https://gh-tecnology.vercel.app` (subdominio gratuito)
4. En Supabase → Authentication → URL Configuration, agrega esa URL como Site URL.
