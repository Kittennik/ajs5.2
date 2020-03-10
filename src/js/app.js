import person from './person';

export default function specialAttacks(object) {
  const attacks = [];
  object.special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    const attack = {
      id, name, icon, description,
    };
    attacks.push(attack);
  });
  return attacks;
}

specialAttacks(person);
