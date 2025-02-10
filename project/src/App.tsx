import React, { useState } from 'react';
import { Heart, Stars } from 'lucide-react';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1.2);
  const [noButtonText, setNoButtonText] = useState('No');
  const [noButtonVisible, setNoButtonVisible] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const noResponses = [
    "¿Estás seguro 😅?",
    "Piénsalo otra vez",
    "¿Última oportunidad?",
    "¿Me romperás el corazón 💔?",
    "🥺",
    "Por favor 🙏🏻",
    ""
  ];
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0);

  const handleNoClick = () => {
    if (currentResponseIndex < noResponses.length) {
      setNoButtonText(noResponses[currentResponseIndex]);
      setCurrentResponseIndex(prev => prev + 1);
      
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      setNoButtonPosition({ x: randomX, y: randomY });
      
      setYesButtonSize(prev => prev + 0.2);

      if (currentResponseIndex === noResponses.length - 1) {
        setNoButtonVisible(false);
      }
    }
  };

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(true);
    setTimeout(() => {
      setShowEnvelope(false);
      setShowScroll(true);
    }, 2000);
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4">
        {showEnvelope && (
          <div 
            className={`envelope ${envelopeOpen ? 'open' : ''}`}
            onClick={handleEnvelopeClick}
          >
            <div className="flap"></div>
            <div className="pocket"></div>
          </div>
        )}
        {envelopeOpen && (
           <div className="hearts">
            <Heart className="w-8 h-8 text-rose-600 fill-rose-600" />
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
        </div>
        )}
        
        {showScroll && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="animate-pulse mb-8">
              <Heart className="w-24 h-24 text-rose-600 fill-rose-600 mx-auto" />
            </div>
            <h1 className="text-2xl font-bold mb-4">¡Sabía que dirías que sí! 💖</h1>
            <div className="mb-4">
              <p className="text-lg text-gray-700 mb-4">
                Desde que llegaste a mi vida todo es más bonito, más tranquilo y lleno de amor. 
                Incluso a distancia quiero que siempre seas protagonista y nunca espectador. 
                Mi corazón y mi mente te pertenecen.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Eres mi persona favorita, mi lugar seguro, el sol que ilumina mis días 
                y el dueño de mis pensamientos más bonitos.
              </p>
              <p className="text-lg text-rose-600 font-semibold">
                Te amo mi niño, le pido a la vida y al universo que podamos compartir mucho tiempo juntos. 💕🦁🐻‍❄️💕
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="absolute top-4 left-4">
          <Stars className="w-6 h-6 text-rose-600 animate-pulse" />
        </div>
        <div className="absolute top-4 right-4">
          <Stars className="w-6 h-6 text-rose-600 animate-pulse" />
        </div>
        
        <div className="mb-6">
          <Heart className="w-24 h-24 text-rose-600 mx-auto animate-bounce" />
        </div>
        
        <h1 className="text-2xl font-bold mb-4">
          ¿Leoncito, quieres ser mi San Valentín?
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={handleAccept}
            style={{ fontSize: `${yesButtonSize}rem` }}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            ¡Sí!💖
          </button>
          
          {noButtonVisible && (
            <button
              onClick={handleNoClick}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'all 0.3s ease'
              }}
              className="block w-fit mx-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full transition-colors"
            >
              {noButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;