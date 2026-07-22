/**
 * Quick regression check: merged chapter banks match SUBJECT_DATA,
 * and single-chapter filters return expected subsets.
 * Run: node scripts/verify-chapters.mjs
 */
import fs from 'fs';
import vm from 'vm';

const base = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const run = (code) => vm.runInThisContext(code);

run(fs.readFileSync(`${base}/data/category-icons.js`, 'utf8'));
for (const f of ['english-literature', 'bengali', 'gk', 'computer', 'moral-science', 'environmental-studies']) {
  run(fs.readFileSync(`${base}/data/subjects/${f}.js`, 'utf8'));
}
run(fs.readFileSync(`${base}/data/subject-loader.js`, 'utf8'));

let ok = true;

Object.keys(SUBJECT_DATA).forEach((key) => {
  const sub = SUBJECT_REGISTRY[key];
  const merged = mergeChapterBanks(sub.chapters, 'all');
  const built = SUBJECT_DATA[key].bank;
  Object.keys({ ...merged, ...built }).forEach((cat) => {
    const m = (merged[cat] || []).length;
    const b = (built[cat] || []).length;
    if (m !== b) {
      console.error(`MISMATCH ${key} ${cat}: merged=${m} built=${b}`);
      ok = false;
    }
  });
});

const engCh3 = buildSubjectView(SUBJECT_REGISTRY.english_literature, 'ch3');
const benCh1 = buildSubjectView(SUBJECT_REGISTRY.bengali, 'ch1');

if (Object.values(engCh3.bank).reduce((a, x) => a + x.length, 0) !== 28) {
  console.error('English Ch3 question count unexpected');
  ok = false;
}
if (Object.values(benCh1.bank).reduce((a, x) => a + x.length, 0) !== 17) {
  console.error('Bengali Ch1 question count unexpected');
  ok = false;
}
if (hasMultipleChapters(SUBJECT_REGISTRY.gk)) {
  console.error('GK should not show multiple chapters');
  ok = false;
}
if (!hasMultipleChapters(SUBJECT_REGISTRY.english_literature)) {
  console.error('English Literature should show multiple chapters');
  ok = false;
}

console.log(ok ? 'All chapter verification checks passed.' : 'Verification failed.');
process.exit(ok ? 0 : 1);
