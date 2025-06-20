
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Award, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resultado = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header de Diagnóstico */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold text-lg mb-6">
              <CheckCircle className="w-6 h-6 mr-2" />
              Diagnóstico Concluído
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Seu Plano de Ação Personalizado
              <br />
              <span className="text-green-600">Está Pronto!</span>
            </h1>
          </div>

          {/* Bloco de Agitação da Dor */}
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-6">
                Suas respostas indicam que seus maiores desafios são:
              </h2>
              <div className="space-y-4">
                {[
                  "A luta diária contra o tédio e o excesso de telas",
                  "A falta de tempo e energia para preparar atividades complexas",
                  "A preocupação em oferecer um desenvolvimento de qualidade para seu filho"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      ✓
                    </div>
                    <p className="text-red-800 font-medium text-lg">{challenge}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Apresentação da Solução */}
          <Card className="mb-8 shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Para resolver <span className="text-blue-600">EXATAMENTE</span> esses pontos,
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  nosso time de pedagogos recomenda o seguinte plano de ação imediato:
                </p>
              </div>

              {/* Produto Principal */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="w-48 h-64 bg-white rounded-lg shadow-xl mx-auto flex items-center justify-center">
                      <div className="text-center text-gray-800">
                        <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                        <h3 className="font-bold text-xl mb-2">Arsenal</h3>
                        <h3 className="font-bold text-xl">Anti-Tédio</h3>
                        <p className="text-sm mt-2">50+ Atividades</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="text-3xl font-bold mb-4">
                      O Arsenal Anti-Tédio: Acesso Imediato
                    </h3>
                    <p className="text-xl mb-6 opacity-90">
                      O plano de ação completo com mais de 50 atividades lúdicas e educativas 
                      para você aplicar hoje, em menos de 5 minutos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefícios */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Clock,
                    title: "Economia de Tempo",
                    description: "Chega de pesquisar. Tenha um cardápio de atividades 'pegue e faça' sempre à mão."
                  },
                  {
                    icon: Users,
                    title: "Menos Telas, Mais Conexão",
                    description: "Atividades criadas por especialistas para engajar, divertir e fortalecer o vínculo familiar."
                  },
                  {
                    icon: Award,
                    title: "Desenvolvimento Acelerado",
                    description: "Brincadeiras que estimulam a coordenação motora, o raciocínio lógico e a criatividade."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                    <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-3 text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bônus de Ação Rápida */}
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-semibold text-lg mb-6">
                  <Gift className="w-6 h-6 mr-2" />
                  BÔNUS DE AÇÃO RÁPIDA (Presente Exclusivo do Diagnóstico)
                </div>
                
                {/* Voucher Visual */}
                <div className="bg-white text-gray-800 rounded-2xl p-8 mb-8 shadow-2xl mx-auto max-w-md">
                  <div className="border-2 border-dashed border-orange-400 rounded-lg p-6">
                    <div className="text-center">
                      <Gift className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-orange-600 mb-2">
                        Voucher VIP da Loja
                      </h3>
                      <h3 className="text-2xl font-bold text-orange-600 mb-4">
                        Arteirinhos.com
                      </h3>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-lg">
                        Economia Mínima Garantida: R$38,40
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-left bg-white/10 rounded-lg p-6 mb-8">
                  <p className="text-xl mb-4 font-semibold">
                    "Isso não é um sorteio. É um presente pela sua dedicação.
                  </p>
                  <p className="text-lg mb-4">
                    Ao garantir seu Arsenal de Atividades AGORA, você destrava também um Voucher VIP de 48% de desconto na sua primeira compra na loja Arteirinhos.com.
                  </p>
                  <p className="text-lg mb-4">
                    Vamos ser diretos: o produto mais barato deles custa R$80. Com seu voucher, você já economiza R$38,40 na hora.
                  </p>
                  <p className="text-lg font-semibold">
                    Sim, você leu certo. Só o valor deste bônus já paga o seu investimento no Arsenal hoje e ainda sobra dinheiro. É a nossa forma de garantir que sua decisão seja 100% inteligente."
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl mb-6 opacity-90">
                  Normalmente vendido por R$67, seu acesso completo está disponível hoje por apenas:
                </p>
                
                <div className="bg-white text-gray-800 rounded-lg p-6 mb-8 inline-block">
                  <div className="text-5xl font-bold text-green-600 mb-2">R$27,90</div>
                  <p className="text-sm text-gray-600">Pagamento Único via PIX ou Cartão</p>
                </div>

                <Button
                  onClick={handleBuyNow}
                  size="lg"
                  className="w-full max-w-md py-6 text-2xl font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  🚀 LIBERAR MEU PLANO POR R$27,90
                </Button>

                <p className="text-sm mt-4 opacity-80">
                  ⚡ Acesso instantâneo • 💳 Pagamento 100% seguro • 🎯 Garantia de 7 dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
