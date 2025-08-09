
export function getHomeMainBlock(blocks) {
  return blocks.find((b) => b.blockType === 0) || null;
}

export function getAreaBlocks(blocks) {
  return blocks.find((b) => b.blockType === 1);
}

export function getSchoolBlocks(blocks) {
  return blocks.find((b) => b.blockType === 2);
}

export function getTripBlocks(blocks) {
  return blocks.find((b) => b.blockType === 3);
}

export function getTextBlocks(blocks) {
  return blocks.find((b) => b.blockType === 5);
}
