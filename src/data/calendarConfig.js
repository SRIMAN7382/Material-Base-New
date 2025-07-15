// Calendar configuration file with compensatory holidays and working Saturdays
// Updated based on the "MC_Academic_Calendar_2025-26.pdf"

export const calendarConfig = {
  // Current academic year calendar
  current: {
    year: "2025-26",
    title: "Main Calendar 2025-26",
    description: "Complete academic calendar for the year 2025-26",
    lastUpdated: "2025-07-15",
    
    // Working Saturdays (when Saturday is a working day due to compensation)
    // Normally Saturday and Sunday are holidays, but these Saturdays are working days
    workingSaturdays: [
      "2025-07-19", // Compensating for weekday holiday
      "2025-07-26", // Compensating for weekday holiday
      "2025-08-02", // Compensating for weekday holiday
      "2025-08-09", // Compensating for weekday holiday
      "2025-08-16", // Compensating for Independence Day (Aug 15)
      "2025-08-23", // Compensating for weekday holiday
      "2025-08-30", // Compensating for weekday holiday
      "2025-09-06", // Compensating for weekday holiday
      "2025-09-13", // Compensating for weekday holiday
      "2025-09-20", // Compensating for weekday holiday
      "2025-09-27", // Compensating for Vinayagar Chaturthi
      "2025-10-04", // Compensating for weekday holiday
      "2025-10-11", // Compensating for weekday holiday
      "2025-10-18", // Compensating for weekday holiday
      "2025-10-25", // Compensating for Deepavali holidays
      "2025-11-01", // Compensating for weekday holiday
      "2025-11-08", // Compensating for weekday holiday
      "2025-11-15", // Compensating for weekday holiday
      "2025-11-22", // Compensating for weekday holiday
      "2025-11-29", // Compensating for weekday holiday
      "2025-12-06", // Compensating for Christmas
      "2026-01-10", // Even Semester - Compensating for Pongal
      "2026-01-17", // Compensating for weekday holiday
      "2026-01-24", // Compensating for weekday holiday
      "2026-01-31", // Compensating for Republic Day
      "2026-02-07", // Compensating for weekday holiday
      "2026-02-14", // Compensating for weekday holiday
      "2026-02-21", // Compensating for weekday holiday
      "2026-02-28", // Compensating for weekday holiday
      "2026-03-07", // Compensating for Daksh festival
      "2026-03-14", // Compensating for weekday holiday
      "2026-03-21", // Compensating for weekday holiday
      "2026-03-28", // Compensating for weekday holiday
      "2026-04-04", // Compensating for Kuruksastra
      "2026-04-11", // Compensating for weekday holiday
      "2026-04-18", // Compensating for Tamil New Year
      "2026-04-25", // Compensating for weekday holiday
      "2026-05-02"  // Compensating for weekday holiday
    ],
    
    // Compensatory holidays (when weekdays are holidays due to festival compensation)
    compensatoryHolidays: [
      "2025-08-15", // Independence Day
      "2025-09-27", // Vinayagar Chaturthi
      "2025-10-01", // Saraswathi Pooja
      "2025-10-02", // Vijaya Dasami
      "2025-10-19", // Deepavali
      "2025-10-20", // Deepavali
      "2025-10-21", // Deepavali
      "2025-12-25", // Christmas
      "2026-01-14", // Boghi
      "2026-01-15", // Pongal
      "2026-01-16", // Pongal
      "2026-01-26", // Republic Day
      "2026-03-06", // Daksh
      "2026-03-07", // Daksh
      "2026-03-08", // Daksh
      "2026-04-03", // Kuruksastra
      "2026-04-04", // Kuruksastra
      "2026-04-05", // Kuruksastra
      "2026-04-14"  // Tamil New Year
    ],

    // Calendar events data
    events: [
      // Semester Events
      {
        id: 1, title: "Odd Semester Classes Commence", startDate: "2025-07-14", endDate: "2025-07-14", type: "academic", description: "Commencement of odd semester classes"
      },
      {
        id: 2, title: "CIA I Examinations", startDate: "2025-08-16", endDate: "2025-08-22", type: "exam", description: "First CIA - Odd Semester"
      },
      {
        id: 3, title: "CIA II Examinations", startDate: "2025-09-25", endDate: "2025-10-01", type: "exam", description: "Second CIA - Odd Semester"
      },
      {
        id: 4, title: "Odd Semester Practical Exams", startDate: "2025-11-06", endDate: "2025-11-12", type: "exam", description: "Odd Semester Practical Exams"
      },
      {
        id: 5, title: "Odd Semester End Exams", startDate: "2025-11-17", endDate: "2025-12-01", type: "exam", description: "Odd Semester End Semester Exams"
      },
      {
        id: 6, title: "Even Semester Classes Commence", startDate: "2026-01-05", endDate: "2026-01-05", type: "academic", description: "Commencement of even semester classes"
      },
      {
        id: 7, title: "CIA I Examinations (Even Sem)", startDate: "2026-01-19", endDate: "2026-01-24", type: "exam", description: "First CIA - Even Semester"
      },
      {
        id: 8, title: "CIA II Examinations (Even Sem)", startDate: "2026-02-11", endDate: "2026-02-13", type: "exam", description: "Second CIA - Even Semester"
      },
      {
        id: 9, title: "CIA III Examinations (Even Sem)", startDate: "2026-04-27", endDate: "2026-04-29", type: "exam", description: "Third CIA - Even Semester"
      },
      {
        id: 10, title: "Even Semester End Exams", startDate: "2026-05-04", endDate: "2026-05-18", type: "exam", description: "Even Semester End Semester Exams"
      },
      // Holidays & Important Festivals
      {
        id: 11, title: "Independence Day", startDate: "2025-08-15", endDate: "2025-08-15", type: "holiday", description: "National holiday - Independence Day"
      },
      {
        id: 12, title: "Vinayagar Chaturthi", startDate: "2025-09-27", endDate: "2025-09-27", type: "holiday", description: "Vinayagar Chaturthi"
      },
      {
        id: 13, title: "Saraswathi Pooja", startDate: "2025-10-01", endDate: "2025-10-01", type: "holiday", description: "Saraswathi Pooja"
      },
      {
        id: 14, title: "Vijaya Dasami", startDate: "2025-10-02", endDate: "2025-10-02", type: "holiday", description: "Vijaya Dasami"
      },
      {
        id: 15, title: "Deepavali", startDate: "2025-10-19", endDate: "2025-10-21", type: "holiday", description: "Deepavali Holidays"
      },
      {
        id: 16, title: "Christmas", startDate: "2025-12-25", endDate: "2025-12-25", type: "holiday", description: "Christmas"
      },
      {
        id: 17, title: "Boghi", startDate: "2026-01-14", endDate: "2026-01-14", type: "holiday", description: "Boghi"
      },
      {
        id: 18, title: "Pongal", startDate: "2026-01-15", endDate: "2026-01-16", type: "holiday", description: "Pongal"
      },
      {
        id: 19, title: "Republic Day", startDate: "2026-01-26", endDate: "2026-01-26", type: "holiday", description: "Republic Day"
      },
      {
        id: 20, title: "Daksh", startDate: "2026-03-06", endDate: "2026-03-08", type: "holiday", description: "Daksh Cultural Festival"
      },
      {
        id: 21, title: "Kuruksastra", startDate: "2026-04-03", endDate: "2026-04-05", type: "holiday", description: "Kuruksastra Festival"
      },
      {
        id: 22, title: "Tamil New Year", startDate: "2026-04-14", endDate: "2026-04-14", type: "holiday", description: "Tamil New Year"
      }
    ],
    
    // Important dates for quick reference
    importantDates: [
      {
        title: "Odd Semester Classes Commence",
        date: "2025-07-14",
        type: "academic"
      },
      {
        title: "CIA I Examinations",
        date: "2025-08-16",
        type: "exam"
      },
      {
        title: "Odd Semester End Exams",
        date: "2025-11-17",
        type: "exam"
      },
      {
        title: "Even Semester Classes Commence",
        date: "2026-01-05",
        type: "academic"
      },
      {
        title: "Even Semester End Exams",
        date: "2026-05-04",
        type: "exam"
      }
    ]
  }
};

