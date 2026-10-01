# Hostinger Deployment Guide for Autoniex (Next.js 3D Agency Website)

> [!IMPORTANT]
> Aapki website **Next.js Static Export** ke sath configure ki gayi hai. Jab aap `npm run build` chalate hain, Next.js poori application ko super-fast, pre-rendered static files mein convert kar ke **`out/`** folder mein save kar deta hai.
> Iska faida yeh hai ke Hostinger par **zero server crashes**, **100/100 speed**, aur **zero Node.js maintenance** hoti hai!

---

## 🚀 Method 1: Hostinger File Manager (Sab Se Asaan & Recommended)

Agar aapke paas Hostinger Shared Hosting, WordPress Hosting, ya Cloud Hosting hai:

### Step 1: Local Build Banayein
Apne computer ke terminal mein yeh command chalayein:
```bash
cmd /c npm run build
```
Jab build mukammal ho jaye gi, aapke project folder ke andar **`out`** naam ka ek naya folder ban jayega.

### Step 2: `out` Folder Ko Zip Karein
- `out` folder ke **andar** jayein.
- Tamam files aur folders ko select karein (e.g., `index.html`, `_next`, `images`, `.htaccess`, etc.).
- Right-click kar ke **"Compress to ZIP file"** ya **"Add to archive -> zip"** karein (maslan `autoniex-build.zip`).
*(Note: `out` folder ko bahar se zip nahi karna, balkay uske andar ki tamaam files ko zip karna hai).*

### Step 3: Hostinger hPanel Par Upload Karein
1. Apne **Hostinger hPanel** ([hpanel.hostinger.com](https://hpanel.hostinger.com)) par login karein.
2. **Websites** section mein jayein aur apni domain (`autoniex.com`) ke samne **"Manage"** par click karein.
3. Left menu mein **"File Manager"** (Files -> File Manager) open karein.
4. **`public_html`** folder ke andar enter hon.
   - *Agar wahan pehle se koi default `default.php` ya purani file hai to use delete kar dein.*
5. Upar diye gaye **Upload** button (teer ka nishan) par click karein aur apni `autoniex-build.zip` file select karein.
6. File upload hone ke baad, us par right-click karein aur **"Extract"** select karein.
7. Destination folder **`public_html`** hi rehne dein aur Extract par click karein.
8. Bas! Apni domain open karein (`https://autoniex.com`), aapki 3D agency website live ho chuki hai!

---

## 🔒 Free SSL Certificate Activate Karna
1. Hostinger hPanel mein jayein.
2. **Security -> SSL** par click karein.
3. Apni domain ke samne **"Install SSL"** par click karein (yeh bilkul Free Let's Encrypt SSL hai).
4. Humari provide ki hui `.htaccess` file automatic HTTPS par redirect kar degi!

---

## 🛠️ Portfolio Mein Naye Projects Kaise Add/Upload Karein?

Aapko code mein tabdeeli karne ki bhi zaroorat nahi hai:
1. Website par **"Work"** section par jayein.
2. Upar right corner par **"+ Add / Upload Project"** button par click karein.
3. Modal open hoga jahan aap:
   - Project Screenshot / Image upload kar sakte hain
   - Title, Category (Automation, AI Agents, Websites, Marketing) select kar sakte hain
   - Client name, Key result/metric likh sakte hain
   - Deliverables aur Tech stack tags daal sakte hain
   - Optional YouTube video URL daal sakte hain
4. **"Publish Project"** par click karein — project foran live grid mein shamil ho jayega!

---

## 💻 Local Computer Par Website Run Karna

Local computer par chalane ke liye:
```bash
cmd /c npm run dev
```
Browser mein open karein:
`http://localhost:3000`
