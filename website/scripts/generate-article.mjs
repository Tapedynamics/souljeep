/**
 * Soul Jeep Blog - Article Generator
 * Generates a bilingual SEO article (ES + EN) using OpenAI GPT-4o-mini
 *
 * Usage: OPENAI_API_KEY=sk-... node scripts/generate-article.mjs
 *
 * Picks the next keyword pair from the rotation list,
 * generates both ES and EN versions, saves to data/blog/articles/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesDir = path.join(__dirname, '..', 'data', 'blog', 'articles');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('ERROR: OPENAI_API_KEY environment variable is required');
  process.exit(1);
}

// Gallery images available (landscape only)
const GALLERY_IMAGES = [
  { src: '/images/gallery/teide/IMG_20251101_165300.jpg', alt: 'Jeep en el Teide al atardecer' },
  { src: '/images/gallery/teide/IMG_20251101_165910.jpg', alt: 'Paisaje volcánico del Teide' },
  { src: '/images/gallery/teide/IMG_20251101_171624.jpg', alt: 'Ruta por el Parque Nacional del Teide' },
  { src: '/images/gallery/teide/IMG20250804203815.jpg', alt: 'Atardecer desde el Teide' },
  { src: '/images/gallery/teide/IMG20250804203821.jpg', alt: 'Vista panorámica del Teide' },
  { src: '/images/gallery/teide/IMG_20251101_165503.jpg', alt: 'Carretera volcánica del Teide' },
  { src: '/images/gallery/teide/IMG_20251101_165549.jpg', alt: 'Formaciones volcánicas del Teide' },
  { src: '/images/gallery/teide/IMG_20251101_172602.jpg', alt: 'Jeep Wrangler en el Teide' },
  { src: '/images/gallery/coastal/IMG20250913134819.jpg', alt: 'Costa sur de Tenerife' },
  { src: '/images/gallery/coastal/IMG20250913134839.jpg', alt: 'Acantilados costeros' },
  { src: '/images/gallery/coastal/IMG20250913135320.jpg', alt: 'Vista al mar desde la costa' },
  { src: '/images/gallery/coastal/IMG20250913142629.jpg', alt: 'Puerto costero de Tenerife' },
  { src: '/images/gallery/coastal/IMG20250913140323.jpg', alt: 'Recorrido costero en Jeep' },
];

// Keyword rotation - each entry generates 1 ES + 1 EN article
const KEYWORD_TOPICS = [
  {
    esKeywords: ['que ver en el teide', 'visitar teide', 'parque nacional teide', 'teide tenerife'],
    enKeywords: ['things to see at teide', 'visit mount teide', 'teide national park', 'teide tenerife'],
    esTopic: 'Qué ver y hacer en el Teide: guía para visitantes',
    enTopic: 'What to see and do at Mount Teide: a visitor guide',
    category: 'teide',
  },
  {
    esKeywords: ['mejores rutas tenerife', 'rutas en jeep tenerife', 'excursiones tenerife', 'tours tenerife'],
    enKeywords: ['best routes tenerife', 'jeep routes tenerife', 'tenerife excursions', 'tenerife tours'],
    esTopic: 'Las mejores rutas para explorar Tenerife en Jeep',
    enTopic: 'The best routes to explore Tenerife by Jeep',
    category: 'general',
  },
  {
    esKeywords: ['atardecer teide', 'sunset teide', 'puesta de sol tenerife', 'mejores miradores teide'],
    enKeywords: ['teide sunset', 'sunset tenerife', 'best viewpoints teide', 'sunset watching tenerife'],
    esTopic: 'Los mejores miradores para ver el atardecer en el Teide',
    enTopic: 'Best viewpoints to watch the sunset at Mount Teide',
    category: 'teide',
  },
  {
    esKeywords: ['costa adeje que hacer', 'actividades costa adeje', 'tour costa tenerife', 'costa sur tenerife'],
    enKeywords: ['costa adeje things to do', 'costa adeje activities', 'tenerife coast tour', 'south tenerife coast'],
    esTopic: 'Qué hacer en Costa Adeje: actividades imprescindibles',
    enTopic: 'Things to do in Costa Adeje: essential activities',
    category: 'coastal',
  },
  {
    esKeywords: ['conducir en tenerife', 'alquilar jeep tenerife', 'carreteras tenerife', 'conducir por el teide'],
    enKeywords: ['driving in tenerife', 'rent jeep tenerife', 'tenerife roads', 'driving mount teide'],
    esTopic: 'Guía para conducir en Tenerife: carreteras, consejos y rutas',
    enTopic: 'Guide to driving in Tenerife: roads, tips and routes',
    category: 'general',
  },
  {
    esKeywords: ['tenerife en pareja', 'planes romanticos tenerife', 'experiencias pareja tenerife', 'atardecer romantico tenerife'],
    enKeywords: ['tenerife for couples', 'romantic tenerife', 'couple experiences tenerife', 'romantic sunset tenerife'],
    esTopic: 'Tenerife en pareja: las experiencias más románticas de la isla',
    enTopic: 'Tenerife for couples: the most romantic experiences on the island',
    category: 'teide',
  },
  {
    esKeywords: ['parque nacional teide patrimonio unesco', 'geologia teide', 'flora teide', 'volcán tenerife'],
    enKeywords: ['teide national park unesco', 'teide geology', 'teide flora', 'tenerife volcano'],
    esTopic: 'El Parque Nacional del Teide: patrimonio, geología y naturaleza',
    enTopic: 'Teide National Park: heritage, geology and nature',
    category: 'teide',
  },
  {
    esKeywords: ['que llevar al teide', 'preparar visita teide', 'ropa teide', 'consejos teide'],
    enKeywords: ['what to bring to teide', 'prepare teide visit', 'teide clothing', 'teide tips'],
    esTopic: 'Qué llevar al Teide: lista completa para tu excursión',
    enTopic: 'What to bring to Mount Teide: complete packing list',
    category: 'teide',
  },
  {
    esKeywords: ['acantilados los gigantes', 'los gigantes tenerife', 'costa oeste tenerife', 'calas tenerife'],
    enKeywords: ['los gigantes cliffs', 'los gigantes tenerife', 'west coast tenerife', 'tenerife coves'],
    esTopic: 'Los Gigantes y la costa oeste: acantilados, calas y aventura',
    enTopic: 'Los Gigantes and the west coast: cliffs, coves and adventure',
    category: 'coastal',
  },
  {
    esKeywords: ['jeep wrangler experiencia', 'conducir jeep wrangler', 'todoterreno tenerife', 'aventura 4x4 tenerife'],
    enKeywords: ['jeep wrangler experience', 'drive jeep wrangler', 'off-road tenerife', '4x4 adventure tenerife'],
    esTopic: 'La experiencia de conducir un Jeep Wrangler por Tenerife',
    enTopic: 'The experience of driving a Jeep Wrangler through Tenerife',
    category: 'general',
  },
];

// Determine which topic to use next
function getNextTopicIndex() {
  const existingFiles = fs.existsSync(articlesDir)
    ? fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'))
    : [];

  // Subtract 2 seed articles, then divide by 2 (ES+EN per topic)
  const seedCount = 2;
  const generatedPairs = Math.max(0, Math.floor((existingFiles.length - seedCount) / 2));
  return generatedPairs % KEYWORD_TOPICS.length;
}

function getImageForCategory(category) {
  const teideImages = GALLERY_IMAGES.filter(i => i.src.includes('teide'));
  const coastalImages = GALLERY_IMAGES.filter(i => i.src.includes('coastal'));

  let pool;
  if (category === 'coastal') pool = coastalImages;
  else if (category === 'teide') pool = teideImages;
  else pool = GALLERY_IMAGES;

  return pool[Math.floor(Math.random() * pool.length)];
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function callOpenAI(messages) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 3000,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

async function generateArticle(lang, topic, keywords, category) {
  const isEs = lang === 'es';

  const systemPrompt = `You are an expert travel and adventure blog writer for Soul Jeep Experience, a Jeep Wrangler tour company in Tenerife, Spain. You write engaging, informative SEO blog posts.

Key facts about Soul Jeep Experience:
- Self-drive Jeep Wrangler tours (YOU drive, not a bus tour)
- Main tour: Teide Sunset Tour (3-4 hours, from €220/Jeep)
- Departs from C.C. Aquamall, Costa Adeje
- 5 stars on Google
- Max 4 people per Jeep
- Full insurance included

Write in ${isEs ? 'Spanish' : 'English'}. The article must:
- Be 800-1200 words
- Use HTML formatting (h2, p, ul, li, strong)
- Include the target keywords naturally (don't stuff)
- Be informative and useful, not just promotional
- End with a soft CTA mentioning Soul Jeep Experience
- Use short paragraphs for mobile readability
- NO h1 tag (the page already has one)
- NO images in the HTML (they're handled separately)`;

  const userPrompt = `Write a blog article about: "${topic}"

Target SEO keywords: ${keywords.join(', ')}

Return ONLY a JSON object with these exact fields:
{
  "title": "article title (60-70 chars, include main keyword)",
  "description": "meta description (150-160 chars, compelling, include keyword)",
  "content": "full HTML article body",
  "readingTime": estimated reading time in minutes (number)
}`;

  const response = await callOpenAI([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ]);

  // Parse JSON from response (handle markdown code blocks)
  let jsonStr = response;
  const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) jsonStr = jsonMatch[1];

  const parsed = JSON.parse(jsonStr.trim());
  const image = getImageForCategory(category);
  const slug = slugify(parsed.title);
  const today = new Date().toISOString().split('T')[0];

  return {
    slug,
    lang,
    title: parsed.title,
    description: parsed.description,
    keywords,
    content: parsed.content,
    image: image.src,
    imageAlt: image.alt,
    publishedAt: today,
    author: 'Soul Jeep Experience',
    readingTime: parsed.readingTime || 5,
    relatedTourSlug: 'teide-sunset',
  };
}

async function main() {
  console.log('🚗 Soul Jeep Blog Generator');
  console.log('===========================\n');

  const topicIndex = getNextTopicIndex();
  const topic = KEYWORD_TOPICS[topicIndex];
  console.log(`📝 Topic ${topicIndex + 1}/${KEYWORD_TOPICS.length}: ${topic.esTopic}`);

  // Generate ES
  console.log('\n🇪🇸 Generating Spanish article...');
  const esArticle = await generateArticle('es', topic.esTopic, topic.esKeywords, topic.category);
  const esFile = path.join(articlesDir, `${esArticle.slug}.json`);
  fs.writeFileSync(esFile, JSON.stringify(esArticle, null, 2));
  console.log(`   ✅ Saved: ${esArticle.slug}`);

  // Generate EN
  console.log('\n🇬🇧 Generating English article...');
  const enArticle = await generateArticle('en', topic.enTopic, topic.enKeywords, topic.category);
  const enFile = path.join(articlesDir, `${enArticle.slug}.json`);
  fs.writeFileSync(enFile, JSON.stringify(enArticle, null, 2));
  console.log(`   ✅ Saved: ${enArticle.slug}`);

  console.log('\n✅ Done! 2 articles generated.');
  console.log(`   ES: ${esArticle.title}`);
  console.log(`   EN: ${enArticle.title}`);
}

main().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
