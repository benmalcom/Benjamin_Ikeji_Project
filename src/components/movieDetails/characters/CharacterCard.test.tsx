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

    const { getByText, getByRole } = render(
      <CharacterCard character={character} />
    );

    expect(getByText(character.name)).toBeInTheDocument();
    expect(getByText(`Race:`)).toBeInTheDocument();
    expect(getByText(character.race)).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute('href', character.wikiUrl);
  });
});
