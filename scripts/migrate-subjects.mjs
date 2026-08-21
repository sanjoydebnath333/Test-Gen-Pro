/**
 * Migration: reads subject-data.js and emits chapter-structured subject files.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'subject-data.js');
const outDir = path.join(root, 'data', 'subjects');

const CHAPTER_META = {
  english_literature: {
    ch3: { number: 3, title: 'A New Friend' },
    ch4: { number: 4, title: 'Like a Bird' },
    ch5: { number: 5, title: 'The King of All Stories' },
    ch6: { number: 6, title: 'Pinocchio' },
    general: { number: 0, title: 'Grammar & General Topics' }
  },
  bengali: {
    ch1: { number: 1, title: 'স্বাধীনতার সুখ (কবিতা)' },
    ch2: { number: 2, title: 'বোকামির ফল (গল্প)' },
    ch3: { number: 3, title: 'প্রার্থনা (কবিতা)' },
    ch4: { number: 4, title: 'দয়ার সাগর (গল্প)' },
    mixed: { number: 0, title: 'বিবিধ (Mixed)' }
  },
  environmental_studies: {
    ch4: { number: 4, title: 'Food We Eat' },
    ch5: { number: 5, title: 'Water around Us' },
    ch6: { number: 6, title: 'Clothes & Houses' },
    ch7: { number: 7, title: 'Air & Health' },
    ch8: { number: 8, title: 'Our Surroundings' },
    ch9: { number: 9, title: 'Cleanliness and Health' }
  },
  computer: {
    ch2: { number: 2, title: 'Parts of a Computer' },
    ch3: { number: 3, title: 'Uses of Computer' },
    general: { number: 0, title: 'General Topics' }
  }
};

const FILE_NAMES = {
  english_literature: 'english-literature.js',
  bengali: 'bengali.js',
  gk: 'gk.js',
  computer: 'computer.js',
  moral_science: 'moral-science.js',
  environmental_studies: 'environmental-studies.js'
};

const CONST_NAMES = {
  english_literature: 'SUBJECT_ENGLISH_LITERATURE',
  bengali: 'SUBJECT_BENGALI',
  gk: 'SUBJECT_GK',
  computer: 'SUBJECT_COMPUTER',
  moral_science: 'SUBJECT_MORAL_SCIENCE',
  environmental_studies: 'SUBJECT_ENVIRONMENTAL_STUDIES'
};

function parseChapterFromComment(text) {
  const t = text.trim();
  if (/Chapter[- ]?1|Ch=1\b|Chapter 1/i.test(t)) return 'ch1';
  if (/Chapter[- ]?2|Ch=2\b|From Chapter 2/i.test(t)) return 'ch2';
  if (/Chapter[- ]?3|Ch=3\b|From Chapter 3|chapter 3/i.test(t)) return 'ch3';
  if (/Chapter[- ]?4|Ch=4\b|From Chapter 4|chapter 4/i.test(t)) return 'ch4';
  if (/Chapter[- ]?5|Ch=5\b|Chapter 5/i.test(t)) return 'ch5';
  if (/Chapter[- ]?6|Ch=6\b|Chapter 6/i.test(t)) return 'ch6';
  if (/Chapter[- ]?7|Ch=7\b|Chapter 7/i.test(t)) return 'ch7';
  if (/Chapter[- ]?8|Ch=8\b|Chapter 8/i.test(t)) return 'ch8';
  if (/Chapter[- ]?9|Ch=9\b|Chapter 9/i.test(t)) return 'ch9';
  if (/বিবিধ|Mixed/i.test(t)) return 'mixed';
  if (/Poem:|Opposite Words|Identify the|Chose the correct|Read the clue|Newly refactored|Extra Practice|Extra questions|Opposite Words list/i.test(t)) return 'general';
  return null;
}

function defaultChapter(subjectId, categoryId) {
  if (subjectId === 'english_literature') {
    if (['rhyming_words', 'opposite_word', 'change_plural', 'change_gender', 'adjective', 'pronoun', 'spelling_rules', 'read_clues'].includes(categoryId)) {
      return 'general';
    }
    return 'ch3';
  }
  if (subjectId === 'bengali') return 'ch1';
  if (subjectId === 'computer') return 'general';
  if (subjectId === 'environmental_studies') return 'ch4';
  return 'general';
}

function extractSubjectBlock(raw, subjectKey) {
  const re = new RegExp(`"${subjectKey}"\\s*:\\s*\\{`);
  const start = raw.search(re);
  if (start === -1) return null;
  let i = raw.indexOf('{', start);
  let depth = 0;
  const begin = i;
  for (; i < raw.length; i++) {
    const c = raw[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return raw.slice(begin, i + 1);
    }
  }
  return null;
}

function extractCategoryBlock(subjectBlock, categoryId) {
  const re = new RegExp(`\\b${categoryId}\\s*:\\s*\\[`);
  const m = re.exec(subjectBlock);
  if (!m) return null;
  let i = subjectBlock.indexOf('[', m.index);
  let depth = 0;
  const begin = i;
  for (; i < subjectBlock.length; i++) {
    const c = subjectBlock[i];
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) return subjectBlock.slice(begin + 1, i);
    }
  }
  return null;
}

function assignChaptersFromSource(subjectId, categoryId, items, categorySource) {
  const assignments = [];
  let current = defaultChapter(subjectId, categoryId);
  let itemIdx = 0;
  let i = 0;

  while (i < categorySource.length && itemIdx < items.length) {
    const rest = categorySource.slice(i);

    const commentMatch = rest.match(/^\s*\/\/(.*)$/m);
    if (commentMatch && (rest.indexOf('{') === -1 || rest.indexOf('//') < rest.indexOf('{'))) {
      const parsed = parseChapterFromComment(commentMatch[1]);
      if (parsed) current = parsed;
      i += commentMatch[0].length;
      continue;
    }

    if (rest.trimStart().startsWith('{')) {
      assignments.push(current);
      itemIdx++;
      // skip one object via bracket counting
      let j = rest.search(/\{/);
      let depth = 0;
      for (; j < rest.length; j++) {
        if (rest[j] === '{') depth++;
        else if (rest[j] === '}') {
          depth--;
          if (depth === 0) {
            i += j + 1;
            break;
          }
        }
      }
      continue;
    }

    i++;
  }

  while (itemIdx < items.length) {
    assignments.push(defaultChapter(subjectId, categoryId));
    itemIdx++;
  }

  return assignments;
}

function splitSubject(subjectId, subject, subjectBlock) {
  const chapterBanks = {};
  const ensure = (chId) => {
    if (!chapterBanks[chId]) chapterBanks[chId] = {};
    return chapterBanks[chId];
  };

  for (const [categoryId, items] of Object.entries(subject.bank)) {
    const catSource = subjectBlock ? extractCategoryBlock(subjectBlock, categoryId) : null;
    const assignments = catSource
      ? assignChaptersFromSource(subjectId, categoryId, items, catSource)
      : items.map(() => (subjectId === 'gk' || subjectId === 'moral_science' ? 'general' : defaultChapter(subjectId, categoryId)));

    items.forEach((item, idx) => {
      let ch = assignments[idx] || defaultChapter(subjectId, categoryId);
      if (subjectId === 'gk' || subjectId === 'moral_science') ch = 'general';
      const bank = ensure(ch);
      if (!bank[categoryId]) bank[categoryId] = [];
      bank[categoryId].push(item);
    });
  }

  return chapterBanks;
}

function buildChaptersArray(subjectId, chapterBanks) {
  const meta = CHAPTER_META[subjectId];
  if (!meta) {
    const bank = chapterBanks.general || Object.values(chapterBanks)[0] || {};
    return [{ id: 'general', number: 0, title: 'All Topics', bank }];
  }
  const order = Object.keys(meta).sort((a, b) => meta[a].number - meta[b].number);
  return order
    .filter((id) => chapterBanks[id] && Object.values(chapterBanks[id]).some((a) => a.length > 0))
    .map((id) => ({ id, number: meta[id].number, title: meta[id].title, bank: chapterBanks[id] }));
}

function serializeSubject(subjectId, subject, chapters) {
  const constName = CONST_NAMES[subjectId];
  return `// =============================================================================
// ${subject.title} — Class 2 Question Bank
// =============================================================================
// HOW TO ADD QUESTIONS (for teachers/editors):
// 1. Find the chapter block below
// 2. Inside that chapter, find the question type (mcq_standard, fill_blanks, etc.)
// 3. Add: { q: "Question?", a: "Answer", options: ["A","B","C","D"] }
// =============================================================================

const ${constName} = {
  id: "${subject.id}",
  title: ${JSON.stringify(subject.title)},
  icon: ${JSON.stringify(subject.icon)},
  theme: ${JSON.stringify(subject.theme)},
  gradient: ${JSON.stringify(subject.gradient)},
  sections: ${JSON.stringify(subject.sections, null, 2)},
  chapters: ${JSON.stringify(chapters, null, 2)}
};
`;
}

function countBank(bank) {
  return Object.values(bank).reduce((s, a) => s + a.length, 0);
}

function mergeChapters(chapters) {
  const merged = {};
  for (const ch of chapters) {
    for (const [cat, items] of Object.entries(ch.bank)) {
      if (!merged[cat]) merged[cat] = [];
      merged[cat].push(...items);
    }
  }
  return merged;
}

const raw = fs.readFileSync(srcPath, 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(raw.replace('const SUBJECT_DATA', 'SUBJECT_DATA'), sandbox);
const SUBJECT_DATA = sandbox.SUBJECT_DATA;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let hasError = false;
for (const [subjectId, subject] of Object.entries(SUBJECT_DATA)) {
  const block = extractSubjectBlock(raw, subjectId);
  const chapterBanks = splitSubject(subjectId, subject, block);
  const chapters = buildChaptersArray(subjectId, chapterBanks);
  const orig = countBank(subject.bank);
  const merged = countBank(mergeChapters(chapters));
  const ok = orig === merged;
  if (!ok) hasError = true;
  fs.writeFileSync(path.join(outDir, FILE_NAMES[subjectId]), serializeSubject(subjectId, subject, chapters), 'utf8');
  console.log(`${subjectId}: ${orig} -> ${merged}, ${chapters.length} chapters ${ok ? 'OK' : 'MISMATCH'}`);
  chapters.forEach((c) => console.log(`  - ${c.id}: ${countBank(c.bank)} q`));
}

process.exit(hasError ? 1 : 0);
