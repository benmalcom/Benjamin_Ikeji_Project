import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import CharacterCard from './CharacterCard';

describe('<CharacterCard />', function () {
  test('Renders the character information correctly', () => {
    const character = {
      name: 'Luke Skywalker',
      race: 'Human',
      wikiUrl: 'https://starwars.fandom.com/wiki/Luke_Skywalker',
      _id: '5cd99d4bde30eff6ebccfbbe',
      height: '',
      gender: 'Female',
      birth: '',
      spouse: 'Belemir',
      death: '',
      realm: '',
      hair: '',
    };

    const queryClient = new QueryClient();
    // Wrap with provider as a result of the CharacterInfoDrawer
    const { getByText, getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard character={character} />
      </QueryClientProvider>
    );

    expect(getByText(character.name)).toBeInTheDocument();
    expect(getByText(`Race:`)).toBeInTheDocument();
    expect(getByText(character.race)).toBeInTheDocument();
    expect(
      getByRole('button', { name: 'More Information' })
    ).toBeInTheDocument();
  });
});
