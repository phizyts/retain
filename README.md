<div align="center">
  <a href="https://github.com/phizyts/retain">
    <img src="https://i.ibb.co/397c3N7C/image.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Retain</h3>

  <p align="center">
    Minimal AI-powered note-taking to supercharge your writing and thinking.
    <br />
    <a href="https://retainnote.com/"><strong>Learn More »</strong></a>
    <br />
    <br />
    <a href="https://retainnote.com/">View Demo</a>
    ·
    <a href="https://github.com/phizyts/retain/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/phizyts/retain/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

## About The Project

**Retain** is a modern, minimalist, and AI-enhanced note-taking platform built for developers, students, and thinkers. Highlight, summarize, rewrite, or generate notes in seconds with built-in GPT and Claude support. Clean UX meets powerful writing workflows.

> Free users get 10 credits/day. Paid users get full access.

### Tech Stack

- NextJS (Full-Stack Framework)
- PostgreSQL & Prisma (Primary SQL Database)
- Redis (Secondary NoSQL Caching DB)
- TailwindCSS (Frontend Styling)
- Better-Auth (Auth Framework)
- Cloudinary (Image Storage)
- TipTap (Text Editor)
- Vercel AI SDK (AI Model Integration)
- Stripe (Payment System)
- Resend (Email)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/phizyts/retain.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter API Keys in `.env`
   ```js
   NEXT_PUBLIC_BASE_URL = "ENTER YOUR BASE URL";
   DATABASE_URL = "ENTER YOUR POSTGRESQL URL";
   BETTER_AUTH_SECRET = "ENTER YOUR AUTH SECRET";
   GOOGLE_CLIENT_ID = "ENTER YOUR GOOGLE CLIENT ID";
   GOOGLE_CLIENT_SECRET = "ENTER YOUR GOOGLE CLIENT SECRET";
   GITHUB_CLIENT_ID = "ENTER YOUR GITHUB CLIENT SECRET";
   GITHUB_CLIENT_SECRET = "ENTER YOUR GITHUB CLIENT SECRET";
   CLOUDINARY_CLOUD_NAME = "ENTER YOUR CLOUDINARY NAME";
   CLOUDINARY_API_KEY = "ENTER YOUR CLOUNDINARY API KEY";
   CLOUDINARY_SECRET = "ENTER YOUR CLOUDINARY SECRET";
   RESEND_API_KEY = "ENTER YOUR RESEND API ID";
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin phizyts/retain
   git remote -v # confirm the changes
   ```

## 🚀 Roadmap

To see the full roadmap and planned features, check out the [ROADMAP.md](./ROADMAP.md) file.

## 🤝 Contributing

Contributions are welcome! Fork the repo and submit a PR:

1. Fork the repo
2. Create a branch (`git checkout -b feature/Amazing`)
3. Commit your changes (`git commit -m 'feat: add amazing'`)
4. Push to GitHub (`git push origin feature/Amazing`)
5. Open a PR

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more info.

## 📬 Contact

Your Name – [@phizyts](https://github.com/phizyts) – email@phizy.dev
Project Link: [https://github.com/phizyts/retain](https://github.com/phizyts/retain)

---
