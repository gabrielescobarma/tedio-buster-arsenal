
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone, Shield, Clock } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Finalize Seu Pedido
            </h1>
            <p className="text-xl text-gray-600">
              Você está a um passo de transformar a rotina da sua família!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Resumo do Produto */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Arsenal Anti-Tédio</h3>
                  <p className="text-gray-600 mb-4">
                    Mais de 50 atividades lúdicas e educativas para aplicar hoje
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Valor do produto:</span>
                    <span className="text-lg line-through text-gray-500">R$ 97,00</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Desconto especial:</span>
                    <span className="text-lg text-green-600">- R$ 72,10</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">Total:</span>
                    <span className="text-3xl font-bold text-green-600">R$ 24,90</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Clock, text: "Acesso imediato após o pagamento" },
                    { icon: Shield, text: "Garantia de 7 dias ou seu dinheiro de volta" },
                    { icon: Smartphone, text: "Funciona em qualquer dispositivo" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <item.icon className="w-5 h-5 mr-3 text-green-600" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Formulário de Pagamento */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Dados de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Método de Pagamento */}
                <div className="mb-6">
                  <Label className="text-lg font-semibold mb-4 block">Forma de Pagamento</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center transition-all ${
                        paymentMethod === 'pix'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Smartphone className="w-6 h-6 mr-2" />
                      PIX
                    </button>
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center transition-all ${
                        paymentMethod === 'card'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mr-2" />
                      Cartão
                    </button>
                  </div>
                </div>

                {/* Dados Pessoais */}
                <div className="space-y-4 mb-6">
                  <div>
                    <Label htmlFor="email">E-mail para receber o produto</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome completo" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">WhatsApp (para suporte)</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" className="mt-1" />
                  </div>
                </div>

                {/* Campos específicos do método de pagamento */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="cardNumber">Número do cartão</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Vencimento</Label>
                        <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="000" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  size="lg"
                  className="w-full py-4 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {paymentMethod === 'pix' ? '📱 PAGAR COM PIX' : '💳 FINALIZAR COMPRA'}
                </Button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  🔒 Pagamento 100% seguro e criptografado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
