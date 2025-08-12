# 🚀 Deploy na Vercel - YouFeel

Guia completo para fazer deploy do YouFeel na Vercel com configuração otimizada.

## 📋 Pré-requisitos

1. **Conta na Vercel**: [vercel.com](https://vercel.com)
2. **Chaves das APIs configuradas**:
   - YouTube Data API v3
   - Google Gemini API
3. **Código do projeto no GitHub** (recomendado)

## 🛠️ Configuração Inicial

### 1. Instalar Vercel CLI
```bash
npm install -g vercel
# ou
npm run deploy:preview  # usa a CLI local
```

### 2. Login na Vercel
```bash
npx vercel login
```

## 🚀 Deploy Automático (Recomendado)

### 1. Conectar ao GitHub
1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. A Vercel detectará automaticamente que é um projeto Vite

### 2. Configurar Variáveis de Ambiente
Na dashboard da Vercel:
1. Vá em "Settings" > "Environment Variables"
2. Adicione as seguintes variáveis:

```env
YOUTUBE_API_KEY=sua_chave_youtube_api_aqui
GEMINI_API_KEY=sua_chave_gemini_api_aqui
PORT=3001
```

**IMPORTANTE**: Marque todas para todos os ambientes (Production, Preview, Development)

### 3. Deploy Automático
- Cada push para `main` fará deploy em produção
- Cada PR criará um preview deployment
- Logs disponíveis em tempo real na dashboard

## 🔧 Deploy Manual

### 1. Build Local
```bash
npm run build
```

### 2. Deploy
```bash
# Deploy de preview
npm run deploy:preview

# Deploy em produção
npm run deploy
```

## 📁 Estrutura Otimizada para Vercel

O projeto já está configurado com:

```
youfeel/
├── api/                    # Serverless Functions
│   ├── analyze.js         # Endpoint de análise
│   └── health.js          # Health check
├── vercel.json            # Configuração da Vercel
├── dist/                  # Build do frontend (gerado)
└── src/                   # Código fonte
```

## 🔍 Configurações da Vercel

### vercel.json
```json
{
  "version": 2,
  "framework": "vite",
  "functions": {
    "api/analyze.js": { "runtime": "nodejs18.x" },
    "api/health.js": { "runtime": "nodejs18.x" }
  },
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Características:
- ✅ **Frontend**: Build estático com Vite
- ✅ **Backend**: Serverless Functions
- ✅ **APIs**: YouTube + Gemini integradas
- ✅ **CORS**: Configurado automaticamente
- ✅ **Otimizações**: Build otimizado para produção

## 🌐 URLs de Produção

Após o deploy, você terá:
- **Frontend**: `https://seu-projeto.vercel.app`
- **API Analyze**: `https://seu-projeto.vercel.app/api/analyze`
- **API Health**: `https://seu-projeto.vercel.app/api/health`

## 🔧 Comandos Úteis

```bash
# Build local
npm run build

# Preview local do build
npm run preview

# Deploy preview
npm run deploy:preview

# Deploy produção
npm run deploy

# Ver logs
npx vercel logs

# Ver domínios
npx vercel domains

# Ver variáveis de ambiente
npx vercel env ls
```

## 🐛 Troubleshooting

### Erro: "Module not found"
- Verifique se todas as dependências estão em `dependencies` (não `devDependencies`)
- Execute `npm install` antes do deploy

### Erro: "API Key not found"
- Verifique as variáveis de ambiente na dashboard da Vercel
- Certifique-se de que estão configuradas para Production

### Erro: "Function timeout"
- As Serverless Functions da Vercel têm timeout de 10s (hobby) / 60s (pro)
- Otimize as chamadas para as APIs externas

### Build falha
- Verifique os logs na dashboard da Vercel
- Teste o build localmente: `npm run build`

## 📊 Monitoramento

### Analytics
- Dashboard da Vercel mostra:
  - Requisições por função
  - Tempo de resposta
  - Erros em tempo real
  - Uso de bandwidth

### Logs
```bash
# Ver logs em tempo real
npx vercel logs --follow

# Ver logs de uma função específica
npx vercel logs --follow --scope=analyze
```

## 🔒 Segurança

### Variáveis de Ambiente
- ✅ **Nunca** faça commit das chaves de API
- ✅ Use apenas a dashboard da Vercel para configurar
- ✅ Rotacione as chaves periodicamente

### Domínio Personalizado
```bash
# Adicionar domínio personalizado
npx vercel domains add youfeel.com

# Configurar DNS
npx vercel dns
```

## 💰 Custos

### Vercel Hobby (Gratuito)
- ✅ 100GB de bandwidth/mês
- ✅ Domínios ilimitados
- ✅ Serverless Functions (10s timeout)
- ✅ Deploy automático

### Limites a monitorar:
- **YouTube API**: 10.000 unidades/dia (gratuito)
- **Gemini API**: Varia conforme uso
- **Vercel**: 100GB bandwidth/mês

## 🎯 Performance

### Otimizações implementadas:
- ✅ **Build Vite**: Bundle otimizado
- ✅ **Code Splitting**: Carregamento sob demanda  
- ✅ **Serverless**: Escala automaticamente
- ✅ **CDN Global**: Vercel Edge Network
- ✅ **Compressão**: Gzip/Brotli automático

### Métricas esperadas:
- **First Load**: < 3s
- **API Response**: < 5s (análise)
- **Time to Interactive**: < 2s

---

## 🚀 Deploy Rápido

```bash
# 1. Configure as variáveis de ambiente na Vercel
# 2. Execute:
git add .
git commit -m "Deploy YouFeel"
git push origin main

# ✅ Deploy automático!
```

**Pronto!** Seu YouFeel estará disponível globalmente na Vercel! 🌍✨
