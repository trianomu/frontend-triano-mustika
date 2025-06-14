# React TypeScript Form App

Aplikasi React yang sederhana dan dapat dikembangkan dengan menggunakan **TypeScript** dan **Bootstrap**, mendukung input dan seleksi form, perhitungan otomatis, serta komponen yang dapat digunakan ulang.

## Features

- React dengan TypeScript
- Bootstrap 5 styling
- Reusable components (`InputText`, `SelectInput`, `TextareaInput`)
- Dynamic form calculation (harga, diskon, total)
- Select option dengan searchable dropdown
- Responsive layout

---

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Create React App](https://create-react-app.dev/)

---

# Instalasi

1. **Clone repository**

```bash
git clone https://github.com/trianomu/frontend-triano-mustika.git
cd frontend-triano-mustika
```
---
2. **Install depedencies dan atur .env**

Copy file .env.example dan rename menjadi .env lalu ganti nilai dari REACT_APP_BASE_URL dengan format ip_address:port yang akan digunakan.
Setelah itu install depedencies yang dibutuhkan

```bash
npm install
# or
yarn install
```
---

3. **Jalankan server Development**
```bash
npm start
# or
yarn start
```
Aplikasi akan berjalan di alamat berikut: http://localhost:3000/

---
4. **Build aplikasi untuk Production**
```bash
npm run build
# or
yarn build
```

Hasil build akan muncul di folder /build 

---

5.**Preview build Production di server lokal**

```bash
npm install -g serve
serve -s build
```
Lalu buka http://localhost:3000 di browser

---