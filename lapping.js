// Lapping: two runners on one track, lap times X (slower) and Y (faster).
// The faster one gains 1/Y - 1/X of a lap per unit of time, so it gains a
// whole lap, and passes the slower one again, every Z = X*Y/(X-Y).
// Shared by index.html and by node, which checks it (test.js).

function lapTime(X, Y) {
  if (!(X > Y && Y > 0)) throw new Error('need X > Y > 0');
  return X * Y / (X - Y);
}

// Each pair: the slower lap time X, the faster Y, in one unit.
const PAIRS = [
  { id: 'runners', name: 'Two runners', unit: 'minutes', X: 6, Y: 5,
    slow: 'the 6-minute runner', fast: 'the 5-minute runner',
    note: 'The faster runner passes the slower one every 30 minutes: after 6 laps of its own, while the slower one has run 5.' },
  { id: 'clock', name: 'Hour and minute hands', unit: 'hours', X: 12, Y: 1,
    slow: 'the hour hand', fast: 'the minute hand',
    note: 'The hands meet every 1 1/11 hours, 65 5/11 minutes: at 12:00, then at about 1:05:27, 2:10:55 and so on, 11 times in 12 hours rather than 12.' },
  { id: 'moon', name: 'Earth and Moon', unit: 'days', X: 365.256363, Y: 27.321661,
    slow: 'the Earth, round the Sun', fast: 'the Moon, round the Earth',
    note: 'The Moon goes round once against the stars in 27.32 days, but the Earth has moved on round the Sun, so new moon to new moon is 29.53 days.' },
  { id: 'mars', name: 'Earth and Mars', unit: 'days', X: 686.980, Y: 365.256363,
    slow: 'Mars', fast: 'the Earth',
    note: 'The Earth laps Mars every 780 days, about 2 years and 2 months: the gap between oppositions, and between launch windows to Mars.' },
  { id: 'venus', name: 'Venus and Earth', unit: 'days', X: 365.256363, Y: 224.701,
    slow: 'the Earth', fast: 'Venus',
    note: 'Venus laps the Earth every 584 days; five of those are almost exactly eight years, so Venus repeats its pattern in the sky every eight years.' },
];

if (typeof module !== 'undefined') module.exports = { lapTime, PAIRS };
