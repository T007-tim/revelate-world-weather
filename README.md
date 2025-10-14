# 🌦️ Revelate Weather Dashboard

A modern, interactive weather dashboard delivering real-time updates and forecasts for any location worldwide. Built with React, TypeScript, Tailwind CSS, and OpenWeatherMap API.

![Weather Dashboard](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue)

## ✨ Features

- 🌍 **Global Weather Search** - Get real-time weather for cities worldwide (Nairobi, Tokyo, New York, etc.)
- 📊 **Interactive Charts** - Visualize temperature and humidity trends with Recharts
- 📅 **5-Day Forecast** - Plan ahead with detailed weather predictions
- 🎨 **Beautiful Design** - Sky-inspired gradients and smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- OpenWeatherMap API key ([get one free here](https://openweathermap.org/api))

### Setup Instructions

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure API Key**

Get your free OpenWeatherMap API key:
- Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
- Generate an API key from your dashboard
- Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Add your API key to `.env.local`:
```
VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
```

4. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:8080` to see your app! 🎉

## 📦 Deployment

### Deploy with Vite (Static Hosting)

1. **Build the project**
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

2. **Deploy to hosting platform**

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages:**
Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

Then build and deploy the `dist` folder.

### Deploy with Lovable (One-Click)

Click the **Publish** button in the Lovable editor for instant deployment!

## 🔧 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for data visualization
- **Build Tool**: Vite for lightning-fast development
- **Icons**: Lucide React
- **API**: OpenWeatherMap API

## 🎨 Customization

### Colors & Design
Edit `src/index.css` and `tailwind.config.ts` to customize:
- Color schemes
- Gradients (sky, dawn, dusk, night themes)
- Animations and transitions
- Spacing and typography

### Components
All components are in `src/components/`:
- `SearchBar.tsx` - City search input
- `WeatherCard.tsx` - Main weather display
- `ForecastCard.tsx` - 5-day forecast grid
- `WeatherChart.tsx` - Temperature/humidity charts

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- [ ] Geolocation for automatic weather detection
- [ ] AI-powered weather insights and suggestions
- [ ] Weather alerts and notifications
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Save favorite locations
- [ ] Weather maps and radar

## 🌐 Links

- [Live Demo](https://lovable.app) - Replace with your deployed URL
- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [Report Issues](https://github.com/yourusername/revelate-weather/issues)

---

Built with ❤️ using [Lovable](https://lovable.dev)

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c03aaf3f-898a-451b-97b9-9b4f4053cab5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c03aaf3f-898a-451b-97b9-9b4f4053cab5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c03aaf3f-898a-451b-97b9-9b4f4053cab5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
