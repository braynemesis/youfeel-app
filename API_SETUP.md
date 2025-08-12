# 🔑 Configuração das APIs - YouFeel

Este documento explica como obter e configurar as chaves de API necessárias para o funcionamento do YouFeel.

## 🎥 YouTube Data API v3

### Passo a passo para obter a chave:

1. **Acesse o Google Cloud Console**
   - Vá para: https://console.cloud.google.com/

2. **Crie ou selecione um projeto**
   - Clique em "Selecionar projeto" no topo da página
   - Clique em "NOVO PROJETO" se necessário
   - Digite um nome para seu projeto (ex: "YouFeel")
   - Clique em "CRIAR"

3. **Ative a YouTube Data API v3**
   - No menu lateral, vá em "APIs e serviços" > "Biblioteca"
   - Pesquise por "YouTube Data API v3"
   - Clique na API e depois em "ATIVAR"

4. **Crie credenciais**
   - Vá em "APIs e serviços" > "Credenciais"
   - Clique em "+ CRIAR CREDENCIAIS" > "Chave de API"
   - Sua chave será gerada automaticamente
   - **IMPORTANTE**: Copie e guarde esta chave com segurança

5. **Configure restrições (Opcional mas recomendado)**
   - Clique na chave criada para editá-la
   - Em "Restrições de aplicativo", selecione "Endereços IP"
   - Adicione: `127.0.0.1` e `localhost`
   - Em "Restrições de API", selecione "Restringir chave"
   - Escolha "YouTube Data API v3"
   - Clique em "SALVAR"

## 🧠 Google Gemini API

### Passo a passo para obter a chave:

1. **Acesse o Google AI Studio**
   - Vá para: https://aistudio.google.com/app/apikey

2. **Faça login com sua conta Google**
   - Use a mesma conta do Google Cloud Console (recomendado)

3. **Crie uma API Key**
   - Clique em "Create API Key"
   - Selecione o projeto criado anteriormente
   - Clique em "Create API Key in existing project"

4. **Copie sua chave**
   - A chave será exibida na tela
   - **IMPORTANTE**: Copie e guarde esta chave com segurança
   - Esta chave não será mostrada novamente!

### 🤖 Modelos Disponíveis:
O YouFeel está configurado para usar o modelo `gemini-1.5-pro`, que oferece:
- Melhor qualidade de análise de sentimentos
- Suporte completo a `generateContent`
- Maior capacidade de contexto
- Respostas mais precisas em português

## 🔧 Configuração no Projeto

### 1. Crie o arquivo `.env`
Na raiz do projeto, crie um arquivo chamado `.env` (sem extensão):

```env
# YouTube Data API v3
YOUTUBE_API_KEY=sua_chave_youtube_aqui

# Google Gemini API
GEMINI_API_KEY=sua_chave_gemini_aqui

# Server Configuration
PORT=3001
```

### 2. Substitua as chaves
- Substitua `sua_chave_youtube_aqui` pela chave da YouTube Data API
- Substitua `sua_chave_gemini_aqui` pela chave da Gemini API

### 3. Exemplo de arquivo `.env`
```env
YOUTUBE_API_KEY=AIzaSyDdVgKwhZl4ljuFTVrt123456789abcdef
GEMINI_API_KEY=AIzaSyBgKhZl4ljuFTVrt987654321fedcba
PORT=3001
```

## 🚨 Segurança

### ⚠️ IMPORTANTE:
- **NUNCA** compartilhe suas chaves de API publicamente
- **NUNCA** faça commit do arquivo `.env` para repositórios públicos
- O arquivo `.gitignore` já está configurado para ignorar o `.env`
- Mantenha suas chaves seguras e privadas

### 💰 Custos:
- **YouTube Data API**: Gratuita até 10.000 unidades/dia
- **Gemini API**: Pode ter custos após o limite gratuito
- Monitore seu uso no Google Cloud Console

## 🔄 Limites de Taxa

### YouTube Data API:
- 10.000 unidades por dia (gratuito)
- 1 busca de vídeo = ~1 unidade
- 1 busca de comentários = ~1 unidade

### Gemini API:
- Varia conforme o modelo usado
- Verifique os limites atuais no Google AI Studio

## 🆘 Solução de Problemas

### Erro: "API key not valid"
- Verifique se a chave foi copiada corretamente
- Confirme se a API está ativada no Google Cloud Console
- Aguarde alguns minutos após a criação (pode demorar para ativar)

### Erro: "Quota exceeded"
- Você atingiu o limite diário da API
- Aguarde até o próximo dia ou aumente sua cota

### Erro: "Access denied"
- Verifique as restrições da chave de API
- Confirme se o IP está liberado (se configurou restrições)

## 📞 Suporte

Se você encontrar problemas:
1. Verifique a documentação oficial do Google
2. Confirme se todas as APIs estão ativadas
3. Teste as chaves em uma ferramenta como Postman
4. Verifique os logs do console para erros específicos

---

**Lembre-se**: Mantenha suas chaves de API seguras e monitore seu uso regularmente! 🔐
