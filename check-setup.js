#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 Verificando configuração do YouFeel...\n');

// Verificar Node.js
console.log(`📦 Node.js: ${process.version}`);

try {
  if (fs.existsSync('node_modules')) {
    console.log('✅ node_modules encontrado');
  } else {
    console.log('❌ node_modules não encontrado - execute: npm install');
    process.exit(1);
  }

  // Verificar arquivo .env
  if (fs.existsSync('.env')) {
    console.log('✅ Arquivo .env encontrado');
    
    const envContent = fs.readFileSync('.env', 'utf8');
    
    if (envContent.includes('YOUTUBE_API_KEY=') && !envContent.includes('sua_chave_youtube_aqui')) {
      console.log('✅ YouTube API configurada');
    } else {
      console.log('⚠️  YouTube API não configurada');
    }
    
    if (envContent.includes('GEMINI_API_KEY=') && !envContent.includes('sua_chave_gemini_aqui')) {
      console.log('✅ Gemini API configurada');
    } else {
      console.log('⚠️  Gemini API não configurada');
    }
  } else {
    console.log('❌ Arquivo .env não encontrado');
    console.log('📋 Crie um arquivo .env com:');
    console.log('   YOUTUBE_API_KEY=sua_chave_aqui');
    console.log('   GEMINI_API_KEY=sua_chave_aqui');
    console.log('   PORT=3001');
    console.log('');
    console.log('📖 Veja API_SETUP.md para instruções detalhadas');
  }

  console.log('\n🚀 Status: Configuração verificada!');
  console.log('\n📋 Para executar:');
  console.log('1. Terminal 1: npm run dev');
  console.log('2. Terminal 2: npm run server:dev');
  console.log('3. Acesse: http://localhost:5173');

} catch (error) {
  console.error('❌ Erro na verificação:', error.message);
  process.exit(1);
}
