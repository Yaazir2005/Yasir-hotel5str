document.querySelectorAll('input[type=date]').forEach(i=>i.min=new Date().toISOString().split('T')[0]);

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();

  const d=Object.fromEntries(new FormData(e.target));

  const t=`Hello Royal Aurora!%0A%0A*Reservation Request*%0AName: ${encodeURIComponent(d.name)}%0ARoom: ${encodeURIComponent(d.room)}%0ACheck-in: ${d.checkIn}%0ACheck-out: ${d.checkOut}%0AGuests: ${d.guests}`;

  window.open(`https://wa.me/252630000000?text=${t}`,'_blank');
});

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();

  const d=Object.fromEntries(new FormData(e.target));

  const t=`Hello Royal Aurora!%0AName: ${encodeURIComponent(d.name)}%0AEmail: ${encodeURIComponent(d.email)}%0A%0A${encodeURIComponent(d.message)}`;

  window.open(`https://wa.me/252630000000?text=${t}`,'_blank');
});
