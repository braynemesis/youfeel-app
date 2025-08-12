#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

console.log('🚀 Setup do YouFeel para Vercel\n');

try {
  // Verificar se está logado na Vercel
  console.log('1. Verificando login na Vercel...');
  try {
    execSync('npx vercel whoami', { stdio: 'ignore' });
    console.log('✅ Logado na Vercel');
  } catch {
    console.log('❌ Não logado na Vercel');
    console.log('Execute: npx vercel login');
    process.exit(1);
  }

  // Verificar variáveis de ambiente
  console.log('\n2. Verificando variáveis de ambiente...');
  if (!fs.existsSync('.env')) {
    console.log('⚠️  Arquivo .env não encontrado');
    console.log('Crie um arquivo .env com suas chaves de API');
    console.log('Veja: API_SETUP.md para instruções');
  } else {
    console.log('✅ Arquivo .env encontrado');
  }

  // Build do projeto
  console.log('\n3. Fazendo build do projeto...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build concluído');

  // Deploy
  console.log('\n4. Fazendo deploy...');
  execSync('npx vercel --prod', { stdio: 'inherit' });
  
  console.log('\n🎉 Deploy concluído!');
  console.log('\n📋 Próximos passos:');
  console.log('1. Configure as variáveis de ambiente na dashboard da Vercel');
  console.log('2. Teste sua aplicação');
  console.log('3. Configure um domínio personalizado (opcional)');
  
} catch (error) {
  console.error('❌ Erro durante o setup:', error.message);
  process.exit(1);
}
