# Soumita Samanta — Portfolio Site

## File structure

```
soumita-site/
├── index.html          ← Homepage
├── portfolio.html      ← Portfolio with filter
├── blog.html           ← Blog listing
├── about.html          ← About page
├── contact.html        ← Contact form
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Nav + filter + animations
├── blog/
│   └── post-template.html  ← Copy this for every new blog post
└── images/             ← Put all your images here
```

---

## How to add a new portfolio project

1. Open `portfolio.html`
2. Copy an existing `<article class="card portfolio-item visible">` block
3. Update: `data-category` (dataviz / sciillus / editorial), image, tag, title, description, link
4. To add an image: put your file in `/images/`, then replace the placeholder span with:
   `<img src="images/your-image.jpg" alt="Project description"/>`

---

## How to write a new blog post

1. Copy `blog/post-template.html` → rename it (e.g. `blog/my-new-post.html`)
2. Edit the title, date, category, subtitle, and body content inside the file
3. Open `blog.html` → add a new `<article class="blog-list-item">` block at the top
4. Update the title, date, excerpt, and href to point to your new file
5. Optionally add a preview on the homepage in `index.html`

---

## How to set up the contact form (free, no backend)

1. Go to https://formspree.io and create a free account
2. Create a new form — you'll get a form ID like `xpzgkrqw`
3. In `contact.html`, replace `YOUR_FORM_ID` in the action URL with your ID:
   `action="https://formspree.io/f/xpzgkrqw"`
4. Done — form submissions go straight to your email

---

## How to deploy to your domain (GitHub Pages — free)

### Step 1: Create a GitHub account
Go to github.com and sign up if you don't have an account.

### Step 2: Create a repository
- Click "New repository"
- Name it anything (e.g. `portfolio`)
- Set it to Public
- Click "Create repository"

### Step 3: Upload your files
- Click "uploading an existing file"
- Drag your entire soumita-site folder contents (not the folder itself — the files inside)
- Commit the upload

### Step 4: Enable GitHub Pages
- Go to your repository → Settings → Pages
- Source: Deploy from a branch → main → / (root)
- Save
- Your site will be live at: yourusername.github.io/portfolio

### Step 5: Connect your domain
- In GitHub Pages settings, add your custom domain (e.g. soumitasamanta.com)
- In your domain registrar (GoDaddy / Namecheap / wherever you bought it):
  - Add a CNAME record: `www` → `yourusername.github.io`
  - Add 4 A records pointing to GitHub's IPs:
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
- DNS takes 10 minutes to 24 hours to propagate
- GitHub will automatically provision an SSL certificate (https)

---

## Things to personalise before going live

- [ ] Replace `your@email.com` in footer and contact page
- [ ] Replace LinkedIn URL with your actual profile URL
- [ ] Add your actual hero illustration (replace the placeholder circles in index.html)
- [ ] Add real project images to portfolio cards
- [ ] Set up Formspree and replace YOUR_FORM_ID
- [ ] Write your actual About text
- [ ] Add your first blog post
