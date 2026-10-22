# Lapping

**[← All projects](https://gernreich.github.io/)**

**[Watch it and read the writeup](https://gernreich.github.io/lapping/)**

Two people race round a track, and one is faster than the other. The faster one
laps the slower one every

    Z = (X × Y) / (X − Y)

where X is the slower runner's lap time, Y the faster runner's, and Z the time
between one passing and the next. The faster runner gains `1/Y − 1/X` of a lap
per unit of time, so it gains a whole lap, and passes again, after
`1 / (1/Y − 1/X) = XY / (X − Y)`.

Anything that goes round at a steady rate is a runner on a track, so the same
equation gives:

| Pair | X (slower) | Y (faster) | Z |
|---|---:|---:|---:|
| Two runners | 6 min | 5 min | 30 min |
| Hour and minute hands | 12 h | 1 h | 65 5/11 min (11 meetings in 12 h) |
| Earth and Moon | 365.256 d | 27.322 d | 29.53 d, new moon to new moon |
| Earth and Mars | 686.98 d | 365.256 d | 779.9 d, opposition to opposition |
| Venus and Earth | 365.256 d | 224.70 d | 583.9 d (five make eight years) |

Astronomers call Z the *synodic period*.

**Whose work this is.** Michael Carnright worked this equation out for himself at
sixteen, from two runners on a track. The page, `lapping.js` and `test.js` are by
Claude Code.

## Files

- `index.html`: the page, with the track animation, the derivation, the surface
  z = xy/(x − y) (as Michael plotted it in Grapher, turnable) and the examples.
- `lapping.js`: `lapTime(X, Y)` and the example pairs, shared by the page and the tests.
- `test.js`: checks the equation against the clock, the synodic month and the
  planets, and that the page's script parses. Run `node test.js`.

## Licence

CC0 1.0: see `LICENSE`.
