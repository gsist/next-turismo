import Calendario from '@/app/components/site/calendario';

export default function CalendarioPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Calendário de Eventos</h1>
      <Calendario />
    </div>
  );
}