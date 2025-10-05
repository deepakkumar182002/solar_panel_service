# DevanshiRenewables - Solar Panel Website

A modern React-based website for Devanshi Renewable Energy company featuring solar panel services, AI chatbot, and interactive components.

## 🌟 Features

- **Responsive Design** - Works on desktop and mobile devices
- **AI ChatBot** - OpenAI-powered assistant for customer queries (Hindi & English)
- **Interactive Pages** - Home, About, Services, Projects, Calculator, Contact
- **Video Backgrounds** - Hero section with looping solar energy video
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Animation** - Smooth transitions with Framer Motion

## 🚀 Live Website

Visit: [Your Vercel deployment URL]

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **AI Integration**: OpenAI GPT-3.5-turbo
- **Deployment**: Vercel (Static site + Serverless functions)

## 📦 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepakkumar182002/solar_panel_service.git
   cd solar_panel_service
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Add your OpenAI API key to .env.local
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:5000`

## 🔧 Build & Deploy

### Static Build (for Vercel)
```bash
npm run build:static
```

### Full Stack Build (for Node.js servers)
```bash
npm run build
npm run start
```

## 🌐 Vercel Deployment

This project is configured for automatic deployment on Vercel:

1. **Connect GitHub repository to Vercel**
2. **Set environment variable in Vercel dashboard:**
   - `OPENAI_API_KEY`: Your OpenAI API key

3. **Deploy settings:**
   - Build Command: `npm run build:static`
   - Output Directory: `dist/public`
   - Node.js Version: 18.x

The AI ChatBot will use serverless functions (`/api/chat`) in production.

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── public/            # Static assets (images, videos)
├── api/                   # Vercel serverless functions
├── server/                # Express.js backend (for local dev)
├── shared/                # Shared utilities
├── vercel.json           # Vercel configuration
└── package.json
```

## 🎨 Key Components

- **HeroSection**: Video background with call-to-action
- **ChatBot**: AI-powered customer support
- **ProjectsGallery**: Portfolio showcase
- **SolarCalculator**: Energy savings estimator
- **Navigation**: Responsive menu system

## 🔒 Security

- API keys are stored securely in environment variables
- `.env.local` is excluded from git tracking
- CORS headers configured for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions about this project:
- Email: support@devanshirenewables.com
- Phone: [Your contact number]

---

**Built with ❤️ for renewable energy adoption in India**