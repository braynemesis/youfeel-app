# 🎬 YouFeel - Análise de Sentimentos para YouTube

Uma aplicação web moderna que analisa sentimentos e engajamento de vídeos do YouTube através dos comentários, utilizando IA para gerar insights inteligentes.

## 🚀 Funcionalidades

- **Análise de Sentimentos**: Classificação automática de comentários em Positivo, Neutro ou Negativo
- **Dashboard Interativo**: Visualizações em tempo real com gráficos e métricas
- **IA Integrada**: Insights gerados pela Google Gemini API
- **Nuvem de Palavras**: Identificação de tópicos e termos mais frequentes
- **Top Comentários**: Ranking dos comentários mais engajados
- **Design Responsivo**: Interface moderna inspirada no YouTube
- **Dark Mode**: Alternância entre temas claro e escuro

## 🛠️ Stack Tecnológica

### Frontend
- **React 19** + **Vite**
- **TailwindCSS** para estilização
- **Recharts** para gráficos
- **React Icons** para ícones
- **Axios** para requisições HTTP

### Backend
- **Node.js** + **Express**
- **YouTube Data API v3**
- **Google Gemini API**
- **CORS** e **dotenv**

## 📦 Instalação

### 1. Clone o repositório
```bash
git clone <repository-url>
cd youfeel
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
# YouTube Data API v3
YOUTUBE_API_KEY=your_youtube_api_key_here

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key_here

# Server Configuration
PORT=3001
```

### 4. Obtenha as chaves da API

#### YouTube Data API v3:
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a YouTube Data API v3
4. Crie credenciais (API Key)
5. Configure as restrições da API Key

#### Google Gemini API:
1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crie uma nova API Key
3. Configure as permissões necessárias

### 5. Execute o projeto

#### Desenvolvimento Local:
```bash
# Terminal 1 - Frontend (Vite)
npm run dev

# Terminal 2 - Backend (Express)
npm run server:dev
```

#### Deploy na Vercel (Recomendado):
```bash
# Deploy automático via GitHub
git push origin main

# Deploy manual
npm run deploy

# Deploy preview
npm run deploy:preview
```

#### Produção Local:
```bash
# Build do frontend
npm run build

# Servidor backend
npm run server
```

## 🎯 Como Usar

1. **Acesse a aplicação** em `http://localhost:5173`
2. **Cole a URL** de um vídeo do YouTube no campo de entrada
3. **Clique em "Analisar Vídeo"** e aguarde o processamento
4. **Explore o dashboard** com todos os insights gerados

### Formatos de URL aceitos:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `VIDEO_ID` (apenas o ID do vídeo)

## 📊 Dashboard Insights

### 1. **Sentimento Geral**
- Emoji representativo do sentimento predominante
- Distribuição percentual de sentimentos
- Barras de progresso visuais

### 2. **Insights da IA**
- Resumo automático do conteúdo do vídeo
- Análise da opinião pública geral
- Gerado pela Google Gemini API

### 3. **Métricas do Vídeo**
- Visualizações, likes, comentários
- Informações do canal
- Data de publicação

### 4. **Gráficos Interativos**
- Gráfico de pizza com distribuição de sentimentos
- Cores padronizadas (Verde/Amarelo/Vermelho)

### 5. **Nuvem de Palavras-chave**
- Termos mais frequentes nos comentários
- Tamanhos e cores variados
- Identificação de tópicos principais

### 6. **Top Comentários**
- 10 comentários mais curtidos
- Informações do autor e data
- Contagem de likes

## 🎨 Design System

### Paleta de Cores
- **Primária**: YouTube Red (#FF0000)
- **Secundária**: Cinza Escuro (#212121)
- **Fundo**: Cinza Claro (#F9F9F9)
- **Accent**: Tons de cinza (#606060)

### Tipografia
- **Fonte**: Roboto (similar ao YouTube)
- **Hierarquia**: Títulos em negrito, texto corpo regular

## 🔧 Estrutura do Projeto

```
youfeel/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── VideoEmbed.jsx
│   │   │   ├── SentimentOverview.jsx
│   │   │   ├── SentimentChart.jsx
│   │   │   ├── KeywordsCloud.jsx
│   │   │   ├── TopComments.jsx
│   │   │   ├── VideoMetrics.jsx
│   │   │   └── AIInsights.jsx
│   │   ├── Header.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoadingPage.jsx
│   │   └── DashboardPage.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚨 Limitações e Considerações

- **Limite de Comentários**: Análise limitada a 100 comentários por vídeo
- **Rate Limits**: Respeite os limites das APIs do Google
- **Custos**: Google Gemini API pode ter custos associados
- **Idioma**: Otimizado para comentários em português

## 🚀 Deploy e Produção

### Vercel (Recomendado)
O YouFeel está otimizado para deploy na Vercel com:
- ✅ **Serverless Functions** para as APIs
- ✅ **Build automático** com Vite
- ✅ **Deploy contínuo** via GitHub
- ✅ **Variáveis de ambiente** seguras
- ✅ **CDN global** para performance

Ver guia completo: [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)

### Outras Plataformas
- **Netlify**: Funciona com Netlify Functions
- **Railway**: Deploy completo com backend
- **Heroku**: Deploy tradicional com server

## 🔮 Futuras Melhorias

- [ ] Análise temporal de sentimentos
- [ ] Comparação entre múltiplos vídeos
- [ ] Exportação de relatórios em PDF
- [ ] Integração com outras plataformas
- [ ] Cache de resultados
- [ ] Sistema de autenticação
- [ ] Análise de tendências

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**YouFeel** - Transformando comentários em insights! 🎬✨
