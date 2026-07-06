/**
 * Maps a figure `id` to its illustrated card art (SVG asset).
 *
 * `require()` paths must be static literals so Metro can bundle them, hence an
 * explicit map rather than building the path from the id at runtime. Only
 * figures with art appear here; `getFigureIcon` returns undefined otherwise.
 */

export const FIGURE_ICONS: Record<string, number> = {
  'simon-peter': require('@/assets/disciples/01_peter.svg'),
  andrew: require('@/assets/disciples/02_andrew.svg'),
  'james-zebedee': require('@/assets/disciples/03_james.svg'),
  john: require('@/assets/disciples/04_john.svg'),
  philip: require('@/assets/disciples/05_philip.svg'),
  bartholomew: require('@/assets/disciples/06_bartholomew.svg'),
  thomas: require('@/assets/disciples/07_thomas.svg'),
  matthew: require('@/assets/disciples/08_matthew.svg'),
  'james-alphaeus': require('@/assets/disciples/09_james.svg'),
  thaddaeus: require('@/assets/disciples/10_thaddaeus.svg'),
  'simon-zealot': require('@/assets/disciples/11_simon.svg'),
  'judas-iscariot': require('@/assets/disciples/12_judas.svg'),
};

export function getFigureIcon(id: string): number | undefined {
  return FIGURE_ICONS[id];
}
