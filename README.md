# React TypeScript Form App

A simple and scalable React app using TypeScript and Bootstrap for form input and selection, with dynamic calculations and reusable components.

## Features

- React with TypeScript
- Bootstrap 5 styling
- Reusable components (`InputText`, `SelectInput`, `TextareaInput`)
- Dynamic form calculation (harga, diskon, total)
- Select option with searchable dropdown
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
Copy file .env.example dan rename menjadi .env lalu ganti value dari REACT_APP_BASE_URL dengan ip_address:port yang sesuai seperti pada contoh.
Setelah itu install depedencies yang dibutuhkan
```bash
npm install
# or
yarn install
```
---

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


5.**Preview build Production di server lokal**

```bash
npm install -g serve
serve -s build
```

Lalu buka http://localhost:3000 di browser
---

### 💡 Tips

- Ganti `your-username` dan nama repo sesuai akun GitHub kamu.
- Tambahkan screenshot aplikasi jika perlu untuk visual preview.
- Bisa juga tambahkan `.env.example` kalau kamu punya variabel environment.

Kalau kamu ingin README dalam Bahasa Ind