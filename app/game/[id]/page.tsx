import GameDetail from './GameDetail';

const gameTitles: { [key: string]: string } = {
  'adopt-me': 'Adopt Me',
  'blox-fruits': 'Blox Fruits',
  'brookhaven': 'Brookhaven',
  'tower-defense': 'Tower Defense',
  'jailbreak': 'Jailbreak',
  'mining-simulator': 'Mining Simulator',
  'bee-swarm': 'Bee Swarm',
  'arsenal': 'Arsenal',
  'pet-simulator': 'Pet Simulator',
  'murder-mystery': 'Murder Mystery',
};

// ✅ Set dynamic <title> and <meta description>
export async function generateMetadata({ params }: { params: { id: string } }) {
  const name = gameTitles[params.id] || 'Roblox Game';
  return {
    title: `${name} Codes`,
    description: `Get the latest ${name} codes and rewards.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(gameTitles).map((id) => ({ id }));
}

export default async function GamePage({ params }: { params: { id: string } }) {
  return <GameDetail gameId={params.id} />;
}
