
import GameDetail from './GameDetail';

export async function generateStaticParams() {
  return [
    { id: 'adopt-me' },
    { id: 'blox-fruits' },
    { id: 'brookhaven' },
    { id: 'tower-defense' },
    { id: 'jailbreak' },
    { id: 'mining-simulator' },
    { id: 'bee-swarm' },
    { id: 'arsenal' },
    { id: 'pet-simulator' },
    { id: 'murder-mystery' },
  ];
}

export default function GamePage({ params }: { params: { id: string } }) {
  return <GameDetail gameId={params.id} />;
}