// Helper function to check if a date is a working Saturday
export const isWorkingSaturday = (date) => {
  const dateString = date.toISOString().split('T')[0];
  return calendarConfig.current.workingSaturdays.includes(dateString);
};

// Helper function to check if a date is a compensatory holiday
export const isCompensatoryHoliday = (date) => {
  const dateString = date.toISOString().split('T')[0];
  return calendarConfig.current.compensatoryHolidays.includes(dateString);
};

// Helper function to check if a date is a regular weekend (but not working Saturday)
export const isRegularWeekend = (date) => {
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
  const isWorkingDay = isWorkingSaturday(date);
  return isWeekend && !isWorkingDay;
};

// Helper function to get the current calendar
export const getCurrentCalendar = () => {
  return calendarConfig.current;
};

// Helper function to check if calendar needs update notification
export const isCalendarRecent = (daysThreshold = 30) => {
  const lastUpdated = new Date(calendarConfig.current.lastUpdated);
  const now = new Date();
  const daysDiff = (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff <= daysThreshold;
};

// Helper function to get events by type
export const getEventsByType = (type) => {
  return calendarConfig.current.events.filter(event => event.type === type);
};

// Helper function to get upcoming events
export const getUpcomingEvents = (limit = 5) => {
  const now = new Date();
  return calendarConfig.current.events
    .filter(event => new Date(event.startDate) >= now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, limit);
};

// Helper function to get events for a specific month
export const getEventsForMonth = (year, month) => {
  return calendarConfig.current.events.filter(event => {
    const eventDate = new Date(event.startDate);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
};

// Helper function to get day type (working, holiday, weekend, etc.)
export const getDayType = (date) => {
  if (isWorkingSaturday(date)) return 'working-saturday';
  if (isCompensatoryHoliday(date)) return 'compensatory-holiday';
  if (isRegularWeekend(date)) return 'weekend';
  
  // Check if there's a holiday event on this date
  const dateString = date.toISOString().split('T')[0];
  const holidayEvent = calendarConfig.current.events.find(event => 
    event.type === 'holiday' && 
    dateString >= event.startDate && 
    dateString <= event.endDate
  );
  
  if (holidayEvent) return 'holiday';
  
  return 'working-day';
};