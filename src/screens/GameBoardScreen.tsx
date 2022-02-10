import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, StyleSheet} from 'react-native';

import {BaseButton} from '../components/BaseButton';
import {Cards} from '../consts/Cards';
import {Colors} from '../consts/Colors';
import store from '../store';

function gameBoardScreen() {
  const handleAddliberialCard = () => {
    store.boardStore.addCard(Cards.LIBERIAL);
  };

  const handleAddFascistCard = () => {
    store.boardStore.addCard(Cards.FASCIST);
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
      <BaseButton onPress={handleAddliberialCard}>
        Добавить синюю карту
      </BaseButton>
      <BaseButton onPress={handleAddFascistCard}>
        Добавить красную карту
      </BaseButton>
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
