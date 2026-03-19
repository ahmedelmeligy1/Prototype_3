# BuildCore Construction Website
## Quick Guide for Editing & Deploying

---

## 📁 File Structure

```
construction-site/
├── index.html          ← Homepage
├── css/
│   └── style.css       ← ALL styles (colors, fonts, layout)
├── js/
│   ├── main.js         ← Animations, nav scroll, WhatsApp form
│   └── components.js   ← Shared nav & footer (edit once, applies everywhere)
└── pages/
    ├── about.html      ← About Us page
    ├── services.html   ← Services page
    ├── projects.html   ← Projects portfolio page
    └── contact.html    ← Contact page (WhatsApp form)
```

---

## ✏️ Common Edits

### 1. Change Company Name / Logo
Open `js/components.js` and find `BuildCore` — replace everywhere.

### 2. Change WhatsApp Number
Open `js/main.js`, find this line:
```js
const waNumber = '201000000000';
```
Replace with your number in international format (no `+` or spaces).
Example: Egypt +20 100 000 0000 → `201000000000`

### 3. Change Email Address
Search all files for `estimating@buildcore.com` and replace.

### 4. Change Colors / Fonts
Open `css/style.css`, edit the `:root` variables at the top:
```css
--gold:  #c9a84c;   /* main accent color */
--black: #0a0a0a;   /* background */
```

### 5. Replace Images
All images use Unsplash URLs. To use your own photos:
1. Put your photo in an `images/` folder
2. Replace the URL, e.g.: `src="https://images.unsplash.com/..."` → `src="../images/your-photo.jpg"`

### 6. Edit Services / Projects
Each service or project card is a simple HTML block. Copy, paste, and edit text and image URL.

### 7. Add Social Media Links
In `js/components.js`, find the footer social links and update the `href` URLs.

---

## 🚀 Hosting Options (Free → Paid)

| Option | Cost | Best For | Steps |
|--------|------|----------|-------|
| **Netlify** | Free | Best free option | Drag & drop folder at netlify.com |
| **GitHub Pages** | Free | Developers | Push to GitHub repo |
| **Vercel** | Free | Fast global CDN | Connect GitHub repo |
| **Hostinger** | ~$3/mo | Custom domain | Upload via FTP |
| **cPanel Hosting** | ~$5/mo | Traditional hosting | Upload via File Manager |

### Recommended: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com) → Sign up (free)
2. Click **"Add new site" → "Deploy manually"**
3. Drag & drop the entire `construction-site` folder
4. Your site is live instantly at `yourname.netlify.app`
5. Add custom domain in Site Settings → Domain Management

---

## 🌐 Custom Domain Setup
1. Buy domain from Namecheap / GoDaddy (~$10/year)
2. In Netlify: Site Settings → Domain Management → Add custom domain
3. Update DNS records at your registrar as instructed

---

## 🔧 Future Features (Easy to Add)
- **Google Analytics**: Paste tracking script before `</body>` in each page
- **New page**: Copy `pages/about.html`, rename, update nav in `components.js`
- **Photo gallery**: Add images to `pages/projects.html` grid
- **Blog**: Add `pages/blog.html` with article cards
- **Live chat**: Paste WhatsApp chat bubble widget code

---

## 📞 Need Help?
Contact via `estimating@buildcore.com` or WhatsApp on the contact page.
