import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelectableCard = ({ id, name, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected ? styles.selectedCard : null]}
      onPress={() => onSelect(id)}
    >
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};

const SelectableCardList = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelection = (cardId) => {
    // Verifica se o card já está selecionado
    const isSelected = selectedCards.includes(cardId);

    // Atualiza o estado com base na seleção/deseleção
    if (isSelected) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <SelectableCard
          key={card.id}
          id={card.id}
          name={card.name}
          isSelected={selectedCards.includes(card.id)}
          onSelect={handleCardSelection}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCard: {
    backgroundColor: 'lightblue',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectableCardList;
