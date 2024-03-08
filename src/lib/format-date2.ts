export function formatDate(dateString: string) {
  // Parse the date string
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error('Invalid date string');
    // Return a default value or handle the error case
    return 'Invalid date string';
  }
  
  // Format the date as desired
  const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()}`;

  return formattedDate;
}
