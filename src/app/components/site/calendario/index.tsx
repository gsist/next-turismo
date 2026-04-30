'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaCalendarDay } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import axios from 'axios';
import { FiRefreshCw } from 'react-icons/fi';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

interface Event {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

interface EventoAPI {
  id: number;
  titulo: string;
  data_inicio_evento: string;
  data_fim_evento: string;
  criado_em: string;
}

const Calendario: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [today, setToday] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setToday(new Date());
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<{ eventos: EventoAPI[] }>(`${baseURL}/eventos`);
      
      // Mapear eventos da API para o formato do calendário
      const mappedEvents: Event[] = response.data.eventos.map(evento => ({
        id: String(evento.id),
        name: evento.titulo,
        startDate: evento.data_inicio_evento,
        endDate: evento.data_fim_evento,
      }));
      
      setEvents(mappedEvents);
    } catch (err: any) {
      console.error("Erro ao buscar eventos:", err);
      setError(err.response?.data?.message || "Não foi possível carregar os eventos.");
    } finally {
      setLoading(false);
    }
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const getDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getEventsOnDay = (day: number): Event[] => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => {
      const start = event.startDate;
      const end = event.endDate;
      return dateStr >= start && dateStr <= end;
    });
  };

  const isPastDate = (day: number): boolean => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dateToCheck < todayDate;
  };

  const isToday = (day: number): boolean => {
    return currentYear === today.getFullYear() && 
           currentMonth === today.getMonth() && 
           day === today.getDate();
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    setSelectedDate(null);
  };

  const canGoPrevious = true; // Permitir navegar para qualquer ano

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const days = getDaysArray();

  const eventsThisMonth = events.filter(event => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);
    const monthStart = new Date(currentYear, currentMonth, 1);
    const monthEnd = new Date(currentYear, currentMonth + 1, 0);
    return eventStart <= monthEnd && eventEnd >= monthStart;
  });

  const handleDayClick = (day: number) => {
    if (isPastDate(day)) return;
    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
    setSelectedDate(selectedDate === dateKey ? null : dateKey);
  };

  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 pt-24">
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center gap-3 rounded-2xl bg-white/50 backdrop-blur px-6 py-4 shadow-2xl border border-gray-200/50">
            <FiRefreshCw className="h-5 w-5 animate-spin text-[#00BDFF]" />
            <span className="text-sm font-medium text-gray-600">Carregando eventos...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 pt-24">
        <div className="rounded-xl border border-red-400/50 bg-red-50 p-4 text-sm text-red-600 flex items-center gap-3">
          <span>{error}</span>
          <button 
            onClick={fetchEvents}
            className="ml-auto px-3 py-1 bg-red-100 hover:bg-red-200 rounded-lg text-xs font-medium transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 pt-24">
      {/* Título fixo Calendário 2026 */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex items-center gap-3">
          <IoCalendarOutline className="text-[#00BDFF] text-3xl" />
          <h2 className="text-3xl font-bold text-gray-800">
            Calendário <span className="text-[#0044CA]">{currentYear}</span>
          </h2>
        </div>
      </motion.div>

      {/* Controles de Navegação */}
      <div className="flex justify-between items-center mb-4">
        <motion.button
          onClick={goToPreviousMonth}
          disabled={!canGoPrevious}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            canGoPrevious
              ? 'bg-[#0044CA] text-white hover:bg-[#0037C1] cursor-pointer'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={canGoPrevious ? { scale: 1.02 } : {}}
          whileTap={canGoPrevious ? { scale: 0.98 } : {}}
        >
          <FaChevronLeft size={12} />
          Anterior
        </motion.button>
        
        <motion.span 
          className="text-lg font-semibold text-gray-800"
          key={currentMonth}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {monthNames[currentMonth]}
        </motion.span>
        
        <motion.button
          onClick={goToNextMonth}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium bg-[#0044CA] text-white hover:bg-[#0037C1] transition-all cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Próximo
          <FaChevronRight size={12} />
        </motion.button>
      </div>

      {/* Calendário com Borda Preta */}
      <motion.div 
        className="bg-white rounded-xl shadow-md overflow-hidden border border-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Dias da semana */}
        <div className="grid grid-cols-7 bg-[#0044CA] text-white">
          {dayNames.map((day) => (
            <div key={day} className="text-center py-2 text-xs font-semibold">
              {day}
            </div>
          ))}
        </div>

        {/* Dias do mês */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            const events = day ? getEventsOnDay(day) : [];
            const past = day ? isPastDate(day) : false;
            const todayDate = day ? isToday(day) : false;
            const isCurrentDay = todayDate;
            const hasEvent = events.length > 0;
            const isSelected = selectedDate === `${currentYear}-${currentMonth + 1}-${day}`;
            const eventCount = events.length;

            return (
              <motion.div
                key={index}
                className={`
                  aspect-square p-1 border-b border-r border-gray-100
                  ${day === null ? 'bg-gray-50' : 'bg-white'}
                  ${day !== null && !past && hasEvent ? 'cursor-pointer' : ''}
                  ${day !== null && past ? 'cursor-not-allowed' : ''}
                `}
                whileHover={day !== null && !past && hasEvent ? { scale: 0.98 } : {}}
                onClick={() => day !== null && !past && handleDayClick(day)}
              >
                {day !== null && (
                  <div className={`
                    h-full w-full rounded-lg p-1 flex flex-col items-center justify-start transition-all
                    ${past ? 'bg-gray-100 opacity-60' : ''}
                    ${hasEvent && !past ? 'bg-[#00BDFF]/20 hover:bg-[#00BDFF]/30' : ''}
                    ${hasEvent && !past && !isCurrentDay ? 'border-2 border-[#00BDFF]' : ''}
                    ${isSelected ? 'ring-4 ring-[#F9BC00] ring-offset-1' : ''}
                  `}>
                    <span className={`
                      text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full transition-all
                      ${isCurrentDay ? 'bg-[#F9BC00] text-white font-bold scale-110 shadow-lg' : ''}
                      ${past ? 'text-gray-400' : 'text-gray-700'}
                      ${hasEvent && !past && !isCurrentDay ? 'font-bold text-[#0044CA]' : ''}
                    `}>
                      {day}
                    </span>
                    
                    {/* Indicadores de eventos */}
                    {hasEvent && !past && (
                      <div className="flex flex-col items-center gap-0.5 mt-1">
                        <div className="flex gap-0.5">
                          {eventCount === 1 && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                          )}
                          {eventCount === 2 && (
                            <>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                            </>
                          )}
                          {eventCount >= 3 && (
                            <div className="flex items-center gap-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                            </div>
                          )}
                        </div>
                        {eventCount > 1 && (
                          <span className="text-[9px] font-semibold text-[#0044CA]">
                            {eventCount} eventos
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Indicador de dia passado */}
                    {past && (
                      <div className="mt-1">
                        <div className="w-6 h-px bg-gray-300" />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Lista de Eventos do Mês */}
      <motion.div 
        className="mt-5 bg-white rounded-xl shadow-md p-4 border border-black/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
          <FaStar className="text-[#F9BC00] text-sm" />
          Eventos deste mês
          {eventsThisMonth.length > 0 && (
            <span className="text-xs font-normal text-gray-500">({eventsThisMonth.length})</span>
          )}
        </h3>
        
        <div className="space-y-2 max-h-48 overflow-y-auto">
          <AnimatePresence>
            {eventsThisMonth.length > 0 ? (
              eventsThisMonth.map((event, idx) => {
                const startDay = new Date(event.startDate).getDate();
                const endDay = new Date(event.endDate).getDate();
                const startMonth = new Date(event.startDate).getMonth();
                const endMonth = new Date(event.endDate).getMonth();
                const startYear = new Date(event.startDate).getFullYear();
                const eventDate = new Date(event.startDate);
                const isPastEvent = eventDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-colors border-l-4 border-[#00BDFF] ${
                      isPastEvent ? 'bg-gray-100 opacity-60' : 'bg-gray-50 hover:bg-[#00BDFF]/10'
                    }`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      isPastEvent ? 'bg-gray-300' : 'bg-[#00BDFF]/20'
                    }`}>
                      <FaCalendarDay className={`text-sm ${isPastEvent ? 'text-gray-500' : 'text-[#00BDFF]'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-sm ${isPastEvent ? 'text-gray-500' : 'text-gray-800'}`}>
                        {event.name}
                      </p>
                      <p className={`text-xs ${isPastEvent ? 'text-gray-400' : 'text-gray-500'}`}>
                        {startDay === endDay && startMonth === endMonth
                          ? `Dia ${startDay} de ${monthNames[startMonth]}${startYear !== currentYear ? ` de ${startYear}` : ''}`
                          : startMonth === endMonth
                          ? `Dias ${startDay} a ${endDay} de ${monthNames[startMonth]}`
                          : `${startDay} de ${monthNames[startMonth]} a ${endDay} de ${monthNames[endMonth]}`
                        }
                        {isPastEvent && " (Realizado)"}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${isPastEvent ? 'bg-gray-400' : 'bg-[#00BDFF]'}`} />
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-400 text-sm">Nenhum evento programado para este mês</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Detalhe do Dia Selecionado */}
      {selectedDate && (() => {
        const day = parseInt(selectedDate.split('-')[2]);
        const eventsOnSelectedDay = getEventsOnDay(day);
        
        if (eventsOnSelectedDay.length === 0) return null;
        
        return (
          <motion.div 
            className="mt-3 bg-[#00BDFF]/10 rounded-xl p-3 border-2 border-[#00BDFF]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <h4 className="text-xs font-semibold text-[#0044CA] mb-2 flex items-center gap-2">
              <FaCalendarDay className="text-[#00BDFF]" />
              Eventos do dia {day} de {monthNames[currentMonth]}:
            </h4>
            <div className="space-y-1.5">
              {eventsOnSelectedDay.map((event, idx) => (
                <div key={event.id} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BDFF]" />
                  <span className="text-gray-700 text-xs font-medium">{event.name}</span>
                  {new Date(event.startDate).getDate() !== new Date(event.endDate).getDate() && (
                    <span className="text-[10px] text-gray-500">
                      (até dia {new Date(event.endDate).getDate()} de {monthNames[new Date(event.endDate).getMonth()]})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );
      })()}
    </div>
  );
};

export default Calendario;