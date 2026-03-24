const rawKeys = ['granum', 'calx', 'saburra', 'tephra', 'bor'];
const defaultPrices = { granum: 15, calx: 35, saburra: 15, tephra: 50, bor: 120 };

const CATEGORIES = [
    { id: 'raw', items: ['granum', 'calx', 'saburra', 'tephra', 'water'] },
    { id: 'catalyst', items: ['coal', 'coke', 'sp', 'cp', 'fumingsalt', 'bor'] },
    { id: 'basicExt', items: ['granumpowder', 'malachite', 'bleckblende', 'calamine', 'amarantum', 'flakestone', 'calspar', 'jadeite'] },
    { id: 'intOre', items: ['bo', 'galbinum', 'pyroxene', 'redbleckblende'] },
    { id: 'advOre', items: ['lupium', 'almine', 'acronite', 'sanguinite', 'gemmetal'] },
    { id: 'refined', items: ['pi', 'cuprum', 'gs', 'steel', 'bron', 'messing', 'tmessing', 'tungsteel', 'cronite', 'oghmium'] }
];

const EXTRACT_MAP = {
    galbinum: ['tephra'], redbleckblende: ['tephra'], pyroxene: ['galbinum'],
    bo: ['granum', 'cp'], granumpowder: ['granum'], amarantum: ['granum'], flakestone: ['granum'],
    sp: ['saburra', 'water'], malachite: ['saburra', 'water'], calamine: ['saburra', 'water'], bleckblende: ['saburra', 'water'],
    cp: ['calx', 'water'], coal: ['calx'], calspar: ['calx']
};

const RECIPES = {
    oghmium: { type: 'alloy', primary: 'tungsteel', cat1: 'cronite', cat2: 'sanguinite' },
    tungsteel: { type: 'alloy', primary: 'gs', cat1: 'lupium', cat2: 'granumpowder' },
    cronite: { type: 'alloy', primary: 'gs', cat1: 'almine', cat2: 'acronite' },
    steel: { type: 'alloy', primary: 'gs', cat1: 'coal', cat2: 'sp' },
    gs: { type: 'alloy', primary: 'pi', cat1: 'cp', cat2: 'coke' },
    tmessing: { type: 'alloy', primary: 'messing', cat1: 'almine', cat2: 'gemmetal' },
    messing: { type: 'alloy', primary: 'cuprum', cat1: 'calamine', cat2: 'sp' }, // Default, overridden by Bor
    bron: { type: 'alloy', primary: 'cuprum', cat1: 'bleckblende', cat2: 'sp' },
    pi: { type: 'smelt', ore: 'bo', oreYield: 0.40, cat: 'coke', catReq: 0.0385 },
    cuprum: { type: 'smelt', ore: 'malachite', oreYield: 0.40, cat: 'cp', catReq: 0.05 }, // Fixed: Requires CP
    coke: { type: 'bake', ore: 'coal', oreYield: 0.72, cat: 'cp', catReq: 0.0715 },
    sanguinite: { type: 'refine', ore: 'redbleckblende', oreReq: 50, cat: 'fumingsalt', catReq: 1.57 },
    almine: { type: 'refine', ore: 'pyroxene', oreReq: 25, cat: 'cp', catReq: 1.78 },
    acronite: { type: 'refine', ore: 'pyroxene', oreReq: 25, cat: 'cp', catReq: 1.78 },
    lupium: { type: 'refine', ore: 'galbinum', oreReq: 51.8, cat: null, catReq: 0 },
    gemmetal: { type: 'refine', ore: 'malachite', oreReq: 25, cat: 'water', catReq: 1 }
};