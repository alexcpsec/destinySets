const hashes = [
  3610177565,
  3610177564,
  3610177559,
  3610177558,
  3610177557,
  3610177556,
  3538153295,
  3588486148,
  3588486149,
  3588486150,
  3588486151,
  3610177552,
  3610177553,
  3610177554,
  3610177555,
  3538153294,
  3538153293,
  3538153292,
  3538153291,
  3538153290,
  3538153289,
  3538153288,
  3538153285,
  3538153284,
  1220495183,
  1220495182,
  1220495181,
  1220495180,
  3081894947,
  3081894946,
  3081894944,
  2924982631,
  2924982630,
  2924982629,
  2924982628,
  658724916,
  658724917,
  658724918,
  658724919,
  658724924,
  658724925,
  709057677,
  530012779,
  530012780,
  530012780,
  530012781,
  530012782,
  530012783,
  658724912,
  658724913,
  658724914,
  658724915,
  530012772,
  530012773,
  530012776,
  530012777,
  530012778,
  292872936,
  292872937,
  292872938,
  292872939,
  292872940,
  292872941,
  1368499525,
  3633235162,
  4019835247,
  903864129,
  1949295586,
  2299313708,
  2923026987,
  3829550655,
  4260536069,
  871309441,
  2078267281,
  2574501094,
  3117256915,
  3877511792,
  3681086675,
  3681086674,
  3681086673,
  3681086672,
  1271045323,
  1271045322,
  1271045319,
  1271045318,
  1271045317,
  1271045316,
  1271045315,
  1271045314,
  1271045313,
  1271045312,
  89965919,
  89965918,
  89965911,
  89965910,
  89965909,
  89965908,
  89965907,
  89965906,
  89965905,
  89965904
];

require('isomorphic-fetch');
const sortItemsIntoSections = require('../src/views/DataExplorer/sortItemsIntoSections')
  .default;

fetch('https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json')
  .then(r => r.json())
  .then(itemDefs => {
    const items = hashes.map(h => {
      if (!itemDefs[h]) {
        console.log('no def for hash', h);
      }
      return itemDefs[h];
    });
    console.log(JSON.stringify(sortItemsIntoSections(items.filter(Boolean))));
  });
