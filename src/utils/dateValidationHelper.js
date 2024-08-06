// helpers/dateValidationHelper.js

export const validateDates = (startDate, endDate, type) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const errors = {};

  // Helper function to parse dates
  const parseDate = (dateString) => new Date(dateString);

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  if (!startDate || !endDate) {
    return { error: 'Start date and end date are required.' };
  }

  // Common checks
  if (start > today) {
    errors.startDate = 'Start date cannot be in the future.';
  }
  if (end > today.setFullYear(currentYear + 1)) {
    errors.endDate = 'End date cannot be more than 1 year in the future.';
  }
  if (end < start) {
    errors.endDate = 'End date must be after start date.';
  }

  // Calculate the duration in milliseconds
  const duration = end - start;
  const msInYear = 365 * 24 * 60 * 60 * 1000;
  const msInMonth = 30 * 24 * 60 * 60 * 1000;

  // Specific checks based on type
  switch (type) {
    case 'education':
      const educationEndYear = currentYear + 6;
      if (end.getFullYear() > educationEndYear) {
        errors.endDate = `End date cannot exceed ${educationEndYear}.`;
      }
      const educationStartYear = currentYear - 15;
      if (start.getFullYear() < educationStartYear) {
        errors.startDate = `Start date cannot be before ${educationStartYear}.`;
      }
      if (duration > msInYear * 6) { // 6 years
        errors.dateRange = `Duration between start and end date cannot exceed 6 years.`;
      }
      break;

    case 'job':
      const jobEndYear = currentYear + 6;
      if (end.getFullYear() > jobEndYear) {
        errors.endDate = `End date cannot exceed ${jobEndYear}.`;
      }
      if (duration > msInYear * 6) { // 6 years
        errors.dateRange = `Duration between start and end date cannot exceed 6 years.`;
      }
      break;

    case 'internship':
      const internshipStartYear = currentYear - 2;
      if (start.getFullYear() < internshipStartYear) {
        errors.startDate = `Start date cannot be before ${internshipStartYear}.`;
      }
      const internshipEndYear = currentYear + 1;
      if (end.getFullYear() > internshipEndYear) {
        errors.endDate = `End date cannot be more than ${internshipEndYear}.`;
      }
      if (duration > msInYear) { // 1 year
        errors.dateRange = `Duration between start and end date cannot exceed 1 year.`;
      }
      break;

    case 'course':
      const courseStartYear = currentYear - 4;
      if (start.getFullYear() < courseStartYear) {
        errors.startDate = `Start date cannot be before ${courseStartYear}.`;
      }
      const courseEndYear = currentYear + 1;
      if (end.getFullYear() > courseEndYear) {
        errors.endDate = `End date cannot be more than ${courseEndYear}.`;
      }
      if (duration > msInYear * 2) { // 2 years
        errors.dateRange = `Duration between start and end date cannot exceed 2 years.`;
      }
      break;

    case 'project':
      const projectStartYear = currentYear - 5;
      if (start.getFullYear() < projectStartYear) {
        errors.startDate = `Start date cannot be before ${projectStartYear}.`;
      }
      const projectEndYear = currentYear + 1;
      if (end.getFullYear() > projectEndYear) {
        errors.endDate = `End date cannot be more than ${projectEndYear}.`;
      }
      if (duration > msInYear) { // 1 year
        errors.dateRange = `Duration between start and end date cannot exceed 1 year.`;
      }
      break;

    default:
      return { error: 'Invalid type.' };
  }

  return errors;
};


  
    
  
  // helpers/dateHelpers.js

// Function to format a date to 'Aug 2023'
export const formatDate = (dateString) => {
    if (!dateString) return '';
  
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
  };
  
  // Function to calculate the difference between two dates
  export const calculateDateRange = (startDateString, endDateString) => {
    if (!startDateString || !endDateString) return '';
  
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
  
    const diffInTime = endDate - startDate;
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
    const years = Math.floor(diffInMonths / 12);
  
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`;
    } else if (diffInWeeks > 0) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''}`;
    } else {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    }
  };
  