import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  Gift,
  AlertCircle,
  TrendingDown,
  Activity,
  ShieldAlert,
  Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ minutes: timeLeft.minutes - 1, seconds: 59 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          <Zap className="h-4 w-4 animate-pulse fill-white" />
          Atenção: O desconto de lançamento expira em:
        </p>
        <div className="flex items-center gap-1 font-mono text-lg font-black">
          <div className="bg-white/20 px-2 py-0.5 rounded">{formatNumber(timeLeft.minutes)}</div>
          <span>:</span>
          <div className="bg-white/20 px-2 py-0.5 rounded">{formatNumber(timeLeft.seconds)}</div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-4 hover:shadow-md transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-bold text-slate-800 hover:text-emerald-600 transition-colors"
      >
        <span className="pr-8">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-emerald-600 shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-slate-100 mt-4">
              <p className="text-slate-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const UpsellPage = ({ onAccept, onDecline }: { onAccept: () => void, onDecline: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto flex flex-col items-center py-12 px-4 font-sans">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-12 leading-tight uppercase tracking-tighter">
          FAÇA O UPGRADE NO SEU MATERIAL E POR MAIS R$10 LEVE MAIS BÔNUS.
        </h1>

        <div className="text-left space-y-6 mb-12 inline-block max-w-xl">
          <ul className="space-y-4 text-lg md:text-2xl text-slate-700 font-medium">
            <li className="flex items-center gap-4">
              <CheckCircle2 className="h-7 w-7 text-emerald-500 shrink-0" />
              <span>50 Receitas Cardioprotetoras</span>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle2 className="h-7 w-7 text-emerald-500 shrink-0" />
              <span>Plano de Refeições 21 Dias</span>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle2 className="h-7 w-7 text-emerald-500 shrink-0" />
              <span>Checklist de Monitoramento</span>
            </li>
            <li className="flex items-center gap-4 font-black text-emerald-600">
              <Zap className="h-7 w-7 shrink-0 fill-emerald-600" />
              <span>+ BONUS EXTRA: 20 RECEITAS ITALIANAS ANTI-HIPERTENSÃO</span>
            </li>
            <li className="flex items-center gap-4 font-black text-emerald-600">
              <Zap className="h-7 w-7 shrink-0 fill-emerald-600" />
              <span>+ BONUS EXTRA: 20 RECEITAS FRANCESAS ANTI-HIPERTENSÃO</span>
            </li>
          </ul>

          <div className="mt-10 pt-10 border-t-2 border-slate-100 space-y-4 text-slate-800 font-bold text-xl">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              <span>Acesso vitalício</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              <span>Atualizações futuras</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-md mx-auto mt-8">
          <button 
            onClick={onAccept}
            className="bg-[#10a34d] hover:bg-emerald-700 text-white font-black py-6 px-8 rounded-2xl text-xl md:text-3xl shadow-2xl hover:scale-105 transition-all uppercase tracking-tight"
          >
            SIM, EU QUERO O UPGRADE AGORA
          </button>
          
          <button 
            onClick={onDecline}
            className="bg-[#d11a1a] hover:bg-red-700 text-white font-black py-5 px-8 rounded-2xl text-lg md:text-xl shadow-xl hover:scale-105 transition-all uppercase tracking-tight"
          >
            NÃO, QUERO SOMENTE O PLANO BÁSICO.
          </button>
          
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mt-4">
            GARANTA AGORA: Você NÃO vai encontrar esse preço depois!
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [showUpsell, setShowUpsell] = useState(false);
  useEffect(() => {
    // Conversions API (Server-side) PageView
    const trackPageView = async () => {
      try {
        await fetch('/api/fb-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventName: 'PageView',
            userData: {},
            customData: {}
          })
        });
      } catch (error) {
        console.error('Failed to send Conversions API PageView:', error);
      }
    };
    trackPageView();
  }, []);

  const handleCheckout = async (plan: 'basic' | 'complete' | 'upgrade') => {
    let value = 0;
    if (plan === 'basic') value = 27.00;
    else if (plan === 'complete') value = 47.00;
    else if (plan === 'upgrade') value = 37.00; // 27 + 10 as requested
    
    if (plan === 'basic' && !showUpsell) {
      setShowUpsell(true);
      window.scrollTo(0, 0);
      return;
    }

    // Client-side Pixel
    // @ts-ignore
    if (typeof window.fbq !== 'undefined') {
      // @ts-ignore
      window.fbq('track', 'InitiateCheckout', { value, currency: 'BRL' });
    }

    // Conversions API (Server-side)
    try {
      await fetch('/api/fb-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName: 'InitiateCheckout',
          userData: {},
          customData: { value, currency: 'BRL' }
        })
      });
    } catch (error) {
      console.error('Failed to send Conversions API event:', error);
    }

    // Redirect to checkout (using the provided link as base)
    let checkoutUrl = '';
    if (plan === 'basic') checkoutUrl = 'https://pay.wiapy.com/o-touCprXt?plan=basic';
    else if (plan === 'complete') checkoutUrl = 'https://pay.wiapy.com/o-touCprXt?plan=complete';
    else if (plan === 'upgrade') checkoutUrl = 'https://pay.wiapy.com/o-touCprXt?plan=upgrade';
    
    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      <AnimatePresence>
        {showUpsell && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <UpsellPage 
              onAccept={() => handleCheckout('upgrade')}
              onDecline={() => handleCheckout('basic')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CountdownTimer />

      {/* 1. & 2. HEADLINE & SUBHEADLINE */}
      <header className="bg-gradient-to-b from-emerald-50 to-white pt-16 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-red-200 animate-pulse">
              ⚠️ Alerta Importante para Hipertensos
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              A <span className="text-red-600">Morte Silenciosa</span> Pode Estar Batendo à Sua Porta e Você Nem Percebeu...
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Descubra o protocolo simples que está ajudando milhares de brasileiros a <strong>blindar o coração</strong> e controlar a pressão arterial sem depender exclusivamente de remédios caros e cheios de efeitos colaterais.
            </h2>
            
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-1 flex items-center gap-3 group"
              >
                QUERO CONTROLAR MINHA PRESSÃO AGORA
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Acesso imediato e 100% seguro
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. ABERTURA (Quebra de Padrão) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight italic">
            "Cansaço constante não é normal. <br className="hidden md:block" />
            <span className="text-red-600">Só ficou comum."</span>
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* 4. DOR (Aprofundar) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
                Você sente que seu corpo está <span className="text-red-600">pedindo socorro?</span>
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Aquelas <strong>dores de cabeça</strong> frequentes, o <strong>zumbido no ouvido</strong> ou aquele <strong>desânimo</strong> inexplicável ao acordar...
                </p>
                <p>
                  Muitas pessoas ignoram esses sinais, achando que é "apenas a idade" ou "estresse do trabalho".
                </p>
                <p className="font-bold text-slate-900">
                  Mas a verdade é muito mais assustadora.
                </p>
                <p>
                  A hipertensão é chamada de <strong>morte silenciosa</strong> por um motivo: ela não avisa quando vai atacar. Ela apenas espera o momento de maior fraqueza.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full"></div>
              <img 
                src="https://picsum.photos/seed/health-danger/600/800" 
                alt="Perigo da Hipertensão" 
                className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. AGITAÇÃO */}
      <section className="py-24 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            O Próximo Segundo Pode Mudar <br className="hidden md:block" />
            <span className="underline decoration-white/30 underline-offset-8">Sua Vida Para Sempre</span>
          </h3>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Um <strong>AVC</strong> que te deixa dependente de terceiros... Um <strong>infarto</strong> fulminante que te tira de perto de quem você ama... Ou a dependência eterna de remédios que destroem seu estômago e sua libido.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <ShieldAlert className="h-10 w-10 mb-4 mx-auto text-red-200" />
              <p className="font-bold text-lg">Risco de AVC</p>
              <p className="text-sm opacity-80">Aumenta em até 7x em hipertensos sem controle.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <Heart className="h-10 w-10 mb-4 mx-auto text-red-200" />
              <p className="font-bold text-lg">Insuficiência Cardíaca</p>
              <p className="text-sm opacity-80">Seu coração se esforça demais até não aguentar mais.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <AlertCircle className="h-10 w-10 mb-4 mx-auto text-red-200" />
              <p className="font-bold text-lg">Danos Renais</p>
              <p className="text-sm opacity-80">A pressão alta é a principal causa de hemodiálise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSIGHT */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-black text-slate-900 mb-8">
            E se eu te dissesse que o problema <br />
            <span className="text-emerald-600">não é só o sal?</span>
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            A indústria farmacêutica quer que você acredite que a única saída é tomar comprimidos pelo resto da vida. Eles lucram bilhões com a sua doença.
          </p>
          <p className="text-xl text-slate-600 leading-relaxed">
            Mas a ciência moderna descobriu que existem <strong>gatilhos biológicos</strong> que, quando ativados da forma certa, podem regular sua pressão de forma natural e automática.
          </p>
        </div>
      </section>

      {/* 7. MECANISMO ÚNICO */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-emerald-100">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-black uppercase tracking-widest text-sm">A Descoberta</span>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
                O Protocolo de Regulação Natural
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Diferente de tudo o que você já viu, o nosso método foca na <strong>limpeza das artérias</strong> e no reequilíbrio dos minerais essenciais no seu sangue.
                </p>
                <p>
                  Não é uma dieta restritiva. É um <strong>ajuste estratégico</strong> na sua rotina que faz seu corpo entender que ele não precisa mais trabalhar sob pressão extrema.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    Sem exercícios exaustivos
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    Sem passar fome
                  </li>
                  <li className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    Resultados visíveis em 21 dias
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-600 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center">
                <Activity className="h-16 w-16 mb-6 animate-pulse" />
                <p className="text-2xl font-black mb-4">Efeito Cascata</p>
                <p className="opacity-90">
                  Ao regular a pressão, você automaticamente melhora seu sono, sua energia e até sua disposição sexual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APRESENTAÇÃO DO PRODUTO */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">
            Apresentamos o <br />
            <span className="text-emerald-600">Protocolo Anti-Hipertensão</span>
          </h3>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            O mapa completo e definitivo para você retomar o controle da sua saúde e viver sem o medo constante de um colapso.
          </p>
          <img 
            src="https://i.ibb.co/fVWrDhJY/IMAGEM-DO-PRODUTO-Photoroom.webp" 
            alt="Protocolo Anti-Hipertensão" 
            className="w-full max-w-lg mx-auto drop-shadow-2xl mb-12"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 9. BENEFÍCIOS */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-16">
            O Que Acontece Quando Você Começa?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Zap className="h-10 w-10 text-emerald-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">Energia Explosiva</h4>
              <p className="text-slate-400 text-sm">Acorde descansado e com disposição para aproveitar o dia com sua família.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <TrendingDown className="h-10 w-10 text-emerald-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">Pressão Estável</h4>
              <p className="text-slate-400 text-sm">Sinta o alívio de ver os números 12 por 8 no seu aparelho de pressão.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <ShieldCheck className="h-10 w-10 text-emerald-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">Menos Remédios</h4>
              <p className="text-slate-400 text-sm">Com a melhora real, seu médico poderá reduzir gradualmente suas doses.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Heart className="h-10 w-10 text-emerald-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">Coração Blindado</h4>
              <p className="text-slate-400 text-sm">Reduza drasticamente as chances de sofrer um infarto ou AVC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROVAS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
            Pessoas Reais, Resultados Reais
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Alberto, 58 anos",
                text: "Eu vivia com medo. Minha pressão batia 17/11 direto. Depois de 15 dias com o protocolo, ela estabilizou em 12/8. Me sinto 20 anos mais jovem!",
                img: "https://picsum.photos/seed/carlos/100/100"
              },
              {
                name: "Dona Neide, 64 anos",
                text: "O médico queria aumentar meu remédio, mas eu decidi tentar o protocolo antes. Em um mês, ele mesmo diminuiu a dose porque minha pressão estava perfeita.",
                img: "https://picsum.photos/seed/neide/100/100"
              },
              {
                name: "Roberto Silva, 42 anos",
                text: "Trabalho sob muito estresse e minha pressão era um perigo. O Protocolo Anti-Hipertensão foi minha salvação. Simples e direto ao ponto.",
                img: "https://picsum.photos/seed/roberto/100/100"
              }
            ].map((dep, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 italic mb-8">"{dep.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={dep.img} alt={dep.name} className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" referrerPolicy="no-referrer" />
                  <p className="font-bold text-slate-900">{dep.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BÔNUS */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Ainda Tem Mais... <br />
            <span className="text-emerald-600">Presentes Exclusivos Para Você!</span>
          </h3>
          <p className="text-slate-600">Se você agir agora, levará esses bônus totalmente de graça:</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "50 Receitas Cardioprotetoras", 
              desc: "Pratos deliciosos e rápidos que cuidam do seu coração.", 
              icon: <BookOpen className="h-6 w-6" />,
              img: "https://i.ibb.co/vxvcNmsh/bonus-1-50-receitas-Me-dia-Photoroom.png"
            },
            { 
              title: "Plano de Refeições 21 Dias", 
              desc: "Um calendário completo do que comer do café à janta.", 
              icon: <Timer className="h-6 w-6" />,
              img: "https://i.ibb.co/jv5pPRcC/bonus-2-21-dias-Photoroom.png"
            },
            { 
              title: "Checklist de Monitoramento", 
              desc: "A ferramenta ideal para você acompanhar sua evolução.", 
              icon: <ShieldCheck className="h-6 w-6" />,
              img: "https://i.ibb.co/0jcbtf2J/Bonus-3-check-list-de-acompanhamento-Photoroom.png"
            }
          ].map((bonus, idx) => (
            <div key={idx} className="bg-white p-0 rounded-3xl shadow-sm border border-emerald-100 flex flex-col overflow-hidden group">
              <div className="h-64 bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
                <img 
                  src={bonus.img} 
                  alt={bonus.title} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 text-center flex flex-col items-center">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl mb-4">
                  {bonus.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-xl">{bonus.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{bonus.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-100 w-full">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Grátis Hoje</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. OFERTA (Preços) */}
      <section id="oferta" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Escolha o Seu Plano</h3>
            <p className="text-slate-600">Invista na sua saúde hoje e evite gastos médicos amanhã.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Plano Básico */}
            <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 flex flex-col hover:border-emerald-200 transition-all">
              <div className="mb-8">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Plano Inicial</span>
                <h4 className="text-3xl font-black text-slate-900 mt-2">Básico</h4>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Acesso ao Protocolo Principal
                </li>
                <li className="flex items-center gap-3 text-slate-300 line-through">
                  <AlertCircle className="h-5 w-5" />
                  Todos os Bônus Exclusivos
                </li>
                <li className="flex items-center gap-3 text-slate-300 line-through">
                  <AlertCircle className="h-5 w-5" />
                  Produtos Secretos
                </li>
              </ul>
              <div className="mb-8">
                <p className="text-slate-400 line-through">R$ 97,00</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">R$</span>
                  <span className="text-6xl font-black text-slate-900">27</span>
                </div>
              </div>
              <button 
                onClick={() => handleCheckout('basic')}
                className="w-full py-5 rounded-2xl border-2 border-slate-900 font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
              >
                QUERO O PLANO BÁSICO
              </button>
            </div>

            {/* Plano Completo */}
            <div className="bg-slate-900 rounded-[3rem] p-10 flex flex-col relative transform md:scale-105 shadow-2xl shadow-emerald-900/20 border-4 border-emerald-500">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-900 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
                Mais Escolhido 🔥
              </div>
              <div className="mb-8">
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Recomendado</span>
                <h4 className="text-3xl font-black text-white mt-2">Completo</h4>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Protocolo Anti-Hipertensão Completo
                </li>
                <li className="flex items-center gap-3 text-white font-bold">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Todos os 3 Bônus Exclusivos
                </li>
                <li className="flex items-center gap-3 text-emerald-400 font-bold">
                  <Zap className="h-5 w-5" />
                  + 2 Produtos Secretos Revelados
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Acesso imediato
                </li>
              </ul>
              <div className="mb-8">
                <p className="text-slate-500 line-through">R$ 197,00</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-emerald-500">R$</span>
                  <span className="text-7xl font-black text-white">47</span>
                </div>
                <p className="text-emerald-400 text-xs font-bold mt-2">MAIOR ECONOMIA E RESULTADOS</p>
              </div>
              <button 
                onClick={() => handleCheckout('complete')}
                className="w-full py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black text-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1"
              >
                QUERO O PLANO COMPLETO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 14. GARANTIA */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-12">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" 
            alt="Garantia" 
            className="w-40 h-40 object-contain"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">Sua Satisfação ou Seu Dinheiro de Volta</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Você tem <strong>7 dias inteiros</strong> para testar o protocolo. Se por qualquer motivo você achar que não valeu a pena, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo meu.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <ShieldCheck className="h-5 w-5" />
              Garantia Incondicional de 7 Dias
            </div>
          </div>
        </div>
      </section>

      {/* 13. URGÊNCIA (Reforço) */}
      <section className="py-20 px-4 bg-red-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-red-700 mb-4">
            ⚠️ Atenção: Esta Oferta Pode Sair do Ar a Qualquer Momento
          </h3>
          <p className="text-red-600 font-medium">
            O preço promocional e os bônus gratuitos são exclusivos para este lote de lançamento. Não garantimos que este valor estará disponível amanhã.
          </p>
        </div>
      </section>

      {/* 16. FECHAMENTO & FINAL CTA */}
      <section className="py-32 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Você Está a Um Passo de <br />
            <span className="text-emerald-600">Mudar Sua História</span>
          </h3>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Você pode ignorar este aviso e continuar correndo o risco de um colapso a qualquer momento... Ou pode agir agora e garantir um futuro longo e saudável ao lado de quem você ama.
          </p>
          <button 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
          >
            QUERO COMEÇAR HOJE MESMO
            <ArrowRight className="h-7 w-7" />
          </button>
          <div className="mt-12 flex justify-center gap-8 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" alt="Pix" className="h-6" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-900 text-slate-500 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h4 className="text-white font-black text-xl mb-6">Protocolo Anti-Hipertensão</h4>
              <p className="text-sm leading-relaxed max-w-2xl">
                Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à sua saúde. Os resultados podem variar de pessoa para pessoa. Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Links Úteis</h4>
              <div className="flex flex-col gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Contato</a>
              </div>
            </div>
          </div>
          <p className="text-xs border-t border-white/5 pt-8">
            © 2026 Protocolo Anti-Hipertensão. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
