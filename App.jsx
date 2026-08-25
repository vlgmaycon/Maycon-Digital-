import React, { useState } from 'react';

export default function App() {
  const [servicoSelecionado, setServicoSelecionado] = useState('');

  const enviarWhatsApp = (e) => {
    e.preventDefault();
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de um orçamento para: ${servicoSelecionado || 'Serviços Digitais'}`
    );
    window.open(`https://wa.me/5500000000000?text=${mensagem}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* HEADER / NAVEGAÇÃO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SUAMARCA<span className="text-slate-400 font-light">.digital</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio</a>
            <a href="#comparativo" className="hover:text-cyan-400 transition-colors">Diferenciais</a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Design • Websites • Anúncios
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Aumente suas vendas com um{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              design que converte
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Criamos identidades visuais marcantes, landing pages ultra-rápidas e campanhas de tráfego pago estratégicas para atrair clientes prontos para comprar de você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-center transition-all shadow-xl shadow-cyan-500/25"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#portfolio"
              className="border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-300 font-medium px-8 py-4 rounded-xl text-center transition-all"
            >
              Ver Trabalhos
            </a>
          </div>
        </div>

        {/* MOCKUP VISUAL */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="aspect-video bg-slate-950 rounded-lg overflow-hidden border border-slate-800/80 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl font-bold mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sua Marca em Destaque</h3>
              <p className="text-slate-400 text-sm max-w-sm">
                Interface moderna otimizada para computadores e smartphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Soluções Completas para o Seu Negócio</h2>
            <p className="text-slate-400">Tudo o que você precisa para dominar seu mercado e vender online.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                🌐
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Landing Pages & Sites</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Páginas ultra-rápidas, responsivas para celular e desenhadas com foco em transformar visitantes em clientes.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tráfego Pago</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Gestão de anúncios no Google Ads e Meta Ads (Instagram/Facebook) direcionando compradores prontos ao seu WhatsApp.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                🎨
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Branding & Identidade Visual</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Criação de logos profissionais, paletas de cores e materiais digitais que agregam valor instantâneo à sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Projetos Recentes</h2>
          <p className="text-slate-400">Confira um pouco do trabalho que desenvolvemos para nossos clientes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="aspect-video bg-slate-950 flex items-center justify-center border-b border-slate-800 group-hover:opacity-90 transition-opacity">
                <span className="text-slate-600 font-mono text-sm">[ IMAGEM DO PROJETO {item} ]</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Landing Page + Tráfego</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Projeto Comercial #{item}</h3>
                <p className="text-slate-400 text-sm">Desenvolvimento de identidade de marca e estrutura de vendas online.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARATIVO / DIFERENCIAIS */}
      <section id="comparativo" className="py-20 px-6 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Por que investir na sua estrutura digital?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-950/20 border border-red-900/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <span>❌</span> Sem Estrutura Profissional
              </h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Depende apenas de indicações e boca a boca.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Perde clientes para concorrentes com site melhor.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  Imagem amadora que impede a cobrança de preços altos.
                </li>
              </ul>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-800/40 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <span>✅</span> Com Nossa Estrutura
              </h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  Anúncios atraindo novos clientes todos os dias.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  Site rodando 24 horas por dia apresentando seu trabalho.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">•</span>
                  Posicionamento premium que passa confiança imediata.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO / CTA */}
      <section id="contato" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          Selecione o serviço que você precisa e envie uma mensagem diretamente para nosso WhatsApp.
        </p>

        <form onSubmit={enviarWhatsApp} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-left max-w-xl mx-auto shadow-2xl">
          <label className="block text-sm font-medium text-slate-300 mb-2">Qual serviço você precisa?</label>
          <select
            value={servicoSelecionado}
            onChange={(e) => setServicoSelecionado(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 mb-6 focus:outline-none focus:border-cyan-500"
            required
          >
            <option value="">Selecione uma opção...</option>
            <option value="Landing Page / Site">Landing Page / Site</option>
            <option value="Gestão de Tráfego Pago">Gestão de Tráfego Pago</option>
            <option value="Identidade Visual / Logo">Identidade Visual / Logo</option>
            <option value="Pacote Completo">Pacote Completo (Site + Logo + Tráfego)</option>
          </select>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-center block"
          >
            Solicitar Orçamento via WhatsApp 🚀
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Suamorca Digital. Todos os direitos reservados.</p>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl shadow-emerald-500/30 transition-transform hover:scale-110"
        aria-label="Atendimento via WhatsApp"
      >
        💬
      </a>
    </div>
  );
}