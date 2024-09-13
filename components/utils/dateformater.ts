export default function formatDate(dateString: string) {
    const date = new Date(dateString);
  
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    // Helper function to get the correct day suffix
    const getDaySuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th'; // Covers 11th - 20th
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    return `${month} ${day}${getDaySuffix(day)}, ${year}`;
  }
  
