import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
const Diagnostico = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate('/quiz');
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Seu filho merece mais do que telas.
            <br />
            <span className="text-blue-600">Você merece menos estresse.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Responda nosso <strong>Diagnóstico Rápido de 60 segundos</strong> e receba uma análise instantânea 
            e um plano de ação recomendado para transformar a rotina da sua família.
          </p>

          {/* Card Principal */}
          <Card className="max-w-2xl mx-auto shadow-2xl border-0 mb-8">
            <CardContent className="p-8">
              <div className="mb-8">
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Diagnóstico Gratuito Personalizado
                </h2>
                <p className="text-gray-600 mb-6">
                  Descubra exatamente quais atividades funcionarão melhor para a sua família 
                  com base no perfil dos seus filhos e na sua rotina.
                </p>
              </div>

              <div className="space-y-4 mb-8 text-left">
                {["✅ Análise personalizada do seu perfil familiar", "✅ Recomendações específicas para sua situação", "✅ Plano de ação imediato e prático", "✅ Acesso a estratégias comprovadas"].map((benefit, index) => <div key={index} className="flex items-center text-gray-700">
                    <span className="text-lg">{benefit}</span>
                  </div>)}
              </div>

              <Button onClick={handleStartQuiz} size="lg" className="w-full py-4 text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                🚀 COMEÇAR DIAGNÓSTICO GRATUITO
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                ⏱️ Leva apenas 60 segundos • 🔒 100% Gratuito • 📱 Resultado Instantâneo
              </p>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              <strong>Mais de 2.847 famílias</strong> já transformaram sua rotina
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-2xl">⭐</span>)}
              <span className="ml-2 text-gray-600 font-semibold">4.9/5 (1.234 avaliações)</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Diagnostico;