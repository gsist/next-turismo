'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Event {
  id: string;
  name: string;
  date: string; // YYYY-MM-DD
}

const mockEvents: Event[] = [
  { id: '1', name: 'Festival de Música', date: '2026-05-15' },
  { id: '2', name: 'Feira de Artesanato', date: '2026-06-20' },
  { id: '3', name: 'Concerto ao Ar Livre', date: '2026-07-25' },
  { id: '4', name: 'Exposição de Fotografia', date: '2026-08-05' },
  { id: '5', name: 'Palestra sobre Turismo', date: '2026-09-10' },
  { id: '6', name: 'Evento Antigo', date: '2024-12-25' },
];

const Calendario: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  const eventsByMonth: { [key: string]: Event[] } = {};
  mockEvents.forEach(event => {
    const monthKey = event.date.substring(0, 7); // YYYY-MM
    if (!eventsByMonth[monthKey]) {
      eventsByMonth[monthKey] = [];
    }
    eventsByMonth[monthKey].push(event);
  });

  // Filter months for current year
  const currentYearMonths = Object.keys(eventsByMonth).filter(monthKey => monthKey.startsWith(currentYear.toString())).sort();

  const formatMonth = (monthKey: string) => {
    const [year, month] = monthKey.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    return date.toLocaleDateString('pt-BR', { month: 'long' });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit' });
  };

  const goToPreviousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const goToNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20 bg-linear-to-br from-blue-50 to-green-50 min-h-screen">
      <motion.h2 
        className="text-3xl font-bold mb-10 text-center text-gray-800 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCalendarAlt className="text-blue-500" />
        Calendário de Eventos {currentYear}
      </motion.h2>
      <div className="flex justify-center items-center gap-4 mb-8">
        <motion.button
          onClick={goToPreviousYear}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft />
          Ano Anterior
        </motion.button>
        <span className="text-xl font-semibold text-gray-800">{currentYear}</span>
        <motion.button
          onClick={goToNextYear}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ano Seguinte
          <FaChevronRight />
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentYearMonths.length > 0 ? (
          currentYearMonths.map((monthKey, index) => (
            <motion.div 
              key={monthKey} 
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                {formatMonth(monthKey)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventsByMonth[monthKey].map(event => (
                  <motion.div 
                    key={event.id} 
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        {formatDate(event.date)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{event.name}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            className="col-span-full text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaCalendarAlt className="text-6xl text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">Sem eventos para {currentYear}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Calendario;