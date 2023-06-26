const generatedHashes = new Set();

export default function UniqueHash() {
  let hash;
  do {
    hash = Math.random().toString(32).substring(2);
  } while (generatedHashes.has(hash));
  generatedHashes.add(hash);
  return hash;
}