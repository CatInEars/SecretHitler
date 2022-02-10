import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet} from 'react-native';

import {BaseButton} from '../components/BaseButton';
import {Colors} from '../consts/Colors';
import store from '../store';
import {CardType} from '../types/cardType';

function gameBoardScreen() {
  const handleGetCards = () => {
    // const cards: CardType[] = store.cardsStore.getCards();
    // console.log(cards);
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {store.boardStore.liberialBoard.map(card => (
          <View
            style={StyleSheet.flatten([
              styles.card,
              {
                borderColor: Colors.blue,
                backgroundColor: card.hasCard ? Colors.blue : 'transparent',
              },
            ])}
            key={`liberial-${card.position}`}
          />
        ))}
      </View>
      <View style={styles.board}>
        {store.boardStore.fascistBoard.map(card => (
          <View
            style={StyleSheet.flatten([
              styles.card,
              {
                borderColor: Colors.red,
                backgroundColor: card.hasCard ? Colors.red : 'transparent',
              },
            ])}
            key={`fascist-${card.position}`}
          />
        ))}
      </View>
      <BaseButton onPress={handleGetCards}>Вытянуть 3 карты</BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightgray,
  },
  card: {
    width: 100,
    height: 120,
    borderWidth: 2,
    borderStyle: 'solid',
    marginHorizontal: 4,
  },
  board: {
    flexDirection: 'row',
  },
});

export const GameBoardScreen = observer(gameBoardScreen);
