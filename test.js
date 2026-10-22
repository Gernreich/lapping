// Checks lapping.js and the page's script. Run: node test.js
const assert = require('assert');
const fs = require('fs');
const { lapTime, PAIRS } = require('./lapping.js');

const near = (a, b, tol) => assert.ok(Math.abs(a - b) <= tol, `${a} is not within ${tol} of ${b}`);
near(lapTime(6, 5), 30, 1e-12);
near(lapTime(12, 1) * 60, 65 + 5 / 11, 1e-9);                         // clock hands
near(12 / lapTime(12, 1), 11, 1e-12);                                // 11 meetings in 12 hours
near(lapTime(365.256363, 27.321661), 29.530589, 1e-5);               // synodic month
near(lapTime(686.980, 365.256363), 779.94, 0.01);                    // Mars synodic period
near(lapTime(365.256363, 224.701), 583.92, 0.01);                    // Venus synodic period
near(5 * lapTime(365.256363, 224.701) / 365.256363, 8, 0.01);         // Venus's eight-year cycle
for (const p of PAIRS) {
  const Z = lapTime(p.X, p.Y);
  near(Z / p.Y - Z / p.X, 1, 1e-12);                                 // exactly one lap gained
  near(1 / Z, 1 / p.Y - 1 / p.X, 1e-15);                              // the synodic form
}
near(lapTime(10, 5), 10, 1e-12);                                     // X = 2Y gives Z = X
assert.throws(() => lapTime(5, 6));
assert.throws(() => lapTime(5, 5));

// the page's inline script parses
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
assert.strictEqual(scripts.length, 1);
new Function(scripts[0]);
assert.ok(html.includes('https://gernreich.github.io/'), 'All projects link');
console.log('all checks pass');
