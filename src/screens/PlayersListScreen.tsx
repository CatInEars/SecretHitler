import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {AppText} from '../components/AppText';
import {BaseButton} from '../components/BaseButton';
import {Colors} from '../consts/Colors';
import {ScreenRoutes} from '../consts/ScreenRoutes';
import store from '../store';
import {NavigateType} from '../types/navigations';

export function PlayersListScreen() {
  const {navigate}: {navigate: NavigateType} = useNavigation();
  const [playersList, setPlayersList] = useState<{[propName: string]: string}>(
    {},
  );
  const [fakeArray, setFakeArray] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i + 1);
    }
    setFakeArray(arr);
  }, []);

  const handleSubmit = () => {
    store.playersStore.setPlayersList(Object.values(playersList));
    navigate(ScreenRoutes.SHOW_ROLE_SCREEN);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Введите имена игроков</AppText>

      <View style={styles.inputContainer}>
        {fakeArray.map(item => {
          const key = `player_${item}`;
          const handleTextChange = (newName: string) => {
            setPlayersList({...playersList, [key]: newName});
          };

          return (
            <TextInput
              style={styles.input}
              value={playersList[key]}
              onChangeText={handleTextChange}
              placeholder={`Игрок ${item}`}
              key={key}
            />
          );
        })}
      </View>

      <BaseButton onPress={handleSubmit}>Начать игру</BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    padding: 18,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  inputContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: Colors.lightgray,
    margin: 10,
    width: 230,
  },
});
