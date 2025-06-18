
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quando seu filho diz 'tô com tédio', qual sua reação mais comum?",
    options: [
      "Tenho uma ideia incrível na hora.",
      "Levo um tempo, mas acho algo legal.",
      "Congelo e acabo recorrendo à TV ou celular."
    ]
  },
  {
    id: 2,
    question: "Com que frequência você se sente culpada pela quantidade de tempo que seus filhos passam em frente às telas?",
    options: [
      "Raramente, tenho tudo sob controle.",
      "Às vezes, especialmente nos dias corridos.",
      "Frequentemente, e isso me incomoda muito."
    ]
  },
  {
    id: 3,
    question: "Quanto tempo você realisticamente tem por dia para preparar uma atividade do zero?",
    options: [
      "Mais de 30 minutos, adoro o processo.",
      "Entre 10 e 20 minutos, se for algo prático.",
      "Menos de 5 minutos. Preciso de algo 'pegue e faça'."
    ]
  },
  {
    id: 4,
    question: "Sua maior preocupação com as brincadeiras atuais é:",
    options: [
      "Que elas não sejam educativas o suficiente.",
      "Que elas não consigam prender a atenção por muito tempo.",
      "Ambas as opções acima."
    ]
  },
  {
    id: 5,
    question: "Imagine ter um arsenal de atividades prontas. O que seria mais valioso para você?",
    options: [
      "Economizar tempo de planejamento.",
      "Ter mais momentos de qualidade com meus filhos.",
      "Reduzir o estresse e a carga mental diária."
    ]
  },
  {
    id: 6,
    question: "Se você tivesse a ferramenta certa, estaria disposta a investir o valor de um lanche para transformar a rotina da sua família?",
    options: [
      "Sim, seria um investimento pequeno para um grande retorno.",
      "Talvez, depende da solução.",
      "Não, busco apenas soluções gratuitas."
    ]
  },
  {
    id: 7,
    question: "Estamos calculando seu plano de ação... Qual o maior obstáculo que te impede de aplicar mais atividades hoje?",
    options: [
      "Falta de ideias e materiais.",
      "Cansaço e falta de energia.",
      "Orçamento limitado para comprar brinquedos caros."
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Quiz finished, show loading and redirect
      setIsLoading(true);
      setTimeout(() => {
        navigate('/resultado');
      }, 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Analisando suas respostas...</h3>
            <p className="text-gray-600">Calculando seu plano de ação personalizado...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-blue-600">
              PERGUNTA {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}% completo
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                    selectedOption === index
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      selectedOption === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === index && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span className="text-gray-700 font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {currentQuestion === questions.length - 1 ? 'Ver Meu Diagnóstico' : 'Próxima Pergunta'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
