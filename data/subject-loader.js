/**
 * Assembles SUBJECT_DATA from per-subject files and provides chapter bank utilities.
 */

function mergeChapterBanks(chapters, chapterFilter) {
  const merged = {};
  if (!chapters || chapters.length === 0) return merged;

  const selected = chapterFilter === 'all'
    ? chapters
    : chapters.filter((ch) => ch.id === chapterFilter);

  selected.forEach((ch) => {
    if (!ch.bank) return;
    Object.keys(ch.bank).forEach((categoryId) => {
      if (!merged[categoryId]) merged[categoryId] = [];
      merged[categoryId].push(...(ch.bank[categoryId] || []));
    });
  });

  return merged;
}

function buildSubjectView(rawSubject, chapterFilter) {
  if (!rawSubject) return null;

  const bank = mergeChapterBanks(rawSubject.chapters || [], chapterFilter || 'all');
  const sections = (rawSubject.sections || []).map((sec) => {
    const available = (bank[sec.id] || []).length;
    const defaultCount = available > 0 ? Math.min(sec.default || 5, available) : 0;
    return { ...sec, max: available, default: defaultCount };
  });

  return { ...rawSubject, bank, sections };
}

function registerSubjects(registry) {
  const map = {};
  registry.forEach(({ key, data }) => {
    if (data) map[key] = data;
  });
  return map;
}

const SUBJECT_REGISTRY = registerSubjects([
  { key: 'english_literature', data: typeof SUBJECT_ENGLISH_LITERATURE !== 'undefined' ? SUBJECT_ENGLISH_LITERATURE : null },
  { key: 'bengali', data: typeof SUBJECT_BENGALI !== 'undefined' ? SUBJECT_BENGALI : null },
  { key: 'gk', data: typeof SUBJECT_GK !== 'undefined' ? SUBJECT_GK : null },
  { key: 'computer', data: typeof SUBJECT_COMPUTER !== 'undefined' ? SUBJECT_COMPUTER : null },
  { key: 'moral_science', data: typeof SUBJECT_MORAL_SCIENCE !== 'undefined' ? SUBJECT_MORAL_SCIENCE : null },
  { key: 'environmental_studies', data: typeof SUBJECT_ENVIRONMENTAL_STUDIES !== 'undefined' ? SUBJECT_ENVIRONMENTAL_STUDIES : null }
]);

const SUBJECT_DATA = {};
Object.keys(SUBJECT_REGISTRY).forEach((key) => {
  SUBJECT_DATA[key] = buildSubjectView(SUBJECT_REGISTRY[key], 'all');
});

function getChapterList(subject) {
  if (!subject || !subject.chapters) return [];
  return subject.chapters.filter((ch) => {
    if (!ch.bank) return false;
    return Object.values(ch.bank).some((arr) => arr && arr.length > 0);
  });
}

function hasMultipleChapters(subject) {
  return getChapterList(subject).length > 1;
}

function getChapterById(subject, chapterId) {
  if (!subject || !subject.chapters) return null;
  return subject.chapters.find((ch) => ch.id === chapterId) || null;
}

function getChapterLabel(subject, chapterId) {
  if (!chapterId || chapterId === 'all') return 'All Chapters';
  const ch = getChapterById(subject, chapterId);
  if (!ch) return 'All Chapters';
  return ch.number > 0 ? `Chapter ${ch.number}: ${ch.title}` : ch.title;
}

function normalizeBankForChapter(rawSubject, chapterFilter) {
  const view = buildSubjectView(rawSubject, chapterFilter);
  return view ? view.bank : {};
}

function getSectionsForChapter(rawSubject, chapterFilter) {
  const view = buildSubjectView(rawSubject, chapterFilter);
  return view ? view.sections : [];
}
