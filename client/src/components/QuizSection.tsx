import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'O que é densidade?',
    options: [
      'A cor de um líquido',
      'A relação entre massa e volume',
      'A temperatura de uma substância',
      'O peso de um objeto'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: 'Qual líquido é mais denso?',
    options: [
      'Álcool',
      'Óleo',
      'Água',
      'Mel'
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: 'Por que o óleo flutua na água?',
    options: [
      'Porque é mais leve',
      'Porque tem menos densidade que a água',
      'Porque é transparente',
      'Porque é líquido'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: 'O que acontece se misturarmos vigorosamente os líquidos?',
    options: [
      'Eles permanecem misturados para sempre',
      'As camadas desaparecem completamente',
      'Eles eventualmente se separam novamente',
      'Mudam de cor'
    ],
    correctAnswer: 2
  }
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const handleAnswerClick = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;

    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
      message = 'Perfeito! Você dominou o assunto!';
    } else if (percentage >= 75) {
      message = 'Muito bem! Você entendeu o experimento!';
    } else if (percentage >= 50) {
      message = 'Bom trabalho! Revise alguns conceitos.';
    } else {
      message = 'Continue estudando! A prática leva à perfeição.';
    }

    return (
      <section 
        id="quiz" 
        className="py-16 md:py-20 lg:py-24 px-6 bg-muted/30"
        data-testid="section-quiz"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Teste Seus Conhecimentos
          </h2>

          <Card className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">Quiz Completo!</h3>
              <p className="text-lg text-muted-foreground mb-4">{message}</p>
            </div>

            <div className="text-5xl font-heading font-bold text-primary mb-8">
              {score}/{questions.length}
            </div>

            <Button 
              size="lg"
              onClick={resetQuiz}
              data-testid="button-retry-quiz"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Tentar Novamente
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];

  return (
    <section 
      id="quiz" 
      className="py-16 md:py-20 lg:py-24 px-6 bg-muted/30"
      data-testid="section-quiz"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Teste Seus Conhecimentos
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Responda às perguntas sobre densidade e veja quanto você aprendeu!
        </p>

        <Card className="p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentQuestion
                        ? 'bg-primary'
                        : answeredQuestions[index]
                        ? 'bg-primary/40'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl">
              {question.question}
            </h3>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctAnswer;
              const isSelected = selectedAnswer === index;
              
              let buttonClass = 'justify-start text-left h-auto py-4 px-6';
              let icon = null;

              if (isAnswered && isSelected) {
                if (isCorrect) {
                  buttonClass += ' bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400';
                  icon = <CheckCircle2 className="w-5 h-5 flex-shrink-0" />;
                } else {
                  buttonClass += ' bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-400';
                  icon = <XCircle className="w-5 h-5 flex-shrink-0" />;
                }
              } else if (isAnswered && isCorrect) {
                buttonClass += ' bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400';
                icon = <CheckCircle2 className="w-5 h-5 flex-shrink-0" />;
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswerClick(index)}
                  disabled={isAnswered}
                  data-testid={`button-answer-${index}`}
                >
                  <span className="flex-1">{option}</span>
                  {icon}
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
