import { getSnippetStart, getSnippetEnd } from './utils';

const p =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam est, vehicula quis convallis et, dictum et sapien. Nullam felis augue, bibendum sit amet interdum a, faucibus sit amet ex. In tincidunt sapien quam, ac feugiat mi laoreet et. Vestibulum vel tortor convallis, dapibus neque sit amet, lacinia urna. Phasellus accumsan bibendum urna, sit amet rutrum eros.';

test('getting start of a snippet', () => {
  expect(getSnippetStart(p, 20)).toBe(6);
  expect(getSnippetStart(p, 50)).toBe(40);
  expect(getSnippetStart(p, 50, 12)).toBe(28);
  expect(getSnippetStart(p, 50, 13)).toBe(28);
  expect(getSnippetStart(p, 50, 100000)).toBe(0);
});

test('getting end of a snippet', () => {
  expect(getSnippetEnd(p, 50)).toBe(70);
  expect(getSnippetEnd(p, 50, 12)).toBe(65);
  expect(getSnippetEnd(p, 50, 31)).toBe(84);
  expect(getSnippetEnd(p, 50, 100000)).toBe(367);
});
