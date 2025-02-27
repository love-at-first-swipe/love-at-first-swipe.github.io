import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.1.0/+esm';

const supabaseUrl = 'https://qtyachnyxuhceuhbagwf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0eWFjaG55eHVoY2V1aGJhZ3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3Mjg4ODIsImV4cCI6MjA1MTMwNDg4Mn0.FVonsjwBe7DSZFPHFUjZ7LHrzmLzk9OL0N6BtGaGTwo'; // Public key
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to insert RSVP data
export const submitRSVP = async (name, surname, weddingAttendance, secondDayAttendance, dietaryRequirements, plusOneAttendance, plusOneName) => {
    const weddingAttendanceBool = weddingAttendance === 'yes';
    const secondDayAttendanceBool = secondDayAttendance === 'yes';
    const plusOneAttendanceBool = plusOneAttendance === 'yes';
    
    const { data, error } = await supabase
      .from('rsvp')
      .insert([
        {
          name,
          surname,
          attendance: weddingAttendanceBool,
          day_2_attendance: secondDayAttendanceBool,
          comment: dietaryRequirements,
          plus_one_attendance: plusOneAttendanceBool,
          plus_one_name: plusOneName
        },
      ]);
  
    if (error) {
      console.error('Error adding RSVP data:', error);
      alert('There was an error submitting your RSVP. Please try again.');

      return false;
    } else {
      console.log('RSVP submitted successfully:', data);
      alert('Your RSVP has been submitted. Thank you!');

      return true;
    }
  };